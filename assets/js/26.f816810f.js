(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{281:function(t,s,n){"use strict";n.r(s);var a=n(30),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"代码目录说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码目录说明"}},[t._v("#")]),t._v(" 代码目录说明")]),t._v(" "),n("h2",{attrs:{id:"前端目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端目录"}},[t._v("#")]),t._v(" 前端目录")]),t._v(" "),n("p",[t._v("推荐先看 router.js, 再从 front-end/h5/src/views/Editor.vue 开始了解，这里是编辑器的入口")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("front"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h5"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src                # 前端源码目录：包含编辑器、作品管理、表单统计等部分\n├── assets\n│   ├── "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("403.")]),t._v("svg\n│   ├── "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("svg\n│   ├── "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500.")]),t._v("svg\n│   ├── logo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│   ├── placeholder"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("work"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svg\n│   └── unauth"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("page"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("illustration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svg\n├── components\n│   ├── core                    # 核心部分\n│   │   ├── editor              # 编辑器模块\n│   │   │   ├── canvas          # 画布：编辑模式 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 快速预览模式\n│   │   │   │   ├── edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js     # 编辑模式对应画布\n│   │   │   │   └── preview"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  # 快速预览模式对应的画布\n│   │   │   ├── edit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("panel      # 编辑器右侧的编辑、配置面板\n│   │   │   │   ├── action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   #\n│   │   │   │   ├── props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    # 组件属性编辑面板\n│   │   │   │   └── script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   # 自定义脚本\n│   │   │   ├── header\n│   │   │   ├── modals\n│   │   │   │   └── preview"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue # 预览弹窗\n│   │   │   ├── shortcuts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("panel # 插件列表对应的快捷按钮\n│   │   │   │   ├── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   │   │   └── shortcut"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── models              # 编辑器中的各种 model\n│   │   │   ├── element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js      # 插件在画布中对应的元素\n│   │   │   ├── page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js         # 页面\n│   │   │   └── work"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js         # 整个"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v("作品\n│   │   ├── styles\n│   │   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scss\n│   │   └── support             # 辅助支持部分\n│   │       └── shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        # 拖拽改变元素形状\n│   ├── plugins                 # "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("插件列表：按钮、表单")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("提交按钮"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("输入框"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("、文字、图片\n│   │   ├── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("picture"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\n│   │   ├── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("picture"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   └── lbp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   └── HelloWorld"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├── constants                  # 常量配置\n│   └── api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                 # 后端 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" 接口地址等配置\n├── mixins                     # 加载插件\n│   └── load"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n├── pages\n│   ├── editor                 # 核心编辑器入口\n│   ├── home\n│   └── index\n├── store\n│   ├── modules\n│   │   ├── editor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── loading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   ├── visible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   └── work"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   ├── plugins               # vuex 插件\n│   │   └── undo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("redo         # 撤销、重做\n│   │       ├── History"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │       └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n├── utils\n│   ├── element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   ├── http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   └── strapi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n├── views\n│   ├── work"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("manager\n│   │   ├── form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stat\n│   │   │   ├── column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│   │   │   ├── detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   │   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   │   ├── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   │   └── list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   ├── About"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   ├── Editor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue           # 编辑器入口，对核心编辑器做了一层包装，在这里加载插件列表\n│   └── Home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├── App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├── engine"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js          # 用于在手机端预览、查看"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v("作品的入口\n├── main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                  # 编辑器 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" work"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("manager")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("作品管理页面"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 的入口\n├── registerServiceWorker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n└── router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                # 页面路由\n")])])]),n("h2",{attrs:{id:"组件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件说明"}},[t._v("#")]),t._v(" 组件说明")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("lbp-")]),t._v(" 全称为 "),n("code",[t._v("lu-ban-plugin:")]),t._v(" "),n("code",[t._v("鲁班H5的插件")]),t._v("，位置 "),n("code",[t._v("front-end/h5/src/components/plugins")])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("p",[t._v("欢迎大家到"),n("a",{attrs:{href:"https://support.qq.com/products/93432/",target:"_blank",rel:"noopener noreferrer"}},[t._v("鲁班H5-社区"),n("OutboundLink")],1),t._v(" 交流，在这里可以提问、反馈意见和建议，与作者直接互动")])]),t._v(" "),n("Vssue",{attrs:{issueId:"9"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);