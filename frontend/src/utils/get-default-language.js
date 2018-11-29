/**
 * Gets current browser language
 */
const getDefaultLanguage = () => {
  const langs = ['ua', 'en', 'ru'];
  const browserLanguage = navigator.language.split('-')[0];

  return langs.includes('browserLanguage') ? browserLanguage : process.env.REACT_APP_DEFAULT_LANGUAGE;
};

export default getDefaultLanguage;
