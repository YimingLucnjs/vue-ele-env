<template>
  <div
    :id="id"
    :class="className"
    :style="{height:height,width:width}"
  />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "BrokenLineChart"
    },
    id: {
      type: String,
      default: "BrokenLineChart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#0a2c6f",
              width: 1
            }
          },

          data: ["6月", "7月", "8月", "9月", "10月", "11月"]
        },
        calculable: true,
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#0a2d70",
                width: 1
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#0a2c6f"],
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        grid: {
          top: 20,
          x: 30,
          y: 5,
          height: 80
        },
        series: [
          {
            data: [20, 32, 1, 34, 20, 10],
            type: "line",
            itemStyle: {
              color: "#b1041d"
            },
            cursor: "pointer"
          }
        ],
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#000",
            fontSize: 10
          },
          // position: {left: 100, top: 300},
          backgroundColor: "rgba(255,255,255,0.6)",
          formatter: "{b}: 异常{c}"
        }
      });
    }
  }
};
</script>