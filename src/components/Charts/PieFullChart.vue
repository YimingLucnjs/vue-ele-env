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
      default: "PieFullChart"
    },
    id: {
      type: String,
      default: "PieFullChart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
	},
	labelShow: {
		type: Boolean,
		default: false
	},
	tooltipShow: {
		type: Boolean,
		default: true
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
        title: [
          //   {
          //     text: "标题",
          //     textStyle: {
          //       fontSize: 16,
          //       color: "black"
          //     },
          //     left: "2%"
          //   },
          {
            text: "30",
            subtext: "异常总数",
            textStyle: {
              fontSize: 20,
              color: "black"
            },
            subtextStyle: {
              fontSize: 12,
              color: "black"
            },
            textAlign: "center",
            x: "24%",
            y: "38%"
          }
        ],
        tooltip: {
          show: this.tooltipShow,
          trigger: "item",
          formatter: function(parms) {
            var str =
            //   parms.seriesName +
            //   "</br>" +
              parms.marker +
              "" +
              parms.data.legendname +
              "</br>" +
              "数量：" +
              parms.data.value +
              "</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          }
        },
        legend: {
          orient: "vertical",
          left: "48%",
          align: "left",
          top: "middle",
          textStyle: {
            color: "#8C8C8C"
          },
          icon: "circle",
          height: 80 // 250
        },
        series: [
          {
            name: "标题",
            type: "pie",
            center: ["25%", "50%"],
            radius: ["50%", "65%"],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              normal: {
				show: this.labelShow,
                position: "outter",
                formatter: function(parms) {
                  // console.log(parms)
                  var str =
					parms.data.legendname +
					"  " +
					parms.data.value +
                    " 占比：" +
                    parms.percent +
                    "%";
                  return str;
                  //   return parms.data.legendname;
                }
              }
            },
            labelLine: {
            //   show: false,
              normal: {
                length: 5,
                length2: 10,
                smooth: true
              }
            },
            data: [
              {
                value: 335,
                legendname: "项目1",
                name: "项目1  335",
                itemStyle: {
                  color: "#8d7fec"
                }
              },
              {
                value: 310,
                legendname: "项目02",
                name: "项目2  310",
                itemStyle: {
                  color: "#5085f2"
                }
              },
              {
                value: 234,
                legendname: "项目03",
                name: "项目3  234",
                itemStyle: {
                  color: "#e75fc3"
                }
              },
              {
                value: 154,
                legendname: "项目4",
                name: "项目4  154",
                itemStyle: {
                  color: "#f87be2"
                }
              },
              {
                value: 335,
                legendname: "项目5",
                name: "项目5  335",
                itemStyle: {
                  color: "#f2719a"
                }
              },
              {
                value: 335,
                legendname: "项目6",
                name: "项目6  335",
                itemStyle: {
                  color: "#fca4bb"
                }
              }
            ]
          }
        ]
      });
    }
  }
};
</script>