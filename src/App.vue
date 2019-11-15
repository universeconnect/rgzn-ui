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
                  console.log("我问过了。他说" + body.data);
                  this.$store.commit("updataUserInfo",body.data)
                }else {
                  //没登录的，赶紧登录去
                  this.$router.push({path:'/login'})
                }
              })
      /*this.axios.post("/add_month.php",this.$qs.stringify({
        code:234,
        type:123,
      plan_name:123,
      remark:123,
      dept:123,
      person:123,
      plan_state:123,
      review_state:123,
      budget_plan:1,
      year:12,
      write_people:123,
      alter_people:123,
      alter_cause:123,
      write_time:123,
      alter_time:123,
      materials:[{
        material_id:1,
        material_c_code:1,
        material_c_name:1,
        material_code:1,
        material_name:1,
        specifications:1,
        model:1,
        unit:1,
        quantity:1,
        year:1,
        day:1,
        goods_confirm:1,
        expect:1,
        fixation:1,
        note:1,
        goods_track_code:1,
        demand_code:234
      },{
        material_id:12,
        material_c_code:12,
        material_c_name:12,
        material_code:12,
        material_name:12,
        specifications:12,
        model:12,
        unit:12,
        quantity:12,
        year:12,
        day:12,
        goods_confirm:12,
        expect:12,
        fixation:12,
        note:12,
        goods_track_code:12,
        demand_code:234
      }]
    }))
    .then(response => {

      })
              .catch(error =>{
                console.log(error);
              })*/
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

</style>
