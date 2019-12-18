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
              color: "#0a2d70",
              width: 1
            }
          },

          data: ["6月", "7月", "8月", "9月", "10月"]
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
                color: ["#0a2d70"],
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        grid: {},
        series: [
          {
            data: [820, 932, 901, 734, 290],
            type: "line",
            itemStyle: {
              color: "#d0021b"
            },
            cursor: "pointer"
          }
        ],
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#222222"
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