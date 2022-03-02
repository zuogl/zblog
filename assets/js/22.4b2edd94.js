(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{587:function(t,e,a){"use strict";a.r(e);var l=a(17),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-distinct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-distinct"}},[t._v("#")]),t._v(" 1. distinct")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("功能")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("select")]),t._v("语句的查询结果中，返回的结果可能有重复值，但是，有时候我们只希望看到唯一不同的值，这就是"),a("code",[t._v("distinct")]),t._v("的作用。")])]),t._v(" "),a("li",[a("p",[t._v("语法")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" 列名称 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名称\n")])])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("如果我们直接用 select 来筛选 Orders 表中的 company 的话，结果如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" company "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ali")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tengxun")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tengxun")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ali")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")])])])]),t._v(" "),a("p",[t._v("但是，我们仅仅希望列出所有的公司，而不希望看到重复的公司，就可以用到"),a("code",[t._v("distinct")]),t._v("语句了")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" company "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ali")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tengxun")])])])])])]),t._v(" "),a("h3",{attrs:{id:"本文所用的数据表如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文所用的数据表如下"}},[t._v("#")]),t._v(" 本文所用的数据表如下")]),t._v(" "),a("p",[t._v("Orders 表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("company")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("orderNumber")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ali")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2335")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tengxun")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3362")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2203")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tengxun")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5563")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ali")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3302")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("baidu")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6635")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);