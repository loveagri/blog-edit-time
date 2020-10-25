(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{533:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("上一篇："),s("RouterLink",{attrs:{to:"/Kubernetes/Kubernetes介绍.html"}},[t._v("Kubernetes(k8s)介绍")])],1),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("h3",{attrs:{id:"k8s不支持所有版本的docker，安装之前要先安装支持版本的docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s不支持所有版本的docker，安装之前要先安装支持版本的docker"}},[t._v("#")]),t._v(" k8s不支持所有版本的docker，安装之前要先安装支持版本的docker")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装方法"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"学习环境minikube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习环境minikube"}},[t._v("#")]),t._v(" 学习环境minikube")]),t._v(" "),s("p",[t._v("安装比较简单但是支持单节点，只能用于学习。")]),t._v(" "),s("h3",{attrs:{id:"生产环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[t._v("#")]),t._v(" 生产环境")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装kubeadm"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("用kubeadm安装Kubernetes"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("安装比较复杂，生产环境用。")]),t._v(" "),s("p",[t._v("安装完成后启动前要先禁用Linux交换分区：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" swapoff -a\nsysctl -p\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("还得设置好代理翻墙：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://proxyhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("https_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://proxyhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("docker也得翻墙："),s("a",{attrs:{href:"https://docs.docker.com/config/daemon/systemd/#httphttps-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("方法"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"创建集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建集群"}},[t._v("#")]),t._v(" 创建集群")]),t._v(" "),s("p",[t._v("来自"),s("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-interactive/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方互动教程"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/hello-minikube/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教程"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"启动minikube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动minikube"}},[t._v("#")]),t._v(" 启动minikube")]),t._v(" "),s("p",[t._v("k8s的一种实现，可以看作是一种集群管理的服务端")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("minikube start\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"用kubectl指令控制kubernetes机器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用kubectl指令控制kubernetes机器"}},[t._v("#")]),t._v(" 用kubectl指令控制Kubernetes机器")]),t._v(" "),s("h3",{attrs:{id:"与docker指令功能类似的在kubectl指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与docker指令功能类似的在kubectl指令"}},[t._v("#")]),t._v(" 与docker指令功能类似的在kubectl指令")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/zh/docs/reference/kubectl/docker-cli-to-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 用户使用 kubectl 命令指南"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"预备知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[t._v("#")]),t._v(" 预备知识")]),t._v(" "),s("ul",[s("li",[t._v("docker容器和k8s pods的对应关系：\n"),s("ul",[s("li",[t._v("在docker中容器是操作的最小单位，而在k8s中pod是最小单位")]),t._v(" "),s("li",[t._v("一个pod会包含多个容器，因此k8s中所有对容器的操作都需要额外指定是哪个pod的容器")])])]),t._v(" "),s("li",[t._v("docker创建的容器和k8s创建的pod里的容器之间的差别：\n"),s("ul",[s("li",[t._v("默认情况下如果 pod 中的容器退出 pod 也不会终止，相反它将会被k8s重启。就相当于在 "),s("code",[t._v("docker run")]),t._v("加了"),s("code",[t._v("--restart=always")]),t._v(" 选项")])])])]),t._v(" "),s("h4",{attrs:{id:"运行一个-nginx-deployment-并将其暴露出来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行一个-nginx-deployment-并将其暴露出来"}},[t._v("#")]),t._v(" 运行一个 nginx Deployment 并将其暴露出来")]),t._v(" "),s("ul",[s("li",[t._v("docker：运行单个容器+端口映射")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -d --restart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cluster --name nginx-app -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 nginx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：以deployment的形式运行应用的pod然后在Service里面暴露端口")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动运行 nginx 的 pod")]),t._v("\nkubectl run --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx nginx-app --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" --env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOMAIN=cluster"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过Service暴露端口")]),t._v("\nkubectl expose deployment nginx-app --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx-http\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"列出正在运行的容器-pods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出正在运行的容器-pods"}},[t._v("#")]),t._v(" 列出正在运行的容器/pods")]),t._v(" "),s("ul",[s("li",[t._v("docker：列出正在运行的容器")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：列出正在运行的pods")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl get po\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"连接到正在运行的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接到正在运行的容器"}},[t._v("#")]),t._v(" 连接到正在运行的容器")]),t._v(" "),s("ul",[s("li",[t._v("docker：直接连接到正在运行的容器")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要连接的容器编号")]),t._v("\ndocker attach "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：连接到正在运行的pod的某个容器")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl get po "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要连接的容器编号（一个pod里面可能有多个容器）")]),t._v("\nkubectl attach -it "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"在容器中执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在容器中执行命令"}},[t._v("#")]),t._v(" 在容器中执行命令")]),t._v(" "),s("ul",[s("li",[t._v("docker：直接在容器中执行命令")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要执行的容器编号")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("指令"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：在正在运行的pod的某个容器中执行命令")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl get po "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要执行的容器编号")]),t._v("\nkubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("指令"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"查看运行中容器的-stdout-stderr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看运行中容器的-stdout-stderr"}},[t._v("#")]),t._v(" 查看运行中容器的 stdout/stderr")]),t._v(" "),s("ul",[s("li",[t._v("docker：直接在容器中执行命令")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要查看的容器编号")]),t._v("\ndocker logs -f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：在正在运行的pod的某个容器中执行命令")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl get po "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找要查看的容器编号")]),t._v("\nkubectl logs -f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("在 docker 中，每次"),s("code",[t._v("logs")]),t._v("输出的都是到当前时刻为止的全部输出，但是对于 kubernetes，每次次"),s("code",[t._v("logs")]),t._v("仅从当前时刻开始输出。要查看到当前时刻为止的全部输出，请执行：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl logs --previous "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"停止和删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止和删除"}},[t._v("#")]),t._v(" 停止和删除")]),t._v(" "),s("ul",[s("li",[t._v("docker：直接的容器停止删除")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker stop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("kubectl：删除拥有某个 pod 的 Deployment\n"),s("ul",[s("li",[t._v("pod是k8s最小操作单元，其中的容器不能直接删除")]),t._v(" "),s("li",[t._v("如果直接删除 pod，Deployment 将会重新创建该 pod")])])])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kubectl get deployment nginx-app "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找拥有要删除的pod的Deployment名称")]),t._v("\nkubectl delete deployment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Deployment名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"kubernetes-对象管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-对象管理"}},[t._v("#")]),t._v(" Kubernetes 对象管理")]),t._v(" "),s("p",[t._v("k8s提供了kubectl工具用于管理集群。kubectl工具支持三种方式进行对象的管理:")]),t._v(" "),s("ul",[s("li",[t._v("命令式的方式")]),t._v(" "),s("li",[t._v("命令式的对象配置")]),t._v(" "),s("li",[t._v("声明式的对象配置")])]),t._v(" "),s("p",[t._v("这三种技术之间的对比见"),s("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/object-management-kubectl/object-management/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教程"),s("OutboundLink")],1)]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("管理技术")]),t._v(" "),s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("推荐环境")]),t._v(" "),s("th",[t._v("支持撰写")]),t._v(" "),s("th",[t._v("学习曲线")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("命令式的方式")]),t._v(" "),s("td",[t._v("活动对象")]),t._v(" "),s("td",[t._v("开发项目")]),t._v(" "),s("td",[t._v("1+")]),t._v(" "),s("td",[t._v("最低")])]),t._v(" "),s("tr",[s("td",[t._v("命令式对象配置")]),t._v(" "),s("td",[t._v("单文件")]),t._v(" "),s("td",[t._v("生产项目")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("中等")])]),t._v(" "),s("tr",[s("td",[t._v("声明式对象配置")]),t._v(" "),s("td",[t._v("文件目录")]),t._v(" "),s("td",[t._v("生产项目")]),t._v(" "),s("td",[t._v("1+")]),t._v(" "),s("td",[t._v("最高")])])])]),t._v(" "),s("p",[s("strong",[t._v("警告")]),t._v(": Kubernetes 对象应该只使用一种技术进行管理。混合使用不同的技术，会导致相同对象出现未定义的行为。")]),t._v(" "),s("h3",{attrs:{id:"kubectl对象管理指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl对象管理指令"}},[t._v("#")]),t._v(" kubectl对象管理指令")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/object-management-kubectl/imperative-object-management-command/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下一篇："),s("RouterLink",{attrs:{to:"/Kubernetes/Kubernetes对象.html"}},[t._v("Kubernetes(k8s)对象")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);