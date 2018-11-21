import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {MenuItem} from 'material-ui/Menu';
import {withStyles} from 'material-ui/styles';

import getTranslations from '../utils/get-translation';

import {
  withRouter
} from 'react-router-dom';
import classNames from 'classnames';
const renderInput = (inputProps) => {
  const {classes, autoFocus, value, ref, ...other} = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
};



const renderSuggestion = (suggestion, {query, isHighlighted}) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{fontWeight: 300}}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{fontWeight: 500}}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

const renderSuggestionsContainer = (options) => {
  const {containerProps, children} = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
};

const getSuggestionValue = (suggestion) => {
  return suggestion.label;
};

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: '50px',

    
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    width: '250px',

  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    width: '250px',


  },
  textField: {
    width: '250px',
  },
});

/**
 * Component to search by animals
 */
class IntegrationAutosuggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      selected: false
    };
  }

  /**
   * Search an animal by label
   * @param value
   * @returns {*}
   */
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const language = this.props.language;

    let count = 0;

    return inputLength === 0
      ? []
      : this.props.animals.map(item => ({
          label: item.name[language]
        })).filter(suggestion => {
          const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  };

  handleSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, {newValue}) => {
    this.setState({
      value: newValue
    });
  };

  /**
   * Save chosen animal to url, state and pass it to the parent component
   * @param event
   * @param values
   */
  handleSuggestionSelected = (event, values) => {
    this.props.history.push('/animal');
    this.setState({selected: values.suggestionValue});

    const language = this.props.language;
    const animal = this.props.animals.find(animal => animal.name[language] === values.suggestionValue);

    this.props.handleAnimalChange(animal);
  };

  render() {
    const { classes } = this.props; 
    const searchtext = getTranslations('searchtext');
    
    return (
      
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={this.handleSuggestionSelected}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: searchtext,
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(IntegrationAutosuggest));
