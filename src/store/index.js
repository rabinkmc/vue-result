import { createStore } from "vuex";

import axios from "axios";
import subjectModule from "./modules/subjects";
import teacherModule from "./modules/teachers";

export default createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    students: {},
  },

  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
      localStorage.setItem("accessToken", JSON.stringify(state.accessToken));
      localStorage.setItem("refreshToken", JSON.stringify(state.refreshToken));
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
            resolve(response);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
  modules: {
    teachers: teacherModule,
    subjects: subjectModule,
  },
});
