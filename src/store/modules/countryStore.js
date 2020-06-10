/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */
// eslint-disable-next-line no-unused-vars

const state = {
  country: {},
};


const getters = {
  country: state => state.country
};


const actions = {
  async countryAction({ commit }, data) {
    const response = await axios.get(`http://localhost:7000/covid19/api/countries/date/${data.date}/code/${data.code}/*`)
    commit("setCountry", response.data[0])
  },
};


const mutations = {
  setCountry: (state, data) => state.country = data,

};


export default {
  state,
  getters,
  actions,
  mutations
};
