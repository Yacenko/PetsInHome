import Animal from './Animal';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  animal: state.animal,
  language: state.language
});

const AnimalContainer = connect(mapStateToProps, null)(Animal);

export default AnimalContainer;
