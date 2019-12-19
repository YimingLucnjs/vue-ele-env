<template>
  <div class="chart-container">
    <div style="height:200px;width:300px;">
      <PieChart
        height="100%"
        width="100%"
      />
    </div>
    <div style="height:250px;width:350px;">
      <BrokenLineChart
        height="100%"
        width="100%"
      />
    </div>
    <div style="height:250px;width:380px;margin-left: 0px;">
      <PieFullChart
        height="100%"
        width="100%"
      />
    </div>
    <div style="height:140px;width:300px;">
      <LunBo />
    </div>
    <div style="height:150px;width:300px;">
      <LinePercentage />
    </div>
    <div style="height:300px;width:300px;">
      <TopRank />
    </div>
    <div style="height:60px;width:66px;">
      <NumberIndex />
    </div>
    <div class="wrap_left" />
  </div>
</template>

<script>
import PieChart from "@/components/Charts/PieChart";
import BrokenLineChart from "@/components/Charts/BrokenLineChart";
import PieFullChart from "@/components/Charts/PieFullChart";
import LunBo from "@/components/Charts/LunBo";
import LinePercentage from "@/components/Charts/LinePercentage"; // 进度条
import TopRank from "@/components/Charts/TopRank"; // 进度条
import NumberIndex from "@/components/Charts/NumberIndex"; // 进度条

export default {
  name: "KeyboardChart",
  components: {
    PieChart,
    BrokenLineChart,
    PieFullChart,
    LunBo,
    LinePercentage,
    TopRank,
    NumberIndex
  }
};
</script>

<style lang='scss' scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  overflow: scroll;
}
</style>