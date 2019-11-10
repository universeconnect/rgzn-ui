<template xmlns="http://www.w3.org/1999/html">
  <div class="box">
    <div style="padding-top: 140px"></div>
    <div class="query-main">
      <el-form label-width="120px" class="query-form" :model="formLabelAlign">
        <el-row>
        <el-form-item class="f-l"  label="需求计划编号">
          <el-input :disabled="false" v-model="formLabelAlign.id"></el-input>
        </el-form-item>
        </el-row>
        <el-row>
        <el-form-item class="f-l" label="需求计划类型">
          <el-select v-model="typeValue" style="width: 100% !important;" placeholder="请选择">
            <el-option
              v-for="item in typeOfNeed"
              :key="item.typeValue"
              :label="item.typeLabel"
              :value="item.typeValue">
            </el-option>
          </el-select>
        </el-form-item>
          <el-form-item class="f-l" label="需求部门">
            <el-select v-model="departmentValue" style="width: 100% !important;" placeholder="请选择">
              <el-option
                v-for="item in department"
                :key="item.departmentValue"
                :label="item.departmentLabel"
                :value="item.departmentValue">
              </el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
        <el-form-item class="f-l" label="计划年度">
          <el-date-picker
            v-model="yearValue"
            type="year"
            style="width: 100% !important;"
            placeholder="选择年度">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="f-l" label="需求计划月份">
          <el-date-picker
            v-model="monthValue"
            type="month"
            style="width: 100% !important;"
            placeholder="选择月份">
          </el-date-picker>
        </el-form-item>
        </el-row>
      </el-form>
      <div>
        <el-button class="bt-width" type="success">查询</el-button>
        <p style="width: 180px; display: inline-block"></p>
        <el-button class="bt-width" plain>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Query",
      data() {
        return {
          //表单假数据 begin
          formLabelAlign: {
            type: '',//类型
            id: '', //编号
          },
          //end
          yearValue:'',//选择的年度
          monthValue:'',//选择的月份
          //begin
          //选择需求
          typeOfNeed: [{
            typeValue: 'month',
            typeLabel: '月度计划'
          }, {
            typeValue: 'yearly',
            typeLabel: '年度计划'
          }, {
            typeValue: 'emergency',
            typeLabel: '紧急计划'
          }],
          typeValue: '',
          //部门选择
          //start
          department: [{
            departmentValue: '部门1',
            departmentLabel: '部门1'
          }, {
            departmentValue: '部门2',
            departmentLabel: '部门2'
          }, {
            departmentValue: '部门3',
            departmentLabel: '部门3'
          }],
          departmentValue:'',
          //end
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },

      }
    }
</script>

<style scoped>
  .box >>> .el-form-item{
    display: inline-block;
    width: 25%;
  }
  .query-main{
    width: 99%;
    margin: 0 auto;

  }

  .f-l{
    float:left;
    margin-left: 165px;
  }
  .bt-width{
    width: 120px;
    margin-top: 40px;
  }
</style>
