<template>
  <el-row
    id="qiuliang"
    :gutter="10"
    style="height:calc(100vh - 84px);background:url('@/src/assets/info_images/bg.png')"
  >
    <el-col
      class="grid-content bg-purple"
      :span="6"
    >
      <img
        src="@/assets/info_images/bg.png"
        alt=""
        srcset=""
      >
    </el-col>
    <el-col
      class="grid-content bg-purple"
      :span="12"
    >
      <el-row>
        <el-col
          class="grid-content bg-purple"
          style="height:calc(100vh - 314px);position:relative"
          :span="24"
        >
          <count
            style="position:absolute;left:0px;top:20px;z-index:1;"
            width="100%"
          />
          <map-chart
            height="100%"
            width="100%"
          />
          <bar-chart
            style="position:absolute;left:0;bottom:0;"
            height="40%"
            width="40%"
          />
          <div style="position:absolute;bottom:10px;right:0;">
            <el-radio-group
              v-model="tableRadio"
              size="small"
            >
              <el-radio-button label="移动源" />
              <el-radio-button label="固定源" />
            </el-radio-group>
          </div>
        </el-col>
        <el-col
          :span="24"
          style="height:calc(100vh - 718px);"
        >
          <div class="table_norder">
            <info-table
              :table-data="tableData"
              :table-head="tableHead"
              height="100%"
            />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col
      class="grid-content bg-purple"
      :span="6"
    />
  </el-row>
</template>

<script>
import mapChart from "@/components/ql_component/Charts/mapChart";
import barChart from "@/components/ql_component/Charts/barChart";
import Count from "@/components/ql_component/Count";
import infoTable from "@/components/ql_component/Table/info-table";
export default {
  components: {
    mapChart,barChart,Count,infoTable
  },
  data() {
    return {
      tableRadio: '移动源',
      tableData: [
        {
          enterprise: '中石油集团测井有限公司华北事业部',
          sourceCode: '0193AB099522',
          nucleusName: '某某某',
          pollution: 'III',
          dose: '8.10',
          state: '当前状态'
        },
        {
          enterprise: '中石油集团测井有限公司华北事业部',
          sourceCode: '0193AB099522',
          nucleusName: '某某某',
          pollution: 'III',
          dose: '8.10',
          state: '当前状态'
        },
        {
          enterprise: '中石油集团测井有限公司华北事业部',
          sourceCode: '0193AB099522',
          nucleusName: '某某某',
          pollution: 'III',
          dose: '8.10',
          state: '当前状态'
        }
      ],
      tableHead: [
        {
          prop: "enterprise",
          label: "企业",
          width: "",
          align: "center"
        },
        {
          prop: "sourceCode",
          label: "源编码",
          width: "",
          align: "center"
        },
        {
          prop: "nucleusName",
          label: "核素名称",
          width: "",
          align: "center"
        },
        {
          prop: "pollution",
          label: "污染程度",
          width: "",
          align: "center"
        },
        {
          prop: "dose",
          label: "剂量（uSv/h）",
          width: "",
          align: "center"
        },
        {
          prop: "state",
          label: "当前状态",
          width: "",
          align: "center"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#qiuliang {
  .el-radio-button__inner {
    border-color: #041991;
    color: #041991;
    background: transparent;
  }
  .is-active {
    
    background: #041991 ;
    .el-radio-button__inner {
      color: #fff;
    }
  }
  .grid-content {
    height: 100%;
  }
  .bg-purple {
    // background: url('../../assets/bg.png')
  }
  .table_norder {
    padding: 10px;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #1403a8;
  }
}
  
</style>