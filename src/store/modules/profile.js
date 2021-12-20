// import axios from "axios";

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

const actions = {};
const mutations = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
