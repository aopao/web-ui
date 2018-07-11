// 登录页
layui.define(['form','layer','jquery'], function (exports) {
    var form = layui.form
        ,layer = layui.layer
        ,$ = layui.jquery;

    // 登录页主题
    var $container = $('.login-container');
    var theme = window.sessionStorage.getItem('skin') || 'green';
    $container.removeClass().addClass('login-container '+theme);

    $('.login-theme').on('click', 'a', function () {
        var theme = this.getAttribute('class').replace('login-theme-','') || 'green';
        var title = this.getAttribute('lay-title') || '绿色';
        $container.removeClass().addClass('login-container '+theme);
        window.sessionStorage.setItem("skin",theme);
        window.sessionStorage.setItem("skinValue",title);
    });

    // 添加验证规则
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
        ,password: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ]
    });

    // 监听验证
    var status = function() {
        var status = 'layui-form-danger';
        if($(this).hasClass(status)) {
            $(this).closest('.login-form-item').addClass('login-form-danger');
        } else {
            $(this).closest('.login-form-item').removeClass('login-form-danger');
        }
    }
    $('.layui-form').on('blur', '.layui-input', status);

    // 获取保存的密码
    var cookies = JSON.parse(window.localStorage.getItem('loginData'));
    if(cookies) {
        form.val("login-form", cookies)
    }

    // 表单提交
    form.on('submit(login)', function(data) {
        var formObj = data.field;
        // 获取表单数据
        layer.msg(JSON.stringify(formObj));
        // 记住密码
        if(formObj.remember == 'on') {
            window.localStorage.setItem('loginData',JSON.stringify(formObj));
        } else {
            window.localStorage.setItem('loginData',null);
        }
        // 延时跳转到首页
        if(true) {
            setTimeout(function () {
                window.location.href = 'main.html';
            }, 2000)
        };
        return false;
    });

    exports('login', {});
});