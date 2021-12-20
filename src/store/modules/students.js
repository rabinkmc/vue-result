import axios from "axios";

const state = {
  subjects: [
    {
      id: 1,
      name: "Maths",
    },
    {
      id: 2,
      name: "English",
    },
    {
      id: 3,
      name: "Science",
    },
  ],
};
const getters = {
  subjects: (state) => state.subjects,
};

const actions = {
  async fetchStudents({ commit }) {
    const reponse = await axios.get("http://localhost:8050/api/v1/students");
    console.log(reponse.data);
  },
};
const mutations = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
