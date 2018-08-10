/**
 * Gets current browser language
 */
const getDefaultLanguage = () => {
  console.log('Default environment language: ', process.env.REACT_APP_DEFAULT_LANGUAGE);
  return navigator.language.split('-')[0] || process.env.REACT_APP_DEFAULT_LANGUAGE;
};

export default getDefaultLanguage;
