﻿//echatrs配置
var myChart = echarts.init($('#main')[0]);
window.onresize = myChart.resize;
$(function(){
option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
			label: {
				show: true,
				backgroundColor: '#333'
			}
		}
	},
	legend: {
		show: true,
		data: ['损失工时', '损失工时占比', ],
		textStyle: {
			color: '#ccc'
		}
	},

	xAxis: [{
		type: 'category',
		data: ['设备', '品质', '生产', '工艺', '计划'],
		axisPointer: {
			type: 'shadow'
		},
		axisLabel: { //调整x轴的lable  
			textStyle: {
				fontSize: 16, // 让字体变大
				color: 'rgba(255,255,255,0.8)',
			}
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			onZero: true,
			lineStyle: {
				color: 'rgba(255,255,255,0.8)',
				fontSize: '18',
				width: 0,
				type: 'solid',
			},
		},
		splitLine: {
			show: true,
			interval: 'auto',
			lineStyle: {
				color: ['rgba(198,213,232,0.1)'],
				width: 1,
				type: 'solid',
				shadowOffsetX: 0,
				shadowOffsetY: 0,

			},
		},
	}],
	yAxis: [{
			type: 'value',
			name: '损失工时(min)',
			min: 0,
			max: 50,
			interval: 10,
			axisLabel: {
				formatter: '{value}'
			},
			axisTick: {
				show: false
			},
			axisLabel: { //调整x轴的lable  
				textStyle: {
					fontSize: 16, // 让字体变大
					color: 'rgba(255,255,255,0.8)',
				}
			},
			axisLine: {
				show: true,
				onZero: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.8)',
					width: 0,
				},
			},

			splitLine: {
				show: true,
				interval: 'auto',
				lineStyle: {
					color: ['rgba(198,213,232,0.2)'],
					width: 0,
					type: 'solid',

					shadowOffsetX: 0,
					shadowOffsetY: 0,

				},
			},

		},
		{
			type: 'value',
			name: '损失工时占比',
			min: 0.00,
			max: 100.00,
			interval: 20.00,

			axisLabel: {
				formatter: '{value} %'
			},
			axisTick: {
				show: false
			},
			axisLabel: { //调整x轴的lable  
				textStyle: {
					fontSize: 16, // 让字体变大
					color: 'rgba(255,255,255,0.8)',
				}
			},
			axisLine: {
				show: true,
				onZero: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.8)',
					width: 0,

				},
			},
			splitLine: {
				show: true,
				interval: 'auto',
				lineStyle: {
					color: ['rgba(198,213,232,0.2)'],
					width: 1,
					type: 'solid',

					shadowOffsetX: 0,
					shadowOffsetY: 0,
				},
			},
		}
	],
	grid: {
		top: '30%',
		left: '3%',
		right: '3%',
		bottom: '1%',
		containLabel: true
	},
	
	series: [

		{
			name: '损失工时',
			type: 'bar',
			barWidth: '12%',
			color: ['rgba(87,188,255,0.9)'],
			data: [40, 28, 42, 35, 38],
			itemStyle: {
				normal: {
					barBorderRadius: 0,
					shadowBlur: 0,
					shadowColor: 'rgba(0, 0, 0, 0.14)',
					shadowOffsetX: 4,
					shadowOffsetY: -4,
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#2390AE'
							},
							{
								offset: 1,
								color: '#2390AE'
							},
						]
					),

				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#2390AE'
							},
							{
								offset: 0.7,
								color: '#2390AE'
							},
							{
								offset: 1,
								color: '#2390AE'
							}
						]
					)
				},
				label: { //显示参数
					normal: {
						show: true,
						position: 'inside',
						textStyle: {
							color: 'rgba(255,255,255,0.8)',
							fontStyle: 'normal',
							fontWeight: 'bold',
							fontSize: 20,
						},
					},

				},
			},

		},

		{
			name: '工时效率',
			type: 'line',

			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: '{c} %',

				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0.6)',
					borderWidth: 0,
					label: {
						show: true,
						formatter: null,
						textStyle: {
							color: '#f09b21',
							fontWeight: 'normal',
							fontSize: '120%',

						},
					},
				},
			},
			lineStyle: {

				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 1,
							color: '#feae00' // 0% 处的颜色
						}, {
							offset: 0,
							color: '#feae00' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					},
					width: 2,
					borderType: 'solid',
					shadowColor: 'rgba(0, 0, 0, 0.2)',
					shadowBlur: 0,
					shadowOffsetX: 0,
					shadowOffsetY: 6,

				},

			},

			yAxisIndex: 1,
			data: [80, 90, 50, 88, 86],

			axisLabel: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{value}%' // 这里是数据展示的时候显示的数据
				}
			},

		},

	],

},

myChart.setOption(option);
var main = echarts.init(document.getElementById('main'));
	main.setOption(option);
	setTimeout(function (){
	    window.onresize = function () {
	    	main.resize();
	    }
	},200)
});
