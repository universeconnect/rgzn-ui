<template>
    <div>
        <el-menu
                :default-active= "activeIndex"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="r">
            <el-menu-item index="/index/1">
                <i class="el-icon-user"></i>
                <span slot="title">月度计划</span>
            </el-menu-item>
            <el-menu-item index="/index/2">
                <i class="el-icon-monitor"></i>
                <span slot="title">......</span>
            </el-menu-item>
            <el-menu-item index="/index/3" >
                <i class="el-icon-reading"></i>
                <span slot="title">......</span>
            </el-menu-item>
            <el-menu-item index="/index/4" >
                <i class="el-icon-film"></i>
                <span slot="title">......</span>
            </el-menu-item>
            <el-menu-item index="/index/5" >
                <i class="el-icon-trophy"></i>
                <span slot="title">......</span>
            </el-menu-item>
            <el-menu-item index="/index/6" >
                <i class="el-icon-s-custom"></i>
                <span slot="title">......</span>
            </el-menu-item>
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
