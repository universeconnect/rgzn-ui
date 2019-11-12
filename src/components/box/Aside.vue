<template>
    <div>
        <el-menu
        :default-active= "activeIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#333"
        text-color="#fff"
        active-text-color="#FF6600"
        unique-opened
        :router="r">
            <el-submenu>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>需求计划</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/index/0">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">需求计划</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/index/1">
                        <i class="el-icon-user"></i>
                        <span slot="title">月度计划</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/index/2">
                        <i class="el-icon-monitor"></i>
                        <span slot="title">年度计划</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/index/3" >
                        <i class="el-icon-reading"></i>
                        <span slot="title">紧急计划</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/index/4" >
                <i class="el-icon-film"></i>
                <span slot="title">需求计划查询</span>
            </el-menu-item>
          <el-submenu index="/index/6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>需求计划审批</span>
            </template>
            <el-submenu index="/index/6-0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>分类查看</span>
              </template>
                <el-menu-item index="/index/6-1">
                  <i class="el-icon-s-order"></i>
                  <span slot="title">待审批需求计划</span>
                </el-menu-item>
                <el-menu-item index="/index/6-2">
                  <i class="el-icon-s-order"></i>
                  <span slot="title">已审批需求计划</span>
                </el-menu-item>
            </el-submenu>
          </el-submenu>
            <el-menu-item index="/index/7" >
              <i class="el-icon-reading"></i>
              <span slot="title">物资需求报表</span>
            </el-menu-item>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>采购计划</span>
            </template>
            <el-menu-item index="/index/8-1">
              <i class="el-icon-s-order"></i>
              <span slot="title">物资供应方案</span>
            </el-menu-item>
            <el-menu-item index="/index/8-2">
              <i class="el-icon-s-order"></i>
              <span slot="title">采购计划查改</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="/index/9">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>采购计划审批</span>
            </template>
            <el-submenu index="/index/9-0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>分类查看</span>
              </template>
              <el-menu-item index="/index/9-1">
                <i class="el-icon-s-order"></i>
                <span slot="title">待审批采购计划</span>
              </el-menu-item>
              <el-menu-item index="/index/9-2">
                <i class="el-icon-s-order"></i>
                <span slot="title">已审批采购计划</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
    </div>
</template>

<script>


    export default {
        name: "Aside",
        data(){
            return{
                r:true,
                activeIndex:"/"
            }
        },
        mounted () {
            //获取当前路径并且给参数赋值
            let href = window.location.href;
            this.activeIndex = href.split('/#')[1];
            if(this.activeIndex === "/"){
                this.activeIndex = "/index/";
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            //动态改变参数的值
            getPath () {
                this.activeIndex = this.$route.path
            }
        },
        //监听路由变化
        watch: {
            '$route': 'getPath'
        },
    }
</script>

<style scoped>
</style>
