import axios from "axios";

const state = {
  students: [],
};
const getters = {
  students: (state) => state.students,
};

const mutations = {
  setStudents: (state, students) => (state.students = students),
};

const actions = {
  async fetchStudents({ commit }) {
    const response = await axios.get("http://localhost:8050/api/v1/students/");
    console.log(response.data);
    commit("setStudents", response.data.results);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
