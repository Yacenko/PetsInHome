import App from './App';

import { connect } from 'react-redux';
import store from '../redux/store';

import {
  loadAppData,
  changeLanguage,
  isAppLoading
} from '../redux/actions';

console.log('APP__________________________________________');

const mapStateToProps = (state) => ({
  language: state.language,
  translations: state.translations,
  isAppLoading: state.isAppLoading
});

const mapDispatchToProps = (dispatch) => ({
  handleLanguageChange: (e) => {
    dispatch(changeLanguage(e.target.value));
  }
});


store.dispatch(isAppLoading(true));
store.dispatch(loadAppData());

// TODO hide loader

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
