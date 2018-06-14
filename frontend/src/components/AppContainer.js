import App from './App';

import { connect } from 'react-redux';
import store from '../store';

import {
  loadAppData,
  changeLanguage,
  isAppLoading,
  // changeAnimal
} from '../actions';

console.log('APP__________________________________________');

const mapStateToProps = (state) => ({
  // texts: state.texts,
  // animals: state.animals,
  // questions: state.questions,
  language: state.language,
  translations: state.translations,
  isAppLoading: state.isAppLoading
});

const mapDispatchToProps = (dispatch) => ({
  handleLanguageChange: (e) => {
    dispatch(changeLanguage(e.target.value));
  },
  // handleAnimalChange: (animalId) => {
  //   dispatch(changeAnimal(animalId));
  // }
});


store.dispatch(isAppLoading(true));
store.dispatch(loadAppData());

// TODO hide loader

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
