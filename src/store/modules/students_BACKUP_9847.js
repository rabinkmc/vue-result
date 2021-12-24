import axios from "axios";

const state = {
<<<<<<< HEAD
=======
  offset: 0,
>>>>>>> devel
  students: [],
};

const getters = {
<<<<<<< HEAD
  students: (state) => state.students,
=======
  storeStudents: (state) => state.students,
  storeOffset: (state) => state.offset,
>>>>>>> devel
};

const mutations = {
  setStudents: (state, students) => (state.students = students),
<<<<<<< HEAD
};

const actions = {
  async fetchStudents({ commit }) {
    const response = await axios.get("http://localhost:8050/api/v1/students/");
    console.log(response.data);
    commit("setStudents", response.data.results);
=======
  setOffset: (state, offset) => (state.offset = offset),
};

const actions = {
  async fetchStudents({ commit }, offset) {
    const response = await axios.get(
      `http://localhost:8050/api/v1/students/?limit=5&offset=${offset}`
    );
    console.log(response.data);
    commit("setStudents", response.data.results);
    commit("setOffset", offset);
>>>>>>> devel
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
