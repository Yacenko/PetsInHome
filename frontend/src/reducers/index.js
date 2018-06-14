import {
  LOAD_ANIMALS,
  LOAD_QUESTIONS,
  LOAD_TRANSLATIONS,
  LOAD_TEXTS,
  CHANGE_LANGUAGE,
  DATA_LOADING,
  ANIMAL_CHANGED,
  RECEIVE_APP_DATA,
  ANIMAL_SELECTED
} from "../constants/action-types";

import getDefaultLanguage from '../utils/get-default-language';

const initialState = {
  animals: [],
  questions: [],
  texts: [],
  language: getDefaultLanguage(),
  translations: [],
  isAppLoaded: false,
  isAppLoading: false,
  animal: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ANIMALS:
      return {...state, animals: action.payload};

    case LOAD_QUESTIONS:
      return {...state, questions: action.payload};

    case LOAD_TRANSLATIONS:
      return {...state, translations: action.payload};

    case LOAD_TEXTS:
      return {...state, texts: action.payload};

    case CHANGE_LANGUAGE:
      return {...state, language: action.payload};

    case DATA_LOADING:
      return {...state, isAppLoading: action.payload};

    case ANIMAL_CHANGED:
      // TODO response - maybe shouldn't be an array
      return {...state, animal: action.payload[0]};

    case RECEIVE_APP_DATA:
      return {...state, ...action.payload};

    case ANIMAL_SELECTED:
      return {...state, animal: action.payload};

    default:
      return state;
  }
};

export default rootReducer;
