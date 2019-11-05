import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import login from '@/components/login'
import ep from '@/components/ep'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/ep',
      name: 'ep',
      component: ep
    },{
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
