/**
 * Gets current browser language
 */
const getDefaultLanguage = () => {
  return navigator.language.split('-')[0] || process.env.REACT_APP_DEFAULT_LANGUAGE;
};

export default getDefaultLanguage;
