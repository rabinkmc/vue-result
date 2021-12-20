import axios from "axios";

const state = {
  subjects: [],
};
const getters = {
  teachers: (state) => state.teachers,
};

const mutations = {
  setTeachers: (state, teachers) => (state.teachers = teachers),
};

const actions = {
  async fetchTeachers({ commit }) {
    const response = await axios.get("http://localhost:8050/api/v1/teachers/");
    console.log(response.data);
    commit("setTeachers", response.data.results);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
