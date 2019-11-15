<template>
  <div class="box">
    <el-main>
      <div class="container">


        <div style="margin: 30px;"></div>
        <div class="monthly-main">
          <el-form label-width="120px" class="monthly-form" :model="formLabelAlign">
            <el-form-item label="需求计划类型">
              <el-input :disabled="true" v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="需求计划编码">
              <el-input :disabled="true" v-model="formLabelAlign.id"></el-input>
            </el-form-item>
            <el-form-item label="需求计划名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="formLabelAlign.remark"></el-input>
            </el-form-item>
            <el-form-item label="需求部门">
              <el-select v-model="value" style="width: 100% !important;" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="需求人员">
              <el-input v-model="formLabelAlign.staff"></el-input>
            </el-form-item>
            <el-form-item label="审批状态">
              <el-input :disabled="true" v-model="formLabelAlign.examine"></el-input>
            </el-form-item>
            <el-form-item label="需求计划状态">
              <el-input :disabled="true" v-model="formLabelAlign.status"></el-input>
            </el-form-item>
            <el-form-item label="是否预算内计划">
              <el-checkbox-group class="group-checkbox" v-model="formLabelAlign.budget">
                <el-checkbox name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
        <div class="main-btn">
          <el-button>保 存</el-button>
          <el-button>复 制</el-button>
          <el-button>提 交</el-button>
          <el-button>打 印</el-button>
          <el-button>导 出</el-button>
          <el-button>附 件</el-button>
          <el-button>提 醒</el-button>
          <el-button>删 除</el-button>
          <el-button>关 闭</el-button>
        </div>
        <el-tabs type="border-card" style="width: 99%; min-height: 300px; margin:0 auto;">

          <el-tab-pane label="基本信息">
            <el-table :data="tabledatas" style="width: 100%" >
              <el-table-column
                      fixed
                      prop="ID"
                      label=""
                      width="50">
              </el-table-column>
              <el-table-column
                      label="物料分类编码"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="物料分类名称"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="物料编码"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="物料名称"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="规格"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="型号"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="单位"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="需求数量"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="需求月份"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="需求日期"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="货额是否确定"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="期望供应商"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="备注"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="物料追踪码"
                      width="150">
                <template slot-scope="scope">
                  <el-input size="mini" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                      label="操作"
                      fixed="right"
                      width="130">
                <template slot-scope="scope">
                  <el-button @click="scope.row.show =true">编辑</el-button>
                  <el-button @click="scope.row.show =false">保存</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="流程信息">
            <el-table
                    :data="tableData"
                    style="width: 100%">
              <el-table-column
                      prop="ID"
                      label=""
                      width="50">
              </el-table-column>
              <el-table-column
                      prop="name"
                      label="审批人">
              </el-table-column>
              <el-table-column
                      prop="name"
                      label="审批时间">
              </el-table-column>
              <el-table-column
                      prop="name"
                      label="审批意见">
              </el-table-column>
              <el-table-column
                      prop="name"
                      label="说明">
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="系统信息">
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign2">
              <el-form-item label="编制人">
                <el-input :disabled="true" v-model="formLabelAlign2.name"></el-input>
              </el-form-item>
              <el-form-item label="编制时间">
                <el-input :disabled="true" v-model="formLabelAlign2.name"></el-input>
              </el-form-item>
              <el-form-item label="修改人">
                <el-input :disabled="true" v-model="formLabelAlign2.name"></el-input>
              </el-form-item>
              <el-form-item label="修改时间">
                <el-input :disabled="true" v-model="formLabelAlign2.name"></el-input>
              </el-form-item>
              <el-form-item label="修改原因">
                <el-input v-model="formLabelAlign2.name"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </div>
</template>

<script>

  export default {
    name: 'yearlyPlan',
    data() {
      return {
        //表单假数据 begin
        formLabelAlign2:{
          name:'王小虎',
        },
        formLabelAlign: {
          type: '月度计划',
          id: '1111888',
          name: '',
          remark:'',
          staff:'',
          examine:'已审批',
          status:'已提交',
          budget:''
        },
        //end
        value2:'',
        //部门选择假数据
        //begin
        options: [{
          value: '选项1',
          label: '财务部'
        }, {
          value: '选项2',
          label: '财务部'
        }, {
          value: '选项3',
          label: '财务部'
        }, {
          value: '选项4',
          label: '财务部'
        }],
        value: '',
        //    end
        tabledatas: [],
        tableData: [],
        labelPosition: "",
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

    },
    created() {
      // 发请求去后台拿数据,如果有api，就正常请求，
      //我这里是demo，就简单给list赋值了，原理一样。
      // getlistApi().then(res => {
      // let list = res.data.list
      let list = [
        { ID:'1', name: '王小虎'},
      ]
      list.forEach(element => {
        element["show"] = false
      });
      this.tabledatas = list
      // })
    }
  }
</script>

<style scoped>
  .box >>> .el-form-item{
    display: inline-block;
    width: 25%;
  }
  .main-btn{
    margin-bottom: 20px;
  }
  .el-button{
    margin-left: 20px;
  }
  .group-checkbox{
    width: 50px;
  }
</style>
