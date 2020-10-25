(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{539:function(s,e,t){"use strict";t.r(e);var a=t(4),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("节点亲和性（详见"),t("RouterLink",{attrs:{to:"/Kubernetes/Pod亲和性调度.html"}},[s._v("这里")]),s._v("） 是 Pod 的一种属性，它使 Pod 被吸引到一类特定的节点。 这可能出于一种偏好，也可能是硬性要求。 Taint（污点）则相反，"),t("strong",[s._v("它使节点能够排斥一类特定的 Pod")]),s._v("。")],1),s._v(" "),t("p",[s._v("容忍度（Tolerations）是应用于 Pod 上的，允许（但并不要求）Pod 调度到带有与之匹配的污点的节点上。")]),s._v(" "),t("p",[s._v("污点和容忍度（Toleration）相互配合，可以用来避免 Pod 被分配到不合适的节点上。 每个节点上都可以应用一个或多个污点，这表示对于那些不能容忍这些污点的 Pod，是不会被该节点接受的。")])]),s._v(" "),t("p",[s._v("比如用户希望把 Master 节点保留给 Kubernetes 系统组件使用，或者把一组具有特殊资源预留给某些 pod，则污点就很有用了，pod 不会再被调度到 taint 标记过的节点。我们使用kubeadm搭建的集群默认就给 master 节点添加了一个污点标记，所以我们看到我们平时的 pod 都没有被调度到 master 上去：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl describe node master\nName:               master\nRoles:              master\nLabels:             beta.kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n                    beta.kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\n                    kubernetes.io/hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master\n                    node-role.kubernetes.io/master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nTaints:             node-role.kubernetes.io/master:NoSchedule\nUnschedulable:      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("其中有一条关于 Taints 的信息："),t("code",[s._v("node-role.kubernetes.io/master:NoSchedule")]),s._v("，就是master节点的污点标记。")]),s._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("h3",{attrs:{id:"节点上的taint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点上的taint"}},[s._v("#")]),s._v(" 节点上的"),t("code",[s._v("taint")])]),s._v(" "),t("h4",{attrs:{id:"在节点上添加污点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在节点上添加污点"}},[s._v("#")]),s._v(" 在节点上添加污点")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl taint nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("污点名key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("污点值value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("污点效果effect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例如在一个节点"),t("code",[s._v("node1")]),s._v("上添加三个污点，其中污点"),t("code",[s._v("key1")]),s._v("同时使用两种不同的效果：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl taint nodes node1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1:NoSchedule\nkubectl taint nodes node1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1:NoExecute\nkubectl taint nodes node1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2:NoSchedule\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"从节点上删除污点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从节点上删除污点"}},[s._v("#")]),s._v(" 从节点上删除污点")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl taint nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("污点名key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("污点效果effect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("-\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意最后的减号")]),s._v(" "),t("p",[s._v("例如删除掉节点"),t("code",[s._v("node1")]),s._v("上的一个污点：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl taint nodes node1 key2:NoSchedule-\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"pod上的tolerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pod上的tolerations"}},[s._v("#")]),s._v(" Pod上的"),t("code",[s._v("tolerations")])]),s._v(" "),t("p",[s._v("例如，若要调度到上述"),t("code",[s._v("node1")]),s._v("节点，Pod必须这么写：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Pod模板")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Equal"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSchedule"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Equal"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoExecute"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("一个容忍度和一个污点相“匹配”是指它们有一样的键名和效果，并且：")]),s._v(" "),t("ul",[t("li",[s._v("如果 "),t("code",[s._v("operator")]),s._v(" 是 "),t("code",[s._v("Exists")]),s._v(" （此时容忍度不能指定 "),t("code",[s._v("value")]),s._v("），或者")]),s._v(" "),t("li",[s._v("如果 "),t("code",[s._v("operator")]),s._v(" 是 "),t("code",[s._v("Equal")]),s._v(" ，则它们的 "),t("code",[s._v("value")]),s._v(" 应该相等")])]),s._v(" "),t("blockquote",[t("p",[s._v("说明：")]),s._v(" "),t("p",[s._v("存在两种特殊情况：")]),s._v(" "),t("p",[s._v("如果一个容忍度的 "),t("code",[s._v("key")]),s._v(" 为空且 "),t("code",[s._v("operator")]),s._v(" 为 "),t("code",[s._v("Exists")]),s._v("， 表示这个容忍度与任意的 "),t("code",[s._v("key")]),s._v(" 、"),t("code",[s._v("value")]),s._v(" 和 "),t("code",[s._v("effect")]),s._v(" 都匹配，即这个容忍度能容忍任意 "),t("code",[s._v("taint")]),s._v("。")]),s._v(" "),t("p",[s._v("如果 "),t("code",[s._v("effect")]),s._v(" 为空，则可以与所有键名 key 的效果相匹配。")])]),s._v(" "),t("h2",{attrs:{id:"污点效果effect详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#污点效果effect详解"}},[s._v("#")]),s._v(" 污点效果"),t("code",[s._v("effect")]),s._v("详解")]),s._v(" "),t("blockquote",[t("p",[s._v("您可以给一个节点添加多个污点，也可以给一个 Pod 添加多个容忍度设置。 Kubernetes 处理多个污点和容忍度的过程就像一个过滤器：从一个节点的所有污点开始遍历， 过滤掉那些 Pod 中存在与之相匹配的容忍度的污点。余下未被过滤的污点的 "),t("code",[s._v("effect")]),s._v(" 值决定了 Pod 是否会被分配到该节点，特别是以下情况：")]),s._v(" "),t("ul",[t("li",[s._v("如果未被过滤的污点中存在至少一个 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoSchedule")]),s._v(" 的污点， 则 Kubernetes 不会将 Pod 分配到该节点。")]),s._v(" "),t("li",[s._v("如果未被过滤的污点中不存在 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoSchedule")]),s._v(" 的污点， 但是存在 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("PreferNoSchedule")]),s._v(" 的污点， 则 Kubernetes 会 "),t("em",[s._v("尝试")]),s._v(" 将 Pod 分配到该节点。")]),s._v(" "),t("li",[s._v("如果未被过滤的污点中存在至少一个 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoExecute")]),s._v(" 的污点， 则 Kubernetes 不会将 Pod 分配到该节点（如果 Pod 还未在节点上运行）， 或者将 Pod 从该节点驱逐（如果 Pod 已经在节点上运行）。")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("PreferNoSchedule")]),s._v("：软策略，表示尽量不调度到污点节点上去")]),s._v(" "),t("li",[t("code",[s._v("NoSchedule")]),s._v("：硬策略，表示绝对不调度到污点节点上去")]),s._v(" "),t("li",[t("code",[s._v("NoExecute")]),s._v("：比"),t("code",[s._v("NoSchedule")]),s._v("更强的硬策略，该选项意味着一旦"),t("code",[s._v("taint")]),s._v("生效，如该节点内正在运行的 pod 没有对应"),t("code",[s._v("tolerate")]),s._v("设置，会直接被驱逐")])]),s._v(" "),t("h2",{attrs:{id:"noexecute策略的tolerationseconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#noexecute策略的tolerationseconds"}},[s._v("#")]),s._v(" "),t("code",[s._v("NoExecute")]),s._v("策略的"),t("code",[s._v("tolerationSeconds")])]),s._v(" "),t("p",[t("code",[s._v("tolerationSeconds")]),s._v("定义了Pod在"),t("code",[s._v("NoExecute")]),s._v("污点策略下受驱逐的时间，例如：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Pod模板")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Equal"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSchedule"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Equal"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoExecute"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerationSeconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3600秒后才会被驱逐")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("blockquote",[t("ul",[t("li",[s._v("如果 Pod 不能忍受 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoExecute")]),s._v(" 的污点，那么 Pod 将马上被驱逐")]),s._v(" "),t("li",[s._v("如果 Pod 能够忍受 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoExecute")]),s._v(" 的污点，但是在容忍度定义中没有指定 "),t("code",[s._v("tolerationSeconds")]),s._v("，则 Pod 还会一直在这个节点上运行。")]),s._v(" "),t("li",[s._v("如果 Pod 能够忍受 "),t("code",[s._v("effect")]),s._v(" 值为 "),t("code",[s._v("NoExecute")]),s._v(" 的污点，而且指定了 "),t("code",[s._v("tolerationSeconds")]),s._v("， 则 Pod 还能在这个节点上继续运行这个指定的时间长度。")])])]),s._v(" "),t("p",[s._v("如果在"),t("code",[s._v("tolerationSeconds")]),s._v("前污点被删除了，则不会被驱逐。")]),s._v(" "),t("h2",{attrs:{id:"k8s字自动添加的污点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s字自动添加的污点"}},[s._v("#")]),s._v(" K8S字自动添加的污点")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("node.kubernetes.io/not-ready")]),s._v('：节点未准备好。这相当于节点状态 Ready 的值为 "False"。')]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/unreachable")]),s._v('：节点控制器访问不到节点. 这相当于节点状态 Ready 的值为 "Unknown"。')]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/out-of-disk")]),s._v("：节点磁盘耗尽。")]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/memory-pressure")]),s._v("：节点存在内存压力。")]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/disk-pressure")]),s._v("：节点存在磁盘压力。")]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/network-unavailable")]),s._v("：节点网络不可用。")]),s._v(" "),t("li",[t("code",[s._v("node.kubernetes.io/unschedulable")]),s._v(": 节点不可调度。")]),s._v(" "),t("li",[t("code",[s._v("node.cloudprovider.kubernetes.io/uninitialized")]),s._v('：如果 kubelet 启动时指定了一个 "外部" 云平台驱动， 它将给当前节点添加一个污点将其标志为不可用。在 cloud-controller-manager 的一个控制器初始化这个节点后，kubelet 将删除这个污点。')])]),s._v(" "),t("p",[s._v("使用这个功能特性，结合 "),t("code",[s._v("tolerationSeconds")]),s._v("，Pod 就可以"),t("strong",[s._v("指定当节点出现一个或全部上述问题时还将在这个节点上运行多长的时间")]),s._v("。")]),s._v(" "),t("p",[s._v("比如，一个使用了很多本地状态的应用程序在网络断开时，仍然希望停留在当前节点上运行一段较长的时间， 愿意等待网络恢复以避免被驱逐。在这种情况下，Pod 的容忍度可能是下面这样的：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node.kubernetes.io/unreachable"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Exists"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoExecute"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerationSeconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("p",[s._v("Kubernetes 会自动给 Pod 添加一个 "),t("code",[s._v("key")]),s._v(" 为 "),t("code",[s._v("node.kubernetes.io/not-ready")]),s._v(" 的容忍度 并配置 "),t("code",[s._v("tolerationSeconds=300")]),s._v("，除非用户提供的 Pod 配置中已经已存在了 "),t("code",[s._v("key")]),s._v(" 为 "),t("code",[s._v("node.kubernetes.io/not-ready")]),s._v(" 的容忍度。")]),s._v(" "),t("p",[s._v("同样，Kubernetes 会给 Pod 添加一个 "),t("code",[s._v("key")]),s._v(" 为 "),t("code",[s._v("node.kubernetes.io/unreachable")]),s._v(" 的容忍度 并配置 "),t("code",[s._v("tolerationSeconds=300")]),s._v("，除非用户提供的 Pod 配置中已经已存在了 "),t("code",[s._v("key")]),s._v(" 为 "),t("code",[s._v("node.kubernetes.io/unreachable")]),s._v(" 的容忍度。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);