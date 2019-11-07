import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    user_info:{//用户信息
      user_name:"",
      user_role:""
    }
  },
  mutations:{
    //修改状态
    updataUserInfo:function (state,stark){
      state.user_info.user_name = stark.user_name;
      state.user_info.user_role = stark.user_role;
    }
  }
});
//导出store
export default store
