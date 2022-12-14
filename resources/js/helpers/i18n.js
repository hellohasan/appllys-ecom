import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "../lang/en";
import bnLocale from "../lang/bn";
import store from "../stores";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  bn: {
    ...bnLocale,
  },
};

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

export function getLanguage() {
  const chooseLanguage = store.getters.getLang;
  if (chooseLanguage) {
    return chooseLanguage;
  }
  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = store.getters.getLocals;
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "en";
}

export default i18n;
