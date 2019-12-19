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
			default: "chart"
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
			pos: {
				leftPlus: 115,
				leftCur: 150,
				left: 198,
				top: 50
			},
			opt: {
				mapName: "jiangsu", // 地图展示
				goDown: false, // 是否下钻
				bgColor: "#404a59", // 画布背景色
				activeArea: [], // 区域高亮,同echarts配置项
				data: [
					{
						name: "南京",
						company: "某某公司",
						value: 12
					}
				]
				// 下钻回调(点击的地图名、实例对象option、实例对象)
				// callback: function(name, option, instance) {}
			},
			idx: 0,
			line: [
				[0, 0],
				[8, 11],
				[0, 22]
			],
			style: {
				font: '18px "Microsoft YaHei", sans-serif',
				textColor: "#eee",
				lineColor: "rgba(147, 235, 248, .8)"
			},
			geoCoordMap: {
				南京: [118.802682, 32.09318]
			},
			option: ""
		};
	},
	mounted() {
		this.chartInit();
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		/**
		 * i 实例对象
		 * o option
		 * n 地图名
		 **/
		resetOption(i, o, n) {
			var breadcrumb = this.createBreadcrumb(n);
			var j = name.indexOf(n);
			var l = o.graphic.length;
			if (j < 0) {
				o.graphic.push(breadcrumb);
				o.graphic[0].children[0].shape.x2 = 145;
				o.graphic[0].children[1].shape.x2 = 145;
				if (o.graphic.length > 2) {
					var cityData = [];
					var cityJson;
					for (var x = 0; x < this.opt.data.length; x++) {
						if (n === this.opt.data[x].city) {
							// $([this.opt.data[x]]).each(function(index,data){
							//     cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
							//     cityData.push(cityJson)
							// })
							this.opt.data[x].forEach(data => {
								cityJson = {
									name: data.name,
									value: data.value,
									company: data.company
								};
								cityData.push(cityJson);
							});
						}
					}

					if (cityData != null) {
						o.series[0].data = this.initSeriesData(cityData);
					} else {
						o.series[0].data = [];
					}
				}
				name.push(n);
				this.idx++;
			} else {
				o.graphic.splice(j + 2, l);
				if (o.graphic.length <= 2) {
					o.graphic[0].children[0].shape.x2 = 60;
					o.graphic[0].children[1].shape.x2 = 60;
					o.series[0].data = this.initSeriesData(this.opt.data);
				}
				name.splice(j + 1, l);
				this.idx = j;
				this.pos.leftCur -= this.pos.leftPlus * (l - j - 1);
			}

			o.geo.map = n;
			o.geo.zoom = 0.4;
			i.clear();
			i.setOption(o);
			this.zoomAnimation();
			this.opt.callback(n, o, i);
		},
		/**
		 * name 地图名
		 **/
		createBreadcrumb(name) {
			var cityToPinyin = {
				江苏: "jiangsu"
			};
			var breadcrumb = {
				type: "group",
				id: name,
				left: this.pos.leftCur + this.pos.leftPlus,
				top: this.pos.top + 3,
				children: [
					{
						type: "polyline",
						left: -90,
						top: -5,
						shape: {
							points: this.line
						},
						style: {
							stroke: "#fff",
							key: name
							// lineWidth: 2,
						},
						onclick: function() {
							var name = this.style.key;
							this.resetOption(this.chart, this.option, name);
						}
					},
					{
						type: "text",
						left: -68,
						top: "middle",
						style: {
							text: name,
							textAlign: "center",
							fill: this.style.textColor,
							font: this.style.font
						},
						onclick: function() {
							var name = this.style.text;
							this.resetOption(this.chart, this.option, name);
						}
					},
					{
						type: "text",
						left: -68,
						top: 10,
						style: {
							name: name,
							text: cityToPinyin[name]
								? cityToPinyin[name].toUpperCase()
								: "",
							textAlign: "center",
							fill: this.style.textColor,
							font: '12px "Microsoft YaHei", sans-serif'
						},
						onclick: function() {
							// console.log(this.style);
							var name = this.style.name;
							this.resetOption(this.chart, this.option, name);
						}
					}
				]
			};

			this.pos.leftCur += this.pos.leftPlus;

			return breadcrumb;
		},
		// 设置effectscatter
		initSeriesData(data) {
			var temp = [];
			const carImg = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAFYUlEQVRIS3VVa2wUVRT+7rz2vS19bcuWVkNNmmIKahCiTaomxvpCyw9CTPhhiSRqgo/6C4VGiOEHEGIMGAE10RDxUYlSRFNihEIjGFKVh/JoA6XtdrftbruP2ZmdmXvNvdMXVe+mmcz27HfO+e53vkOw4DDGKgA8DmCTxfKNWXtCzjnjxKQZiTKHKfDRsBpBWKlwVMn/J4ADALoJIYmFWGT+F4yxpQDeMGmuddDoq7iSPiaPmzcJA5sOY6BwQCCh0lvPVoTXOhFPfUKT/EcB7CWE9M/HE+CMMf5s4AEZO97UPbbbN2JcAgEBh3PPXAoezN8IZES9jXi0bHO+WI2e4YUBuEIIEdWQaeA6AB8mrcHmzpF2RXeSUIgHMtFAiAtFGQVlDiQigX/4rx1mwWYmfHIxnq3cbld5lp0C8DKAGzwBBy8H0JFzJtqODL3iS9txeOWQqJWDcXBOA+Am4U+JyKIrN8ZG3plCWKnE+up9+YBc9gmArYSQFAdfZ9DMnu9Gt1SPGpehSQEwRkGIBJmoghb+7tIjCWD+Pj8R76BAddzlfxBPRzqGFOLdKC6ZMdZzLffL6pNjuxUBCgJF8mBFeC1KtNppEMGgSBwzLuN86nNYzIBHDkCGJhJycP7blsjb9lJ/UxeAdmLRfPr70XdCI8ZlUalNTfiVYmyo/hSa5OOXPSsA3k3eSeP0xD6krRg4hTqdhEI0EcMTLPHdh2ci20c1yb+DpArD6W9GXg9lnXF4pCAYHJFk45IvRQcz7bvqcHl2mA2L5jFWuI5Tyf1ImYMiNmcnEVIqsL56f6ZIqeoit/W+zInEe8G8k3L5hgMJCtpqjkCVvNOS45KcAx/Qf0XvxEE8UrYZAaUUPyV2ImndFBcbkEvxXNVOs8rT0Edu5HpyP4+97zecKWiSHxQ2JKhoq/lCgM9UPvcE/sp24/DQSyhVa9FatUtI84fEdqStUYTUSjwV2cZqfA9cJQN6b/ZkYk+AZ+XgCyufP0AuKQS39N9wJnkQKWsQy8OtaAi1oDP2JsYLAyhRa/FkZCur8d1/lYwYl6aOxbaFDZqGRwrAZgY0KYgXaw6LQZo7rsZn9M+Hh/+pxIucM46vRjYjYd5AuVaHNYKW+j4yaQ2nvx5+LcRvXSMBWFRHWK3EC9EDMGgG44V+1PpWugbApxSOUEeeppF3JoVcJ60hdMbaETOuoNJTj3XRD9JFStVxYjp65kT83eCgcQEq8Yup5APzcOkmVKhLcTHThaaSTbieO42sHYfNCqjxr0SRshhD+d9RF2hCv96DnuRH0O1JLAu14LHy9lGvFNxBGKM9g/qF1Z2xdoXLySOFYNIsfFIRmktfRal2N+Lm3zibOiS64jLkiuD/K1ajgopzqc+QKFyFVw5jbdUue7H33i4CuV2Mv0lze47HO6pv6udFAOeWDxO/g5BSLiRWYPqsv/DqeRFhpQJZexxpOwYHFhqCT6ClYsuQTDyz4y+Ma8qKbfx29C3vmNmPgFwieHVYQQAK6yKq8BuXe0d0QGEJG+CFlGl1WB/dZ/jkoo/nGxeXgLDcEeNic1e8QzFpRgwSt1yuYXDbnROLsAR+sXzcOVVlnjqsieywS7TaOy33zmXB9qas4abe5CHfgH4WNi0Iu3Ut1q2ag4rK4XJ/T7AZq4o35INK2RmA3Lks5q+lmTVnM7P1ttFX/sfUUSVuXCMccHYTMQqZKIj6lrPGouftqKdxTCbK/6+5BQkWAXgIQJtJc6sMOhXM2ZNek01pwnZJoOCXiw2/vCjrkQLnAMKXQy9fDvNx3Fn+j8MYkwFwM28BsMq9E1bshpJJvsYAnAPwI4BbhBDe2r/OPx1Fs7Bvd7QTAAAAAElFTkSuQmCC"
			for (var i = 0; i < data.length; i++) {
				var geoCoord = this.geoCoordMap[data[i].name];
				if (geoCoord) {
					temp.push({
						name: data[i].name,
						symbol:carImg,
						symbolSize: 20,
						value: geoCoord.concat(data[i].value),
						company: data[i].company
					});
				}
			}
			return temp;
		},
		zoomAnimation() {
			var count = null;
			var zoom = function(per) {
				if (!count) count = per;
				count = count + per;
				// console.log(per,count);
				this.chart.setOption({
					geo: {
						zoom: count
					}
				});
				if (count < 1)
					window.requestAnimationFrame(function() {
						zoom(0.2);
					});
			};
			window.requestAnimationFrame(function() {
				zoom(0.2);
			});
		},
		/**
		 * 方法描述
		 */
		chartInitData() {
			this.chart = echarts.init(document.getElementById(this.id));
			// let curGeoJson = {};
			// let geoData = this.initSeriesData(this.opt.data);
			this.option = {
				tooltip: {
					show: true,
					trigger: "item",
					alwaysShowContent: false,
					backgroundColor: "rgba(50,50,50,0.7)",
					hideDelay: 100,
					triggerOn: "mousemove",
					enterable: true,
					position: ["60%", "70%"],
					formatter: function(params) {
						//, ticket, callback
						return (
							"所属地区：" +
							params.data.name +
							"<br/>" +
							"公司名称：" +
							params.data.company
						);
					}
				},
				// graphic: [
				// 	{
				// 		type: "group",
				// 		left: 198,
				// 		top: 46,
				// 		children: [
				// 			{
				// 				type: "line",
				// 				left: 0,
				// 				top: -20,
				// 				shape: {
				// 					x1: 0,
				// 					y1: 0,
				// 					x2: 60,
				// 					y2: 0
				// 				},
				// 				style: {
				// 					stroke: "rgba(147, 235, 248, .8)"
				// 				}
				// 			},
				// 			{
				// 				type: "line",
				// 				left: 0,
				// 				top: 20,
				// 				shape: {
				// 					x1: 0,
				// 					y1: 0,
				// 					x2: 60,
				// 					y2: 0
				// 				},
				// 				style: {
				// 					stroke: "rgba(147, 235, 248, .8)"
				// 				}
				// 			}
				// 		]
				// 	},
				// 	{
				// 		id: "jiangsu",
				// 		type: "group",
				// 		left: 198 + 2,
				// 		top: 50,
				// 		children: [
				// 			{
				// 				type: "polyline",
				// 				left: 90,
				// 				top: -12,
				// 				shape: {
				// 					points: this.line
				// 				},
				// 				style: {
				// 					stroke: "transparent",
				// 					key: name[0]
				// 				},
				// 				onclick: function() {
				// 					var name = this.style.key;
				// 					this.resetOption(
				// 						this.chart,
				// 						this.option,
				// 						name
				// 					);
				// 				}
				// 			},
				// 			{
				// 				type: "text",
				// 				left: 0,
				// 				top: "middle",
				// 				style: {
				// 					text: "江苏",
				// 					textAlign: "center",
				// 					fill: this.style.textColor,
				// 					font: this.style.font
				// 				},
				// 				onclick: function() {
				// 					this.resetOption(
				// 						this.chart,
				// 						this.option,
				// 						"江苏"
				// 					);
				// 				}
				// 			},
				// 			{
				// 				type: "text",
				// 				left: 0,
				// 				top: 10,
				// 				style: {
				// 					text: "jiangsu",
				// 					textAlign: "center",
				// 					fill: this.style.textColor,
				// 					font: '12px "Microsoft YaHei", sans-serif'
				// 				},
				// 				onclick: function() {
				// 					this.resetOption(
				// 						this.chart,
				// 						this.option,
				// 						"江苏"
				// 					);
				// 				}
				// 			}
				// 		]
				// 	}
				// ],
				geo: {
					map: this.opt.mapName,
					roam: true,
					zoom: 1,
					label: {
						normal: {
							show: true,
							textStyle: {
								color: "#fff"
							}
						},
						emphasis: {
							textStyle: {
								color: "#fff"
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: "rgba(147, 235, 248, 1)",
							borderWidth: 1,
							areaColor: {
								type: "radial",
								x: 0.5,
								y: 0.5,
								r: 0.8,
								colorStops: [
									{
										offset: 0,
										color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
									},
									{
										offset: 1,
										color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
									}
								],
								globalCoord: false // 缺省为 false
							},
							shadowColor: "rgba(128, 217, 248, 1)",
							// shadowColor: 'rgba(255, 255, 255, 1)',
							shadowOffsetX: -2,
							shadowOffsetY: 2,
							shadowBlur: 10
						},
						emphasis: {
							areaColor: "#389BB7",
							borderWidth: 0
						}
					},
					regions: this.opt.activeArea.map(function(item) {
						if (typeof item !== "string") {
							return {
								name: item.name,
								itemStyle: {
									normal: {
										areaColor: item.areaColor || "#389BB7"
									}
								},
								label: {
									normal: {
										show: item.showLabel,
										textStyle: {
											color: "#fff"
										}
									}
								}
							};
						} else {
							return {
								name: item,
								itemStyle: {
									normal: {
										borderColor: "#91e6ff",
										areaColor: "#389BB7"
									}
								}
							};
						}
					})
				},
				series: [
					{
						type: "scatter",
						coordinateSystem: "geo",
						showEffectOn: "render",
						rippleEffect: {
							period: 15,
							scale: 4,
							brushType: "fill"
						},
						hoverAnimation: true,
						itemStyle: {
							normal: {
								color: "#FFC848",
								shadowBlur: 10,
								shadowColor: "#333"
							}
						},
						// type: "custom", //配置显示方式为用户自定义
						// coordinateSystem: "geo",
						// itemStyle: {
						// 	normal: {
						// 		color: "#46bee9"
						// 	}
						// },
						// renderItem: function(params, api) {
						// 	//具体实现自定义图标的方法
						// 	return {
						// 		type: "image",
						// 		style: {
						// 			image: "../../../assets/info_images/car.png",
						// 			x: api.coord([
						// 				geoData[params.dataIndex].value[0],
						// 				geoData[params.dataIndex].value[1]
						// 			])[0],
						// 			y: api.coord([
						// 				geoData[params.dataIndex].value[0],
						// 				geoData[params.dataIndex].value[1]
						// 			])[1]
						// 		}
						// 	};
						// },
						data: this.initSeriesData(this.opt.data)
					}
				]
			};
			this.chart.setOption(this.option);
		},
		chartInit() {
			// const url = './mixins/data-jiangsu.json'

			import("../mixins/data-jiangsu.json").then(jsons => {
				echarts.registerMap("jiangsu", jsons);
				this.chartInitData();
			});
		}
	}
};
</script>

<style lang="scss" scoped></style>
