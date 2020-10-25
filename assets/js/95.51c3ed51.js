(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{591:function(t,e,r){"use strict";r.r(e);var n=r(4),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"i/Spring%E6%9E%B6%E6%9E%84.png",alt:"Spring架构"}})]),t._v(" "),r("h2",{attrs:{id:"spring-core-container-核心容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-core-container-核心容器"}},[t._v("#")]),t._v(" Spring Core Container - 核心容器")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("core")]),t._v("：框架的基本组成部分，包括 IoC/DI 功能。")]),t._v(" "),r("li",[r("strong",[t._v("beans")]),t._v("：就是BeanFactory，"),r("strong",[t._v("工厂模式")]),t._v("的微妙实现，它移除了编码式单例的需要，并且可以把配置和依赖从实际编码逻辑中解耦。")]),t._v(" "),r("li",[r("strong",[t._v("context")]),t._v("：在 core 和 beans 模块上建立，以一种类似于JNDI注册的方式访问对象。Context模块继承自Bean模块，并且添加了国际化（比如，使用资源束）、事件传播、资源加载和透明地创建上下文（比如，通过Servelet容器）等功能。Context模块也支持Java EE的功能，比如EJB、JMX和远程调用等。\n"),r("ul",[r("li",[t._v("ApplicationContext接口是Context模块的焦点。")]),t._v(" "),r("li",[t._v("spring-context-support：提供对第三方库集成到Spring上下文的支持，比如缓存（EhCache, Guava, JCache）、邮件（JavaMail）、调度（CommonJ, Quartz）、模板引擎（FreeMarker, JasperReports, Velocity）等。")])])]),t._v(" "),r("li",[t._v("SpEL：Spring Expression Language，Spring表达式语言（就是Spring里用到的那个XML文件），用于在运行时查询和操作对象图。它是JSP2.1规范中定义的统一表达式语言的扩展，支持set和get属性值、属性赋值、方法调用、访问数组集合及索引的内容、逻辑算术运算、命名变量、通过名字从 Spring IoC 容器检索对象，还支持列表的投影、选择以及聚合等。")])]),t._v(" "),r("h2",{attrs:{id:"spring-data-access-integration-数据访问-集成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-access-integration-数据访问-集成"}},[t._v("#")]),t._v(" Spring Data Access/Integration - 数据访问/集成")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("JDBC(Java Data Base Connectivity)")]),t._v("：JDBC抽象层，无需多言。")]),t._v(" "),r("li",[r("strong",[t._v("ORM(Object Relational Mapping)")]),t._v("：对流行的对象关系映射API的集成，包括JPA、JDO和Hibernate等。通过此模块可以让这些ORM框架和spring的其它功能整合，比如前面提及的事务管理。"),r("strong",[t._v("ORM是一种让Java类和关系型数据库互相转化的技术")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("OXM(Object XML Mapping)")]),t._v("：对OXM实现的支持，比如JAXB、Castor、XML Beans、JiBX、XStream等。"),r("strong",[t._v("OXM是一种让Java类和XML文件互相转化的技术")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("JMS(Java Message Service)")]),t._v("：消息服务，包含生产(produce)和消费(consume)消息的功能，无需多言。")])]),t._v(" "),r("p",[t._v("数据访问/集成中还包含一个事务模块，为实现特殊接口类及所有的 POJO 支持编程式和声明式事务管理。")]),t._v(" "),r("ul",[r("li",[t._v("编程式事务需要自己写beginTransaction()、commit()、rollback()等事务管理方法")]),t._v(" "),r("li",[t._v("声明式事务是通过注解或配置由spring自动处理")])]),t._v(" "),r("p",[t._v("编程式事务粒度更细")]),t._v(" "),r("h2",{attrs:{id:"spring-web"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-web"}},[t._v("#")]),t._v(" Spring Web")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Web")]),t._v("：提供面向web的基本功能和面向web的应用上下文，比如多部分(multipart)文件上传功能、使用Servlet监听器初始化IoC容器等。它还包括HTTP客户端以及Spring远程调用中与web相关的部分。")]),t._v(" "),r("li",[r("strong",[t._v("Web-MVC")]),t._v("：为web应用提供了模型视图控制(MVC)和REST Web服务的实现（"),r("a",{attrs:{href:"https://segmentfault.com/a/1190000014768057",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此了解REST"),r("OutboundLink")],1),t._v("）。Spring的MVC框架可以使领域模型代码和web表单完全地分离，且可以与Spring框架的其它所有功能进行集成。")]),t._v(" "),r("li",[r("strong",[t._v("Web-Socket")]),t._v("：为基于 WebSocket 的应用开发提供支持，而且在 web 应用程序中提供了客户端和服务器端之间通信的两种方式。")]),t._v(" "),r("li",[r("strong",[t._v("Web-Portlet")]),t._v("：提供用于Portlet环境（"),r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1159922",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此了解Portlet"),r("OutboundLink")],1),t._v("）的MVC实现。")])]),t._v(" "),r("h2",{attrs:{id:"spring-中间模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-中间模块"}},[t._v("#")]),t._v(" Spring 中间模块")]),t._v(" "),r("ul",[r("li",[t._v("AOP：提供了面向方面的编程(AOP)实现，允许定义方法拦截器和切入点对代码进行干净地解耦，从而使实现功能的代码彻底的解耦出来。")]),t._v(" "),r("li",[t._v("Aspects 模块提供了与 AspectJ 的集成，这是一个功能强大且成熟的AOP框架。")]),t._v(" "),r("li",[t._v("Instrumentation：在一定的应用服务器中提供了类 instrumentation 的支持和类加载器的实现。")]),t._v(" "),r("li",[t._v("Messaging：为 STOMP 提供了支持作为在应用程序中 WebSocket 子协议的使用。它也支持一个注解编程模型，它是为了选路和处理来自 WebSocket 客户端的 STOMP 信息。（STOMP 全称 Simple (or Streaming) Text Orientated Messaging Protocol，简单(流)文本定向消息协议，是一个基于TCP的文本传输协议）")]),t._v(" "),r("li",[t._v("Test：支持对具有 JUnit 或 TestNG 框架的 Spring 组件的测试。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);