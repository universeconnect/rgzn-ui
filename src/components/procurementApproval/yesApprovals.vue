<template>
  <div class="box">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;"
      height="85%">
      <el-table-column
        type="index"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        fixed
        prop="ID"
        label=""
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购计划编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购计划名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="采购计划类型">
      </el-table-column>
      <el-table-column
        prop="name"
        label="审批状态">
      </el-table-column>
      <el-table-column
        prop="name"
        label="制单人">
      </el-table-column>
      <el-table-column
        prop="name"
        label="制单时间">
      </el-table-column>
    </el-table>
    <!--//分页-->
    <br>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "yesApprovals",
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: '好滋好',
                    category: '江浙',
                    desc: '12121212',
                    link:'办公部',
                    address: '上海路',
                    shop: '王小虎妻店',
                    shopId: '10333'
                },{
                    id: '12987122',
                    name: '好滋好',
                    category: '江浙',
                    desc: '12121212',
                    link:'办公部',
                    address: '上海路',
                    shop: '王小虎妻店',
                    shopId: '10333'
                }, {
                    id: '12987122',
                    name: '好滋好',
                    category: '江浙',
                    desc: '21321323',
                    link:'办公部',
                    address: '上海路',
                    shop: '王小虎妻店',
                    shopId: '10333'
                },
                    {
                        id: '12987122',
                        name: '好滋好',
                        category: '江浙',
                        desc: '32323321',
                        link:'办公部',
                        address: '上海路',
                        shop: '王小虎妻店',
                        shopId: '10333'
                    }]
            }
        }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  >>>.demo-table-expand label {
    width: 140px;
    color: #99a9bf;
  }
  .demo-table-expand  {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  >>>.el-form-item{
    width: 30%;
    margin-bottom: 0;
    height: 35px;

  }
  a{
    text-decoration: none;
    color: #6369ff;
  }
</style>
