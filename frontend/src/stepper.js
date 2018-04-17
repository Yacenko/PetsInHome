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
    padding: theme.spacing.unit * 3, 
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
    activeStep: 0,
    testAnswer: [], //начальное значение прописано
  };

  getSteps = () => {

	return this.props.steps.map(item => item.question); //было ques
  
}



  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
     
      
      
    });
    
  };

    handleBack = () => {
      this.setState({
       activeStep: this.state.activeStep - 1,
      });
    };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      value: "",
      
    });
  };

  handleChange = (value) => {
   this.setState({value});
  };

   getValue = (value) => {
   	console.log(value);
   };

  testAnswer = (value, activeStep, animals) => {

     if (value == "yes" & activeStep == 0) {
       animals = animals.filter(function(animals){
        return animals.keys.includes("теплокровное") });


     } else {
      animals = animals.filter(function(animals){
        return animals.keys.includes("хладнокровное") });
     }

             
      
    });

    this.setState({
      animals: this.state.animals,
    )};


    if (value == "yes" & activeStep == 1) {
       animals = animals.filter(function(animals){
        return animals.keys.includes("многоместа") });


     } else {
      animals = animals.filter(function(animals){
        return animals.keys.includes("маломеста") });
     }

             
      
    });

    this.setState({
      animals: this.state.animals,
    )};




  };





  render() {


  	

    const { classes } = this.props;
    const steps = this.getSteps();
    const animals = this.props.animals;
    const { activeStep } = this.state;
    console.log(activeStep);
    console.log(animals);

    
    
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>

                <StepLabel>{label}</StepLabel>
                <Radio getValue={this.getValue} currentStep={index} handleNext={this.handleNext} activeStep={this.state.activeStep} />

                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      
                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Предыдущий
                      </Button>


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
