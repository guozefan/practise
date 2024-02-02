type itemInfo = {
    url: string;
    id: string;
    title: string;
    text: string;
    img:string
  };
  
  type info = {
    title: string;
    id:string;
    list: itemInfo[];
  };


  export const website:info[] =[
    { title: "空闲资源",id:'7', list: [
        { url: "https://www.549.tv/",img:'yingshisenlin.jpg', id: "71", title: "影视森林", text: "声称最全的影视资源，国内、韩国、日本、美国等资源" },
        { url: "https://shipin520.com/sp-77717.html",img:'chaodian.ico', id: "71", title: "潮点视频资源", text: "你曾是少年4k卡通动漫版歌曲pr合成mp4格式模板视频素材下载_77717-潮点视频-第0个作品" },
        { url: "https://www.aigei.com/s?q=%E9%A3%8E%E5%A3%B0&type=sound",img:'aigei.png', id: "72", title: "音效素材", text: "风声 - 音效素材 免费下载 - 爱给网" },
        { url: "https://www.youtube.com/feed/library",img:'youtube.png', id: "73", title: "YouTube", text: "国外抖音平台" },
        { url: "https://app.lofi.co/", id: "74", title: "lofi", text: "一个很解压的舒适网站",img:"lofi.ico" },
        { url: "https://www.16personalities.com/ch/%E4%BA%BA%E6%A0%BC%E6%B5%8B%E8%AF%95", id: "75", title: "personalities", text: "16人格测试",img:"16person.png" }, 
        { url: "https://www.novipnoad.net/", id: "76", title: "韩剧", text: "韩剧大全",img:"hanju.ico" },
    ] },
    { title: "项目资料",id:'6', list: [
        { url: "http://123.178.152.146:800/doc/index.html#/portal/login", id: "61", title: "内蒙平台NVR", text: "监控视频注册、控制平台",img:'nvr.ico' },
        { url: "http://www.mhcsfz.com:808/energy/#/login", id: "62", title: "丰镇综合信息", text: "内蒙古丰镇综合信息管理平台",img:'fengzhen.png' },
        { url: "http://123.178.152.146:800/doc/index.html#/portal/login", id: "63", title: "内蒙平台NVR", text: "监控视频注册、控制平台",img:'nvr.ico' },
        { url: "https://channel-test.ban.zone/?id=180", id: "64", title: "半区", text: "web端",img:'banqu.png' },
        { url: "https://github.com/banqu-app", id: "65", title: "半区", text: "半区app-github代码库",img:'banqu.png' },
        { url: "http://124.204.48.134:8043/gkpt/#/login", id: "66", title: "管控平台开发环境", text: "智慧社区-3D模型、监控多页面项目",img:'gkpt.ico' },
        { url: "http://124.204.48.135:8043/gkpt/#/login", id: "67", title: "管控平台测试环境", text: "智慧社区-3D模型、监控多页面项目",img:'gkpt.ico' },
        { url: "http://shequ-ai.com/fzzy/#/login", id: "68", title: "管控平台生产环境", text: "智慧社区-3D模型、监控多页面项目",img:'gkpt.ico' },
        { url: "http://124.204.48.134:8043/gkpt/#/login", id: "66", title: "管控平台开发环境", text: "智慧社区-3D模型、监控多页面项目",img:'gkpt.ico' },
        { url: "https://github.com/banqu-app", id: "65", title: "半区", text: "半区app-github代码库",img:'banqu.png' },
    ] },
    { title: "UI工具与设计图",id:'9', list: [
        { url: "https://lanhuapp.com/", id: "91", title: "蓝湖", text: "蓝湖UI设计工具",img:'lanhu.jpg' },
        { url: "https://www.figma.com/", id: "92", title: "Figma", text: "FigmaUI设计工具",img:'figma.png' },
        { url: "https://www.figma.com/file/IDqtDSbOL2Be9n7xqSzEBG/web%E7%AB%AF-%E5%A4%96%E9%83%A8?type=design&node-id=0-1&mode=design", id: "93", title: "半区", text: "Web端-UI设计图",img:'figma.png' },
        { url: "https://www.figma.com/file/YqwgKFRyriE5QTOhLNjsEQ/6.5---6.12?type=design&node-id=436-10133&mode=design", id: "94", title: "半区", text: "小程序-UI设计图",img:'figma.png' },
    ] },
    { title: "框架资源",id:'1', list: [
        { url: "https://cn.vuejs.org/", id: "16", title: "vue", text: "渐进式JavaScript 框架",img:'vue.svg' },
        { url: "https://react.docschina.org/", id: "17", title: "react", text: "用于构建 Web 和原生交互界面的库",img:'react.jpg' },
        { url: "https://mp.weixin.qq.com/", id: "11", title: "微信公众平台", text: "微信后台管理",img:'weixin.jpg' },
        { url: "https://uniapp.dcloud.net.cn/quickstart-cli.html", id: "15", title: "uniapp", text: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",img:'uniapp.png' },
        { url: "https://threejs.org/manual/#zh/responsive", id: "12", title: "three.js", text: "3D-three官网",img:'three.ico' },
        { url: "https://pixijs.download/release/docs/index.html", id: "13", title: "Pixi.js", text: "基于canvas二次封装的JS库，是一个非常快的2D渲染引擎",img:'pixijs.png' },
        { url: "https://cn.vuejs.org/", id: "15", title: "Echarts", text: "一个基于 JavaScript 的开源可视化图表库",img:'echarts.png' },
        { url: "https://qiankun.umijs.org/zh/guide", id: "14", title: "qiankun", text: "qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。",img:'qiankun.png' },
    ] },

    { title: "插件工具",id:'4', list: [
        { url: "https://driverjs.com/", id: "41", title: "driver.js", text: "页面引导库、driver.js",img:'driverjs.svg' },
        { url: "https://diy07.kydiypro.xyz/", id: "42", title: "Cloud", text: "梯子流量平台",img:'cloud.ico' },
        { url: "https://www.leftso.com/tools/xiaohongshu", id: "43", title: "解析视频和图片", text: "小红书无水印解析",img:'' },
        { url: "https://zenvideo.qq.com/image/create", id: "44", title: "腾讯智影", text: "AI高清绘画",img:'tenAi.ico' },
        { url: "https://www.iconfont.cn/search/index?", id: "45", title: "iconfont", text: "阿里巴巴矢量图标库",img:"icon.png" },
        { url: "https://open.hikvision.com/download/5cda567cf47ae80dd41a54b3?type=10&id=4c945d18fa5f49638ce517ec32e24e24", id: "46", title: "海康开放平台", text: "海康开放平台,海康行业开放平台,行业开放平台（私有云）,开放平台,视频,一卡通,停车场,海康威视,iot,物联网,ipc,监控,安防,二次开发,基础设施,平台服务,应用接口",img:'haikang.ico' },
        { url: "https://unbug.github.io/codelf/#%E6%97%A5%E6%9C%9F", id: "47", title: "CODELF", text: "起名网站",img:"codelf.png" },
    ] },
    
    { title: "案例资料",id:'5', list: [
        { url: "http://echarts.zhangmuchen.top/#/index", id: "51", title: "MCChart", text: "基于echarts做的各种案例效果图",img:'mcChart.ico' },
        { url: "https://www.isqqw.com/", id: "52", title: "charts案例", text: "基于echarts做的各种案例效果图",img:'isqqw.ico' },
        { url: "https://admin.spicyboy.cn/#/login", id: "53", title: "Geeker Admin", text: "优秀的vue案例项目",img:"" },
        { url: "https://www.cpengx.cn/", id: "54", title: "老陈打码", text: "学习3D、three各种效果视频案例、教程",img:"laochendama.png" },
        { url: "https://hepengwei.cn/#/html/backgroundEffect", id: "55", title: "css样式", text: "各种CSS样式案例",img:"hepengwei.ico" },
        { url: "https://muiplayer.js.org/zh/guide/uni-app.html", id: "56", title: "MuiPlayer", text: "相关 HTML5 + API 在播放器的应用",img:"muiPlayer.ico" },
    ] },
    { title: "笔记与资料大全",id:'3', list: [
        
        { url: "https://www.bookstack.cn/read/es6-3rd/sidebar.md", id: "42", title: "ES6笔记", text: "v阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版",img:"" },
        { url: "https://wekenw.gitee.io/vuenote/", id: "31", title: "Vue笔记", text: "vue、vue3笔记、案例、API方法",img:"" },
        { url: "https://xxpromise.gitee.io/webpack5-docs/", id: "32", title: "Webpack5笔记", text: "尚硅谷Webpack5教程笔记",img:"webpack5.svg" },
        { url: "https://ziyi2.github.io/algorithms/", id: "33", title: "算法题与函数", text: "搜集常见的面试题目，提升自己的算法编程能力以及面试通过率。",img:"I-Algorithms.jpg" },
        { url: "https://fe.ecool.fun/topic-list?tagId=32", id: "34", title: "面试题宝典", text: "前端面试题大全",img:"mianshiti.jpg" },
        { url: "https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88", id: "35", title: "面试题", text: "操作系统、TS、Vue、Vue3、ES6、Js、CSS、Webpack、Http、Node.js、React、版本控制器、算法与数据结构、小程序、设计模式等相关面试题",img:"" },
        { url: "https://www.yuque.com/cessstudy/kak11d", id: "36", title: "前端语雀笔记", text: "Html5、 CSS3、 JS、 Node.JS、 VUE面试题",img:"yuque.svg" },
        { url: "https://www.programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html#%E6%80%9D%E8%B7%AF", id: "37", title: "代码随想录", text: "本站是一套完整的刷题计划，旨在帮助大家少走弯路，循序渐进学算法。",img:"code-sui.png" },
        { url: "https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html", id: "38", title: "微信公众号API", text: "微信公众平台开发概述",img:"weixin.jpg" },
        { url: "https://open.ys7.com/help/1771", id: "39", title: "萤石开放平台", text: "萤石开放平台API文档",img:"yingshi.png" },
        { url: "https://blog.poetries.top/browser-working-principle/guide/part1/lesson01.html", id: "40", title: "预览器工作原理", text: "浏览器工作原理与实践",img:"chrom.png" },
        { url: "https://xiaolincoding.com/", id: "41", title: "小林coding", text: "小林 x 图解计算机基础",img:"xiaolin.png" },
        
    ] },
 
    { title: "博客资料",id:'11', list: [
        { url: "https://zhuanlan.zhihu.com/p/419896443", id: "111", title: "vue2源码解读", text: "分析vue源码文件作用以及各个重要方法解读",img:"vue2-yuanma.png" },
        { url: "https://juejin.cn/post/7038792214075408420", id: "112", title: "three.js gpu优化", text: "优化3D模型，释放CPU占用资源",img:"three-gpu.awebp" },
        { url: "https://blog.csdn.net/moanuan/article/details/120706169", id: "113", title: "OSS 阿里云", text: "uniapp中OSS直传阿里云（h5）",img:"weixin-oss.jpg" },
        { url: " https://juejin.cn/post/7023927717292671012", id: "113", title: "git 提交规范", text: "团队协作、git代码库管理",img:"" },
        { url: "https://juejin.cn/post/7038491693997359117", id: "114", title: "WebSocket ", text: "前端架构师破局技能，NodeJS 落地 WebSocket 实践",img:"" },
        { url: "https://juejin.cn/post/7262542750405804091", id: "115", title: "driver.js", text: "页面引导库 driver.js",img:"" },
        { url: "https://www.cpengx.cn/", id: "116", title: "老陈打码", text: "学习3D、three各种效果视频案例、教程",img:"laochendama.png" },/// 
        { url: "https://blog.csdn.net/weixin_51697449/article/details/120502954", id: "117", title: "摄像头拍照功能", text: "vue调取电脑摄像头实现拍照功能",img:"" },
        { url: "https://juejin.cn/post/7202598910337138748", id: "118", title: "适配方案", text: "数据大屏最简单适配方案",img:"" },
        { url: "https://juejin.cn/post/6915378605459521543#heading-9", id: "119", title: "vite脚手架", text: "vite+vue3+ts+eslint+prettier+stylelint+husky+jest搭建项目",img:"" },
        { url: "https://admin.spicyboy.cn/#/login", id: "1111", title: "Geeker Admin", text: "优秀的vue案例项目",img:"" },// 
        { url: "https://juejin.cn/post/6844903987544588296", id: "1112", title: "网易云信IM", text: "vue 接入网易云信IM实时通讯【H5移动端】",img:"" },
        { url: "https://doc.miyun.app/app/clash-win/", id: "1113", title: "clash for windows", text: "Clash for Windows 官网下载、安装与配置使用教程",img:"clash.jpg" },
        { url: "https://blog.csdn.net/ju__ju/article/details/128591408?spm=1001.2101.3001.6650.10&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-10-128591408-blog-117261119.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-10-128591408-blog-117261119.pc_relevant_recovery_v2&utm_relevant_index=11", id: "1114", title: "echarts", text: "基于echarts开发的3D饼图",img:"" },
        { url: "https://juejin.cn/post/6844903944481685517", id: "1115", title: "CSS命名规范", text: "文章整理了Web前端开发中的各种CSS规范，包括文件规范、注释规范、命名规范、书写规范、测试规范等。",img:"" },
        { url: "https://juejin.cn/post/7129182393033818125", id: "1116", title: "echarts折线图", text: "echarts折线图流动特效的实现（非平滑曲线）",img:"" },
        { url: "https://juejin.cn/post/7213923957824979000", id: "1117", title: "alova.js", text: "是时候该换掉你的axios了",img:"" },
        { url: "https://juejin.cn/post/7003598687851151397", id: "1118", title: "内存泄漏定位", text: "Vue系列之常见内存泄漏定位与解决",img:"" },
        { url: "https://juejin.cn/post/7188041961599664165", id: "1119", title: "桌面端应用", text: "前端使用electron+vue3+ts搭建一个桌面端应用且可以热更新",img:"" },
        { url: "https://juejin.cn/post/7200571354926858301", id: "11111", title: "three.js案例", text: "我在前端干工地——three.js",img:"" },
        { url: "https://juejin.cn/post/7214759986802114620", id: "11112", title: "前端鉴权登录", text: "前端鉴权登录，你需要知道的一切。从 Cookie 到 JWT、从 Session 到 SSO",img:"" },
        { url: "https://juejin.cn/post/6844904084600782861", id: "11113", title: "微前端实战", text: "iframe架构微前端实战",img:"" },
        { url: "https://juejin.cn/post/7025635250344558628#dom", id: "11114", title: "预览器渲染原理", text: "预览器渲染原理",img:"" },
        { url: "https://juejin.cn/post/6844904045572800525", id: "11115", title: "HTTP", text: "看完这篇HTTP，跟面试官扯皮就没问题了",img:"" },
        { url: "https://blog.csdn.net/weixin_42365757/article/details/127654080", id: "11116", title: "阿里 iconfont", text: "Vue3 项目引入阿里 iconfont 图标和字体",img:"" },
        { url: "https://juejin.cn/post/7221858081487011900", id: "11116", title: "详解算法", text: "算法复杂度、时间、空间",img:"" },
        { url: "https://juejin.cn/post/7219189380806787132", id: "11117", title: "链表数据结构", text: "链表数据结构在前端中的重要性（Part 1）",img:"" },
        { url: "https://www.jianshu.com/p/9b246b668b86", id: "11118", title: "手机号码前缀", text: "全球手机号码前缀，国家代码，电话号码前缀，+86",img:"" },
        { url: "https://www.cnblogs.com/MandyCheng/p/12653936.html", id: "11119", title: "海康视频Web插件", text: "海康威视视频Web插件使用",img:"" },
        { url: "https://www.jianshu.com/p/c2050b8ebb6f", id: "11120", title: "dva", text: "Taro3 中使用dva",img:"" },
        { url: "https://juejin.cn/post/7190537849857376312", id: "11121", title: "前端工程化", text: "前端工程化之代码质量与规范化",img:"" },
        { url: "https://blog.csdn.net/chushiyan/article/details/116212008", id: "11122", title: "生成二维码", text: "如何在微信小程序中生成二维码：一个最简单的案例就让你明白",img:"" },
        { url: "https://juejin.cn/post/7176935575302668346", id: "11123", title: "前端工程化", text: "字节前端架构组工程化代码片段",img:"" },
        { url: "https://juejin.cn/post/7156139798384607240", id: "11124", title: "ts类型标注", text: "Vue3 常用的ts类型标注",img:"" },
        { url: "https://juejin.cn/post/6861501624993447950", id: "11125", title: "HOVER效果", text: "CSS八种让人眼前一亮的HOVER效果",img:"" },
        { url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/081e56b3d6b249d0add2999f04783ed9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?", id: "11126", title: "TS类型标注图片", text: "TS类型标注图片",img:"" },
        { url: "https://blog.csdn.net/qq_20451879/article/details/79136579", id: "11126", title: "WebViewH5交互", text: "Android进阶之路 - 通过WebView与H5前端进行完美交互",img:"" },
        { url: "https://juejin.cn/post/7190537849857376312", id: "11121", title: "前端工程化", text: "前端工程化之代码质量与规范化",img:"" },
        { url: "https://juejin.cn/post/7190537849857376312", id: "11121", title: "前端工程化", text: "前端工程化之代码质量与规范化",img:"" },
        
       
    ] },
    { title: "接单平台",id:'99', list: [
        { url: "https://www.proginn.com/", id: "991", title: "程序员客栈", text: "程序员客栈-领先的程序员自由工作平台-程序员兼职",img:'chengxuyuankezhan.jpg' },
        { url: "https://codemart.com/", id: "992", title: "码市", text: "码市,外包,软件外包,众包,云端众包,远程工作,悬赏平台,软件项目需求,软件开发",img:'mashi.ico' },
        { url: "https://zb.oschina.net/", id: "993", title: "开源众包平台", text: "众包,开源众包,众包平台,软件开发,软件众包,软件外包,开源中国,开源众包,兼职,威客",img:'kaiyuanzongbao.svg' },
        { url: "https://www.yingxuan.co/", id: "994", title: "英选", text: "英选提供可信赖的定制开发外包服务，包括企业品牌官网、电商系统及创新定制产品开发。好质量，不延期。",img:'yingxuan.png' },
        { url: "https://kuaimacode.com/", id: "995", title: "快码", text: "快码专注软件开发，为您实现更高的商业价值！",img:'mashi.ico' },
        { url: "https://www.mayigeek.com/", id: "995", title: "码易", text: "码易_企业应用商店_软件众包_软件服务_云市场_云课堂_云计算平台网站！",img:'mayi.png' },
        { url: "https://www.kaifabang.com/", id: "996", title: "开发邦", text: "软件外包,软件定制,软件开发,开发外包,android开发,互联网软件外包平台",img:'kaifabang.ico' },
        { url: "http://rrkf.com/", id: "997", title: "人人开发", text: "快速开发平台,PaaS平台,管理软件,软件开发,企业级应用,威客,众包,微创业,IT外包,BPM,捷得（Joget）,捷得云（JogetCloud）,协同OA,ERP,CRM,人事管理,项目管理,资产管理,设备管理",img:'renren.png' },
        { url: "https://www.taskcity.com/", id: "998", title: "智城", text: "软件外包,项目外包,项目交易,iPhone开发,应用开发,软件开发,项目开发,人力外派,短期招聘,人力资源交易平台",img:'zhicheng.ico' },
        { url: "https://eleduck.com/", id: "999", title: "电鸭社区", text: "电鸭社区是具有8年历史的远程工作招聘社区，也是远程办公互联网工作者们的聚集地。在社区，我们进行有价值的话题讨论，也分享远程、外包、零活、兼职、驻场等非主流工作机会。「只工作，不上班」是我们倡导的工作态度。",img:'dianya.png' },
        { url: "http://www.waibaodashi.com/", id: "9991", title: "外包大师", text: "软件外包、软件开发外包、软件外包网、程序外包、程序开发外包、项目外包、软件项目外包、应用外包、手机应用外包、APP定制开发、网站设计、网站开发、手机应用开发、移动应用开发、安卓应用开发、苹果应用开发、微信应用开发、Web前端开发",img:'waibaodashi.png' },
        { url: "https://www.jfh.com/", id: "9992", title: "解放号", text: "解放号众包平台提供软件开发外包、人力驻场服务等软件项目外包服务。解放号的软件项目交付全流程可视化监控与全生命周期管理能力，已帮助70多个行业3w+客户解决了定制化软件开发的需求。",img:'jiefanghao.png' },
    ] },
  ]