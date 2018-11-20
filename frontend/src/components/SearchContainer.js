import Search from './Search';

import { connect } from 'react-redux';

import {
  selectAnimal
} from '../redux/actions';


const mapStateToProps = (state) => ({
  animals: state.animals,
  language: state.language
});

const styles = {
  root: {
     float: 'left',
     textAlign: 'center'
  }
};

const mapDispatchToProps = (dispatch) => ({
  // TODO loader
  handleAnimalChange: (animal) => {
    dispatch(selectAnimal(animal));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
