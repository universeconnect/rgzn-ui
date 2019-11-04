import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import login from '@/components/login'
import sign from '@/components/sign'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/sign',
      name: 'sign',
      component: sign
    },{
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
