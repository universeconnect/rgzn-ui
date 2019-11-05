<template>
<div>
    <h1>md5加密程序</h1>
    <el-input v-model="input" placeholder="请输入密码"></el-input>
    <p>加密结果：  {{ md5(input) }}</p>
</div>
</template>

<script>
  import md5 from 'js-md5'
  export default {
    name: "ep",
    data() {
      return {
        input: ''
      }
    },
    methods:{
      md5
    }

  }
</script>

<style scoped>

</style>
