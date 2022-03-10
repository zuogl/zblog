(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{595:function(t,e,a){"use strict";a.r(e);var s=a(17),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-insert-into"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-insert-into"}},[t._v("#")]),t._v(" 1. insert into")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("功能")]),t._v(" "),a("p",[a("code",[t._v("insert into")]),t._v("语句用于向表中插入新记录,有指定列名和不指定列名两种方式。")])]),t._v(" "),a("li",[a("p",[t._v("语法")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名称 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不指定列名的写法")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名称 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("列名称"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("，列名称"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定列名称的写法")]),t._v("\n")])])]),a("p",[t._v("当我们采用不指定列名的写法的时候，插入的值是按照从前往后顺序插入的，且一定要完整，不能多不能少，否则会报错，每个值的属性需要与对应表中的列名属性相匹配;")]),t._v(" "),a("p",[t._v("当我们采用指定列名称的写法时，值和前边的列名称是一一对应的，要求数量一致，值的类型和列的规定类型一致。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("如果要为表中的每一列都插入数据，推荐使用第一种写法；如果只是为特定列插入数据，推荐使用第二种")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("让我们为 teachers 插入两行数据，其语句及结果如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" teachers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaozuo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zuogl448@163.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" teachers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zuotongxue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("age")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("country")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Eastern heretic'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'eastern.heretic@gmail.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'UK'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Northern Beggar'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'northern.beggar@qq.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("21")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'CN'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Western Venom'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'western.venom@163.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("28")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'USA'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Southern Emperor'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'southern.emperor@qq.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("21")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'JP'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Linghu Chong'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("None")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'CN'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'xiaozuo'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'zuogl448@163.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("26")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'CN'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'zuotongxue'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("27")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])])])]),t._v(" "),a("h3",{attrs:{id:"本文所用的数据表如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文所用的数据表如下"}},[t._v("#")]),t._v(" 本文所用的数据表如下")]),t._v(" "),a("p",[t._v("teachers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("age")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("country")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Eastern heretic'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'eastern.heretic@gmail.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'UK'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Northern Beggar'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'northern.beggar@qq.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("21")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'CN'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Western Venom'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'western.venom@163.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("28")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'USA'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Southern Emperor'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'southern.emperor@qq.com'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("21")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'JP'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Linghu Chong'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("None")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'CN'")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);