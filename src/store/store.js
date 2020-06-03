import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
Vue.use(Vuex);


import dataStore from './modules/dataStore.js';
import userStore from './modules/userStore.js';


export default new Vuex.Store({
  modules: {
    dataStore,
    userStore
  }
});
