import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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


const QuestionResult = (props) => {
  return (
    <div>
      {props.res && props.res.split(',').map(res => <Link onClick={() => props.onAnimalSelect(res)} key={res} to="/animal">{res}</Link>)}
    </div>
  );
};


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
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      questions: props.steps,
      tags: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillMount');
    this.setState({
      questions: [...nextProps.steps]
    });
  }
  






  handleNext = () => {
    let questions = [...this.state.questions];
    let currentStep = questions[this.state.activeStep];
    //currentStep.tags = value;
  //debugger

    // console.log(this.props.animals[0]['keys'].includes(currentStep.tags));

    const tags = Object.values(this.state.tags); //мы из массива обьектов делаем массив с тэгами

    let filteredAnimals = this.props.animals.filter(animal => {
      let save = true;
      const animalTags = animal.keys.split(', ');

      for (let tag of tags) {
        if (!animalTags.includes(tag)) {
          save = false;

          console.log("animalTags", animalTags);
          console.log("tag", tag);
          console.log("tags", tags);
        }
      }

      return save;

    });
    
    let filteredAnimalsNames = filteredAnimals.map(animal => animal.name);
    currentStep.result = filteredAnimalsNames + ',';

    if(filteredAnimalsNames == "") {
      currentStep.result = "чупакабра. ;) В нашей базе больше нет подходящих вам животных.";
    }

    
    
    console.log("animals", filteredAnimalsNames);
    
    this.setState({
      activeStep: this.state.activeStep + 1,
      questions
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
    //debugger
    // let questions = [...this.state.questions];
    // let currentStep = questions[this.state.activeStep];
    // currentStep.tags = value; //?tags или tag
    let tags = {...this.state.tags};
    tags[this.state.activeStep] = value;

    this.setState({
      tags: tags
    })
  	
  };

 





  render() {


  	

    const { classes } = this.props;
    // const steps = this.getSteps();
    //const animals = this.props.animals;
    const { activeStep, questions } = this.state;
    console.log(activeStep);
    //console.log(currentStep.tags);
    console.log("steps", questions);

    
    
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {questions.map((question, index) => {
            return (
              <Step key={question._id}>

                <StepLabel>{question.question}</StepLabel>
                  <p></p>
                  <p>Вам подходят: </p>

                <QuestionResult res={question.result} onAnimalSelect={this.props.onAnimalSelect} />

                <Radio getValue={this.getValue} currentStep={index} handleNext={this.handleNext} activeStep={this.state.activeStep} tags={question.keys.split(', ')} />

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
                        {activeStep === questions.length - 1 ? 'Конец' : 'Следующий'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === questions.length && (
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
