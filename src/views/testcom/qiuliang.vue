<template>
  <el-row
    :gutter="10"
    style="height:calc(100vh - 84px)"
  >
    <el-col
      class="grid-content bg-purple"
      :span="6"
    />
    <el-col
      class="grid-content bg-purple"
      :span="12"
    >
      <el-row>
        <el-col
          class="grid-content bg-purple"
          style="height:calc(100vh - 314px)"
          :span="24"
        >
          <count
            style="position:absolute;left:0px;top:20px;z-index:1;"
            width="100%"
          />
          <map-chart
            style="background: #fff"
            height="100%"
            width="100%"
          />
          <bar-chart
            style="position:absolute;left:0;bottom:0;"
            height="40%"
            width="40%"
          />
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
export default {
  components: {
    mapChart,barChart,Count
  }
}
</script>

<style>
  .grid-content {
    height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
</style>