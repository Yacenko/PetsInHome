import store from '../store';

const getTranslation = (id) => {
  const state = store.getState();
  const { language, translations } = state;
  const word = translations.find(item => item.name === id);

  return word && word.text[language];
};

export default getTranslation;
