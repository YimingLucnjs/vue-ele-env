<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import echarts from "echarts";
import resize from "../mixins/resize";
export default {
	mixins: [resize],
	props: {
		className: {
			type: String,
			default: "chart"
		},
		id: {
			type: String,
			default: "barChart"
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
			chart: null,
			option: null
		};
	},
	mounted() {
		this.chartInit();
	},
	methods: {
		chartInit() {
			this.chart = echarts.init(document.getElementById(this.id));
			this.option = {
				color: ["#3398DB"],
				tooltip: {
					trigger: "axis",
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: "3%",
					right: "4%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: [
					{
						type: "category",
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						axisLabel: {
							color: "#fff"
						},
                        axisTick: {
                            show:false
                        },
						axisLine: {
                            show:false,
							lineStyle: {
								color: "#fff"
							}
						}
					}
				],
				yAxis: [
					{
                        type: "value",
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show:false
                        },
						axisLabel: {
                            show:false,
							color: "#fff"
						},
						axisLine: {
                            show:false,
							lineStyle: {
								color: "#fff"
							}
						}
					}
				],
				series: [
					{
						name: "直接访问",
						type: "bar",
						barWidth: "60%",
						data: [10, 52, 200, 334, 390, 330, 220]
					}
				]
			};
			this.chart.setOption(this.option);
		}
	}
};
</script>

<style lang="scss" scoped></style>
