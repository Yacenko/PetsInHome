import Stepper from './Stepper';

import { connect } from 'react-redux';

import {
  selectAnimal
} from '../actions';


const mapStateToProps = (state) => ({
  animals: state.animals,
  steps: state.questions,
  language: state.language
});

const mapDispatchToProps = (dispatch) => ({
  // TODO loader
  handleAnimalSelect: (animal) => {
    dispatch(selectAnimal(animal));
  }
});

const StepperContainer = connect(mapStateToProps, mapDispatchToProps)(Stepper);

export default StepperContainer;
