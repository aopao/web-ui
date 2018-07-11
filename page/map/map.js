layui.use(['common','element','layer'], function () {
    // 显示地图
    var showView = function () {
        var map = new BMap.Map("layui-map", {mapType:BMAP_SATELLITE_MAP});
        var myStyleJson = [
            {
                "featureType": "background",
                "elementType": "all",
                "stylers": {
                    "color": "#252a54"
                }
            }];
        map.setMapStyle({styleJson: myStyleJson});
        map.centerAndZoom(new BMap.Point(102.858964, 24.960171), 13);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP]}));   //添加地图类型控件
        map.setCurrentCity("昆明呈贡区国家级昆明经济技术开发区");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.enableScrollWheelZoom();
        map.enableInertialDragging();
        map.enableContinuousZoom();
    };
    // 生成地图
    showView();
    // 地图全屏
    $('.layui-map-zoom').on('click', function () {
        var fullmap = window.sessionStorage.getItem('fullmap') || false;
        if (fullmap == 'true') {
            parent.layer.closeAll();
            window.sessionStorage.setItem('fullmap', false);
        } else {
            parent.layer.open({
                type: 2,
                title: false,
                closeBtn: 0, //不显示关闭按钮
                shade: [0],
                area: ['100%', '100%'],
                content: './page/map/map.html',
                success: function () {
                    window.sessionStorage.setItem('fullmap', true);
                }
            });
        }
    });
    // 搜索下拉
    $('.select-box').on('click', 'dd a', function () {
        $(this).parent().siblings('dt').find('a').attr('data-id', $(this).attr('data-id')).text($(this).text());
    });
    // 自动检索
    $('.query-form .input-box input[type="text"]').on('keyup', function () {
        var v = this.value;
        var $list = $(this).parent().siblings('dd');

        // 渲染数据
        var data = [
            {name: '德清兰德电子有限公司', place: '浙江省湖州市德清县'},
            {name: '浙江松鹤电表有限公司（西门）', place: '浙江省湖州市德清县'},
            {name: '德清兰德电子有限公司（西南门）', place: '浙江省湖州市德清县'},
            {name: '浙江汉昇科技有限公司', place: '浙江省湖州市德清县'},
            {name: '艾薇诗墙纸', place: '浙江省湖州市德清县'},
            {name: '湖州曼联服装压褶有限公司', place: '浙江省湖州市德清县'},
            {name: '美时美衣淘宝店', place: '浙江省湖州市德清县'},
            {name: '德清兰德电子有限公司', place: '浙江省湖州市德清县'},
            {name: '德清固耐特护栏有限公司', place: '浙江省湖州市德清县'},
            {name: '德清日化丝绸有限公司', place: '浙江省湖州市德清县'},
            {name: '浙江瑞丽服饰有限公司', place: '浙江省湖州市德清县'},
            {name: '浙江瑞丽服饰有限公司', place: '浙江省湖州市德清县'}
        ];
        if(v && data.length > 0) {
            var str = '';
            for(var i=0; i<data.length; i++) {
                str += '<a href="javascript:;" title="'+data[i].name+'&nbsp;&nbsp;'+data[i].place+'"><span>'+data[i].name+'</span><i>'+data[i].place+'</i></a>'
            }
            $list.empty().html(str).stop(true, true).show();
        } else {
            $list.stop(true, true).hide();
        }

    });
    $('.query-form .input-box dd').on('click', 'a', function () {
        var val = $(this).find('span').text();
        $(this).parent().prev('dt').find('input').val(val);
        $(this).parent().hide();
    });
});