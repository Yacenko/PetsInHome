import Search from './Search';

import { connect } from 'react-redux';

import {
  selectAnimal
} from '../redux/actions';
import classNames from 'classnames'; //?


const mapStateToProps = (state) => ({
  animals: state.animals,
  language: state.language
});

const styles = { //?
  root: {
    backgroundColor: '#9ACD32'
  }
};


const mapDispatchToProps = (dispatch) => ({
  // TODO loader
  handleAnimalChange: (animal) => {
    dispatch(selectAnimal(animal));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)(styles); //(styles) ?

export default SearchContainer;
