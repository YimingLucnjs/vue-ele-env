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
            text: "15",
            subtext: "异常总数",
            textStyle: {
              fontSize: 18,
              color: "#fff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "#fff"
            },
            textAlign: "center",
            x: "24%",
            y: "30%"
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
          },
          textStyle: {
            fontSize: 10
          }
        },
        legend: {
          orient: "vertical",
          left: "45%",
          align: "left",
          top: "middle",
          textStyle: {
            color: "#fff",
            fontSize: '8px'
          },
          icon: "circle",
          height: 50, // 250
          itemWidth: 5,
          itemGap: 5
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
                value: 3,
                legendname: "项目1",
                name: "项目1 3",
                itemStyle: {
                  color: "#921140"
                }
              },
              {
                value: 3,
                legendname: "项目02",
                name: "项目2 3",
                itemStyle: {
                  color: "#bb0505"
                }
              },
              {
                value: 2,
                legendname: "项目03",
                name: "项目3 2",
                itemStyle: {
                  color: "#fc2a2a"
                }
              },
              {
                value: 1,
                legendname: "项目4",
                name: "项目4 1",
                itemStyle: {
                  color: "#fa6633"
                }
              },
              {
                value: 3,
                legendname: "项目5",
                name: "项目5 3",
                itemStyle: {
                  color: "#fca223"
                }
              },
              {
                value: 3,
                legendname: "项目6",
                name: "项目6 3",
                itemStyle: {
                  color: "#fcd125"
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