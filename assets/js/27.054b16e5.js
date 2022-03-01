(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{596:function(t,s,a){"use strict";a.r(s);var r=a(17),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack基础用法"}},[t._v("#")]),t._v(" webpack基础用法")]),t._v(" "),a("h2",{attrs:{id:"_1-核心概念之entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-核心概念之entry"}},[t._v("#")]),t._v(" 1.  核心概念之entry")]),t._v(" "),a("p",[t._v("入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。")]),t._v(" "),a("p",[t._v("单入口写法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("多入口文件写法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("adminApp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/adminApp.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-核心概念之output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心概念之output"}},[t._v("#")]),t._v(" 2.  核心概念之output")]),t._v(" "),a("p",[t._v("output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件。一般在配置output时，需要配置输出的路径和文件名。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// filename:'bundle.js' //打包完后的名字（单入口写法）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//多入口写法，这个name会自动读取每个入口的名字并使用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-核心概念之loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-核心概念之loaders"}},[t._v("#")]),t._v(" 3.  核心概念之Loaders")]),t._v(" "),a("ul",[a("li",[t._v("Webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载，并将其加入到依赖树中。")]),t._v(" "),a("li",[t._v("Loader 本身也是运行在 node.js 环境中的 JavaScript 模块")]),t._v(" "),a("li",[t._v("本身是一个函数，接受源文件作为参数，返回转换的结果")]),t._v(" "),a("li",[t._v("loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 less-loader。")])]),t._v(" "),a("h3",{attrs:{id:"_3-1-常见的loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-常见的loaders"}},[t._v("#")]),t._v(" 3.1  常见的Loaders")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("loader名称")]),t._v(" "),a("th",[t._v("功能简述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("babel-loader")]),t._v(" "),a("td",[t._v("将ES6/7等新语法转换为浏览器能接收的语法")])]),t._v(" "),a("tr",[a("td",[t._v("css-loader")]),t._v(" "),a("td",[t._v("支持.css文件的加载和解析")])]),t._v(" "),a("tr",[a("td",[t._v("less-loader")]),t._v(" "),a("td",[t._v("将less文件转换成css")])]),t._v(" "),a("tr",[a("td",[t._v("ts-loader")]),t._v(" "),a("td",[t._v("将TS转换成JS")])]),t._v(" "),a("tr",[a("td",[t._v("file-loader")]),t._v(" "),a("td",[t._v("进行图片、字体等的打包")])]),t._v(" "),a("tr",[a("td",[t._v("raw-loader")]),t._v(" "),a("td",[t._v("将文件以字符串的形式导入")])]),t._v(" "),a("tr",[a("td",[t._v("thread-loader")]),t._v(" "),a("td",[t._v("多进程打包JS和CSS")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-基本写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-基本写法"}},[t._v("#")]),t._v(" 3.2 基本写法")]),t._v(" "),a("p",[a("code",[t._v("loader")]),t._v("在配置时，写在"),a("code",[t._v("module")]),t._v("下的"),a("code",[t._v("rules")]),t._v("中，"),a("code",[t._v("rules")]),t._v("是一个数组，数组中的每一项代表一个"),a("code",[t._v("loader")]),t._v("的配置项，")]),t._v(" "),a("p",[t._v("在每个配置项中，一般都会有如下两个参数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- test: 用于指定匹配规则,一般是正则表达式\n- use:用于指定要使用的loade,是一个数组。该数组中，执行loader的顺序是从下到上，从右到左。\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.less$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查文件是否以.less结尾（检查是否是less文件）")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组中loader执行是从下到上，从右到左顺序执行")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建style标签，添加上js中的css代码")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将css以commonjs方式整合到js文件中")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将less文件解析成css文件")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"_4-核心概念之plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-核心概念之plugins"}},[t._v("#")]),t._v(" 4. 核心概念之Plugins")])])}),[],!1,null,null,null);s.default=e.exports}}]);