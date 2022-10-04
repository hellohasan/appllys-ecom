const state = {
  isLogged: false,
  token: "",
  id: "",
  user: "",
  roles: [],
  permissions: [],
};

const mutations = {
  SET_LOGIN: (state, value) => {
    state.isLogged = value;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER(state, user) {
    state.id = user.id;
    state.user = user;
  },
  RESET_USER(state, data) {
    state.id = "";
    state.user = "";
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions;
  },
};

const getters = {
  isLogged(state) {
    return state.isLogged;
  },
  getId(state) {
    state.id;
  },
  getUser(state) {
    return state.user;
  },
  getToken(state) {
    return state.token;
  },
  getRoles(state) {
    return state.roles;
  },
  getPermissions(state) {
    return state.permissions;
  },
};

const actions = {
  loginAction({ commit }, data) {
    commit("SET_LOGIN", true);
    commit("SET_TOKEN", data.token);
    commit("SET_USER", data.user);
    commit("SET_ROLES", data.roles);
    commit("SET_PERMISSIONS", data.permissions);
  },
  refreshCurrentUser({ commit }, data) {
    commit("SET_USER", data.user);
  },
  logoutAction({ commit }) {
    commit("SET_LOGIN", false);
    commit("SET_TOKEN", "");
    commit("RESET_USER", "");
    commit("SET_ROLES", []);
    commit("SET_PERMISSIONS", []);
  },
  loadPermissions({ commit }, data) {
    commit("SET_PERMISSIONS", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
