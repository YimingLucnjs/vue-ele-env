/**
* 创建者：ql_component
* 该组件用于：
* 创建时间： 2019-12-17 16:33:19
* @param 参数说明
* @emit 事件使用说明
*/
import echarts from 'echarts'
import resize from '../mixins/resize'
export default {
    name: 'LineChart_cmp',
    props: {
        className: {
          type: String,
          default: 'chart'
        },
        id: {
          type: String,
          default: 'mapChart'
        },
        width: {
          type: String,
          default: '200px'
        },
        height: {
          type: String,
          default: '200px'
        }
      },
      mixins: [resize],
    // 数据
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
                mapName: 'china', // 地图展示
                goDown: false, // 是否下钻
                bgColor: '#404a59', // 画布背景色
                activeArea: [], // 区域高亮,同echarts配置项
                data: [],
                // 下钻回调(点击的地图名、实例对象option、实例对象)
                // callback: function(name, option, instance) {}
            },
            idx:0,
            line: [
                [0, 0],
                [8, 11],
                [0, 22]
            ],
            style: {
                font: '18px "Microsoft YaHei", sans-serif',
                textColor: '#eee',
                lineColor: 'rgba(147, 235, 248, .8)'
            },
            geoCoordMap: [],
            option: ""
        }
    },
    // 监听
    watch: {

    },
    // Vue实例初始化完成
    created() {
        
    },
    // Vue挂载完成
    mounted() {
        this.chartInit()
    },
    // Vue实例销毁前
    beforeDestroy(){

    },
    // 挂载的方法
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
                        if(n === this.opt.data[x].city){
                            // $([this.opt.data[x]]).each(function(index,data){
                            //     cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
                            //     cityData.push(cityJson)
                            // })
                            this.opt.data[x].forEach((data) => {
                                cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
                                cityData.push(cityJson)
                            });
                        }
                    }
                    
                    if(cityData!=null){
                        o.series[0].data = this.initSeriesData(cityData);
                    }else{
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
                '江苏': 'jiangsu'
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: this.pos.leftCur + this.pos.leftPlus,
                top: this.pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: this.line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        this.resetOption(this.chart, this.option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: this.style.textColor,
                        font: this.style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        this.resetOption(this.chart, this.option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: this.style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        this.resetOption(this.chart, this.option, name);
                    }
                }]
            }

            this.pos.leftCur += this.pos.leftPlus;

            return breadcrumb;
        },
        // 设置effectscatter
        initSeriesData(data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        crew:data[i].crew,
						company:data[i].company,
						position:data[i].position,
						region:data[i].region
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
                if (count < 1) window.requestAnimationFrame(function() {
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
        chartInit(){
            this.chart = echarts.init(document.getElementById('mapChart'))
            // let curGeoJson = {};
            this.option = {
                backgroundColor: "#404a59",
                 tooltip: {
                    show: true,
                    trigger:'item',
                    alwaysShowContent:false,
                    backgroundColor:'rgba(50,50,50,0.7)',
                    hideDelay:100,
                    triggerOn:'mousemove',
                    enterable:true,
                    position:['60%','70%'],
                    formatter:function(params){ //, ticket, callback
                        return '简称：'+params.data.name+'<br/>'+'机组：'+params.data.crew+'万千瓦'+'<br/>'+'公司名称：'+params.data.company+'<br/>'+'所属大区：'+params.data.region+'<br/>'+'所在位置：'+params.data.position
                    }
                },
                graphic: [{
                    type: 'group',
                    left: 198,
                    top: 46,
                    children: [{
                        type: 'line',
                        left: 0,
                        top: -20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 60,
                            y2: 0
                        },
                        style: {
                            stroke: 'rgba(147, 235, 248, .8)',
                        }
                    }, {
                        type: 'line',
                        left: 0,
                        top: 20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 60,
                            y2: 0
                        },
                        style: {
                            stroke: 'rgba(147, 235, 248, .8)',
                        }
                    }]
                }, 
                {
                    id: 'jiangsu',
                    type: 'group',
                    left: 198 + 2,
                    top: 50,
                    children: [{
                        type: 'polyline',
                        left: 90,
                        top: -12,
                        shape: {
                            points: this.line
                        },
                        style: {
                            stroke: 'transparent',
                            key: name[0]
                        },
                        onclick: function() {
                            var name = this.style.key;
                            this.resetOption(this.chart, this.option, name);
                        }
                    }, {
                        type: 'text',
                        left: 0,
                        top: 'middle',
                        style: {
                            text: '中国',
                            textAlign: 'center',
                            fill: this.style.textColor,
                            font: this.style.font
                        },
                        onclick: function() {
                            this.resetOption(this.chart, this.option, '中国');
                        }
                    }, {
                        type: 'text',
                        left: 0,
                        top: 10,
                        style: {
                            text: 'China',
                            textAlign: 'center',
                            fill: this.style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function() {
                            this.resetOption(this.chart, this.option, '中国');
                        }
                    }]
                }],
                geo: {
                    map: this.opt.mapName,
                    roam: true,
                    zoom: 1,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    },
                    regions: this.opt.activeArea.map(function(item) {
                        if (typeof item !== 'string') {
                            return {
                                name: item.name,
                                itemStyle: {
                                    normal: {
                                        areaColor: item.areaColor || '#389BB7'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: item.showLabel,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        } else {
                            return {
                                name: item,
                                itemStyle: {
                                    normal: {
                                        borderColor: '#91e6ff',
                                        areaColor: '#389BB7'
                                    }
                                }
                            }
                        }
                    })
                },
                series: [{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'render',
                    rippleEffect: {
                        period:15,
                        scale: 4,
                        brushType: 'fill'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#FFC848',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: this.initSeriesData(this.opt.data)
                }]
            }
        }
    },
}