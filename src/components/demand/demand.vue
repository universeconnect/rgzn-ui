<template>
  <div class="box">
    <div class="main-btn">
      <el-button>查 询</el-button>
      <el-button>修 改</el-button>
      <el-button>打 印</el-button>
      <el-button>导 出</el-button>
      <el-button>撤 回</el-button>
      <el-button>汇总至</el-button>
      <el-button>删 除</el-button>
      <el-button>关 闭</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="ID"
          label="行号"
          width="50">
        </el-table-column>
        <el-table-column type="selection"></el-table-column>
        <el-table-column
          prop="name"
          label="需求计划编号">
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
          label="需求计划状态">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求部门">
        </el-table-column>
        <el-table-column
          prop="name"
          label="需求计划月份">
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>

  </div>
</template>

<script>
    export default {
        name: "demand",
        data() {
            return {
                tableData: [{
                    ID:"1",
                    name: '王小虎',
                },
                {
                    ID:"2",
                    name: '王小虎',
                }],
            }
        },
        Methods:{

        }
    }
</script>

<style scoped>
  .main-btn{
    margin: 20px 0;
  }
  .el-button{
    margin-left: 20px;
  }
  .page{
    position: relative;
    top: 60%;
  }
</style>
