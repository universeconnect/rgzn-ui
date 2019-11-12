<template>
    <div class="box" style="position: relative">
        <el-container>
            <el-aside width="200px" ><Aside></Aside></el-aside>
            <el-container>
                <el-header height="80px" style="line-height: 80px">
                   <span style="height: 50px; line-height: 50px; color: #f6f8ff; font-size: 30px">物资管理系统</span>
                </el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import Aside from './box/Aside'
  export default {
    name: "index",
    components :{Aside}

  }
</script>

<style scoped>
    >>>.el-header {
        background-color:#FF6600 !important;
    }
    .box{
        height: 100%;
        width: 100%;
    }
    .box >>> .el-container,
    .box >>> .el-menu-vertical-demo,
    .box >>> .el-aside div{
        height: 100% !important;
    }
</style>
