import store from '../redux/store';

const getText = (id) => {
  const state = store.getState();
  const { language, texts } = state;

  return texts.length && texts.find(item => item.name === id).text[language];
};

export default getText;
