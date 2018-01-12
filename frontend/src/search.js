import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {MenuItem} from 'material-ui/Menu';
import {withStyles} from 'material-ui/styles';

const suggestions = [
  {label: 'ахатины'},
  {label: 'аквариум'},
  {label: 'богомолы'},
  {label: 'большие попугаи'},
  {label: 'большие собаки'},
  {label: 'врановые'},
  {label: 'гекконы'},
  {label: 'енот'},
  {label: 'игуана'},
  {label: 'кошка'},
  {label: 'крыса'},
  {label: 'малые попугаи'},
  {label: 'мейн-кун'},
  {label: 'палочники'},
  {label: 'пауки птицееды'},
  {label: 'певчие птицы'},
  {label: 'питоны и удавы'},
  {label: 'средние и маленькие собаки'},
  {label: 'спироболусы'},
  {label: 'сколопендры'},
  {label: 'хомячки и морские свинки'},
  {label: 'хорек'},
  {label: 'черепахи'},
  {label: 'шиншилла'},

];

function renderInput(inputProps) {
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
}

function renderSuggestion(suggestion, {query, isHighlighted}) {
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
}

function renderSuggestionsContainer(options) {
  const {containerProps, children} = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',

  },
  textField: {
    width: '200px',

  },


});

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, {newValue}) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const {classes} = this.props;

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
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Search an animal',
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

export default withStyles(styles)(IntegrationAutosuggest);
