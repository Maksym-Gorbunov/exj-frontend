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
      path: '/page1',
      name: 'Page1',
      component: () => import('./components/pages/Page1.vue')
    }
  ]
})
