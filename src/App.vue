<template>
  <div id="app">
    <router-view/>
    <button @click="tj"> hhh </button>
    <button @click="tj1"> eee </button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
      }
    },
    methods:{
      tj(){
        this.axios.get('/LoginAndSign/cs.php', {
          params: {
            ID: 12345
          }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      tj1(){
        this.axios.get('/LoginAndSign/cs1.php', {
          params: {
            ID: 12345
          }
        })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
      }
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
    margin-top: 60px;
  }
</style>
