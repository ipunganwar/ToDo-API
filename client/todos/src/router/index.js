import Vue from 'vue'
import Router from 'vue-router'
import TheHomePage from '@/components/TheHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHomePage',
      component: TheHomePage
    }
  ]
})
