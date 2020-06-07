import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('./components/pages/HomePage.vue')
    },
    {
      path: '/countries',
      name: 'CountriesPage',
      component: () => import('./components/pages/CountriesPage.vue')
    }
  ]
})
