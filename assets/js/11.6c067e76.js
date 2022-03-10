(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{571:function(s,t,a){s.exports=a.p+"assets/img/sql01.c7756837.png"},603:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"_1-cmd窗口操作数据库常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-cmd窗口操作数据库常用命令"}},[s._v("#")]),s._v(" 1. cmd窗口操作数据库常用命令")]),s._v(" "),e("blockquote",[e("p",[s._v("注意，请用管理员打开，否则可能会出错。")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("启动关闭mysql")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("net "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//启动mysql服务")]),s._v("\nnet stop mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关闭mysql服务")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("连接mysql")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n然后输入密码，出现如下图片说明连接成功\n")])])]),e("p",[e("img",{attrs:{src:a(571),alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("断开连接")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意，sql语句需要以;结尾")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("查看mysql中的所有的数据库")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("使用某个库")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" 库名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个操作后，后续的所有命令都是针对这个库的。")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("A表(teachers)的主键被B表引用为外键，A主键添加自增约束报错")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FOREIGN_KEY_CHECKS "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关闭外键检查")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("teachers "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行字增")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FOREIGN_KEY_CHECKS "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启外键检查")]),s._v("\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);