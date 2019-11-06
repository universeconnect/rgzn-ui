import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import login from '@/components/login'
import home from '@/components/home'
import ep from '@/components/ep'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/home',
      name: 'home',
      component: home
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


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
