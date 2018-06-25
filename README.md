web-ui <img src="https://travis-ci.com/rs-sos/web-ui.svg?branch=master">
===

基于[layui](http://www.layui.com/) v2.3.0的一套后台系统界面。

## 如何使用
```
git clone git@github.com:rs-sos/web-ui.git
```

## 系统原型

[智慧党建](https://pro.modao.cc/app/3pmYgsQBYNnAs0EtQuBinl7YpugIKox)

## 目录结构
	
	|-- assets
		|-- css
		|-- img
		|-- js
		|-- plugins
		|-- scss
	|-- layui 
		|-- ...
	|-- page
		|-- ...	
	|-- index.html	

- **assets**
	静态资源文件夹

- **layui**
	layui包

- **page**
	分页文件夹

## 编码规范

> 完整文档请参考[layui页面元素规范与说明](http://www.layui.com/doc/base/element.html)

#### HTML

自定义属性以 lay- 作为前缀;

#### CSS

class命名前缀：layui，连接符：-，如：class="layui-form"


#### JS

通过layui.use(mods, callback)方法加载模块


