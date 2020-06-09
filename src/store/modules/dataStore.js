/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */
// eslint-disable-next-line no-unused-vars

const state = {
  countries: [],
  detailed: false,
  total: {},
  dailyTotal: {}
};


const getters = {
  countries: state => state.countries,
  detailed: state => state.detailed,
  total: state => state.total,
  dailyTotal: state => state.dailyTotal
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
  async deleteCountryAction({ commit }, id) {
    axios({
      method: 'delete',
      url: "http://localhost:7000/covid19/country/100",
      config: {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:7000/*',
            'origin':"*"
          }
      }
   })
    commit("deleteCounty", id)
  },
  async latestTotalsAction({ commit }) {
    const response = await axios.get(`http://localhost:7000/covid19/api/total/*`)
    commit("setTotal", response.data[0])
  },
  async dailyTotalsAction({ commit }, date) {
    console.log("daily")
    const response = await axios.get(`http://localhost:7000/covid19/api/total/date/${date}/*`)
    
    console.log(response.data[0])
    
    commit("setDailyTotal", response.data[0])
  },
  setStatus({commit}, status){
    console.log(commit+'*** ' +status)
    commit("setDetailed", status)
  },

};


const mutations = {
  setTotal: (state, total) => state.total = total,
  setDailyTotal: (state, total) => state.dailyTotal = total,
  setCountries: (state, data) => state.countries = data,
  setDetailed: (state, status) => state.detailed = status,
  deleteCountry: (state, id) => state.countries = state.countries.filter(c => c.id != id)
};


export default {
  state,
  getters,
  actions,
  mutations
};
