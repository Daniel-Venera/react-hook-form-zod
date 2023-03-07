import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import fr from "./translations/fr";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    debug: true,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: fr,
      },
    },
  });

export default i18n;
