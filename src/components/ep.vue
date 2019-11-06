<template>
<div>
    <h1>密码加密程序</h1>
    <el-input v-model="input" placeholder="请输入密码"></el-input>
    <p>加密结果：  {{ content }}</p>
</div>
</template>

<script>
  import md5 from 'js-md5'
  export default {
    name: "ep",
    data() {
      return {
        input: '',
        content:""
      }
    },
    methods:{
      md5,
    },
    beforeCreate() {

    },
    updated() {
      this.content = this.md5(this.input)
    }

  }
</script>

<style scoped>

</style>
