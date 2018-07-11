layui.use(['common','jquery','carousel','laydate','layer'], function(){
    var $ = layui.jquery
    ,carousel = layui.carousel
    ,laydate = layui.laydate
    ,layer = layui.layer;

    // 轮播
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,height: '100%' //设置容器高度
        ,arrow: 'none' //始终显示箭头
        ,trigger: 'mouseover'
        ,indicator: 'outside'
        // ,interval: '4000'
        //,anim: 'updown' //切换动画方式
    });
    carousel.on('change(test1)', function(obj){ //test1来源于对应HTML容器的 lay-filter="test1" 属性值
        // console.log(obj.index); //当前条目的索引
        // console.log(obj.prevIndex); //上一个条目的索引
        // console.log(obj.item); //当前条目的元素对象
        var optionObj = {};
        optionObj[0] = chartsComment.optionObj.option1;
        optionObj[1] = chartsComment.optionObj.option2;
        optionObj[2] = chartsComment.optionObj.option3;
        var myChart = echarts.init(obj.item[0],'wonderland');
        myChart.setOption(optionObj[obj.index], true);
        var prevChart = echarts.init(document.getElementById('charts-'+obj.prevIndex));
        prevChart.dispose();
    });
    var chartsComment = {};
    chartsComment.optionObj = ['option1','option2','option3'];
    chartsComment.optionObj.option1Data = [
        {
            name: '主题\n党日',
            itemStyle: {
                color: '#da0d68'
            },
            children: [{
                name: 'Black Tea',
                value: 1,
                itemStyle: {
                    color: '#975e6d'
                }
            }, {
                name: 'Floral',
                itemStyle: {
                    color: '#e0719c'
                },
                children: [{
                    name: 'Chamomile',
                    value: 1,
                    itemStyle: {
                        color: '#f99e1c'
                    }
                }, {
                    name: 'Rose',
                    value: 1,
                    itemStyle: {
                        color: '#ef5a78'
                    }
                }, {
                    name: 'Jasmine',
                    value: 1,
                    itemStyle: {
                        color: '#f7f1bd'
                    }
                }]
            }]
        },
        {
            name: '志愿\n服务',
            itemStyle: {
                color: '#da1d23'
            },
            children: [{
                name: 'Berry',
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: 'Blackberry',
                    value: 1,
                    itemStyle: {
                        color: '#3e0317'
                    }
                }, {
                    name: 'Raspberry',
                    value: 1,
                    itemStyle: {
                        color: '#e62969'
                    }
                }, {
                    name: 'Blueberry',
                    value: 1,
                    itemStyle: {
                        color: '#6569b0'
                    }
                }, {
                    name: 'Strawberry',
                    value: 1,
                    itemStyle: {
                        color: '#ef2d36'
                    }
                }]
            }, {
                name: 'Dried Fruit',
                itemStyle: {
                    color: '#c94a44'
                },
                children: [{
                    name: 'Raisin',
                    value: 1,
                    itemStyle: {
                        color: '#b53b54'
                    }
                }, {
                    name: 'Prune',
                    value: 1,
                    itemStyle: {
                        color: '#a5446f'
                    }
                }]
            }, {
                name: 'Other Fruit',
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: 'Coconut',
                    value: 1,
                    itemStyle: {
                        color: '#f2684b'
                    }
                }, {
                    name: 'Cherry',
                    value: 1,
                    itemStyle: {
                        color: '#e73451'
                    }
                }, {
                    name: 'Pomegranate',
                    value: 1,
                    itemStyle: {
                        color: '#e65656'
                    }
                }, {
                    name: 'Pineapple',
                    value: 1,
                    itemStyle: {
                        color: '#f89a1c'
                    }
                }, {
                    name: 'Grape',
                    value: 1,
                    itemStyle: {
                        color: '#aeb92c'
                    }
                }, {
                    name: 'Apple',
                    value: 1,
                    itemStyle: {
                        color: '#4eb849'
                    }
                }, {
                    name: 'Peach',
                    value: 1,
                    itemStyle: {
                        color: '#f68a5c'
                    }
                }, {
                    name: 'Pear',
                    value: 1,
                    itemStyle: {
                        color: '#baa635'
                    }
                }]
            }, {
                name: 'Citrus Fruit',
                itemStyle: {
                    color: '#f7a128'
                },
                children: [{
                    name: 'Grapefruit',
                    value: 1,
                    itemStyle: {
                        color: '#f26355'
                    }
                }, {
                    name: 'Orange',
                    value: 1,
                    itemStyle: {
                        color: '#e2631e'
                    }
                }, {
                    name: 'Lemon',
                    value: 1,
                    itemStyle: {
                        color: '#fde404'
                    }
                }, {
                    name: 'Lime',
                    value: 1,
                    itemStyle: {
                        color: '#7eb138'
                    }
                }]
            }]
        },
        {
            name: '党员\n大会',
            itemStyle: {
                color: '#ebb40f'
            },
            children: [{
                name: 'Sour',
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: 'Sour Aromatics',
                    value: 1,
                    itemStyle: {
                        color: '#9ea718'
                    }
                }, {
                    name: 'Acetic Acid',
                    value: 1,
                    itemStyle: {
                        color: '#94a76f'
                    }
                }, {
                    name: 'Butyric Acid',
                    value: 1,
                    itemStyle: {
                        color: '#d0b24f'
                    }
                }, {
                    name: 'Isovaleric Acid',
                    value: 1,
                    itemStyle: {
                        color: '#8eb646'
                    }
                }, {
                    name: 'Citric Acid',
                    value: 1,
                    itemStyle: {
                        color: '#faef07'
                    }
                }, {
                    name: 'Malic Acid',
                    value: 1,
                    itemStyle: {
                        color: '#c1ba07'
                    }
                }]
            }, {
                name: 'Alcohol/\nFremented',
                itemStyle: {
                    color: '#b09733'
                },
                children: [{
                    name: 'Winey',
                    value: 1,
                    itemStyle: {
                        color: '#8f1c53'
                    }
                }, {
                    name: 'Whiskey',
                    value: 1,
                    itemStyle: {
                        color: '#b34039'
                    }
                }, {
                    name: 'Fremented',
                    value: 1,
                    itemStyle: {
                        color: '#ba9232'
                    }
                }, {
                    name: 'Overripe',
                    value: 1,
                    itemStyle: {
                        color: '#8b6439'
                    }
                }]
            }]
        },
        {
            name: '支部\n委员会',
            itemStyle: {
                color: '#187a2f'
            },
            children: [{
                name: 'Olive Oil',
                value: 1,
                itemStyle: {
                    color: '#a2b029'
                }
            }, {
                name: 'Raw',
                value: 1,
                itemStyle: {
                    color: '#718933'
                }
            }, {
                name: 'Green/\nVegetative',
                itemStyle: {
                    color: '#3aa255'
                },
                children: [{
                    name: 'Under-ripe',
                    value: 1,
                    itemStyle: {
                        color: '#a2bb2b'
                    }
                }, {
                    name: 'Peapod',
                    value: 1,
                    itemStyle: {
                        color: '#62aa3c'
                    }
                }, {
                    name: 'Fresh',
                    value: 1,
                    itemStyle: {
                        color: '#03a653'
                    }
                }, {
                    name: 'Dark Green',
                    value: 1,
                    itemStyle: {
                        color: '#038549'
                    }
                }, {
                    name: 'Vegetative',
                    value: 1,
                    itemStyle: {
                        color: '#28b44b'
                    }
                }, {
                    name: 'Hay-like',
                    value: 1,
                    itemStyle: {
                        color: '#a3a830'
                    }
                }, {
                    name: 'Herb-like',
                    value: 1,
                    itemStyle: {
                        color: '#7ac141'
                    }
                }]
            }, {
                name: 'Beany',
                value: 1,
                itemStyle: {
                    color: '#5e9a80'
                }
            }]
        },
        {
            name: '党员\n教育',
            itemStyle: {
                color: '#0aa3b5'
            },
            children: [{
                name: 'Papery/Musty',
                itemStyle: {
                    color: '#9db2b7'
                },
                children: [{
                    name: 'Stale',
                    value: 1,
                    itemStyle: {
                        color: '#8b8c90'
                    }
                }, {
                    name: 'Cardboard',
                    value: 1,
                    itemStyle: {
                        color: '#beb276'
                    }
                }, {
                    name: 'Papery',
                    value: 1,
                    itemStyle: {
                        color: '#fefef4'
                    }
                }, {
                    name: 'Woody',
                    value: 1,
                    itemStyle: {
                        color: '#744e03'
                    }
                }, {
                    name: 'Moldy/Damp',
                    value: 1,
                    itemStyle: {
                        color: '#a3a36f'
                    }
                }, {
                    name: 'Musty/Dusty',
                    value: 1,
                    itemStyle: {
                        color: '#c9b583'
                    }
                }, {
                    name: 'Musty/Earthy',
                    value: 1,
                    itemStyle: {
                        color: '#978847'
                    }
                }, {
                    name: 'Animalic',
                    value: 1,
                    itemStyle: {
                        color: '#9d977f'
                    }
                }, {
                    name: 'Meaty Brothy',
                    value: 1,
                    itemStyle: {
                        color: '#cc7b6a'
                    }
                }, {
                    name: 'Phenolic',
                    value: 1,
                    itemStyle: {
                        color: '#db646a'
                    }
                }]
            }, {
                name: 'Chemical',
                itemStyle: {
                    color: '#76c0cb'
                },
                children: [{
                    name: 'Bitter',
                    value: 1,
                    itemStyle: {
                        color: '#80a89d'
                    }
                }, {
                    name: 'Salty',
                    value: 1,
                    itemStyle: {
                        color: '#def2fd'
                    }
                }, {
                    name: 'Medicinal',
                    value: 1,
                    itemStyle: {
                        color: '#7a9bae'
                    }
                }, {
                    name: 'Petroleum',
                    value: 1,
                    itemStyle: {
                        color: '#039fb8'
                    }
                }, {
                    name: 'Skunky',
                    value: 1,
                    itemStyle: {
                        color: '#5e777b'
                    }
                }, {
                    name: 'Rubber',
                    value: 1,
                    itemStyle: {
                        color: '#120c0c'
                    }
                }]
            }]
        }
    ];
    chartsComment.optionObj.option1 = {
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: chartsComment.optionObj.option1Data,
            radius: [0, '95%'],
            sort: null,
            levels: [{}, {
                r0: '10%',
                r: '30%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '30%',
                r: '63%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '63%',
                r: '65%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }]
        }
    };
    chartsComment.optionObj.option2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['主题党日','志愿服务','党员大会','支部委员会','党员教育']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data : ['一月','二月','三月','四月','五月','六月','七月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'主题党日',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'志愿服务',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'党员大会',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'支部委员会',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'党员教育',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    chartsComment.optionObj.option3 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['主题党日','志愿服务','党员大会','支部委员会','党员教育']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'主题党日'},
                    {value:310, name:'志愿服务'},
                    {value:234, name:'党员大会'},
                    {value:135, name:'支部委员会'},
                    {value:1548, name:'党员教育'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chartsComment.optionObj.option5 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:'3%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: [{
            type: 'category',
            data: ['第一支部', '第二支部', '第三支部', '第四支部', '第五支部', '第六支部', '第七支部'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        xAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'rank',
            type: 'bar',
            data: [77, 99, 184, 142, 205, 232, 162],
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    textStyle: {
                        color: 'white' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(0,255,205,.9)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(240,140,178,1)' // 100% 处的颜色

                    }], false)
                }
            }
        }]
    };
    chartsComment.optionObj.option6 = {
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,200,180,0.5)'
        },
        legend: {
            orient: 'vertical',
            top: 'center',
            left: 10,
            data: ['第一季度','第二季度','第三季度','第四季度']
        },
        visualMap: {
            top: 'middle',
            right: 10,
            max: 100,
            calculable: true
        },
        radar: {
            indicator : [
                { text: '主题党日', max: 100},
                { text: '志愿服务', max: 100},
                { text: '党员大会', max: 100},
                { text: '党员教育', max: 100},
                { text: '党工委会', max: 100}
            ]
        },
        series : (function (){
            var series = [];
            var nameArr = ['第一季度','第二季度','第三季度','第四季度'];
            for (var i = 0; i <= 4; i++) {
                series.push({
                    name:'个人分析',
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.9,
                            color: new echarts.graphic.RadialGradient(0.5, 0.5, .5, [
                                {
                                    color: '#B8D3E4',
                                    offset: 0
                                },
                                {
                                    color: '#72ACD1',
                                    offset: 1
                                }
                            ])
                        }
                    },
                    data:[
                        {
                            value:[
                                92-2*i, 68-3*i, 74-3*i, 65+2*i, 80+2*i
                            ],
                            name: nameArr[i]
                        }
                    ]
                });
            }
            return series;
        })()
    }
    ;(function() {
        var option = chartsComment.optionObj.option1;
        var myChart = echarts.init(document.getElementById('charts-0'),'wonderland');
        myChart.setOption(option, true);
    }());
    // 自动刷新charts
    var chartsInit = function(opts, id, speed, theme) {
        var option = opts;
        var speed = speed || 6000;
        var theme = theme || 'wonderland';
        var myChart = echarts.init(document.getElementById(id), theme);
        myChart.setOption(option, true);
        var timer = setInterval(function () {
            myChart.dispose();
            myChart = echarts.init(document.getElementById(id), theme);
            myChart.setOption(option, true);
        }, speed);
        document.getElementById(id).onmouseover = function () {
            clearInterval(timer);
        }
        document.getElementById(id).onmouseleave = function () {
            timer = setInterval(function () {
                myChart.dispose();
                myChart = echarts.init(document.getElementById(id), theme);
                myChart.setOption(option, true);
            }, speed);
        }
    };
    chartsInit(chartsComment.optionObj.option5, 'charts-4');
    chartsInit(chartsComment.optionObj.option6, 'charts-5');

    // 日期
    var mydate = laydate.render({
        elem: '#date'
        ,position: 'static'
        ,mark: {
            '2018-6-3': '3',
            '2018-7-12': '8'
        }
        ,change: function(value, date){ //监听日期被切换
            lay('#testView').html(value);
        }
        ,done: function(value, date){
            if(date.year === 2018 && date.month === 7 && date.date === 12){
                mydate.hint('笛卡尔心形线<br>在历史上，笛卡尔和克里斯蒂娜的确有过交情。但笛卡尔是1649年10月4日应克里斯蒂娜邀请才来到瑞典，而当时克里斯蒂娜已成为了瑞典女王。笛卡尔与克里斯蒂娜谈论的主要是哲学问题而不是数学。有资料记载，由于克里斯蒂娜女王时间安排很紧，笛卡尔只能在早晨五点与她探讨哲学。笛卡尔真正的死因是因天气寒冷加上过度操劳患上的肺炎，而不是黑死病。');
            }
        }
    });

    //地图弹层
    var showView = function () {
        var map = new BMap.Map("allmap");
        var myStyleJson = [
            {
                "featureType": "background",
                "elementType": "all",
                "stylers": {
                    "color": "#252a54"
                }
            }];
        map.setMapStyle({styleJson: myStyleJson});
        map.centerAndZoom(new BMap.Point(102.858964, 24.960171), 14);  // 初始化地图,设置中心点坐标和地图级别
        map.setCurrentCity("昆明呈贡区国家级昆明经济技术开发区");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.enableScrollWheelZoom();
        map.enableInertialDragging();
        map.enableContinuousZoom();
    };
    // 活动地图
    $('#showMap').on('click', function () {
        layer.open({
            type: 1,
            title: false,
            shade: 0.3,
            area: ['90%', '80%'],
            content: '<div class="map-wrapper"><div id="allmap"></div></div>',
        });
        showView();
    });

    // 列表上下滚动
    $(".layui-list-scrollTop").slide({
        mainCell:"ul",
        autoPage:true,
        effect:"topLoop",
        autoPlay:true,
        vis:5
    });
});
