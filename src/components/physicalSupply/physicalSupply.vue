<template>
  <div class="changeNeed">
    <div class="table-he">
      <el-table
        ref="multipleTable"
        :data="tabledatas"
        tooltip-effect="dark"
        style="width: 100%;"
        height="500px"
        @selection-change="handleSelectionChange">
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
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物料分类名称"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物料编码"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物料名称"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="规格"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="型号"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单位"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="需求数量"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="需求月份"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="需求日期"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="货额是否确定"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="期望供应商"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="所属需求部门"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="所属需求计划编码"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="供应方式"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="供应数量"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="可用库存"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="在途数量"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="已占库存"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="库存总量"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="采购提前期"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="采购日期"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物料追踪码"
          width="150">
          <template slot-scope="scope">
            <el-input size="small" :disabled="true" placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.name"></el-input>
            <span v-show="!scope.row.show">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="155">
          <template slot-scope="scope">
            <el-button class="btn-left" size="mini" @click="scope.row.show =true">编辑</el-button>
            <el-button class="btn-right" size="mini" @click="scope.row.show =false">保存</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="btn">
      <el-button class="el-button" type="primary">合并</el-button>
      <el-button class="el-button" type="primary">取消合并</el-button>
      <el-button class="el-button" type="primary">打印</el-button>
      <el-button class="el-button" type="primary">导出</el-button>
      <el-button class="el-button" type="primary">保存</el-button>
      <el-button class="el-button" type="primary">拆分</el-button>
      <el-button class="el-button-1" type="primary">需求退回</el-button>
      <el-button class="el-button-2" type="primary">生成采购计划</el-button>
      <el-button class="el-button-2" type="primary">汇总规则设置</el-button>

    </div>
    <!-- <div style="margin-top: 20px">
       <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
       <el-button @click="toggleSelection()">取消选择</el-button>
     </div>-->
  </div>
</template>

<script>
    export default {
        name: "physicalSupply",
        data() {
            return {

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
                tabledatas: [],
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
        },
        created() {
            // 发请求去后台拿数据,如果有api，就正常请求，
            //我这里是demo，就简单给list赋值了，原理一样。
            // getlistApi().then(res => {
            // let list = res.data.list
            let list = [
                { ID:'1', name: '王小虎'},
                { ID:'2', name: '王小虎'},
                { ID:'3', name: '王小虎'},
                { ID:'4', name: '王小虎'},
                { ID:'5', name: '王小虎'},
                { ID:'6', name: '王小虎'},
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
  .btn{
    margin-top: 20px;
  }
  .el-button{
    width: 90px;
    margin-left: 40px;
  }
  .el-button-1{
    width: 110px;
  }
  .el-button-2{
    width: 130px;
  }
  .btn-left{
    width: 60px;
    margin-left: 5px;
  }
  .btn-right{
    width: 60px;
    margin-left: 5px;
  }
  .table-he{

  }
</style>
