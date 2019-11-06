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
                console.log(body.data);
                /*if(body.data){

                }*/
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
</style>
