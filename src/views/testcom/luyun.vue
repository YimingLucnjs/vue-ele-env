<template>
  <div class="chart-container">
    <div style="height:200px;width:300px;">
      <PieChart
        height="100%"
        width="100%"
      />
    </div>
    <div style="height:250px;width:350px;">
      <!-- <BrokenLineChart height="100%" width="100%" /> -->
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
    <div class="numberIndexWrap">
      <NumberIndex
        :is-alarm="false"
        type-name="异常总数"
        :type-number="24"
      />
      <NumberIndex
        :is-alarm="false"
        type-name="已处理"
        :type-number="22"
      />
      <NumberIndex
        :is-alarm="true"
        type-name="未处理"
        :type-number="2"
      />
    </div>
    <div class="wrap_left">
      <div class="BrokenLineChart_wrap">
        <div class="BrokenLineChart_title">
          月度异常趋势
        </div>
        <div class="BrokenLineChart_content">
          <BrokenLineChart
            id="BrokenLineChartId"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div class="BrokenLineChart_wrap">
        <div class="BrokenLineChart_title">
          区域异常情况
        </div>
        <div class="BrokenLineChart_content">
          <PieFullChart
            id="PieFullChartId"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div
        class="BrokenLineChart_wrap"
        style="height:180px;"
      >
        <div class="BrokenLineChart_title">
          督办信息
        </div>
        <div class="BrokenLineChart_content">
          <LunBo id="LunBoId" />
        </div>
      </div>
    </div>
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

  .numberIndexWrap {
    width:255px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .wrap_left {
    width: 255px;
    .BrokenLineChart_title {
      font-size: 12px;
      line-height: 24px;
      color: #fff;
      height: 24px;
      padding-left: 10px;
      background: url("~@/assets/info_images/title_bg.png") no-repeat;
      background-size: contain;
    }
    .BrokenLineChart_content {
      height: 130px;
    }
    
    background: url("~@/assets/info_images/border.png") no-repeat,url("~@/assets/info_images/border.png") no-repeat;
    background-size: contain,contain;
    background-position: 0 0,0 100%;
    background-color: #100c27;
  }
}
</style>