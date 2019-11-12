import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import login from '@/components/login'
import ep from '@/components/ep'
import index from '@/components/index'
import Month from '@/components/month/month'
import Yearly from '@/components/yearly/yearly'
import Emergency from '@/components/emergency/emergency'
import Query from '@/components/query/Query'
import Demand from '@/components/demand/demand'
import noApproval from '@/components/needApproval/noApproval'
import yesApproval from '@/components/needApproval/yesApproval'
import summary from "@/components/needSummary/summary";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/index',
      name: 'index',
      component: index,
      children:[//子路由
        {
          path: '',
          redirect:'0',//默认/index重定向到/index/1
        },
        {
          path: '0',
          name: '0',
          component: Demand,
        },
        {
          path: '1',
          name: '1',
          component: Month,
        },
        {
          path: '2',
          name: '2',
          component: Yearly,
        },
        {
          path: '3',
          name: '3',
          component: Emergency,
        },
        {
          path: '4',
          name: '4',
          component: Query,
        },
        {
          path: '6-1',
          name: '5',
          component: noApproval,
        },
        {
          path: '6-2',
          name: '5',
          component: yesApproval,
        },
        {
          path: '7',
          name: '7',
          component: summary,
        }
      ]

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
