import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/pages/Home.vue')
    },
    {
      path: '/countries',
      name: 'CountriesPage',
      component: () => import('./components/pages/CountriesPage.vue')
    }
  ]
})
