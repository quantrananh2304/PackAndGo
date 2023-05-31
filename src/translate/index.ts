import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './en.json';
import vnJson from './vn.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enJson,
    },
    vn: {
      translation: vnJson,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});
