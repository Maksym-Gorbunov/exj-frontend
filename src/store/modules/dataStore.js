/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */
// eslint-disable-next-line no-unused-vars

const state = {
  countries: [],
  detailed: false
};


const getters = {
  countries: state => state.countries,
  detailed: state => state.detailed
};


const actions = {
  async fetchCountries({ commit }) {
    const response = await axios.get("http://localhost:7000/covid19/country")
    commit("setCountries", response.data)
  },
  async fetchCountriesDetailed({ commit }) {
    const response = await axios.get("http://localhost:7000/covid19/country/*")
    commit("setCountries", response.data)
  },
  setStatus({commit}, status){
    console.log(commit+'*** ' +status)
    commit("setDetailed", status)
  }
};


const mutations = {
  setCountries: (state, data) => state.countries = data,
  setDetailed: (state, status) => state.detailed = status
};


export default {
  state,
  getters,
  actions,
  mutations
};
