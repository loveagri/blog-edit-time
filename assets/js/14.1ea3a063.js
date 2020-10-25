(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{515:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://coolshell.cn/articles/17061.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程参考"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("AUFS是一种联合文件系统 (Union File System, UnionFS, UFS)。AUFS又叫Another UnionFS，后来叫Alternative UnionFS，后来可能觉得不够霸气，叫成Advance UnionFS。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -t aufs -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dirs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("被挂载目录1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("被挂载目录2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("被挂载目录n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" none "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("挂载点"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"概括aufs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概括aufs"}},[t._v("#")]),t._v(" 概括AUFS")]),t._v(" "),s("h3",{attrs:{id:"一种分层的文件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一种分层的文件系统"}},[t._v("#")]),t._v(" 一种分层的文件系统")]),t._v(" "),s("ul",[s("li",[t._v("不同物理位置的目录和文件合并挂载到同一个目录")]),t._v(" "),s("li",[t._v("上层文件覆盖下层文件，逐层覆盖")]),t._v(" "),s("li",[t._v("最上层的文件可读写，其余的文件只读")])]),t._v(" "),s("h2",{attrs:{id:"aufs是什么：三个规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aufs是什么：三个规则"}},[t._v("#")]),t._v(" AUFS是什么：三个规则")]),t._v(" "),s("h3",{attrs:{id:"把不同物理位置的目录和文件合并mount到同一个挂载目录中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把不同物理位置的目录和文件合并mount到同一个挂载目录中"}},[t._v("#")]),t._v(" 把不同物理位置的目录和文件合并mount到同一个挂载目录中")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("那么在这个挂载目录下就可以同时看到来自所有这些物理位置的目录和文件了。")])]),t._v(" "),s("li",[s("p",[t._v("挂载多个物理位置时，挂载操作逐层进行，且只有一个物理位置是可读写的，其他的物理位置都是只读。这个可读写物理位置位于逻辑上的“顶层”。")])])]),t._v(" "),s("h3",{attrs:{id:"上层物理位置的文件覆盖下层物理位置的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上层物理位置的文件覆盖下层物理位置的文件"}},[t._v("#")]),t._v(" 上层物理位置的文件覆盖下层物理位置的文件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果没重名那啥事没有，有重名则最终读文件显示的文件内容是有这个文件的最上层物理位置的文件的内容。")])]),t._v(" "),s("li",[s("p",[t._v("这里说的最上层是指有这个文件的最上层物理位置，不一定是那个位于顶层的可读写物理位置。")])])]),t._v(" "),s("h3",{attrs:{id:"在这个目录下进行的写操作必定写入到顶层中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在这个目录下进行的写操作必定写入到顶层中"}},[t._v("#")]),t._v(" 在这个目录下进行的写操作必定写入到顶层中")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果写入的是几个物理位置上都没有的新文件或者就是可读写物理位置上的文件，则正常写入或者新建，啥事没有。")])]),t._v(" "),s("li",[s("p",[t._v("如果写入的是存在于某个只读位置的文件而不是顶层的文件，这个文件依然会写入到顶层，但是会按照上面那条上层覆盖下层的规则代替原来只读位置的文件mount在挂载目录下，此后的读取都会读取到这个新文件而不会读到那个只读物理位置上的文件。")])])]),t._v(" "),s("p",[t._v("（什么？你问文件修改是怎么回事？文件修改不就是先读取文件到内存进行修改操作再把改完的内容写回去么？按照上面这条规则就相当于读了只读位置的文件然后写到了可读写的位置（复制-修改-粘贴））")]),t._v(" "),s("h3",{attrs:{id:"在顶层删除文件或目录会发生什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在顶层删除文件或目录会发生什么？"}},[t._v("#")]),t._v(" 在顶层删除文件或目录会发生什么？")]),t._v(" "),s("ul",[s("li",[t._v("如果这个文件或目录只有顶层有而下层没有，正常删除，啥事没有。")]),t._v(" "),s("li",[t._v("如果下层还有这个文件，那么原来的位置会出现一个"),s("strong",[t._v("只读")]),t._v("的"),s("strong",[t._v("Whiteout文件")]),t._v("："),s("code",[t._v(".wh.<文件名>")])]),t._v(" "),s("li",[t._v("如果下层还有这个目录，"),s("strong",[t._v("那么原来的位置会出现一个")]),t._v("只读的"),s("strong",[t._v("Opaque目录")]),t._v("："),s("code",[t._v(".wh.__dir_opaque")])])]),t._v(" "),s("p",[t._v("注：如果建立了"),s("code",[t._v(".wh.<文件名>")]),t._v("或"),s("code",[t._v(".wh.__dir_opaque")]),t._v("，则会看到对应的文件或文件夹直接消失")]),t._v(" "),s("h2",{attrs:{id:"aufs用来干什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aufs用来干什么"}},[t._v("#")]),t._v(" AUFS用来干什么")]),t._v(" "),s("h3",{attrs:{id:"典型用例：linux系统急救光盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#典型用例：linux系统急救光盘"}},[t._v("#")]),t._v(" 典型用例：Linux系统急救光盘")]),t._v(" "),s("ul",[s("li",[t._v("将光盘和某个外接的硬盘或者U盘组成AUFS。根据上一节所述组成如下的AUFS结构：\n"),s("ul",[s("li",[t._v("光盘和外接盘合并mount到根目录")]),t._v(" "),s("li",[t._v("以外接盘为顶层可读写物理位置")])])]),t._v(" "),s("li",[t._v("按照AUFS规则不管，怎么修改根目录的文件，修改只会写入到顶层（外接盘），光盘不受任何影响")]),t._v(" "),s("li",[t._v("用正常方法mount要急救的系统盘，开始愉快的Hack")])]),t._v(" "),s("h3",{attrs:{id:"典型用例：docker-build和docker容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#典型用例：docker-build和docker容器"}},[t._v("#")]),t._v(" 典型用例：Docker build和Docker容器")]),t._v(" "),s("ul",[s("li",[t._v("读取Dockerfile，从Registry拉取指定的Image")]),t._v(" "),s("li",[t._v("创建一个新的虚拟磁盘，和Image一起mount到根目录下，即可形成容器：\n"),s("ul",[s("li",[t._v("把Image放在下层，新的虚拟磁盘放在上层")])])]),t._v(" "),s("li",[t._v("按照Dockerfile所指定的操作(docker build)或是用户手动对容器的内容进行各种修改：\n"),s("ul",[s("li",[t._v("按照AUFS规则，所有的改动都会被写到上层的新虚拟磁盘中，而不会对下层的Image造成影响")])])]),t._v(" "),s("li",[t._v("修改后的容器可以作为新的Image上传到Registry中，并且只需要上传新虚拟磁盘的内容即可")])]),t._v(" "),s("p",[t._v("正因为此种结构，Docker在从Registry处pull Image时是以“pulling fs layer”这样一层一层的方式下载。这里下载的每一层都是某个镜像开发者在前一层上创建的虚拟磁盘。")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/AUFS%E5%92%8CDocker.png",alt:"Docker里的AUFS"}})]),t._v(" "),s("p",[t._v("上图是一个典型的Apache服务器容器结构，在最下面的Kernel是Docker外面的操作系统内核，最底层的Image是Debian，上层的Image依次添加了emacs和Apache，最上层的writable部分即是正在运行的可读写的容器。")]),t._v(" "),s("h2",{attrs:{id:"附加知识：linux系统的启动过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附加知识：linux系统的启动过程"}},[t._v("#")]),t._v(" 附加知识："),s("RouterLink",{attrs:{to:"/Docker/Linux启动过程.html"}},[t._v("Linux系统的启动过程")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);