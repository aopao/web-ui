layui.use(['common','element','form','upload','laydate','layer','jquery'], function(){
    var element = layui.element
        ,form = layui.form
        ,upload = layui.upload
        ,laydate = layui.laydate
        ,layer = layui.layer
        ,$ = layui.jquery;

    // 表单初始赋值
    //layui-form-view 即 class="layui-form" 所在元素对应的 lay-filter="" 对应的值
    var dataObj = {
        "username": "灼眼" // "name": "value"
        ,"modules": "汉族"
        ,"sex": "女"
        ,"avatar": "../../assets/img/person-test.png"
        ,"birth": "2008-08-18"
        ,"IDcard": "421081200808185616"
        ,"ancestors": "11区"
        ,"phone": "18182333233"
        ,"telephone": "10001"
        ,"home": "学园都市"
        ,"Marriage": "其他"
        ,"company": "white house"
        ,"school": "常盘台"
        ,"degree": "其他"
        ,"status": "正常"
        ,"type": "正式党员"
        ,"start": "2015-05-15"
        ,"organization": "组织部"
        ,"someone-leave": "是"
        ,"someone-go": "是"
        ,"info": "个人简介"
        ,"others": "其他备注信息"
    }
    form.val("layui-form-view", dataObj);
    $('#upload-img').attr('src', dataObj.avatar);

    // 设置只读
    $('.layui-form-view').find('input, select, textarea').addClass('layui-disabled').attr({'readonly':'readonly','disabled':'disabled'});
    form.render();
    $('.layui-form-select').find('input').addClass('layui-disabled').attr({'readonly':'readonly','disabled':'disabled'});
});