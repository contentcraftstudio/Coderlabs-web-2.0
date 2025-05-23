import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ES } from "@/constants/translate/es";
import { EN } from "@/constants/translate/en";

const resources = {
  es: {
    translation: ES,
  },
  en: {
    translation: EN,
  },
};

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
});
