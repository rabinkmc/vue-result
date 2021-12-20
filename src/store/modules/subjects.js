import axios from "axios";

const state = {
  subjects: [],
};

const getters = {
  subjects: (state) => state.subjects,
};

const mutations = {
  setSubjects: (state, subjects) => (state.subjects = subjects),
};

const actions = {
  async fetchSubjects({ commit }) {
    const response = await axios.get("http://localhost:8050/api/v1/subjects/");
    console.log(response.data);
    commit("setSubjects", response.data.results);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
