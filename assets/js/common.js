// 公共模块 加载时读取存储的颜色配置
layui.define('jquery', function(exports){
    var $ = layui.jquery;
    if(window.sessionStorage.getItem("skin")) {
        $(".main_body").attr('class', 'main_body ' + window.sessionStorage.getItem("skin"));
        $(".page_body").attr('class', 'page_body ' + window.sessionStorage.getItem("skin"));
    } else {
        $("body").addClass('green');
    }
    exports('common', {});
});



