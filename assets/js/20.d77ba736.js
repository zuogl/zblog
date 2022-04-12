(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{596:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-当远程分支存在-本地分支不存在-可以使用下边的命令来快速的关联跟踪远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-当远程分支存在-本地分支不存在-可以使用下边的命令来快速的关联跟踪远程分支"}},[t._v("#")]),t._v(" 1. 当远程分支存在，本地分支不存在，可以使用下边的命令来快速的关联跟踪远程分支")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("track origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("远程分支名\n")])])]),a("p",[t._v("比如以下案例，本地分支只有3个，远程分支有5个。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ git branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a\n  hzfh\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" hzfh_v2\n  master\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hzfh\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hzfh_v2\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("waihuv2\n")])])]),a("p",[t._v("我们现在想在本地新建一个本地分支，并和远程分支"),a("code",[t._v("remotes/origin/origin/waihuv2")]),t._v("建立关联；可以使用如下命令：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("track origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("waihuv2\n")])])]),a("p",[t._v("然后就可以看到，本地已经多了一个分支，并且成功和远程分支"),a("code",[t._v("remotes/origin/origin/waihuv2")]),t._v("建立了关联。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ git branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a\n  hzfh\n  hzfh_v2\n  master\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("waihuv2\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hzfh\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hzfh_v2\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("master\n  remotes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("waihuv2\n")])])]),a("h2",{attrs:{id:"_2-git冲突解决之vscode中一键全部采用传入的更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git冲突解决之vscode中一键全部采用传入的更改"}},[t._v("#")]),t._v(" 2. git冲突解决之vscode中一键全部采用传入的更改")]),t._v(" "),a("p",[t._v("当你的某个文件中，希望全部采用传入的更改，如果一个一个的去点击的话，太浪费时间了。可以有如下的简单操作，按"),a("code",[t._v("ctrl+shift+p")]),t._v("调出顶部的命令行窗口，然后输入"),a("code",[t._v("merge")]),t._v(",选择"),a("code",[t._v("Merge Conflict:Accept All Incoming")]),t._v("就可以瞬间搞定啦！")])])}),[],!1,null,null,null);s.default=e.exports}}]);