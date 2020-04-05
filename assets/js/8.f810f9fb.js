(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{260:function(a,e,v){"use strict";v.r(e);var t=v(28),_=Object(t.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[v("code",[a._v("HTML5")]),a._v(" 是 "),v("code",[a._v("HTML")]),a._v(" 的最新标准，广义上可包含我们 "),v("code",[a._v("<style>")]),a._v(" 标签和 "),v("code",[a._v("<script>")]),a._v(" 标签中的内容；狭义上一般指除 "),v("code",[a._v("<style>")]),a._v(" 标签和 "),v("code",[a._v("<script>")]),a._v(" 标签中语法规范外的所有内容。因为浏览器对"),v("code",[a._v('<style rel="stylesheet">')]),a._v(" 标签和 "),v("code",[a._v('<script type="javascript">')]),a._v(" 标签进行额外的语法解析。今天主要学习下一般指向的 "),v("code",[a._v("HTML5")]),a._v("。")]),a._v(" "),v("h2",{attrs:{id:"常用概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用概念"}},[a._v("#")]),a._v(" 常用概念")]),a._v(" "),v("h3",{attrs:{id:"原生标签元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原生标签元素"}},[a._v("#")]),a._v(" 原生标签元素")]),a._v(" "),v("p",[a._v("HTML5")]),a._v(" "),v("ul",[v("li",[a._v("新增语义化标签："),v("code",[a._v("<header>")]),a._v("，"),v("code",[a._v("<footer>")]),a._v("，"),v("code",[a._v("<section>")]),a._v("，"),v("code",[a._v("<article>")]),a._v("，"),v("code",[a._v("<aside>")]),a._v("，"),v("code",[a._v("<nav>")]),a._v("；")]),a._v(" "),v("li",[a._v("新增多媒体元素："),v("code",[a._v("<audio>")]),a._v("，"),v("code",[a._v("<video>")]),a._v("；")]),a._v(" "),v("li",[a._v("新增画布元素："),v("code",[a._v("<canvas>")]),a._v("。")])]),a._v(" "),v("h3",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[a._v("#")]),a._v(" 属性")]),a._v(" "),v("p",[a._v("HTML5 新增元素属性：")]),a._v(" "),v("ul",[v("li",[a._v("data-* 定义自定义属性；")]),a._v(" "),v("li",[a._v("contenteditable 规定是否允许用户编辑内容；")]),a._v(" "),v("li",[a._v("contextmenu 规定元素的上下文菜单；")]),a._v(" "),v("li",[a._v("draggable 规定是否允许用户拖动元素；")]),a._v(" "),v("li",[a._v("hidden 规定元素是否显示；")])]),a._v(" "),v("h3",{attrs:{id:"事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[a._v("#")]),a._v(" 事件")]),a._v(" "),v("p",[a._v("拖放事件\n触摸世界\n等等")]),a._v(" "),v("h3",{attrs:{id:"web-sockets-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-sockets-api"}},[a._v("#")]),a._v(" Web Sockets API")]),a._v(" "),v("p",[a._v("WebSockets 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此API，您可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。")]),a._v(" "),v("h3",{attrs:{id:"web-storage-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-api"}},[a._v("#")]),a._v(" Web Storage API")]),a._v(" "),v("p",[a._v("Web Storage 目前两种机制：")]),a._v(" "),v("ul",[v("li",[a._v("sessionStorage 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。")]),a._v(" "),v("li",[a._v("localStorage 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。")])]),a._v(" "),v("p",[a._v("常用操作：")]),a._v(" "),v("ul",[v("li",[a._v("Storage.setItem(keyName, keyValue) 增，改")]),a._v(" "),v("li",[a._v("Storage.removeItem(keyName) 删")]),a._v(" "),v("li",[a._v("Storage.getItem(keyName) 查")]),a._v(" "),v("li",[a._v("Storage.clear() 清空")])]),a._v(" "),v("p",[a._v("storage 事件：\nwindow.onstorage")]),a._v(" "),v("h3",{attrs:{id:"video-and-audio-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#video-and-audio-api"}},[a._v("#")]),a._v(" Video and Audio API")]),a._v(" "),v("p",[a._v("我们可以通过  "),v("code",[a._v("<video>")]),a._v(" 和 "),v("code",[a._v("<audio>")]),a._v(" 元素来承载音视频内容。音视频相关API大多相同。")]),a._v(" "),v("ul",[v("li",[a._v("src 指定资源源")]),a._v(" "),v("li",[a._v("controls 控制视频和音频播放")]),a._v(" "),v("li",[a._v("autoplay 音频或视频立即开始播放，同时加载页面的其余部分。建议您不要使用。")]),a._v(" "),v("li",[a._v("loop 视频（或音频）在完成后再次开始播放。建议您不要使用。")]),a._v(" "),v("li",[a._v("muted 默认情况下关闭声音的情况下播放媒体。")]),a._v(" "),v("li",[a._v("poster 将图像的URL作为其值，该图像将在播放视频之前显示。它旨在用于启动或广告屏幕。")]),a._v(" "),v("li",[a._v("preload 此属性用于缓冲大文件。")])]),a._v(" "),v("h3",{attrs:{id:"canvas-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#canvas-api"}},[a._v("#")]),a._v(" Canvas API")]),a._v(" "),v("p",[a._v("Canvas API 通过的 JavaScript 和 HTML "),v("code",[a._v("<canvas>")]),a._v(" 元素绘制图形。除此之外，它还可用于动画，游戏图形，数据可视化，照片处理和实时视频处理。")]),a._v(" "),v("h3",{attrs:{id:"webgl-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webgl-api"}},[a._v("#")]),a._v(" WebGL API")]),a._v(" "),v("p",[a._v("WebGL API 用于在任何兼容的Web浏览器中呈现交互式 3D 和 2D 图形，而无需使用插件。 WebGL 通过引入一个与可以在 HTML5 "),v("code",[a._v("<canvas>")]),a._v(" 元素中使用的 OpenGL ES 2.0 紧密相符的 API 来实现这一点。")]),a._v(" "),v("h3",{attrs:{id:"svg-支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-支持"}},[a._v("#")]),a._v(" SVG 支持")]),a._v(" "),v("p",[a._v("SVG 是一种基于 XML 的标记语言，用于描述基于二维的矢量图形。SVG 本质上是描述图形的 HTML 文本。")]),a._v(" "),v("h3",{attrs:{id:"web-workers-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-workers-api"}},[a._v("#")]),a._v(" Web Workers API")]),a._v(" "),v("p",[a._v("Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，他们可以使用 XMLHttpRequest 执行 I/O 。一旦创建， 一个 worker 可以将消息发送到创建它的 JavaScript 代码, 通过将消息发布到该代码指定的事件处理程序（反之亦然）。")]),a._v(" "),v("h3",{attrs:{id:"history-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#history-api"}},[a._v("#")]),a._v(" History API")]),a._v(" "),v("p",[a._v("DOM window 对象通过 history 对象提供了对浏览器历史的访问。它暴露了很多有用的方法和属性，允许你在用户浏览历史中向前和向后跳转，同时——从 HTML5 开始——提供了对 history 栈中内容的操作。")]),a._v(" "),v("h3",{attrs:{id:"fullscreen-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen-api"}},[a._v("#")]),a._v(" Fullscreen API")]),a._v(" "),v("p",[a._v("Fullscreen API 为使用用户的整个屏幕展现网络内容提供了一种简单的方式。这种 API 让你可以简单地控制浏览器，使得一个元素与其子元素，如果存在的话，可以占据整个屏幕，并在此期间，从屏幕上隐藏所有的浏览器用户界面以及其他应用。")]),a._v(" "),v("h3",{attrs:{id:"html-drag-and-drop-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-drag-and-drop-api"}},[a._v("#")]),a._v(" HTML Drag and Drop API")]),a._v(" "),v("p",[a._v("HTML 拖放接口使应用程序能够在浏览器中使用拖放功能。通过这些功能，用户可以使用鼠标选择可拖动元素，将元素拖动到可放置元素，并通过释放鼠标按钮来放置这些元素。可拖动元素的一个半透明表示在拖动操作期间跟随鼠标指针。")]),a._v(" "),v("h2",{attrs:{id:"其它不常用-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它不常用-api"}},[a._v("#")]),a._v(" 其它不常用 API")]),a._v(" "),v("h3",{attrs:{id:"indexeddb-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb-api"}},[a._v("#")]),a._v(" IndexedDB API")]),a._v(" "),v("p",[a._v("IndexedDB 用于存储大量结构化数据（包括文件/ blob ）的客户端。此 API 使用索引来启用对此数据的高性能搜索。虽然 Web 存储对于存储较少量的数据很有用，但对于存储大量结构化数据却没那么有用。IndexedDB 提供了一个解决方案。")]),a._v(" "),v("p",[a._v("由于移动端的支持并非良好，此处不再详述。")]),a._v(" "),v("h3",{attrs:{id:"camera-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#camera-api"}},[a._v("#")]),a._v(" Camera API")]),a._v(" "),v("p",[a._v('通过 Camera API 你可以使用手机的摄像头拍照,然后把拍到的照片发送给当前网页。这些操作主要是通过一个 input 元素来实现的，其中该元素的 type 属性必须为 "file" ， accept 属性要允许图片格式，这样才能知道这个文件选择框是用来选择图片的。')]),a._v(" "),v("h3",{attrs:{id:"geolocation-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geolocation-api"}},[a._v("#")]),a._v(" Geolocation API")]),a._v(" "),v("p",[a._v("Geolocation API 允许用户向 Web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。")]),a._v(" "),v("h3",{attrs:{id:"检测设备方向支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检测设备方向支持"}},[a._v("#")]),a._v(" 检测设备方向支持")]),a._v(" "),v("p",[a._v("越来越多地，基于 Web 的设备能够确定它们的方向; 也就是说，它们可以报告指示相对于重力拉力的它们的取向的改变的数据。特别地，通过这些数据，像手机等一些手持设备可以实现自动调整旋转角度来保持显示直立，以及当设备旋转到宽屏时（宽度大于高度），自动提供宽屏的网页效果。")]),a._v(" "),v("h3",{attrs:{id:"webrtc-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-api"}},[a._v("#")]),a._v(" WebRTC API")]),a._v(" "),v("p",[a._v("WebRTC 是一种实时通信技术，它使 Web 应用程序和站点能够捕获和可选地传输音频或视频媒体，以及在浏览器之间交换任意数据而无需中介。包含 WebRTC 的标准集使得可以共享数据并执行对等的电话会议，而无需用户安装插件或任何其他第三方软件。")]),a._v(" "),v("p",[a._v("WebRTC由几个相互关联的API和协议组成，它们协同工作来实现这一目标。您可以在此处找到的文档将帮助您了解WebRTC的基础知识，如何设置和使用数据和媒体连接等。")])])}),[],!1,null,null,null);e.default=_.exports}}]);