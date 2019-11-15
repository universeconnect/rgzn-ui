<template>
  <div class="box">
    <div class="table-he">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;"
        height="300px">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="ID"
          label=""
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求计划编号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求计划名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求计划类型">
        </el-table-column>
        <el-table-column
          prop="name"
          label="审批状态">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求人员">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求计划月份">
        </el-table-column>
      </el-table>
      <br>
      <!--//分页-->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>

      <div style="margin-top: 40px; width: 80%; text-align: center">
          <el-form style=" margin-left: 150px" :inline="true">
            <el-form-item style="height: 100px; " label="审批意见:"  prop="">
              <el-input  type="textarea" style="width: 600px;  height: 99px" placeholder="请不要超过100字..."></el-input>
            </el-form-item>
          </el-form>
        <div style="margin-left: 395px">
        <el-button type="success" >审批通过</el-button>
        <el-button type="danger" style="margin-left: 50px">审批退回</el-button>
        <el-button style="margin-left: 47px; padding: 12.5px 43px;">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "noApproval",
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
          multipleSelection: []
        }
      }
    }
</script>

<style scoped>
  >>>.el-textarea__inner{
    height: 99px;
  }
</style>
