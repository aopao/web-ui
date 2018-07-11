layui.use(['common','element','form','layer'], function() {
    var element = layui.element
        ,form = layui.form
        ,layer = layui.layer;

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
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    //ztree配置
    var setting = {
        check: {
            enable: true//checkbox
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

    $(function () {
        //从服务器读取数据并初始化树形图
        //loadDataFromServer(urlStr);
        //本例直接从模拟数据dataset.js读取
        loadDataFromLocal();//从本地dataset.js文件读取模拟数据并初始化树形图
    })

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
                fuzzySearch('treeDemo','#layui-input-tree',null,true); //初始化模糊搜索方法
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
        fuzzySearch('treeDemo','#layui-input-tree',null,true); //初始化模糊搜索方法
    }

    /**
     * 初始化ztree
     *
     * @param {Object} data
     */
    function initThisZtree(data){
        //初始化ztree三个参数分别是(jQuery对象,ztree设置,树节点数据)
        var treeObj = $.fn.zTree.init($("#treeDemo"), setting, data);
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
        $('#layui-input-tree').val(treeNode.name);
    };


    // 树折叠
    $('.layui-tree-divider').on('click', function () {
        if($(this).hasClass('layui-panel-hide')) {
            $(this).removeClass('layui-panel-hide');
            $(this).siblings('.layui-tree-panel').removeClass('layui-panel-hide');
            $(this).siblings('.layui-content-panel').removeClass('layui-panel-hide');
        } else {
            $(this).addClass('layui-panel-hide');
            $(this).siblings('.layui-tree-panel').addClass('layui-panel-hide');
            $(this).siblings('.layui-content-panel').addClass('layui-panel-hide');
        }
    });

});