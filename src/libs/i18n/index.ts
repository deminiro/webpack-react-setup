import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJson from 'assets/locales/en.json';

const in18nextInitOptions = {
  debug: false,
  resources: {
    en: { translation: enJson },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['cookie'],
    caches: ['cookie'],
    // cookieDomain: process.env.DOMAIN,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init(in18nextInitOptions);
