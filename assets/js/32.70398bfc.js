(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{605:function(t,e,a){"use strict";a.r(e);var s=a(17),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-order-by"}},[t._v("#")]),t._v(" 1. order by")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("功能")]),t._v(" "),a("p",[a("code",[t._v("order by")]),t._v("关键字用于对结果集按照一个列或者多个列进行排序，其具有 asc（升序,默认,可以不写）和 desc（降序）两个关键字，且默认按照升序排列。")])]),t._v(" "),a("li",[a("p",[t._v("语法")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 列名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" 列名；\n")])])]),a("blockquote",[a("p",[t._v("注意，当"),a("code",[t._v("order by")]),t._v("和"),a("code",[t._v("where")]),t._v("一起使用的时候，需要先条件查询再排序，否则会报错。")])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("3.1 以字母顺序显示公司名称。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" company "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orderNumber "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Orders  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("orderNumber")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Apple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4698")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IBM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3532")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6953")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2356")])])])]),t._v(" "),a("p",[t._v("3.2 查询订单数大于 2000 的数据，结果以逆字母顺序显示公司名称，并以数字顺序显示顺序号")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Orders "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" orderNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" company "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("orderNumber "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("orderNumber")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2356")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6953")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IBM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3532")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Apple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4698")])])])])])]),t._v(" "),a("h3",{attrs:{id:"本文所用的数据表如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文所用的数据表如下"}},[t._v("#")]),t._v(" 本文所用的数据表如下")]),t._v(" "),a("h3",{attrs:{id:"orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orders"}},[t._v("#")]),t._v(" Orders")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("orderNumber")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IBM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3532")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2356")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Apple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4698")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("W3school")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6953")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);