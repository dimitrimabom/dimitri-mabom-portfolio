// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import des fichiers de traduction
import enTranslation from "../locales/en/translation.json";
import frTranslation from "../locales/fr/translation.json";

// Initialisation de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
