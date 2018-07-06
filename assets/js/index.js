layui.use(['form','element','layer','jquery'],function () {
    var $ = layui.jquery;
    var form = layui.form;
    var layer = layui.layer;
    var element = layui.element;
    // 侧边导航
    element.on('nav(side-menu)', function(elem){
        var $items = $(this).parent();
        $items.siblings('.layui-nav-item').removeClass('layui-nav-itemed').find('.layui-nav-item').removeClass('layui-nav-itemed');
        if(elem.attr('href') == 'javascript:;' ) {
            var url = elem.attr('lay-href');
            if(url) {
                $(".child-iframe").attr('src', url);
            }
        }
    });
    // 隐藏侧边导航
    var $sideSwitch = $('.layui-side-switch');
    var $layout = $('.layui-layout');
    var flagClass = 'layadmin-side-shrink';
    $sideSwitch.on('click', function () {
        if($layout.hasClass(flagClass)) {
            $layout.removeClass(flagClass)
        } else {
            $layout.addClass(flagClass)

        }
    });

    $(document).on("mouseenter", "*[lay-tips]", function() {
        var e = $(this);
        var $layout = $('.layui-layout');
        if (!e.parent().hasClass("layui-nav-item") || $layout.hasClass(flagClass)) {
            var i = e.attr("lay-tips")
                , t = e.attr("lay-offset")
                , l = e.attr("lay-direction")
                , n = layer.tips(i, this, {
                tips: l || 1,
                time: -1,
                success: function(e, a) {
                    t && e.css("margin-left", t + "px")
                }
            });
            e.data("index", n)
        }
    }).on("mouseleave", "*[lay-tips]", function() {
        layer.close($(this).data("index"))
    });


    //更换皮肤
    function skins(){
        var skin = window.sessionStorage.getItem("skin");
        if(skin){  //如果更换过皮肤
            if(window.sessionStorage.getItem("skinValue") != "自定义"){
                $("body").addClass(window.sessionStorage.getItem("skin"));
            }else{
                $(".layui-layout-admin .layui-header").css("background-color",skin.split(',')[0]);
                $(".layui-bg-black").css("background-color",skin.split(',')[1]);
                $(".hideMenu").css("background-color",skin.split(',')[2]);
            }
        }
    }
    skins();
    $("#themes-btn").click(function(){
        layer.open({
            title : "更换皮肤",
            area : ["280px","180px"],
            type : "1",
            content : '<div class="skins_box" style="padding: 20px 20px 0;">'+
            '<form class="layui-form">'+
            '<div class="layui-form-item">'+
            '<input type="radio" name="skin" value="默认" title="默认" lay-filter="default" checked="">'+
            '<input type="radio" name="skin" value="红色" title="红色" lay-filter="red">'+
            '<input type="radio" name="skin" value="蓝色" title="蓝色" lay-filter="blue">'+
            '</div>'+
            '<div class="layui-form-item skinBtn">'+
            '<a href="javascript:;" class="layui-btn layui-btn-small layui-btn-normal" lay-submit="" lay-filter="changeSkin">确定更换</a>'+
            '<a href="javascript:;" class="layui-btn layui-btn-small layui-btn-primary" lay-submit="" lay-filter="noChangeSkin">我再想想</a>'+
            '</div>'+
            '</form>'+
            '</div>',
            success : function(index, layero){
                var skin = window.sessionStorage.getItem("skin");
                if(window.sessionStorage.getItem("skinValue")){
                    $(".skins_box input[value="+window.sessionStorage.getItem("skinValue")+"]").attr("checked","checked");
                };
                if($(".skins_box input[value=自定义]").attr("checked")){
                    $(".skinCustom").css("visibility","inherit");
                    $(".topColor").val(skin.split(',')[0]);
                    $(".leftColor").val(skin.split(',')[1]);
                    $(".menuColor").val(skin.split(',')[2]);
                };
                form.render();
                // $(".skins_box").removeClass("layui-hide");
                $(".skins_box .layui-form-radio").on("click",function(){
                    var skinColor;
                    if($(this).find("div").text() == "红色"){
                        skinColor = "red";
                    }else if($(this).find("div").text() == "蓝色"){
                        skinColor = "blue";
                    }else if($(this).find("div").text() == "默认"){
                        skinColor = "";
                    }
                    $("body").removeAttr("class").addClass("main_body "+skinColor+"");
                    $(".child-iframe").contents().find('body').removeAttr("class").addClass("page_body "+skinColor+"");

                })
                var skinColor;
                form.on("submit(changeSkin)",function(data){
                    if(data.field.skin != "自定义"){
                        if(data.field.skin == "红色"){
                            skinColor = "red";
                        }else if(data.field.skin == "蓝色"){
                            skinColor = "blue";
                        }else if(data.field.skin == "默认"){
                            skinColor = "";
                        }
                        window.sessionStorage.setItem("skin",skinColor);
                    }
                    window.sessionStorage.setItem("skinValue",data.field.skin);
                    layer.closeAll("page");


                });
                form.on("submit(noChangeSkin)",function(){
                    $("body").removeAttr("class").addClass("main_body "+window.sessionStorage.getItem("skin")+"");
                    $(".child-iframe").contents().find('body').removeAttr("class").addClass("page_body "+window.sessionStorage.getItem("skin")+"");
                    skins();
                    layer.closeAll("page");
                });
            },
            cancel : function(){
                $("body").removeAttr("class").addClass("main_body "+window.sessionStorage.getItem("skin")+"");
                $(".child-iframe").contents().find('body').removeAttr("class").addClass("page_body "+window.sessionStorage.getItem("skin")+"");
                skins();
            }
        })
    })

});

