import Search from './Search';

import { connect } from 'react-redux';

import {
  changeAnimal
} from '../redux/actions';


const mapStateToProps = (state) => ({
  animals: state.animals
});

const mapDispatchToProps = (dispatch) => ({
  // TODO loader
  handleAnimalChange: (animalId) => {
    dispatch(changeAnimal(animalId));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
