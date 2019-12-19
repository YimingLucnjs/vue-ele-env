<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
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
			default: "PieChart"
		},
		id: {
			type: String,
			default: "PieChart"
		},
		width: {
			type: String,
			default: "300px"
		},
		height: {
			type: String,
			default: "300px"
		},
		legendData: {
			type: Array,
			default: function() {
				return ["Ⅰ类", "Ⅱ类", "Ⅲ类", "Ⅳ类", "Ⅴ类"];
			}
		},
		colorList: {
			type: Array,
			default: function() {
				return ["#fac14b", "#fff29a", "#f8780e", "#d0021b", "#ff4747"];
			}
		},
		dataList: {
			type: Array,
			default: function() {
				return [
					{
						value: 285,
						name: "Ⅰ类"
					},
					{
						value: 410,
						name: "Ⅱ类"
					},
					{
						value: 274,
						name: "Ⅲ类"
					},
					{
						value: 235,
						name: "Ⅳ类"
					},
					{
						value: 235,
						name: "Ⅴ类"
					}
				];
			}
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
			let that = this;
			this.chart = echarts.init(document.getElementById(this.id));
			this.chart.setOption({
				// title: {
				//   text: "南丁格尔玫瑰图",
				//   left: "center",
				//   top: 20,
				//   textStyle: {
				//     color: "#ccc"
				//   }
				// },
				legend: {
					left: "0",
					top: "middle",
					orient: "vertical",
					x: 30,
					textStyle: {
						color: "#ffffff",
						fontSize: 12,
						rich: {
							a: {
								fontSize: 16,
								padding: [0, 0, 0, 4]
							},
						}
					},
					itemGap: 20,
					padding: [5, 50],
					icon: "circle",
					formatter: function(name) {
						let number;
						that.dataList.forEach(item => {
							if (item.name == name) number = item.value;
						});
						return name + " " + "{a|"+number+"}";
					},
					data: this.legendData
				},
				tooltip: {
					trigger: "item",
					formatter: "{b} : {c} ({d}%)"
				},

				visualMap: {
					show: false,
					min: 200,
					max: 600,
					inRange: {
						//colorLightness: [0, 1]
					}
				},
				series: [
					{
						name: "访问来源",
						type: "pie",
						radius: "82%", // 设置饼状大小
						center: ["65%", "55%"], //
						color: this.colorList, //'#FBFE27','rgb(11,228,96)','#FE5050'
						data: this.dataList.sort(function(a, b) {
							return a.value - b.value;
						}),
						roseType: "radius",

						label: {
							normal: {
								show: false,
								formatter: ["{c|{c}次}", "{b|{b}}"].join("\n"),
								rich: {
									c: {
										color: "rgb(241,246,104)",
										fontSize: 12,
										fontWeight: "bold",
										lineHeight: 5
									},
									b: {
										color: "rgb(98,137,169)",
										fontSize: 12,
										height: 40
									}
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: "rgb(98,137,169)"
								},
								smooth: 0.2,
								length: 10,
								length2: 20
							}
						},
						itemStyle: {
							normal: {
								shadowColor: "rgba(0, 0, 0, 0.8)",
								shadowBlur: 50
							}
						}
					}
				]
			});
		}
	}
};
</script>
