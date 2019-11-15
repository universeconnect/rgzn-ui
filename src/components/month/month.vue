<template>
  <div class="box">
    <el-main>
      <div class="container">

        <div style="margin: 30px;"></div>
        <div class="monthly-main">
          <el-form label-width="120px" class="monthly-form" :model="formLabelAlign1">
            <el-form-item label="需求计划类型">
              <el-input :disabled="true" v-model="formLabelAlign1.type"></el-input>
            </el-form-item>
            <el-form-item label="需求计划编码">
              <el-input :disabled="true" v-model="formLabelAlign1.code"></el-input>
            </el-form-item>
            <el-form-item label="需求计划名称">
              <el-input v-model="formLabelAlign1.plan_name"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="formLabelAlign1.remark"></el-input>
            </el-form-item>
            <el-form-item label="需求计划月份">
              <el-date-picker
                      v-model="value2"
                      type="month"
                      style="width: 100% !important;"
                      placeholder="选择月份">
              </el-date-picker>
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
              <el-input v-model="formLabelAlign1.person"></el-input>
            </el-form-item>
            <el-form-item label="审批状态">
              <el-input :disabled="true" v-model="formLabelAlign1.review_state"></el-input>
            </el-form-item>
            <el-form-item label="需求计划状态">
              <el-input :disabled="true" v-model="formLabelAlign1.plan_state"></el-input>
            </el-form-item>
            <el-form-item label="是否预算内计划">
              <el-checkbox-group class="group-checkbox" v-model="formLabelAlign1.budget_plan">
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
          <!--以下是弹框放置位置-->
          <el-dialog
            :title="formLabelAlign2.material_name"
            :visible.sync="dialogVisible1"
            width="1000px"
            :before-close="handleClose1">
            <div style="margin: 10px; line-height: 20px !important;"></div>
            <el-form :inline="true" :model="formLabelAlign2" class="demo-form-inline">
              <h2 v-if="" style="margin: -20px auto 5px">ID:{{formLabelAlign2.material_id}}</h2>
              <el-form-item label="物料分类编码">
                <el-input v-model="formLabelAlign2.material_c_code"  placeholder="xxxx"></el-input>
              </el-form-item>
              <el-form-item label="物料分类名称">
                <el-select v-model="formLabelAlign2.material_c_name" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码">
                <el-input v-model="formLabelAlign2.material_code"  placeholder="xxxx"></el-input>
              </el-form-item>
              <el-form-item label="物料名称">
                <el-input v-model="formLabelAlign2.material_name" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="规格">
                <el-input v-model="formLabelAlign2.specifications" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="型号">
                <el-input v-model="formLabelAlign2.model" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="formLabelAlign2.unit" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="需求数量">
                <el-input v-model="formLabelAlign2.quantity" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="需求月份">
                <el-input v-model="formLabelAlign2.year" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="需求日期">
                <el-input v-model="formLabelAlign2.day" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="货额是否确定">
                <el-input v-model="formLabelAlign2.goods_confirm" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="期望供应商">
                <el-input v-model="formLabelAlign2.expect" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="固定供应商">
                <el-input v-model="formLabelAlign2.fixation" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="formLabelAlign2.note" placeholder="x"></el-input>
              </el-form-item>
              <el-form-item label="物料追踪码">
                <el-input v-model="formLabelAlign2.goods_track_code" placeholder="x"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-popover
          placement="top"
          width="160"
          v-model="nodata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
                <el-button type="primary" size="mini" @click="nodata = false">取消</el-button>
              <el-button type="text" size="mini"  @click="dialogVisible1 = false;nodata = false">确定</el-button>
            </div>
            <el-button
              @click=" tisi= formLabelAlign2.isupdata?'确定放弃修改吗？':'确定放弃添加吗？' "
              slot="reference">取 消</el-button>
        </el-popover>
    <el-button v-if="formLabelAlign2.isupdata" type="info" @click="updatareste">重置</el-button>
        <el-popover
          placement="top"
          width="160"
          v-model="okdata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="okdata = false">取消</el-button>
              <el-button type="primary" size="mini" @click="okdata = false; okupdate()">确定</el-button>
            </div>
            <el-button
              type="primary"
              slot="reference">确 定</el-button>
        </el-popover>
  </span>
          </el-dialog>
          <el-tab-pane label="基本信息">
            <div class="el-add-button" align="left">
              <el-button style="padding: 10px 30px" type="primary"  @click="insert()">添加</el-button>
              <el-button style="padding: 10px 30px" type="danger"  @click="">删除</el-button>
            </div>
            <el-table :data="tabledatas" style="width: 100%" >
              <el-table-column
                fixed
                prop="ID"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
                type="selection"
                width="55">
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
                  <el-input size="mini" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.bianma"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.bianma}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="物料编码"
                width="150">
                <template slot-scope="scope">
                  <el-input size="mini" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.ww"></el-input>
                  <span v-show="!scope.row.show">{{scope.row.ww}}</span>
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
                    max-height="280px"
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
  name: 'month',
    data() {
        return {
          dialogVisible1:false,
          tisi:'',
            //需求计划
          formLabelAlign1: {
            type: '月度计划', //需求计划类型
            code: '', //需求计划编码
            plan_name: '',  //需求计划名称
            remark:'',  //备注
            dept:'',  //需求部门
            person:'',  //需求人员
            plan_state:'',  //需求计划状态
            review_state:'',  //审批状态
            budget_plan:'',  //是否预算内计划
            year:'',  //需求计划月份
            write_people:'',  //编制人
            alter_people:'',  //修改人
            alter_cause:'',  //修改原因
            write_time:'',  //编写时间
            alter_time:'',  //修改时间
          },
          //物料管理
            formLabelAlign2:{
            isupdata:'',
              material_c_code:'',   //物料分类编码
              material_c_name:'',   //物料分类名称
                material_code:'',   //物料编码
                material_name:'',   //物料名称
               specifications:'',   //规格
                        model:'',   //型号
                         unit:'',    //单位
                     quantity:'',    //需求数量
                         year:'',    //需求月份
                          day:'',    //需求日期
                goods_confirm:'',   //贷额是否确定（1/0）
                       expect:'',    //期望供应商
                     fixation:'',    //固定供应商
                         note:'',    //备注
             goods_track_code:'',    //物料追踪码
                  demand_code:'',   //所属需求编码
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
      insert(){
        this.dialogVisible1 = true;//打开对话框
       // this.formLabelAlign.isupdata = false;//不是修改对话框
        //清除表单初值
        this.formLabelAlign2 = {
          isupdata:'',
          material_c_code:'',   //物料分类编码
          material_c_name:'',   //物料分类名称
          material_code:'',   //物料编码
          material_name:'',   //物料名称
          specifications:'',   //规格
          model:'',   //型号
          unit:'',    //单位
          quantity:'',    //需求数量
          year:'',    //需求月份
          day:'',    //需求日期
          goods_confirm:'',   //贷额是否确定（1/0）
          expect:'',    //期望供应商
          fixation:'',    //固定供应商
          note:'',    //备注
          goods_track_code:'',    //物料追踪码
          demand_code:'',   //所属需求编码
        };
      },
      handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

    },
    created() {
        // 发请求去后台拿数据,如果有api，就正常请求，
        //我这里是demo，就简单给list赋值了，原理一样。
        // getlistApi().then(res => {
        // let list = res.data.list
        let list = [
            { ID:'1', name: '123213',bianma:'111111',ww:"qsqssqsq"},
        ]
        list.forEach(element => {
            element["show"] = false
        });
        this.tabledatas = list;
        // })
      this.axios.post("/api/code.php",this.$qs.stringify({
      }))
        .then(response => {
          this.formLabelAlign1.code = response.data.datas;
        })
        .catch(error =>{
          console.log(error);
        });
      this.axios.post("/api/demand_materail_Bycode_all.php",this.$qs.stringify({
      }))
        .then(response => {
          console.log(response)
        })
        .catch(error =>{
          console.log(error);
        })
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
