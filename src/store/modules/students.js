import axios from "axios";

const state = {
  offset: 0,
  students: [],
};

const getters = {
  storeStudents: (state) => state.students,
  storeOffset: (state) => state.offset,
};

const mutations = {
  setStudents: (state, students) => (state.students = students),
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
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
