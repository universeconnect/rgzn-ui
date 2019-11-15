<template>
    <div class="box">
        <h1>物资管理系统</h1>
        <div class="formBox">
            <el-form :model="loginForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user_name">
                    <el-input v-model="loginForm.user_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input show-password v-model="loginForm.pass_word" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="password">
                    <el-input class="code" v-model="code" autocomplete="off"></el-input>
                    <div class="codeImg">
                        <img style="vertical-align: middle;" :src=codeImgPath alt="">
                        <div class="codeImgRefresh"><span @click="updateCode" :class=imgClass></span></div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading=SubmitState :disabled=okSubmit @click="loginButton">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import md5 from 'js-md5'
  export default {
    name: "login",
    data(){
      return{
        loginForm: {
          user_name:"",
          pass_word:""
        },
        codeImgPath:"http://49.234.9.206/rgzn-api/LoginAndSign/code.png",
        code:"",
        okCode:"a2C4",//来一个初始验证码
        imgClass:"el-icon-refresh-right",
        okSubmit:true,
        SubmitState:false,
      }
    },
    methods:{
      md5,
      loginButton() {
        //提交表单
        this.axios.post("/LoginAndSign/login.php",this.$qs.stringify({
          user_name:this.loginForm.user_name,
          password:this.md5(this.loginForm.pass_word)//加密密码
        }))
          .then(response => {
            if(response.data.status_code === 1000){
              //密码正确
              //存储用户数据到vuex，填个表
              this.$store.commit("updataUserInfo",response.data.datas[0])

              //去玩吧
              this.$router.push({path:'/index'})
            }else{
              //密码错误
              alert("密码错误")
            }
          })
          .catch(error =>{
            console.log(error);
          })
      },
      updateCode(){
        //重新获取验证码
        this.imgClass = "el-icon-loading";
        this.axios.get('/LoginAndSign/verificationCode.php', {
          params: {
          }
        })
          .then(response => {
            this.okCode = response.data;
            //获取新的验证码图片
            this.codeImgPath = "http://49.234.9.206/rgzn-api/LoginAndSign/code.png?"+Math.random();
            this.imgClass = "el-icon-refresh-right";
          })
          .catch((error) => {
            console.log("获取验证码失败");
          });
      }
    },
    beforeMount() {
      //重新获取验证码
      this.imgClass = "el-icon-loading";
      this.axios.get('/LoginAndSign/verificationCode.php', {
        params: {
        }
      })
        .then(response => {
          this.okCode = response.data;
          //获取新的验证码图片
          this.codeImgPath = "http://49.234.9.206/rgzn-api/LoginAndSign/code.png?"+Math.random();
          this.imgClass = "el-icon-refresh-right";
        })
        .catch((error) => {
          console.log("获取验证码失败");
        });
    },
    updated() {
      this.okSubmit = !(this.code.toLowerCase()===this.okCode.toLowerCase())//如果验证码正确，允许登录
    }
  }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        background-color: #191b29;
    }
    .formBox{
        min-width:350px;
        max-width:400px;
        width: 40%;
        margin: 200px auto;
    }
    .demo-ruleForm >>> .el-form-item__content{
        margin-left: 60px !important;
    }
    .demo-ruleForm >>> .el-form-item__label{
        width: 60px !important;
    }
    .span01{
        display: inline-block;
        width: 50px;
    }
    .code{
        float:left;
        width: 50%;
    }
    .codeImg{
        display: inline-block;
        float:right;
        width: 40%;
        height: 40px;
    }
    .codeImgRefresh{
        height: 100%;
        display: inline-block;
    }
    .codeImgRefresh > span{
        /*position: relative;*/
        font-size: 30px;
        display: inline-block;
        /*top:8px;*/
    }
</style>
