import React from 'react';

import PropTypes from 'prop-types';//TODO
import {withStyles} from 'material-ui/styles';
import Stepper, {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Radio from './radio.js';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  resetContainer: {
    marginTop: 0,
    padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
  },
});



 function getStepContent(step) {
  switch (step) {
     case 0:
       return ``;
     case 1:
       return '';
     case 2:
       return ``;
     default:
       return ''; 
   }
 }

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0, //начальное значение прописано
  };

  getSteps = () => {

	return this.props.steps.map(item => item.question); //было ques
  
}

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
      
    });
    
  };

   // handleBack = () => {
   //   this.setState({
   //    activeStep: this.state.activeStep - 1,
   //   });
   // };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = (value) => {
   this.setState({value});
  };

  getValue = (value) => {
  	console.log(value);
  };

  render() {


  	

    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    console.log(activeStep);
    
    
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>

                <StepLabel>{label}</StepLabel>
                <Radio getValue={this.getValue} />

                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      
                      <Button
                        raised
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Конец' : 'Следующий'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Тест окончен</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Заново
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
