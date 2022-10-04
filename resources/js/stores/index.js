import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
const { locale, locales } = window.config;
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const modulesFiles = require.context("./modules", false, /\.js$/);

// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath
    .replace(/^\.\/(.*)\.\w+$/, "$1")
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  // camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules,
  state: {
    basic: {},
    lang: locale,
    locals: locales,
  },
  mutations: {
    setBasic(state, data) {
      state.basic = data;
    },
    setLang(state, lang) {
      state.lang = lang;
    },
  },
  getters: {
    getBasic(state) {
      return state.basic;
    },
    getLang(state) {
      return state.lang;
    },
    getLocals(state) {
      return state.locals;
    },
  },
  actions: {
    basicAction({ commit }) {
      axios.get("/api/basic-setting").then((res) => {
        commit("setBasic", res.data);
      });
    },
    langAction({ commit }, lang) {
      commit("setLang", lang);
    },
  },
});

export default store;
