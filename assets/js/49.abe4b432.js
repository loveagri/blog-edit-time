(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{548:function(t,a,s){"use strict";s.r(a);var v=s(4),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("将原本单中心单服务器的C/S模式网站分布到数个离用户更近的缓存服务器上，当用户访问网站时让用户从缓存服务器上取数据，从而缓解中心服务器的负担。")]),t._v(" "),s("h2",{attrs:{id:"实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),s("h3",{attrs:{id:"没有cdn的网络访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有cdn的网络访问"}},[t._v("#")]),t._v(" 没有CDN的网络访问")]),t._v(" "),s("ul",[s("li",[t._v("输入URL")]),t._v(" "),s("li",[t._v("浏览器向DNS服务器查找网站服务器IP地址")]),t._v(" "),s("li",[t._v("通过IP地址从网站服务器处获取网站")])]),t._v(" "),s("p",[s("img",{attrs:{src:"i/%E6%97%A0CDN%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.png",alt:"无CDN"}})]),t._v(" "),s("h3",{attrs:{id:"有cdn的网络访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有cdn的网络访问"}},[t._v("#")]),t._v(" 有CDN的网络访问")]),t._v(" "),s("ul",[s("li",[t._v("输入URL")]),t._v(" "),s("li",[t._v("浏览器向DNS服务器查找IP地址")]),t._v(" "),s("li",[t._v("DNS服务器把域名解析权交给某个CDN专用DNS服务器")]),t._v(" "),s("li",[t._v("专用DNS服务器返回给用户的是负载均衡器的IP地址")]),t._v(" "),s("li",[t._v("浏览器向负载均衡器处请求网站")]),t._v(" "),s("li",[t._v("负载均衡器再指示浏览器跳转到某个CDN服务器(返回跳转指令和IP或者域名)")]),t._v(" "),s("li",[t._v("浏览器跳转到CDN服务器处获取网站")])]),t._v(" "),s("p",[s("img",{attrs:{src:"i/%E6%9C%89CDN%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.png",alt:"有CDN"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);