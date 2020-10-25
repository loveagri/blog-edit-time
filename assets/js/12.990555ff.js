(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{487:function(t,e,s){t.exports=s.p+"assets/img/PV-PVC.f6cdfbfb.png"},536:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Kubernetes的pod本身是无状态的（stateless）,生命周期通常比较短，只要出现了异常，Kubernetes就会自动创建一个新的Pod来代替它。而容器产生的数据，会随着Pod消亡而自动消失。")]),t._v(" "),a("p",[t._v("为了实现Pod内数据的存储管理，Kubernetes引入了两个API资源：Persistent Volume（持久卷，以下简称PV）和Persistent Volume Claim（持久卷申请，以下简称PVC）。")]),t._v(" "),a("p",[a("strong",[t._v("PV是Kubernetes集群中的一种网络存储实现")]),t._v("，跟Node一样，也是属于集群的资源。")]),t._v(" "),a("p",[t._v("PV跟Docker里的Volume(卷)类似，不过会有独立于Pod的生命周期；而"),a("strong",[t._v("PVC是用户的一个存储请求")]),t._v("，跟Pod类似。Pod消费Node的资源，PVC消费PV的资源。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pod")]),t._v(" "),a("th",[t._v("PVC")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Pod消费Node的资源")]),t._v(" "),a("td",[t._v("PVC消费PV的资源")])]),t._v(" "),a("tr",[a("td",[t._v("Pod 能够申请特定的资源（CPU和内存）")]),t._v(" "),a("td",[t._v("PVC能够申请特定的尺寸和访问模式（只读、只写、可读写等），而无须感知这些实例背后具体的存储实现。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(487),alt:"PV-PVC"}})]),t._v(" "),a("h2",{attrs:{id:"persistentvolume和persistentvolumeclaim的正确使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolume和persistentvolumeclaim的正确使用方法"}},[t._v("#")]),t._v(" PersistentVolume和PersistentVolumeClaim的正确使用方法")]),t._v(" "),a("p",[t._v("PersistentVolume应由集群管理员创建，而集群用户通过PersistentVolumeClaim使用管理员创建的PersistentVolume。用户不关心PersistentVolume的具体位置和具体实现，只管使用。")]),t._v(" "),a("ol",[a("li",[t._v("集群管理员创建由物理存储支持的 PersistentVolume。管理员不将卷与任何 Pod 关联。")]),t._v(" "),a("li",[t._v("群集用户创建一个 PersistentVolumeClaim，它将自动绑定到合适的 PersistentVolume。")]),t._v(" "),a("li",[t._v("用户创建使用 PersistentVolumeClaim 作为存储的 Pod。")])]),t._v(" "),a("h3",{attrs:{id:"persistentvolume和persistentvolumeclaim的删除顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolume和persistentvolumeclaim的删除顺序"}},[t._v("#")]),t._v(" PersistentVolume和PersistentVolumeClaim的删除顺序")]),t._v(" "),a("p",[t._v("显然，现有PersistentVolume后有PersistentVolumeClaim。在K8S中，PersistentVolume的删除命令"),a("code",[t._v("kubectl delete pv <pv名>")]),t._v("会阻塞直到与这个PV绑定的所有PVC被删除。")]),t._v(" "),a("h2",{attrs:{id:"persistentvolume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolume"}},[t._v("#")]),t._v(" PersistentVolume")]),t._v(" "),a("p",[t._v("不管三七二十一先放个示例：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolume\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" the"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这是个位于本地某个文件夹的PV")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mnt/data"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#文件夹的路径")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("capacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#存储容量")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5Gi "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#存储容量为5G")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filesystem\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#访问模式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#访问模式为只能由一个Pod以读写模式挂载")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeReclaimPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Recycle\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slow\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("下面来一个个介绍这里面的字段。")]),t._v(" "),a("h3",{attrs:{id:"pv的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv的类型"}},[t._v("#")]),t._v(" PV的类型")]),t._v(" "),a("p",[t._v("上面这个PV "),a("code",[t._v("spec")]),t._v(" 字段中的第一个"),a("code",[t._v("hostPath")]),t._v("表示这个PV是个位于本地某个文件夹中。除"),a("code",[t._v("hostPath")]),t._v("外，PV还支持以下类型：")]),t._v(" "),a("ul",[a("li",[t._v("GCEPersistentDisk")]),t._v(" "),a("li",[t._v("AWSElasticBlockStore")]),t._v(" "),a("li",[t._v("AzureFile")]),t._v(" "),a("li",[t._v("AzureDisk")]),t._v(" "),a("li",[t._v("CSI")]),t._v(" "),a("li",[t._v("FC (Fibre Channel)")]),t._v(" "),a("li",[t._v("FlexVolume")]),t._v(" "),a("li",[t._v("Flocker")]),t._v(" "),a("li",[t._v("NFS")]),t._v(" "),a("li",[t._v("iSCSI")]),t._v(" "),a("li",[t._v("RBD (Ceph Block Device)")]),t._v(" "),a("li",[t._v("CephFS")]),t._v(" "),a("li",[t._v("Cinder (OpenStack block storage)")]),t._v(" "),a("li",[t._v("Glusterfs")]),t._v(" "),a("li",[t._v("VsphereVolume")]),t._v(" "),a("li",[t._v("Quobyte Volumes")]),t._v(" "),a("li",[t._v("HostPath (Single node testing only -- local storage is not supported in any way and WILL NOT WORK in a multi-node cluster)")]),t._v(" "),a("li",[t._v("Portworx Volumes")]),t._v(" "),a("li",[t._v("ScaleIO Volumes")]),t._v(" "),a("li",[t._v("StorageOS")])]),t._v(" "),a("p",[t._v("这些类型的在PV中的定义和在Pod的Volumes里的定义都是一回事，具体介绍和各自的字段名可见"),a("RouterLink",{attrs:{to:"/Kubernetes/Volume.html"}},[t._v("《Volume - 挂载数据盘》")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"capacity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capacity"}},[t._v("#")]),t._v(" "),a("code",[t._v("capacity")])]),t._v(" "),a("p",[t._v("顾名思义，这是指这个PV的容量限制。它的单位有:"),a("code",[t._v("T")]),t._v(","),a("code",[t._v("P")]),t._v(","),a("code",[t._v("G")]),t._v(","),a("code",[t._v("M")]),t._v(","),a("code",[t._v("K")]),t._v("或 "),a("code",[t._v("Ti")]),t._v(","),a("code",[t._v("Pi")]),t._v(","),a("code",[t._v("Gi")]),t._v(","),a("code",[t._v("Mi")]),t._v(","),a("code",[t._v("Ki")]),t._v("，其中加i的是以1024为换算单位的。")]),t._v(" "),a("blockquote",[a("p",[t._v('For example, the following represent roughly the same value: 128974848, "129e6", "129M" , "123Mi".')])]),t._v(" "),a("h3",{attrs:{id:"volumemode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volumemode"}},[t._v("#")]),t._v(" "),a("code",[t._v("volumeMode")])]),t._v(" "),a("p",[a("code",[t._v("volumeMode")]),t._v("用于指定这个PV上要不要有文件系统。"),a("code",[t._v("volumeMode")]),t._v("有两种值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Block")]),t._v("：PV上没有文件系统。这意味着PV挂载到容器中时是一个块设备，容器中的程序必须有处理块设备的能力才能正常使用这种PV")]),t._v(" "),a("li",[a("code",[t._v("Filesystem")]),t._v("：PV上有文件系统。PV挂载到容器中时是一个正常的挂载点，此为默认值。")])]),t._v(" "),a("h3",{attrs:{id:"accessmodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessmodes"}},[t._v("#")]),t._v(" "),a("code",[t._v("accessModes")])]),t._v(" "),a("p",[a("code",[t._v("accessModes")]),t._v("指定了这个PV可以提供的访问模式。它有以下三种值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ReadWriteOnce")]),t._v(" -- 只能被单个节点以读写模式挂载")]),t._v(" "),a("li",[a("code",[t._v("ReadOnlyMany")]),t._v(" -- 只能由多个节点以只读模式挂载")]),t._v(" "),a("li",[a("code",[t._v("ReadWriteMany")]),t._v(" -- 能由多个节点以读写模式挂载")])]),t._v(" "),a("p",[t._v("但是并不是所有的网络文件系统都支持上面这些挂载方式，因此不同类型的PV也有所不同。各种PV各自支持的"),a("code",[t._v("accessModes")]),t._v("如表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ReadWriteOnce")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ReadOnlyMany")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ReadWriteMany")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AWSElasticBlockStore")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AzureFile")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AzureDisk")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CephFS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Cinder")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("depends on the driver")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("depends on the driver")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("depends on the driver")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("FC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("FlexVolume")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("depends on the driver")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Flocker")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GCEPersistentDisk")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Glusterfs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("HostPath")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iSCSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Quobyte")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NFS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("RBD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VsphereVolume")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("- (works when Pods are collocated)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PortworxVolume")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ScaleIO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("StorageOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"persistentvolumereclaimpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolumereclaimpolicy"}},[t._v("#")]),t._v(" "),a("code",[t._v("persistentVolumeReclaimPolicy")])]),t._v(" "),a("p",[t._v("若Pod绑定了一个PVC，PVC绑定了一个PV，后来Pod删除了，那么PV中的数据要怎么处理？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Retain")]),t._v(" -- 默认回收策略，即这些数据保留着，以便Pod再次创建时还能使用")]),t._v(" "),a("li",[a("code",[t._v("Recycle")]),t._v(" -- 清空里面的数据，允许其他Pod绑定使用")]),t._v(" "),a("li",[a("code",[t._v("Delete")]),t._v(" -- 不仅清空里面的数据，还把PV直接一起删了")])]),t._v(" "),a("h3",{attrs:{id:"storageclassname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storageclassname"}},[t._v("#")]),t._v(" "),a("code",[t._v("storageClassName")])]),t._v(" "),a("blockquote",[a("p",[t._v('StorageClass 为管理员提供了描述存储 "类" 的方法。 不同的类型可能会映射到不同的服务质量等级或备份策略，或是由集群管理员制定的任意策略。 Kubernetes 本身并不清楚各种类代表的什么。这个类的概念在其他存储系统中有时被称为 "配置文件"。')])]),t._v(" "),a("p",[t._v("对 StorageClass 的具体介绍可见"),a("a",{attrs:{href:"https://github.com/kubernetes/website/blob/release-1.17/content/zh/docs/concepts/storage/storage-classes.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("《存储类》"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("A PV with no storageClassName has no class and can only be bound to PVCs that request no particular class.")])]),t._v(" "),a("h3",{attrs:{id:"mountoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mountoptions"}},[t._v("#")]),t._v(" "),a("code",[t._v("mountOptions")])]),t._v(" "),a("p",[a("code",[t._v("mountOptions")]),t._v("是针对不同类型PV的额外配置。目前有额外配置的类型有：")]),t._v(" "),a("ul",[a("li",[t._v("AWSElasticBlockStore")]),t._v(" "),a("li",[t._v("AzureDisk")]),t._v(" "),a("li",[t._v("AzureFile")]),t._v(" "),a("li",[t._v("CephFS")]),t._v(" "),a("li",[t._v("Cinder (OpenStack block storage)")]),t._v(" "),a("li",[t._v("GCEPersistentDisk")]),t._v(" "),a("li",[t._v("Glusterfs")]),t._v(" "),a("li",[t._v("NFS")]),t._v(" "),a("li",[t._v("Quobyte Volumes")]),t._v(" "),a("li",[t._v("RBD (Ceph Block Device)")]),t._v(" "),a("li",[t._v("StorageOS")]),t._v(" "),a("li",[t._v("VsphereVolume")]),t._v(" "),a("li",[t._v("iSCSI")])]),t._v(" "),a("h3",{attrs:{id:"node-affinity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-affinity"}},[t._v("#")]),t._v(" Node Affinity")]),t._v(" "),a("blockquote",[a("blockquote",[a("p",[t._v("Note: For most volume types, you do not need to set this field. It is automatically populated for AWS EBS, GCE PD and Azure Disk volume block types. You need to explicitly set this for local volumes.")])]),t._v(" "),a("p",[t._v("A PV can specify node affinity to define constraints that limit what nodes this volume can be accessed from. Pods that use a PV will only be scheduled to nodes that are selected by the node affinity.")])]),t._v(" "),a("h2",{attrs:{id:"persistentvolumeclaim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolumeclaim"}},[t._v("#")]),t._v(" PersistentVolumeClaim")]),t._v(" "),a("p",[t._v("不管三七二十一先放个示例：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myclaim\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filesystem\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8Gi\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" slow\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("release")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stable\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" environment\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("blockquote",[a("p",[t._v("创建 PersistentVolumeClaim 之后，Kubernetes 控制平面将查找满足申领要求的 PersistentVolume。 如果控制平面找到具有相同 StorageClass 的适当的 PersistentVolume，则将 PersistentVolumeClaim 绑定到该 PersistentVolume 上。")])]),t._v(" "),a("p",[t._v("和上面的PV定义对比一下就可以发现，定义PVC的字段和定义PV的字段基本相同。不同的是，PV中的"),a("code",[t._v("accessModes")]),t._v("、"),a("code",[t._v("volumeMode")]),t._v("、"),a("code",[t._v("storageClassName")]),t._v("是定义了PV的性质，而PVC中的这些字段是用来查找合适的PV进行绑定。")]),t._v(" "),a("p",[t._v("除了"),a("code",[t._v("accessModes")]),t._v("、"),a("code",[t._v("volumeMode")]),t._v("、"),a("code",[t._v("storageClassName")]),t._v("外，还有一个用于查询PV标签的"),a("code",[t._v("selector")]),t._v("和资源请求的"),a("code",[t._v("resources")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" "),a("code",[t._v("selector")])]),t._v(" "),a("p",[a("code",[t._v("selector")]),t._v("字段用于指定要绑定的PV的标签，只有标签全部匹配到的PV才能绑定。")]),t._v(" "),a("p",[t._v("其中的"),a("code",[t._v("matchLabels")]),t._v("和"),a("code",[t._v("matchExpressions")]),t._v("都是标签的匹配规则。")]),t._v(" "),a("p",[t._v("一看就懂，不说了。不懂的对比一下"),a("RouterLink",{attrs:{to:"/Kubernetes/Pod亲和性调度.html"}},[t._v("《Pod的亲和性调度》")]),t._v("里面的标签匹配规则也就差不多了。")],1),t._v(" "),a("h3",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" "),a("code",[t._v("resources")])]),t._v(" "),a("p",[a("code",[t._v("resources")]),t._v("字段用于指定PVC需要的资源量，比如上面那个"),a("code",[t._v(".spec.resources.requests.storage")]),t._v("表示这个PVC绑定的PV至少要有7G。")])])}),[],!1,null,null,null);e.default=n.exports}}]);