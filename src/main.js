import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import store from '../store'
import qs from 'qs'
import 'babel-polyfill'

axios.defaults.baseURL = "http://49.234.9.206/rgzn-api";//配置api地址前缀]
axios.defaults.withCredentials = true;//携带cookie

//挂载中间件
Vue.config.productionTip = false
Vue.prototype.$qs = qs;
Vue.use(ElementUi);
Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.use(VueCookies);

//挂载路由和vuex以及创建根组件
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 设置路由转跳验证
router.beforeEach((to, from, next) => {
  //to：目标路由对象
  //from：目前路由对象
  //next():继续转跳
  //判断要去哪？
  if(to.path === '/login'){
    //要去登录，通过
    next();
  }else{
    //不是去登录，登录过了吗？
    if(store.state.user_info.user_name === ""){
      //没有登录，不通过，去登录吧
      next({path:'/login'})
    }else{
      //登录过了，通过
      next();
    }
  }
});
