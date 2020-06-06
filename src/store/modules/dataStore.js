/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */


const state = {
  countries: []
};


const getters = {
  countries: state => state.countries
};


const actions = {
  async fetchCountries({ commit }) {
    const response = await axios.get("http://localhost:7000/covid19/country")
    commit("setCountries", response.data)
    console.log('fetchCountries')
  }
};


const mutations = {
  setCountries: (state, data) => state.countries = data
};


export default {
  state,
  getters,
  actions,
  mutations
};
