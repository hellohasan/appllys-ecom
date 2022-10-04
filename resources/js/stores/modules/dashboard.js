const state = {
  users: [],
  roles: [],
};
const mutations = {
  SET_USERS: (state, data) => {
    state.users = data;
  },
  SET_ROLES: (state, data) => {
    state.roles = data;
  },
};

const getters = {
  getUsers(state) {
    return state.users;
  },
  getRoles(state) {
    return state.roles;
  },
};

const actions = {
  userAction({ commit }) {
    axios.get("/api/user-list").then((res) => {
      commit("SET_USERS", res.data);
    });
  },
  roleAction({ commit }) {
    axios.get("/api/role-list").then((res) => {
      commit("SET_ROLES", res.data);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
