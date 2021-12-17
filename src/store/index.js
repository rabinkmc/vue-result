import { createStore } from "vuex";

import axios from "axios";
export default createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIdata: "",
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
    },
  },
  actions: {
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8050/api/token/", {
            username: usercredentials.username,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
  },
  modules: {},
});
