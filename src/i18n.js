import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones de los idiomas
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Si falta una traducción, usa español
    interpolation: {
      escapeValue: false, // react ya maneja el escape
    },
  });

export default i18n;
