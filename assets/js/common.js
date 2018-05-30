layui.use(['element','jquery'], function () {
    var element = layui.element;
    var $ = layui.jquery;
    element.on('nav(side-menu)', function(elem){
        var $items = $(this).parent();
        $items.siblings('.layui-nav-item').removeClass('layui-nav-itemed').find('.layui-nav-item').removeClass('layui-nav-itemed');
    });

});