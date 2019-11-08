<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
      }
    },
    methods: {

    },
    created() {
      //先问一下后台我登录了没有
      this.axios.get("/LoginAndSign/state.php",{params:{}})
              .then( body => {
                if(body.data){
                  //登录了，填个表，随便玩吧
                  this.$store.commit("updataUserInfo",body.data)
                }else {
                  //没登录的，赶紧登录去
                  this.$router.push({path:'/login'})
                }
              })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    height: 100%;
  }
  html,body{height: 100%;width: 100%;}
  *{ margin:0; padding:0; }
  ul { list-style:none; }
  img { border:0; }
  table { border-collapse:collapse; }
  .el-main{
    padding: 0 !important;
    margin: 0 !important;
    background-color: #E9EEF3 !important;
  }
  .el-header {
    background-color: #B3C0D1 !important;
  }
</style>
