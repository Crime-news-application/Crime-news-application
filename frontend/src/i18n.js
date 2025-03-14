// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our website",
      // المزيد من الترجمات...
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبًا بكم في موقعنا",
      // المزيد من الترجمات...
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // React يتعامل مع الأمان بشكل داخلي
  }
});

export default i18n;
