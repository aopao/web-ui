layui.use(['common','carousel','element','jquery'], function(){
    var element = layui.element
        ,carousel = layui.carousel
        ,$ = layui.jquery;

    // 轮播图
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头

    });

    // 文本编辑器 https://www.kancloud.cn/wangfupeng/wangeditor3/332599
    var E = window.wangEditor;
    var editor = new E('#editor');
    editor.customConfig.uploadImgServer = './img';  // 上传图片到服务器
    editor.create();

    // 二维码 https://github.com/jeromeetienne/jquery-qrcode
    $('#qrcode1').qrcode("this plugin is great");
    $('#qrcode2').qrcode("https://www.bilibili.com");
    $('#qrcode3').qrcode({width: 100,height: 100,text: "size doesn't matter"});

});