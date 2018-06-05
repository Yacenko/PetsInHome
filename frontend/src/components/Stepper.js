import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Stepper, {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Radio from './Radio.js';

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
  // "чупакабра. ;) В нашей базе больше нет подходящих вам животных."
  return (
    <div>
      {props.res && props.res.map(res =>
        <span>
          <Link onClick={() => props.onAnimalSelect(res)} key={res[props.language]} to="/animal">{res.name[props.language]}</Link>
          <span key={`span-${res}`}>, </span>
        </span>
      )}
    </div>
  );
};

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
    this.setState({
      questions: [...nextProps.steps]
    });
  }

  handleNext = () => {
    let questions = [...this.state.questions];
    let currentStep = questions[this.state.activeStep];

    const { language } = this.props;
    const tags = Object.values(this.state.tags);

    currentStep.result = this.props.animals.filter(animal => {
      let save = true;
      const animalTags = animal.keys[language];

      for (let tag of tags) {
        if (animalTags && !animalTags.includes(tag)) {
          save = false;
        }
      }

      return save;
    });
    
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
    let tags = {...this.state.tags};
    tags[this.state.activeStep] = value;

    this.setState({
      tags: tags
    })
  };

  // TODO Typography, Stepper, Step, StepLabel, Radio, StepContent, Button, Paper
  render() {
    const { classes, language } = this.props;
    const { activeStep, questions } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {questions.map((question, index) => {
            return (
              <Step key={question._id}>
                <StepLabel>{question.question[language]}</StepLabel>
                <p>Вам подходят: </p>

                <QuestionResult
                  language={language}
                  res={question.result}
                  onAnimalSelect={this.props.onAnimalSelect}
                />

                <Radio
                  getValue={this.getValue}
                  currentStep={index}
                  handleNext={this.handleNext}
                  activeStep={this.state.activeStep}
                  tags={question.keys[language]}
                />

                <StepContent>
                  <Typography></Typography>
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
