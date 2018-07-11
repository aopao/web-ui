layui.use(['common','element','layer'], function() {
    var element = layui.element
        ,layer = layui.layer;

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