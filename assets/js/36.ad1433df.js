(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{604:function(t,e,a){"use strict";a.r(e);var s=a(17),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-获取当前时间日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取当前时间日期"}},[t._v("#")]),t._v(" 1. 获取当前时间日期")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[t._v("在 SQL 中，获取当前时间常用的又如下三种：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("now()")]),t._v(":返回当前日期和时间，格式"),a("code",[t._v("YYYY-MM-DD hh:mm:ss")])]),t._v(" "),a("li",[a("code",[t._v("curdate()")]),t._v(":返回当前日期，格式"),a("code",[t._v("YYYY-MM-DD")])]),t._v(" "),a("li",[a("code",[t._v("curtime()")]),t._v(":返回当前时间，格式"),a("code",[t._v("hh:mm:ss")])])]),t._v(" "),a("p",[t._v("在使用"),a("code",[t._v("now()")]),t._v("和"),a("code",[t._v("curtime()")]),t._v("时，如果需要精确到秒以后的话，可以在()中加数字，比如"),a("code",[t._v("now(3)")]),t._v("就是表示精确到毫秒，"),a("code",[t._v("2022-03-04 11:47:30.321")])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("向记录表"),a("code",[t._v("records")]),t._v("中插入当前的日期。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" records "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("注意需要用括号将"),a("code",[t._v("curdate()")]),t._v("括起来。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-提取日期和时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-提取日期和时间"}},[t._v("#")]),t._v(" 2. 提取日期和时间")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[a("code",[t._v("date()")]),t._v("函数可以从目标中提取出日期，"),a("code",[t._v("time()")]),t._v("函数可以从目标中提取出时间。")])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("查询"),a("code",[t._v("courses")]),t._v("表中，2020 年 8 月前创建的课程，将创建时间以"),a("code",[t._v("created_date")]),t._v("返回，并返回课程名称。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" created_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" created_at "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-08-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_date")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Advanced Algorithms'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-06-01'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'System Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-07-18'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Django'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-02-29'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Web'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-04-22'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Artificial Intelligence'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-05-13'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Java P6+'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-01-19'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Data Analysis'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-07-12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Dynamic Programming'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-08-18'")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_3-提取指定的时间信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-提取指定的时间信息"}},[t._v("#")]),t._v(" 3. 提取指定的时间信息")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[a("code",[t._v("extract()")]),t._v("函数可以从目标中提取出指定的日期格式。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 时间列"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中"),a("code",[t._v("unit")]),t._v("是需要返回的时间部分,如："),a("code",[t._v("year")]),t._v("、"),a("code",[t._v("month")]),t._v("、"),a("code",[t._v("day")]),t._v("、"),a("code",[t._v("hour")]),t._v("、"),a("code",[t._v("minute")]),t._v("、"),a("code",[t._v("second")]),t._v("等。")])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("查询"),a("code",[t._v("courses")]),t._v("表中，返回创建时间以及课程名称，并从创建时间中提取出创建的具体小时和秒数分别以"),a("code",[t._v("created_hour")]),t._v("和"),a("code",[t._v("created_second")]),t._v("，将创建时间以"),a("code",[t._v("created_date")]),t._v("返回，并返回课程名称。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hour")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" created_hour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("second")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" created_second "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_at")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_hour")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_second")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Advanced Algorithms'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-06-01T09:10:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'System Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-07-18T10:11:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Django'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-02-29T12:10:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Web'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-04-22T13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Big Data'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-09-11T16:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Artificial Intelligence'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-05-13T18:12:30'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Java P6+'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-01-19T13:31:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Data Analysis'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-07-12T13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Object Oriented Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-08-08T13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Dynamic Programming'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-08-18T20:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_4-格式化输出日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-格式化输出日期"}},[t._v("#")]),t._v(" 4.格式化输出日期")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[t._v("我们可以使用"),a("code",[t._v("DATE_FORMAT()")]),t._v("来格式化输出日期和时间。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中，"),a("code",[t._v("data")]),t._v("是一个有效的日期或者时间，"),a("code",[t._v("format")]),t._v("是要输出的格式。"),a("strong",[t._v("返回结果日期是字符串格式")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3school.com.cn/sql/func_date_format.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见的时间 formate 格式"),a("OutboundLink")],1)])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("查询"),a("code",[t._v("courses")]),t._v("表，查询课程创建时间，按照"),a("code",[t._v("年-月-日 时:分:秒")]),t._v("的格式返回结果，返回列名显示为"),a("code",[t._v("DATE_FORMAT")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y-%m-%d %H:%i:%s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" DATE_FORMAT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("DATE_FORMAT")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-06-01 09:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-07-18 10:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-02-29 12:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-04-22 13:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-09-11 16:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-05-13 18:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-01-19 13:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-07-12 13:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-08-08 13:03:12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-08-18 20:03:12'")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_5-修改时间-增加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改时间-增加"}},[t._v("#")]),t._v(" 5. 修改时间-增加")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[a("code",[t._v("date_add()")]),t._v("函数是常用的时间函数之一，用于向日期添加指定的时间间隔。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" date_add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interval")]),t._v(" expr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("其中，"),a("code",[t._v("date")]),t._v("是要被操作的时间，为起始时间;")]),t._v(" "),a("li",[a("code",[t._v("expr")]),t._v(",是希望添加的时间间隔的数值("),a("code",[t._v("expr")]),t._v("是一个字符串，对于负值的间隔，可以以 ”-“ 开头);")]),t._v(" "),a("li",[t._v("type 是具体的数据类型,表示加上时间间隔的单位和"),a("code",[t._v("extract()")]),t._v("函数的"),a("code",[t._v("unit")]),t._v("一样。")])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("修改"),a("code",[t._v("courses")]),t._v("表中课程的课程创建日期，将课程创建日期均推迟一天，最后返回课程名称"),a("code",[t._v("name")]),t._v("及修改后的课程创建时间，修改后的课程创建时间命名为"),a("code",[t._v("new_created")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("date_add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interval")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("new_created")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Advanced Algorithms'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-06-02'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'System Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-07-19'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Django'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-03-01'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Web'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-04-23'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Big Data'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-09-12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Artificial Intelligence'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-05-14'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Java P6+'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-01-20'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Data Analysis'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-07-13'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Object Oriented Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-08-09'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("'Dynamic Programming'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-08-19'")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_5-修改时间-减少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改时间-减少"}},[t._v("#")]),t._v(" 5. 修改时间-减少")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[a("code",[t._v("date_sub()")]),t._v("函数是常用的时间函数之一，用于向日期减去指定的时间间隔。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interval")]),t._v(" expr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("其中，"),a("code",[t._v("date")]),t._v("是要被操作的时间，为起始时间;")]),t._v(" "),a("li",[a("code",[t._v("expr")]),t._v(",是希望添加的时间间隔的数值("),a("code",[t._v("expr")]),t._v("是一个字符串，对于负值的间隔，可以以 ”-“ 开头);")]),t._v(" "),a("li",[t._v("type 是具体的数据类型,表示加上时间间隔的单位和"),a("code",[t._v("extract()")]),t._v("函数的"),a("code",[t._v("unit")]),t._v("一样。")])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("修改"),a("code",[t._v("courses")]),t._v("表中课程的课程创建日期，将课程创建日期均提前一天，最后返回课程名称"),a("code",[t._v("name")]),t._v("及修改后的课程创建时间，修改后的课程创建时间命名为"),a("code",[t._v("new_created")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interval")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("new_created")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Advanced Algorithms'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-05-31'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'System Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-07-17'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Django'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-02-28'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Web'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-04-21'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Big Data'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-09-10'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Artificial Intelligence'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-05-12'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Java P6+'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-01-18'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Data Analysis'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-07-11'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Object Oriented Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-08-07'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Dynamic Programming'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-08-17'")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_6-时间计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-时间计算"}},[t._v("#")]),t._v(" 6. 时间计算")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语法")]),t._v(" "),a("p",[a("code",[t._v("datediff()")]),t._v("函数可以计算天数差，"),a("code",[t._v("timestampdiff()")]),t._v("函数可以计算指定类型(年、月、分、周等)的时间差;")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" datediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("时间"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("时间"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 别名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" timestampdiff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("时间"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("时间"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 别名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("例子")]),t._v(" "),a("p",[t._v("查询"),a("code",[t._v("courses")]),t._v("表,计算课程创建时间与"),a("code",[t._v("2022-03-07")]),t._v("的月数差，返回列名显示为"),a("code",[t._v("monthDiff")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" timestampdiff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-03-07'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" monthDiff "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" courses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("monthDiff")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-6")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("21")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("13")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-5")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("18")])])])])])]),t._v(" "),a("h3",{attrs:{id:"本文所用的数据表如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文所用的数据表如下"}},[t._v("#")]),t._v(" 本文所用的数据表如下")]),t._v(" "),a("h3",{attrs:{id:"courses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#courses"}},[t._v("#")]),t._v(" courses")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("student_count")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_at")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("teacher_id")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Advanced Algorithms'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("880")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-6-1 09:10:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'System Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1350")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-7-18 10:11:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Django'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("780")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-2-29 12:10:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Web'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("340")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-4-22 13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Big Data'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("700")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-9-11 16:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Artificial Intelligence'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1660")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-5-13 18:12:30'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Java P6+'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("780")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-1-19 13:31:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Data Analysis'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("500")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2019-7-12 13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Object Oriented Design'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2020-8-8 13:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'Dynamic Programming'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'2018-8-18 20:01:12'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);