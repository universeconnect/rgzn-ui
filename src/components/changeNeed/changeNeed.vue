<template>
  <div class="changeNeed">
    <div class="table-he">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;"
      height="500px"
      @selection-change="handleSelectionChange">
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
        label="物料分类编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物料分类名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物料编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物料名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="规格"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="型号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="单位"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="需求数量"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="需求月份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="需求日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="货额是否确定"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="期望供应商"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="固定供应商"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物料追踪码"
        width="120">
      </el-table-column>
      <!--<el-table-column
        label="操作"
        fixed="right"
        width="150">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </el-table-column>-->
    </el-table>
  </div>
    <div class="btn">
      <el-button class="el-button" type="primary">查询</el-button>
      <el-button class="el-button" type="primary">修改</el-button>
      <el-button class="el-button" type="primary">打印</el-button>
      <el-button class="el-button" type="primary">导出</el-button>
      <el-button class="el-button" type="primary">撤回</el-button>
      <el-select style="width: 120px;margin-left: 40px;" v-model="addToValue" placeholder="汇总至">
        <el-option
          v-for="item in addTo"
          :key="item.addToValue"
          :label="item.addToLabel"
          :value="item.addToValue">
        </el-option>
      </el-select>
      <el-button class="el-button" type="danger">删除</el-button>

    </div>
   <!-- <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>-->
  </div>
</template>

<script>
    export default {
        name: "changeNeed",
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
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
            {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },{
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          multipleSelection: [],
          //合并下拉选择
          addTo: [{
            addToValue: 'month',
            addToLabel: '月度计划'
          }, {
            addToValue: 'year',
            addToLabel: '年度计划'
          },
            {
              addToValue: 'emergency',
              addToLabel: '紧急计划'
            }],
          addToValue: '',
        }
      },

      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    }
</script>

<style scoped>
  .btn{
    margin-top: 20px;
  }
.el-button{
  width: 90px;
  margin-left: 40px;
}
.table-he{

}
</style>
