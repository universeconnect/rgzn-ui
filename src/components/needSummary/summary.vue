<template>
  <div class="box">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="98%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column  Scoped="Scoped">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">

            <el-form-item label="物料分类编码">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="物料分类名称">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="物料编码">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="物料名称">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="规格">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="型号">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="单位">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="需求数量">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="需求月份">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="需求日期">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="货源是否确定">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="期望供应商">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="固定供应商">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="所属需求计划编码">
              <span><a href="">{{ props.row.desc }}</a></span>
            </el-form-item>
            <el-form-item label="需求部门">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "summary",
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
