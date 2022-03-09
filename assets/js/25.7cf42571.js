(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{591:function(t,e,a){"use strict";a.r(e);var s=a(17),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-update"}},[t._v("#")]),t._v(" 1.update")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("功能")]),t._v(" "),a("p",[a("code",[t._v("update")]),t._v("语句用于修改表中的数据。")])]),t._v(" "),a("li",[a("p",[t._v("语法")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" 要跟新的数据列名"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 新的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("要跟新的数据列名"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 新的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 列名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 值\n")])])]),a("p",[a("strong",[t._v("请注意一下，where 语句，where 子句规定了哪条记录或者哪些记录需要更新，如果忽略，所有的记录都会被更新。")])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v('我们为 lastName 是 "Wilson" 的人添加 firstName')]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fred'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wilson'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("address")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("city")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Gates'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Bill'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Xuanwumen 10'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("' Beijing'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Wilson'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Fred'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Champs-Elysees '")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("p",[t._v("我们来尝试一下一次性更新多列的数据，将 lastName 是 \"Wilson\" 的人的 firstName 更改为'Steve',并将其 city 设置为'San Francisco'")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Steve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("city "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'San Francisco'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wilson'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("address")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("city")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Gates'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Bill'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Xuanwumen 10'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("' Beijing'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Wilson'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Steve'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Champs-Elysees '")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'San Francisco'")])])])])])]),t._v(" "),a("h3",{attrs:{id:"本文所用的数据表如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文所用的数据表如下"}},[t._v("#")]),t._v(" 本文所用的数据表如下")]),t._v(" "),a("p",[t._v("Person")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("address")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("city")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Gates'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Bill'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Xuanwumen 10'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("' Beijing'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Wilson'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Champs-Elysees '")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])])])}),[],!1,null,null,null);e.default=l.exports}}]);