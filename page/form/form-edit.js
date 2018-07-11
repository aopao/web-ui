layui.use(['common','element','form','upload','laydate','layer'], function(){
    var element = layui.element
        ,form = layui.form
        ,upload = layui.upload
        ,laydate = layui.laydate
        ,layer = layui.layer;

    //普通图片上传
    var uploadInst = upload.render({
        elem: '.upload-wrapper'
        ,url: 'img/upload/' //服务端上传接口
        ,accept: 'images'
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#upload-img').attr('src', result); //图片链接（base64）
                $('#avatar').val(file.name);
            });
        }
        ,done: function(res){
            return layer.msg('上传失败');
        }
        ,error: function(){
            // return layer.msg('gg');
        }
    });

    //出生年月
    laydate.render({
        elem: '#test1' //指定元素
    });
    // 入党时间
    laydate.render({
        elem: '#test2' //指定元素
    });

    // 弹出树
    $('#input-tree').on('click', function () {
        layer.open({
            type: 1,
            title: '弹出树',
            skin: 'layui-layer-demo', //样式类名
            area: ['300px', '500px'],
            shadeClose: true, //开启遮罩关闭
            content: $('.layui-tree-wrapper'),
            success: function () {
                //ztree配置
                var setting = {
                    check: {
                        enable: false//checkbox
                    },
                    view: {
                        nameIsHTML: true, //允许name支持html
                        selectedMulti: false
                    },
                    edit: {
                        enable: false,
                        editNameSelectAll: false
                    },
                    data: {
                        simpleData: {
                            enable: true
                        }
                    },
                    callback: {
                        // beforeExpand: beforeExpand,
                        // onExpand: onExpand,
                        onClick: zTreeOnClick
                    }
                };
                loadDataFromLocal();//从本地dataset.js文件读取模拟数据并初始化树形图
                /**
                 * 通过ajax方法从服务器获取数据并初始化树形图
                 */
                function loadDataFromServer(urlStr){
                    $.ajax({
                        type: "get",
                        dataType: "json",
                        url: urlStr,  //服务请求地址
                        success: function(data) {
                            initThisZtree(data);//传入数据,初始化ztree
                            fuzzySearch('layer-tree','#layer-input-tree',null,true); //初始化模糊搜索方法
                        }
                    });
                }
                /**
                 * 从本地js/dataset.js文件读取模拟数据并初始化树形图
                 */
                function loadDataFromLocal(){
                    //此处的树节点数据mockData是在本地js/dataSet.js中预先定义的模拟数据
                    initThisZtree(mockData);//传入数据,初始化ztree
                    // zTreeId ztree对象的id,不需要#
                    // searchField 输入框选择器
                    // isHighLight 是否高亮,默认高亮,传入false禁用
                    // isExpand 是否展开,默认合拢,传入true展开
                    fuzzySearch('layer-tree','#layer-input-tree',null,true); //初始化模糊搜索方法
                }

                /**
                 * 初始化ztree
                 *
                 * @param {Object} data
                 */
                function initThisZtree(data){
                    //初始化ztree三个参数分别是(jQuery对象,ztree设置,树节点数据)
                    var treeObj = $.fn.zTree.init($("#layer-tree"), setting, data);
                    treeObj.expandAll(true);
                }

                /**
                 * @param event
                 * @param treeId
                 * @param treeNode
                 */
                function zTreeOnClick(event, treeId, treeNode) {
                    //这里定义点击书中节点时，相应的页面其他的操作，示例：
                    // 每次点击节点后， 弹出该节点的 tId、name 的信息
                    layer.msg(treeNode.tId + ", " + treeNode.name);
                    // 赋值
                    $('#input-tree').val(treeNode.name);
                };

            }
        });
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
    form.on('submit(myForm)', function(data){
        console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
        console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
        layer.msg(JSON.stringify(data.field)) //当前容器的全部表单字段，名值对形式：{name: value}
        setTimeout(function () {
            parent.layer.closeAll();
        }, 2000)
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });
    // 表单初始赋值
    //layui-form-edit 即 class="layui-form" 所在元素对应的 lay-filter="" 对应的值
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
    form.val("layui-form-edit", dataObj);
    $('#upload-img').attr('src', dataObj.avatar);

});