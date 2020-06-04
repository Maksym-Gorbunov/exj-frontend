/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */

const state = {
  countries: [],
  country: {
    name: "Italy"
  }
  
};


const getters = {
  country: state => state.country,
  countries: state => state.countries
};


const actions = {
  async getAllCountriesAction({ commit }) {
    console.log("--getAllCountriesAction--")
    const response = await axios.get("http://localhost:7000/covid19/country");
    commit("setCountries", response.data);
    console.log(response.data[2].name)
  },
  testAction(){
    console.log("--TestAction--")
  }
  
};


const mutations = {
  setCountries: (state, data) => {
    state.countries = data
    console.log(state.countries[1])
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
