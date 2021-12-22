import axios from "axios";

const state = {
  accessToken: null,
  refreshToken: null,
};

const mutations = {
  updateStorage(state, { access, refresh }) {
    state.accessToken = access;
    state.refreshToken = refresh;
    localStorage.setItem("accessToken", JSON.stringify(state.accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(state.refreshToken));
  },

  clearStorage(state) {
    state.accessToken = "";
    state.refreshToken = "";
    let keys = ["accessToken", "refreshToken"];
    for (let key of keys) localStorage.removeItem(key);
  },
};

const getters = {};

const actions = {
  userLogin({ commit }, usercredentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8050/api/token/", {
          username: usercredentials.username,
          password: usercredentials.password,
        })
        .then((response) => {
          commit("updateStorage", {
            access: response.data.access,
            refresh: response.data.refresh,
          });
          resolve(response);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
  userLogout({ commit }) {
    commit("clearStorage");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
