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
    var $sideMenu = $('.layui-side-menu');
    var $layBody = $('.layui-body');
    $sideSwitch.on('click', function () {
        if($(this).hasClass('hide')) {
            $sideMenu.stop(true,true).animate({
                'left':'0'
            }, 200);
            $layBody.stop(true,true).animate({
                'left':'220px'
            }, 200);
            $(this).removeClass('hide').stop(true,true).delay(400).animate({'left':'170px'}, 200);
        } else {

            $sideMenu.stop(true,true).animate({
                'left':'-220px'
            }, 200);
            $layBody.stop(true,true).animate({
                'left':'0'
            }, 200);
            $(this).addClass('hide').stop(true,true).animate({'left':'10px'}, 200);

        }
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
            area : ["280px","210px"],
            type : "1",
            content : '<div class="skins_box" style="padding: 20px 20px 0;">'+
            '<form class="layui-form">'+
            '<div class="layui-form-item">'+
            '<input type="radio" name="skin" value="默认" title="默认" lay-filter="default" checked="">'+
            '<input type="radio" name="skin" value="红色" title="红色" lay-filter="red">'+
            '<input type="radio" name="skin" value="蓝色" title="蓝色" lay-filter="blue">'+
            '<input type="radio" name="skin" value="灰色" title="灰色" lay-filter="gray">'+
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
                    }else if($(this).find("div").text() == "灰色"){
                        skinColor = "gray";
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
                        }else if(data.field.skin == "灰色"){
                            skinColor = "gray";
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
                skins();
            }
        })
    })

});


