// 公共模块 加载时读取存储的颜色配置
layui.define('jquery', function(exports){
    var $ = layui.jquery;
    if(window.sessionStorage.getItem("skin")) {
        $("body").addClass(window.sessionStorage.getItem("skin"));
    } else {
        $("body").addClass('green');
    }
    exports('common', {});
});



