web-ui
===

基于[layui](http://www.layui.com/) v2.3.0的一套后台系统界面。

## 系统原型

[智慧党建](https://pro.modao.cc/app/3pmYgsQBYNnAs0EtQuBinl7YpugIKox)

## 目录结构
	
	|-- assets
		|-- css
		|-- img
		|-- js
	|-- layui 
		|-- ...

	|-- page
		|-- ...
	|--	favicon 
	|-- index.html	

- **assets**
	静态资源文件夹

- **layui**
	layui包

- **page**
	分页文件夹

## 编码规范

#### HTML

- 可以使用部分 HTML5 标签，只要保证浏览器兼容。兼容 IE8+，Safari，Chrome，Firefox。
- 命名统一使用 layui-*

#### CSS

- 推荐使用 CSS3 属性, 渐进增强, 优雅降级。

#### JS

- 使用layui的模块加载自定义组件

## 相关要求

* 以 layUI 和 Jquery1.8.3 为核心。
* 方便的多主题切换（不止皮肤，还包括布局）。
* 尽量不使用图片，所有的小图标用 Sprites 或字体图标 iconfont。
* 可以使用部分 HTML5 标签，只要保证浏览器兼容。兼容 IE8+，Safari，Chrome，Firefox。
* 注意静态文件的数量，只把必要先加载的 JS 放在头部。
* 重点关注性能，主要关注 HTTP 请求数，加载顺序、脚本阻塞。
* 重复出现的样式，脚本必须放到 css、js 文件中。
* 所有静态文件、代码命名要规范。
* 保持代码干净，无冗余代码。
* 尽量不使用 frame，除非必要的情况。
* 除非真正的表格，禁止使用table。
* 避免在 html 标签中书写 style 属性或者和样式相关的代码。
* 在移动设备（iPad）可以基本正常操作。

## 主题风格
    绿色系
    win10风格/传统风格

## 本周任务

* 首页布局