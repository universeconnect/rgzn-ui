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
import physicalSupply from "../components/physicalSupply/physicalSupply";
import procurementQuery from "../components/procurementQuery/procurementQuery";
import noApprovals from "../components/procurementApproval/noApprovals";
import yesApprovals from "../components/procurementApproval/yesApprovals";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },{
      path: '/login',
      component: login
    },{
      path: '/index',
      component: index,
      children:[//子路由
        {
          path: '',
          redirect:'0',//默认/index重定向到/index/1
        },
        {
          path: '0',
          component: Demand,
        },
        {
          path: '1',
          component: Month,
        },
        {
          path: '2',
          component: Yearly,
        },
        {
          path: '3',
          component: Emergency,
        },
        {
          path: '4',
          component: Query,
        },
        {
          path: '6-1',
          component: noApproval,
        },
        {
          path: '6-2',
          component: yesApproval,
        },
        {
          path: '7',
          component: summary,
        },{
          path: '8-1',
          component: physicalSupply,
        },{
          path: '8-2',
          component: procurementQuery,
        },
        {
          path: '9-1',
          component: noApprovals,
        },{
          path: '9-2',
          component: yesApprovals,
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
