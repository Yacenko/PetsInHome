import {
  LOAD_ANIMALS,
  LOAD_QUESTIONS,
  LOAD_TRANSLATIONS,
  LOAD_TEXTS,
  CHANGE_LANGUAGE,
  DATA_LOADING,
  ANIMAL_CHANGED,
  LOAD_APP_DATA,
  RECEIVE_APP_DATA,
  ANIMAL_SELECTED
} from "../constants/action-types";

import fetchData from '../utils/fetch-data';
import store from "../store";

export const loadAnimals = () => ({
  type: LOAD_ANIMALS,
  payload: fetchData('animals/all')
});

export const loadTexts = () => ({
  type: LOAD_TEXTS,
  payload: fetchData('text')
});

export const loadQuestions = () => ({
  type: LOAD_QUESTIONS,
  payload: fetchData('questions')
});

export const loadTranslations = () => ({
  type: LOAD_TRANSLATIONS,
  payload: fetchData('translations')
});

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language
});

export const isAppLoading = (isLoading) => ({
  type: DATA_LOADING,
  payload: isLoading
});

export const changeAnimal = (id) => ({
  type: ANIMAL_CHANGED,
  payload: fetchData(`/animals/${id}`)
});

export const receiveAppData = (data) => ({
  type: RECEIVE_APP_DATA,
  payload: data
});

export const selectAnimal = (animal) => ({
  type: ANIMAL_SELECTED,
  payload: animal
});

// TODO  !!!!!!
export const loadAppData = () => {
  return (dispatch) => {
    return Promise.all(
      [
        fetchData('animals/all'),
        fetchData('text'),
        fetchData('questions'),
        fetchData('translations')
      ]
    ).then(
      ([animals, texts, questions, translations]) => {
        dispatch(receiveAppData({
          animals,
          texts,
          questions,
          translations
        }));

        dispatch(isAppLoading(false));
      }
    ).catch(err => console.error(err));
  };
};
