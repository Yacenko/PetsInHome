import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

/**
 * Component that allows a user to answer a question choosing one of two options
 */
class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.getValue(value);
  };

  render() {
    const { classes, activeStep, currentStep, tags } = this.props;
    const disabled = activeStep === currentStep ? '' : 'disabled';

    //disabled - выполняется, если disabled = disabled, т.е. он НЕ равен пустой строке или фолс. 
    //тернарный оператор. Ели выполняется условие activeStep == currentStep то выолняется все, что до знака ?, если не выполняется - то все, что после
    // TODO ты неправильно написала

    // TODO formControl, formLabel, FormControlLabel, Radio - classes
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Выберите да или нет</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            onClick={this.getValue}
          >
            <FormControlLabel value={tags[0]} control={<Radio />} label="Да" disabled={disabled} />
            <FormControlLabel value={tags[1]} control={<Radio />} label="Нет" disabled={disabled} />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
