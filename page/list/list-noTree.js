layui.use(['common','laypage','laydate','element','form','layer'], function(){
    var laypage = layui.laypage
    ,laydate = layui.laydate
    ,element = layui.element
    ,form = layui.form
    ,layer = layui.layer;

    // 高级查询折叠
    $('.layui-form-panel').on('click', '.form-btn-query-more', function () {
        $('.layer-query-more').slideToggle();
    });
    // 入党时间开始范围
    var insStart = laydate.render({
        elem: '#start'
        // ,min: 0
        ,done: function(value, date){
            //更新结束日期的最小日期
            insEnd.config.min = lay.extend({}, date, {
                month: date.month - 1
            });

            //自动弹出结束日期的选择器
            insEnd.config.elem[0].focus();
        }
    });
    // 入党时间结束范围
    var insEnd = laydate.render({
        elem: '#end'
        ,min: 0
        ,done: function(value, date){
            //更新开始日期的最大日期
            insStart.config.max = lay.extend({}, date, {
                month: date.month - 1
            });
        }
    });
    // 重置按钮
    $('.layui-form').on('click', '.form-btn-reset', function () {
        $(this).closest('.layui-form').find('button[type="reset"]').trigger('click');
    });
    // 添加表单验证规则
    form.verify({
        username: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                return '用户名不能有特殊字符';
            }
            if(/(^\_)|(\__)|(\_+$)/.test(value)){
                return '用户名首尾不能出现下划线\'_\'';
            }
            if(/^\d+\d+\d$/.test(value)){
                return '用户名不能全为数字';
            }
        }

    });
    // 表单提交
    form.on('submit(myForm1)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        layer.msg(JSON.stringify(data.field)) //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });
    form.on('submit(myForm2)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        layer.msg(JSON.stringify(data.field)) //当前容器的全部表单字段，名值对形式：{name: value}
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    // 新增弹层
    $('.layui-form-panel').on('click', '.form-btn-add', function () {
        layer.open({
            type: 2,
            title: '党员信息表',
            shadeClose: true,
            shade: 0.8,
            area: ['80%', '90%'],
            content: '../form/form-add.html', //iframe的url
            scrollbar: false
        });
    });
    // 编辑弹层
    $('#form-list tr').on('click', '.form-btn-edit', function () {
        layer.open({
            type: 2,
            title: '党员信息表',
            shadeClose: true,
            shade: 0.8,
            area: ['80%', '90%'],
            content: '../form/form-edit.html', //iframe的url
            scrollbar: false
        });
    });
    // 查看弹层
    $('#form-list tr').on('click', '.form-btn-view', function () {
        layer.open({
            type: 2,
            title: '党员信息表',
            shadeClose: true,
            shade: 0.8,
            area: ['80%', '90%'],
            content: '../form/form-view.html', //iframe的url
            scrollbar: false
        });
    });

    // 全选复选框
    form.on('checkbox(allChoose)', function(data){
        var checkAll = data.elem.checked;
        $('#form-list').find('input[type="checkbox"]').each(function () {
            this.checked = checkAll;
            checkAll && ($(this).closest('tr').addClass('active')) || ($(this).closest('tr').removeClass('active'))
        });
        form.render('checkbox');
    });
    $('#form-list tr').on('click', '.layui-form-checkbox', function () {
        var $checkbox = $(this).siblings('input[type="checkbox"]')[0];
        if($checkbox.checked) {
            $(this).closest('tr').addClass('active');
        } else {
            $(this).closest('tr').removeClass('active');
            document.getElementById('allChoose').checked = false;
        }
        form.render('checkbox');
    });
    // 分页
    laypage.render({
        elem: 'demoPage'
        ,count: 70 //数据总数，从服务端得到
        ,jump: function(obj, first){
            //obj包含了当前分页的所有参数，比如：
            // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            // console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if(!first){
                //do something
            }
        }
    });

});