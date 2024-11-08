#### HTML+CSS面试题

- **浏览器如何渲染页面的？**

  1. 解析文档构建dom树
  2. 构建渲染树
  3. 布局和绘制渲染树

- **href和src区别? title和alt**

  -  href:指向网络资源位置。建立和当前元素（锚点）或当前文档（链接）之间的链接。
  -  src：指向外部资源位置。指向的内容将会嵌入到文档中当前标签的位置。
  -  alt：图片加载失败提示文字。
  -  title：鼠标放到图片上提示文字。

- **rgba()和opacity的透明效果有什么不同？**

  - rgba():作用于元素的颜色或其背景色。
  - opacity:作用于元素及所有内容的透明度。

- **transform和animation区别？**

  - transform 描述了元素静态样式，这个属性允许你将元素旋转，缩放，移动，倾斜等
  - transition 和 animation 却都能实现动画效果时间过渡

- **nth-of-type 和 nth-child区别?**

  - 是否要区分类型，
  - 那如果`nth-child`选择了某个但这个元素不是同类型就匹配不到，
  - 而`nth-of-type`匹配的是第几个同类型

- **选择器的优先级是如何计算的？**

  - !important > 内联式 > id > class > 标签 > 通配符

- **伪元素和伪类的区别**

  - 伪元素会在标签中产生一个after或before，默认就有
  - 伪类 不会产生任何东西，需要被触发的，

- **a的四种状态**

  - a:link 未访问链接
  - a:visited 已访问链接
  - a:hover 鼠标滑过的链接
  - a:active  已选中的链接
  - 书写顺序不能反

- **如何理解HTML结构的语义化？**

  - 语义化后的标签更容易理解和书写 方便了操作和阅读

- **盒模型**

  - 有宽度的盒模型
    - 盒子实际宽度：width/height + padding + border
    - 盒子实际所占位置：width/height + padding + border + margin
  - 无宽度的盒模型
    - 盒子实际宽度：父级的宽度 - margin
    - 盒子实际所占位置：就是父级的宽度
    - 盒子内容宽度：父级宽度- margin - border - padding

- css定位⽅式 

  - relative：相对定位（保留原有位置，不脱离文档流布局）
  - absolute：绝对定位（根据有定位的父级去定位）
  - fixed：固定定位 （ 定位在可视区上方）
  - 尽可能多的写出浏览器兼容性问题
    - 双边距bug float引起的 使用 display 
    - 像素问题 使用float引起的 使用dispaly:inline - 3px;
    - 超链接hover 点击之后没有效果，正确的顺序
    - IE z-index问题 给父级添加 position:relative
    - mine-height  最小高度!important

- 垂直上下居中的⽅法

  - 定位方法
    - 父元素：position:relative
    - 子元素：position:absolute,top:50%; left:50%;      
    - transform:translate(-50%,-50%)   
  - 弹性布局方法
    -  display:flex; justify-content:center; align-items:center;

- 响应式布局原理 

  - 一套网站的结构，适配多个不同的设备。
  - 介绍：就是一个网站能兼容多个终端（pc、手机、平板）只需要写一套代码同时给PC端和移动端看

  - 原理 ：动态根据当前屏幕的宽度，自动改变页面中盒子的宽度，盒子的显示或隐藏
  - 优点
    - 对于不同设备只需要开发一套网页即可，公司开发成本较低
    - 一套网页可以适配多个终端
  - 缺点
    - 一个页面需要兼容多个终端，考虑的情况多种，开发效率较慢
    - 代码会更多，网页的加载速度较慢

- data-属性的作⽤

  - **data-\*** [全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes) 是一类被称为**自定义数据属性**的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 与 [DOM](https://wiki.developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 表现之间进行专有数据的交换。

- 

- 如何让Chrome浏览器显示⼩于12px的⽂字 

  - webkit–transform:scale(0.5); 属性缩放

- 哪些操作会引起⻚⾯回流（Reflow） 

  - 改变窗口大小，字体大小，增加或者移除样式表，内容变化，操作class属性，新增或者减少，js操作dom, offset相关属性计算，

- CSS预处理器的⽐较less sass

  - 把浏览器不认识的代码，还原为浏览器认识的css标准发给浏览器解析。

- 清除浮动的⽅法 

  - ⽗级div 定义height
  - 结尾处加空div 标签clear:both
  - ⽗级div 定义伪类:after 和zoom（推荐）
  - ⽗级div 定义overflow:hidden
  - ⽗级div 也浮动，需要定义宽度
  - 结尾处加br 标签clear:both

- **块元素定义：**

  - 独占一行、支持全部样式、默认父级宽度

- **行内元素定义：**

  - 并在一行、支持部分样式、宽度由内容决定
  - 不支持的样式
    - padding的top和bottom
    - margin的top和bottom
    - line-height
    - width、height
  - 代码换行产生间距
    - 如何解决代码换行产生间距？
      - 父级加 font-size: 0; 

- li与li之间有看不⻅的空⽩间隔是什么原因引起的？有什么解决办法？ 

  - 浏览器的默认行为是把inline元素间的空白字符渲染成一个空格。

    解决方案：代码写成一排。

- **文本溢出显示省略号**

  - **单行**

    ```js
    	overflow:hidden;
    	text-overflow:ellipsis;
    	white-space:nowrap
    ```

  - **多行**

    ```js
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    ```

- **⼀般做⼿机⻚⾯切图有⼏种⽅式?**

  - 响应式布局，弹性布局display：flex，利⽤js编写设定⽐例，给根元素设定像素，使⽤rem为单 位。

- **px/em/rem有什么区别？**

  - em的值并不是固定的；em会根据父级元素的字体大小来计算
  - font-size如何计算来的？
    - 会继承父级的字体大小
    - 如果父级都没设置，根据html文字大小来的 、网页的默认文字大小为 16px
  - rem
    - rem是相对于根元素html
  - px相对长度单位
  - %一般来说就是相对于父元素的，

- **移动端布局**

  - 百分百布局、rem 布局、响应式布局、弹性布局

- **浮动 - float**

  - 特点
    - 脱离文档流
    - 浮动可以适应内容的宽高
    - 浮动可以让块元素并在一行
    - 浮动可以让行内元素支持全部样式
  - 问题
    - 父级无法撑开高度（无法适应到内容的高度）
  - 将多个元素设置为同⼀⾏：float，inline-block
  - 清浮动
    1. 结尾处加空div标签 clear:both
    2. 结尾处加 br标签 clear:both
    3. ⽗级div定义 overflow: hidden；
    4. 父级div定义 overflow: auto
    5. 父级元素 display: table;
    6. 父级元素设置高度
    7. 利⽤:after和:before来在元素内部插⼊两个元素块，从⾯达到清除浮动的效果。

- **sass和scss有什么区别?sass⼀般怎么样编译的**

  - ⽂件扩展名不同，语法书写 ⽅式不同，Sass 是以严格的缩进式语法规则来书写，不带⼤括号({})和分号(;)，⽽ SCSS 的语法书写和我们的 CSS 语法书写⽅式⾮常类似。

- **注释**

  1. //     sass的注释，在编译的过程中 不会被保留
  2. /**/    CSS的注释，编译的时候会保留

- **input里 name 有什么作用？**

  - 作为一个标记 需要调用时候方便获取 可以分组

- **a标签中 如何禁⽤href 跳转⻚⾯ 或 定位链接**

  - e.preventDefault(); 
  - href="javascript:void(0);

- **⼿机端上 图⽚⻓时间点击会选中图⽚，如何处理?**

  - onselect=function() { return false }

- **video标签的⼏个属性⽅法**

  - src：视频的URL
  - poster：视频封⾯
  - preload：预加载
  - autoplay：⾃动播放
  - loop：循环播放 
  - controls：浏览器控制条
  - width：视频宽度
  - height：视频⾼度

- **css中link和@import的区别是什么？**

  - link 是xhtml标签， 引入 css时， 在页面加载是同时加载。
  - @import需要页面完全载入后才能加载。

- Canvas和SVG有什么区别？ 

  - SVG是用来描述XML中2D图形的语言，canvas借助Javascript动态描绘2D图形
  - SVG可支持事件处理程序而canvas不支持
  - SVG中属性改变时，浏览器可以重新呈现它，适用于矢量图，而canvas不可以，更适合视频游戏等
  - canvas可以很好的绘制像素，用于保存结果为png或者gif，可作为API容器
  - canvas取决于分辨率，SVG与分辨率无关。
  - SVG具有更好的文本渲染，而canvas不能很好的渲染，渲染中的SVG可能比canvas慢，特别是应用了大量的dom
  - 画布更适合渲染较小的区域，SVG渲染更好的更大区域。

- CSS选择器有哪些？哪些属性可以继承？

  - 元素选择器：文档的元素是最基本的选择器。（标签选择器）
  - 类选择器：独立于文档元素的方式来指定样式。（多类选择器）
  - id选择器：类似于类选择器，不过也有一些重要的差别。
  - 属性选择器：根据元素的属性及属性值来选择元素。
  - 后代选择器：可以选择某元素的后代的元素。
  - 子元素选择器：只能选择作为某元素子元素的元素。
  - 相邻兄弟选择器：可以选择紧接在另一个元素后的元素，且二者有形同的父元素。
  - 可以继承的属性
    - font-size、font-family、color,text-indent

- CSS优先级算法如何计算？ 

  - 优先级就近原则，同权重情况下样式定义最近为准
  - 载入样式以最后载入的为准
  - !important > 内联样式 > id > class > tag

- CSS3有哪些新特性？ 

  -  CSS3实现圆角（border-radius），阴影（box-shadow），
  -  对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform
  -  transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾
  -  增加了更多的CSS选择器  多背景 rgba
  -  在CSS3中唯一引入的伪元素是 ::selection.
  -  媒体查询，多栏布局
  -  border-image

- 请解释⼀下CSS3的flexbox（弹性盒布局模型）,以及适⽤场景？

  - Flex布局是什么？Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

    任何一个容器都可以指定为Flex布局。	

  - 采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

- ⽤纯CSS创建⼀个三⻆形的原理是什么？ 

  ```html
  <div class="box b1"></div>
  
  <div class="box b2"></div>
  
  <div></div>
  
  .box{
     position:absolute;left:0;top:0;width:0;height:0;
  	border:6px solid transparent;
  }
  .b1 {
  border-bottom-color:#000;
  }
  .b2{
  border-bottom-color:#fff;
  }
  ```

- 常⻅的兼容性问题？ 

- 为什么要初始化CSS样式

  - 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对css初始化往往会出现浏览器之间的页面显示差异。

- absolute的containing block计算⽅式跟正常流有什么不同？ 

  - css核心：Containing Block

  - 一个元素的containing block，由position属性确定：

    1，static：默认,relative，简单说就是他的父元素的内容框，即去掉padding部分。

    2，absolute：向上找最近的absolute/relative定位的元素。

    3，fixed：它的contacining block一律为根元素（html/body）,根元素也是initial containing block.

- CSS⾥的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？

  - collapse：当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。*如果此值被用在其他的元素上，会呈现为 “hidden”。*
  - 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
  - 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

- display:none与visibility：hidden的区别？ 

  - display:none 隐藏页面元素，不占位置，不能点击，不影响页面布局。
  - visibility:hidden 隐藏页面元素，占位置，影响页面布局效果。

- position跟display、overflow、float这些特性相互叠加后会怎么样？

  - display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；float属性是一种布局方式，定义元素在哪个方向浮动。
    类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。

- 上下margin重合的问题

  - 兄弟级的块之间，margin这个属性上下边距，经常会发生重叠的情况，以数值大的为准，而不会相加。
  - 父子级的块之间，子级的上下margin会与父级上下margin重叠， 以数值大的为准，而不会相加。

- CSS优化、提⾼性能的⽅法有哪些？ 

  - 有两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box） 
  - 盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

- 浏览器是怎样解析CSS选择器的？ 

  - 从 ‘上’ 到 ‘下’， 从 ‘右’ 到 ‘左’ 

- 在⽹⻚中的应该使⽤奇数还是偶数的字体？为什么呢？

  - 偶数字号相对更容易和 web 设计的其他部分构成比例关系

- margin和padding分别适合什么场景使⽤？

  - margin: 
    - 需要在border外侧添加空白时；
    - 空白处不需要背景色时；
    - 上下相连的两个盒子之间的空白，需要相互抵消时；
  - padding:
    - 需要在border内侧添加空白时，
    - 空白处需要背景色时，
    - 上下相连的两个盒子之间的空白，希望等于两者之和时；

- 元素竖向的百分⽐设定是相对于容器的⾼度吗？ 

  - 一般情况下，子元素的百分比都是以父元素为依据。但是外边距（margin）内边距（padding）除外。

- 全屏滚动的原理是什么？⽤到了CSS的哪些属性？ 

  - 轮播图原理，图片百分之百，超出隐藏，适应屏幕大小。

- 视差滚动效果？ 

  - 视差滚动是指让多层背景以不同的速度移动，形成立体的运动效果。带来非常出色的视觉体验。

- ::before 和 :after中双冒号和单冒号有什么区别？解释⼀下这2个伪元素的作⽤ 

  - 单引号（:） 用于伪类
  - 双引号（::）用于伪元素
  - ::before：就是以一个子元素的存在，定义在元素内容主体之前的一个伪元素，并不存在与DOM之中，只存在于页面之中
  - ::before：就是以一个子元素的存在，定义在元素内容主体之后的一个伪元素，并不存在与DOM之中，只存在于页面之中

- display:inline-block 什么时候会显示间隙？

  - 换行或者空格会占据一定的位置；
  - 解决：font-size: 0; 或使用margin负值，或使用font-size:0; 或letter-spacing 或word-spacing

- 有⼀个⾼度⾃适应的div，⾥⾯有两个div，⼀个⾼度100px，希望另⼀个填满剩下的⾼度 

  ```js
   		/*方案一*/
          /*.outer { height: 100%; padding: 100px 0 0; box-sizing: border-box ; }
          .A { height: 100px; margin: -100px 0 0; background: #BBE8F2; }
          .B { height: 100%; background: #D9C666; }*/
   
          /*方案二*/
          /*.outer { height: 100%; padding: 100px 0 0; box-sizing: border-box ; position: relative; }
          .A { height: 100px; background: #BBE8F2; position: absolute; top: 0 ; left: 0 ; width: 100%; }
          .B { height: 100%; background: #D9C666; }*/
   
          /*方案三*/
          .outer { height: 100%; position: relative; }
          .A { height: 100px; background: #BBE8F2; }
          .B { background: #D9C666; width: 100%; position: absolute; top: 100px ; left: 0 ; bottom: 0; }
  
  ```

- png、jpg、gif 这些图⽚格式解释⼀下，分别什么时候⽤。有没有了解过webp？

  - png：能在保证最不失真的情况下尽可能压缩图像文件的大小
  - jpg：支持摄影图像或写实图像的高级压缩，并且可利用压缩比例控制图像文件大小

- tyle标签写在body后与body前有什么区别？

  - 本题针对样式表，写在body标签前利于浏览器逐步渲染。写在body标签后，会导致浏览器停止之前的渲染。等待加载且解析样式表完成之后重新渲染；在ie下可能出现 FOUC现象；

- CSS属性overflow属性定义溢出元素内容区的内容会如何处理?

  - visible:默认值，内容不会被修剪，会呈现在元素框之外。
  - hidden:内容会被修剪，并且其余内容是不可见的。
  - scroll:内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
  - auto:如果内容被修剪，浏览器则会显示滚动条以便查看其余的内容。
  - inherent:规定应该从父级元素继承overflow属性的值。

- 阐述⼀下CSS Sprites 

  - 优点

    - 减少网页的http请求，从而大大提高了页面的性能，这也是css sprites最大的有点。

      能减少图片的字节

  - 缺点

    - 难以实现自适应，图片的大小都限制死了。

- 让⻚⾯⾥的字体变清晰，变细⽤CSS怎么做？

  - none用于小像素的文本，subpixel-antialiased浏览器默认的，antialiased反锯齿。

- position:fixed;在android下⽆效怎么处理？

  - 如果元素使用绝对定位，内部不使用其他定位，

- 设置元素浮动后，该元素的display值是多少？ 

  - 行内元素（display:inline）
  - 块级元素（display:block）--> 可以设置元素的宽高
  - 行内块级元素（display:inline-block ）--> 可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性

- 如何在⻚⾯上实现⼀个圆形的可点击区域？ 

  - border-radius
  - 纯js 实现 需要求⼀个点在不在圆上简单算法、获取⿏标坐标等等

- **常⻅的视频编码格式有⼏种?视频格式有⼏种?**

  - 视频格式：MPEG-1、MPEG-2和MPEG4 、AVI 、RM、ASF和WMV格式
  - 视频编码格式：H.264、MPEG-4、MPEG-2、WMA-HD以及VC-1

#### JavaScript

- **JavaScript怎么清空数组？**

  1. array = [];
  2. array.length = 0;
  3. array.splice(0, array.length);

- **闭包**

  - 能够读取其他函数内部变量的函数、
  - 闭包是将函数内部和函数外部连接起来的桥梁
  - 父函数使用子函数的变量称之为闭包  
  - 优点：
    -  ① 减少全局变量。
    -  ② 减少传递函数的参数量 
    -  ③ 封装；
  - 缺点
    - 使⽤闭包会占有内存资源，过多的使⽤闭包会导致内存溢出等.

- **写⼀个返回闭包的函数**

  ```js
  function fun1() {
          var sum=0;
          function fun2() {
              sum++;
              return sum
          }
          return fun2
      }
      var s=fun1();
      console.log(s());
  ```

- **使⽤递归完成1到100的累加** 

  ```js
  function sum(num) {
  	if( num==1 ){
  		return 1;
  	}
  	return num+sum(num-1);
  }
  console.log(sum(100))
  ```

- **静态成员和实例成员**

  - **构造函数中的属性和方法我们称为成员，成员可以添加**

    - 静态成员：在构造函数本上添加的成员称为 **静态成员，只能由构造函数本身来访问**

    - ```js
      function Star(uname, age){
      	this.uname = uname;
      	this.age = age;
      	this.sing = function(){
      		console.log('我会唱歌');
      	}
      }
      Star.sex = '男';
      // 静态成员 在构造函数本身上添加的成员  sex 就是静态成员
      // 静态成员只能通过构造函数来访问
      console.log(Star.sex);
      // console.log(ldh.sex); // 不能通过对象来访问
      ```

      

    - 实例成员：在构造函数内部创建的成员称为 **实例成员，只能由实例化的对象来访问**

    - ```js
      function Star(uname, age){
      	this.uname = uname;
      	this.age = age;
      	this.sing = function(){
      		console.log('我会唱歌');
      	}
      }
      var ldh = new Star('刘德华'，18)
      // 实例成员就是构造函数内部通过this添加的成员 uname age sing 就是实例成员
      // 实例成员只能通过实例化对象访问
      console.log(ldh.uname);
      ldh.sing();
      // console.log(Star.uname)  // 不可以通过构造函数来访问实例成员
      ```

  - #### 构造函数原型 prototype

    - 构造函数的问题存在浪费内存的问题

  - 构造函数通过原型分配的函数是所有对象所**共享的**

    - 我们可以把一些不变的方法，直接定义在prototype对象上，这样所有的实例就可以共享这些方法

    - ```js
      function Star(uname, age){
      	this.uname = uname;
      	this.age = age;
      }
      Star.prototype.sing = function(){
          console.log('我会唱歌')；
      }
      var ldh = new Star('刘德华',18);
      ldh.sing();
      // 把sing这个方法存在prototype上 这样每个调用实例都可以访问这个方法
      // 方法查找规则：首先看ldh对象身上是否有 sing 方法，如果有就执行这个对象上的sing
      // 如果有sing这个方法，因为有__proto__的存在，就去构造函数原型对象 prototype身上去查找sing这个方法
      ```

  - 每一个构造函数里面都有一个prototype 属性

    - 注意这个prototype就是一份对象，这个对象的所有属性和方法，都会被构造函数所拥有

  - 一般情况下，我们的公用属性定义到构造函数里面，公共的方法我们放到原型对象里面

  #### 对象原型__proto__

  - 对象都会有一个属性__proto__指向构造函数的prototype原型对象，之所以我们对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有__proto__原型的存在
  - 对象身上系统自己添加一个__proto__指向我们构造函数的原型对象
  - __proto__对象原型和原型对象 prototype 是等价的
  - __proto__ 对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象prototype
  - 实例对象身上的对象原型指向原型对象

  #### constructor 构造函数

  对象原型（--proto--）和构造函数（prototype）原型里面都有一个constructor属性，constructor 我们称为构造函数，因为它指回调函数本身

  constructor 主要是用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数

  ```js
  function Star(uname, age){
  	this.uname = uname;
  	this.age = age;
  }
  // Star.prototype.sing = function(){
  //     console.log('我会唱歌');
  // }
  // Star.prototype.movie = function(){
  //     console.log('我会演电影');
  // }
  // 很多情况下，我们需要手动的利用constructor 这个属性指回 原来的构造函数
  Star.prototype = {
      constructor : Star, // 重新指向回调函数本身
      sing : function(){
           console.log('我会唱歌')
      },
      movie : function(){
          console.log('我会演电影');
      }
  } // 指向一个对象 覆盖了Star 函数
  var ldh = new Star('刘德华',18);
  ldh.sing();
  console.log(Star.prototype.constructor);
  console.log(ldh.__proto__.constructor);
  ```

  **如果我们修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动的利用constructor指回原来的构造函数**

  **构造函数、实例、原型对象三者之间的关系**

  - 每个构造函数中都有一个原型对象 prototype
  - 通过构造函数的prototype指向原型对象
    - 此时原型 prototype里也有一个原型proto 指向的 Objact 原型对象prototype proto指向null
  - 原型对象中有一个constructor 又指回构造函数
  - 构造函数指向对象实例 
    -  可以通过构造函数创建出一个实例对象
  - 在实例中有一个原型 proto指向 构造函数中的原型prototype
  - 实例中也有一个constructor 属性 指向构造函数

  #### 成员查找机制

  - 当访问一个对象的属性（包括方法），首先找到这个对象自身有没有该属性
  - 如果没有就直接找它的原型（也就是 proto 指向的 prototype原型对象）
  - 如果还没有找到就直接查找原型对象的原型（Object的原型对象）
  - 以此类推一直找到Object为止（null）

  #### 原型对象指向问题

  ```js
  function Star(uname, age){
  	this.uname = uname;
  	this.age = age;
  }
  var that;
  Star.prototype.sing = function(){
      console.log('我会唱歌');
      that = this;
  }
  var ldh = new Star('刘德华',18);
  // 在构造函数中，里面this指向的是对象实例 ldh
  ldh.sing();
  console.log(that === ldh); // true
  // 原型对象函数里面的this 指向的是 实例对象 ldh
  ```

  **数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {},  只能是Array.prototype.xxx = function(){}的方式**

  #### 继承

  **继承：es6之前并没有给我们提供 entends 继承，我们可以通过 构造函数+原型对象 模拟实现继承，被称为 组合继承**

  - 扩展-call()方法

    - call()方法可以调用函数 并且修改函数运行时的this指向 `fun.call(this.Arg,arg1,arg2,...)`

    - thisArg：当前调用函数this的指向对象

    - arg1，arg2：传递的其他参数

    - ```js
      // call方法
      function fn(x, y){
      	console.log('11111');
      	console.log(this); // 此时this指向window
      	condole.log(x + y)
      }
      // fn();
      // call() 可以调用函数
      // fn.call();
      var o = {
          name : 'andy'
      };
      // call() 可以改变这个函数的this指向 此时这个函数的this就指向了 o 这个对象
      fn.call(o,1,2);
      
      ```

  - 借用父构造函数继承属性

    - ```js
      // 借用父构造函数继承属性
      // 1、父构造函数
      function Father(uname,age){
      	// 此时this指向父构造函数的对象实例
      	this.uname = uname;
      	this.age = age;
      }
      // 设置共有方法
      Father.prototype.money = function(){ // 方法写在了原型对象上 没有写到构造函数中 所以子构造函数访问不到
          console.log(100000);
      } 
      // 2、子构造函数
      function Son(uname,age,score){
      	// this指向子构造函数的对象实例
          // 使父构造函数里的this指向子构造函数中的this
      	Father.call(this,uname,age); // 使用call()方法改变this指向
      	this.score = score;
      }
      // Son.prototype = Father.prototype; // 这样直接赋值会有问题，如果修改了子原型对象，父原型对象也会跟着一起变化
      Son.prototype = new Father(); 
      // 在内存创建一个Father实例对象 让子对象原型指向 Father的实例对象
      //修改子原型对象是 指向的是父实例对象 跟父原型对象是两个不同的对象 不会影响
      Son.prototype.constructor = Son; // 如果利用对象的形式修改了原型对象，别忘了用constructor 指向原来的构造函数
      Son.prototype.exam = function(){
          // 这个是子构造函数专门的方法 父构造函数没有
          console.log('要考试')
      }
      var son = new Son('张三',18,100) // 既继承了父构造函数的uname age 也有自己的score
      console.log(son);
      console.log(Father.prototype) // 如果使用子原型对象指向父原型对象 那父原型对象上也有exam函数
      console.log(Son.prototype.constructor); // 因为上面 new Father 所以现在这个指向的是Father 用constructor 指回原来的对象
      ```

- **JavaScript原型，原形链？有什么特点？**

  - 原型对象也是普通的对象，是对象⼀个⾃带隐式__proto__属性，原型也有可能有⾃⼰的原型，如果⼀个原 型对象的原型为null的话，我们就称为原型链。 
  - 原形链是由⼀些⽤来继承和共享属性的对象组成的（有限的）对象链。
  - 如何查找构造函数和原型中的属性？
    - 构造函数.prototype 查看构造函数的原型属性
    - 实例对象 .__proto__查看实例对象的构造函数的原型
    - 实例对象.__proto__.constructor查看实例对象的构造函数

- **JavaScript实现继承的方式？**

  - 构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
    - 特点
      - 解决了子类实例共享父类引用属性的问题
      - 创建子类实例时，可以向父类传递参数
      - 可以实现多继承（call多个父类对象）
    - 缺点
      - 实例并不是父类的实例，只是子类的实例
      - 只能继承父类的实例属性和方法，不能继承原型属性/方法
      - 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
  - 原型链继承，将父类的实例作为子类的原型
    - 特点
      - 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
      - 父类新增原型方法/原型属性，子类都能访问到
      - 简单，易于实现
    - 缺点
      - 要想为子类新增属性和方法，必须要在`new Animal()`这样的语句之后执行，不能放到构造器中
      - 无法实现多继承
      - 创建子类实例时，无法向父类构造函数传参
  - 实例继承:  为父类实例添加新特性，作为子类实例返回
    - 特点
      - 不限制调用方式，不管是`new 子类()`还是`子类()`,返回的对象具有相同的效果
    - 缺点
      - 实例是父类的实例，不是子类的实例
      - 不支持多继承
  - 拷⻉继承:
    - 特点
      - 支持多继承
    - 缺点
      - 效率较低，内存占用高（因为要拷贝父类的属性）
      - 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
  - 组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
    - 特点
      - 可以继承实例属性/方法，也可以继承原型属性/方法
      - 既是子类的实例，也是父类的实例
      - 不存在引用属性共享问题
      - 可传参
      - 函数可复用
    - 缺点
      - 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
  - 寄⽣组合式继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
    - 特点
      - 堪称完美
    - 缺点
      - 实现较为复杂 

- **在JavaScript中创建⼀个真正的private⽅法有什么 缺点？**

  - 每⼀个对象都会创建⼀个private⽅法，这样很耗费内存

- **JavaScript有⼏种类型的值？**

  - 栈：原始数据类型（Undefined,null,Boolean,Number,String）
  - 堆：引⽤数据类型（对象，数组和函数）
  - 两种类型的区别是：存储位置不同

- **JavaScript的基本数据类型**

  - 基本数据类型：Number、String、Boolean、Undefined、null，
  - 引用数据类型：Object

- **Javascript有哪⼏种数据类型** 

  - 基本数据类型
    - 字符串 String
    - 数字 Number
    - 布尔 Boolean
  - 复合数据类型
    - 数组 Array
    - 对象 Object
  - 特殊数据类型
    - Null 空对象
    - Undefined 未定义

- **如何判断数据类型 **

  - typeof

    - ```js
      alert(typeof a)   ------------> string
      alert(typeof b)   ------------> number
      alert(typeof c)   ------------> object
      alert(typeof d)   ------------> object
      alert(typeof e)   ------------> function
      alert(typeof f)   ------------> function
      其中typeof返回的类型都是字符串形式，需注意，例如：
      alert(typeof a == "string") -------------> true
      alert(typeof a == String) ---------------> false
      另外typeof 可以判断function的类型；在判断除Object类型的对象时比较方便。
      ```

  - instanceof

    - ```js
      alert(c instanceof Array) ---------------> true
      alert(d instanceof Date) 
      alert(f instanceof Function) ------------> true
      alert(f instanceof function) ------------> false
      注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。
      ```

  - constructor

    - ```js
      alert(c.constructor === Array) ----------> true
      alert(d.constructor === Date) -----------> true
      alert(e.constructor === Function) -------> true
      注意： constructor 在类继承时会出错
      eg：
            function A(){};
            function B(){};
            A.prototype = new B(); //A继承自B
            var aObj = new A();
            alert(aobj.constructor === B) -----------> true;
            alert(aobj.constructor === A) -----------> false;
      而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：
            alert(aobj instanceof B) ----------------> true;
            alert(aobj instanceof B) ----------------> true;
      言归正传，解决construtor的问题通常是让对象的constructor手动指向自己：
            aobj.constructor = A; //将自己的类赋值给对象的constructor属性
            alert(aobj.constructor === A) -----------> true;
            alert(aobj.constructor === B) -----------> false; //基类不会报true了;
      ```

  - prototype

    - ```js
      alert(Object.prototype.toString.call(a) === ‘[object String]’) -------> true;
      alert(Object.prototype.toString.call(b) === ‘[object Number]’) -------> true;
      alert(Object.prototype.toString.call(c) === ‘[object Array]’) -------> true;
      alert(Object.prototype.toString.call(d) === ‘[object Date]’) -------> true;
      alert(Object.prototype.toString.call(e) === ‘[object Function]’) -------> true;
      alert(Object.prototype.toString.call(f) === ‘[object Function]’) -------> true;
      大小写不能写错，比较麻烦，但胜在通用。
      ```

  - $.type()

    - ```js
      如果对象是undefined或null，则返回相应的“undefined”或“null”。
      jQuery.type( undefined ) === "undefined"
      jQuery.type() === "undefined"
      jQuery.type( window.notDefined ) === "undefined"
      jQuery.type( null ) === "null"
      如果对象有一个内部的[[Class]]和一个浏览器的内置对象的 [[Class]] 相同，我们返回相应的 [[Class]] 名字。 (有关此技术的更多细节。 )
      jQuery.type( true ) === "boolean"
      jQuery.type( 3 ) === "number"
      jQuery.type( "test" ) === "string"
      jQuery.type( function(){} ) === "function"
      jQuery.type( [] ) === "array"
      jQuery.type( new Date() ) === "date"
      jQuery.type( new Error() ) === "error" // as of jQuery 1.9
      jQuery.type( /test/ ) === "regexp"
      其他一切都将返回它的类型“object”。
      ```

- **实现⼀个函数clone 可以对Javascript中的五种主要数据类型（Number、string、Object、Array、 Boolean）进⾏复制** 

  ```js
  Object.prototype.clone=function(){
  	var o= this.constructor===Array? [] : {};
  	for(var e in this){
  		o[e]= typeof this[e]==="object" ? this[e].clone() : this[e];
  	}
  	return o;
  };
  ```

- **例举3种强制类型转换和2种隐式类型转换？**

  - 强制（parseInt,parseFloat,number）隐式（+ ，-，==，===）

- **"=="和"==="的不同**

  - 前者会⾃动转换类型，后者不会
  - 区别
    - ==等于，只判断值是否相等，相等返回true，反之false
    - ===全等，先判断类型是否相等，如果类型相等再判断值是否相等，相等返回true，反之false

- **js有哪些内置对象**

  - 数据封装类对象：Object、Array、Boolean、Number、String
  - 其他对象：FUnction、Arguments、Math、Date、RegExp、Error

- **break 与 continue 有什么区别？**

  - break 可跳出循环。会结束循环
  - continue 中断循环中的迭代，如果出现了指定的条件，继续执行下一个。不会结束循环

- **⾯向对象和类的区别？**

  - 简单的说类是对象的模板。
  - 在js中没有类，所以在js中所谓的类就是构造函数，对象就是有构造函数创建出来的实例对象。⾯向对象就 是使⽤⾯向对象的⽅式处理问题，⾯向对象是向过程进⾏封装。
  - 对象的概念，⾯向对象编程的程序实际就是多个对象的集合，我们可以把所有的事物都抽象成对象，在程序 设计中可以看作：对象=属性+⽅法。属性就是对象的数据，⽽⽅法就是对象的⾏为 
  - 类的概念，类是对象的模板，⽽对象是类的实例化。举个例⼦，汽⻋设计图可以看作是类，⽽具体的汽⻋就 是对象。再⽐如有⼀个类是表示⼈，然后可以通过⼈这个模板来实例化出张三，李四...

- **⾯向对象有三⼤特性**

  - 封装性，为了对代码更好的进⾏复⽤和维护
  - 继承性，解决了代码复⽤问题，为了代码更简单的复⽤
  - 多态性，多态的⽬的就是为了代码更灵活的复⽤，使⼦类继承的⾏为可以变化

- **JavaScript有哪些方法定义对象**


  - 对象字面量：`var obj = {};`
  - 构造函数：`var obj = new Object();`
  - Object.create():`var obj = Object.create(Object.prototype);`

- **用过哪些设计模式**


  - 工厂模式

    - 工厂模式解决了重复实例化的问题，但还有一个问题,那就是识别问题
    - 主要好处就是可以消除对象间的耦合，通过使用工程方法而不是`new`关键字
  - 构造函数模式

    - 使用构造函数的方法，即解决了重复实例化的问题，又解决了对象识别的问题
    - 直接将属性和方法赋值给`this`对象;

- **null，undefined的区别？**

  - null其实并不是一个对象，尽管typeof null 输出的是object,但是这其实是一个bug。null被判断为对象类型。转为数值时为0

  - undefined表示变量声明但未初始化时的值，

  - null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针。

  - undefined 表示⼀个变量声明了没有初始化（赋值）；转为数值时为NaN

  - typeof undefined

  - ```js
    //"undefined" undefined:是⼀个表示"⽆"的原始值或者说表示"缺少值"，就是此处应该有⼀个值，但是还没有定义。当尝试读取时 会返回undefined； 例如变量被声明了。但没有赋值时，就等于undefined 
    ```

  - typeof null 

  - ```js
    //"object" null:是⼀个对象（空对象,没有任何属性和⽅法）； 例如作为函数的参数，表示该函数的参数不是对象；
    ```

- **console.log(1+'2')和console.log(1-'2')的打印结果**

  - console.log(1+'2') *//12* 
  - console.log(1-'2') *//-1*

- **JSON的了解？**

  - JSON(JavaScript Object Notation)是⼀种轻量级的数据交换格式。它是基于JavaScript的⼀个⼦集。数据格式简单，易于读写，占⽤带宽⼩。

- **split()join()的区别**

  - 前者是切割成数组的形式，后者是将数组转换成字符串

- **数组⽅法pop()push()unshift()shift()**

  - pop()尾部删除 push()尾部添加
  - shift()头部删除 unshift()头部添加

- **如何消除⼀个数组⾥⾯重复的元素 **

  ```js
  var fruits = ['bananer', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
  
  //方法一
  var uniqueFruits = Array.from(new Set(fruits));
  console.log(uniqueFruits); // returns    bananer,apple,orange,watermelon,grape
  //方法二
  var uniqueFruits2 = [...new Set(fruits)];
  console.log(uniqueFruits2); // returns    bananer,apple,orange,watermelon,grape
  //方法三
  function qc(arr1){
  	let arr = [];
  	for( let i = 0; i < arr1.length; i++) {
  		if( arr.indexOf(arr1[i]) == -1) {
  			arr.push(arr1[i])
  		}
  	}
  	return arr;
  }
  arr1 = ["1","1","3","5","2","24","4","4","a","a","b"];
  console.log(qc(arr1));
  ```

- **请列举字符串操作的⽅法？**

  - chartCodeAt⽅法返回⼀个整数，代表指定位置字符的Unicode编码；
  - chartAt⽅法返回指定索引位置处的字符。如果超出有效范围的索引值返回空字符串；
  - slice⽅法返回字符串的⽚段
  - substr⽅法返回⼀个从指定位置开始的指定⻓度的⼦字符串。 
  - indexOf⽅法返回String对象内第⼀次出现⼦字符串位置。如果没有找到⼦字符串。则返回-1；
  - lastIndexOf⽅法返回String对象中字符串最后出现的位置。如果没有匹配到⼦字符串，则返回-1；
  - search⽅法返回与正则表达式查找内容匹配的第⼀个字符串的位置；
  - concat⽅法返回字符串值，该值包含了两个或多个提供的字符串的连接； split将⼀个

- **写一个function ，清除字符串前后的空格**

  ```js
  //重写trim方法
  if(!String.prototype.trim){
      String.prototype.trim = function(){
          return this.replace(/^\s+/,"").replace(/\s+$/,""); 
      }
  } 
  //写fntrim去掉左右空格
  function fntrim(str){
      return str.replace(/^\s+/,"").replace(/\s+$/,"");
  }
  ```

- **字符串的 substr 与 substring 方法有什么区别？**

  - substr（startIndex,lenth）： 第二个参数是截取字符串的长度（从起始点截取某个长度的字符串）；
  - substring（startIndex, endIndex）： 第二个参数是截取字符串最终的下标 （截取2个位置之间的字符串,‘含头不含尾’）

- **深拷⻉和浅拷⻉的区别？如何实现？** 

  - 浅度复制		Array类型是一种引用类型；当数组a复制给数组b时，对数组b进行元素修改，数组a也会发生修改。会改变原数组
  - 深度复制        使用concat()方法，返回新的数组；防止浅度复制的情况发生，对数组b进行元素修改操作，数组a不发生变更。不会改变原数组

- **写出原生 ajax 的步骤**

  1. 创建ajax对象：var xhr = new XMLHttpRequest()
  2. 配置：xhr.open(发送类型，地址，同步或异步)
  3. 发送： xhr.send()
  4. 接受  xhr.responseText

  ```js
  xhr.onreadystatechange = function(){
  			//xhr.readyState 调取ajax状态码
  			if(xhr.readyState == 4){
  				//xhr.status  服务器状态码
  				if(xhr.status >=200&&xhr.status<300 || xhr.status == 304){
  					let json = JSON.parse(xhr.responseText)
  					//
  					let str = ''
  					for(let i =0;i<json.data.length;i++){
  						str+=`
  						<div class="box">
  							<div>
  							<img src="${json.data[i].cover}"/>
  							</div>
  							<div>
  								<div>${json.data[i].title}</div>
  								<div style="font-size: 12px;">${json.data[i].author}</div>
  								<div class="text">
  								${json.data[i].desc}
  								</div>
  							</div>
  						</div>
  						`
  					}
  					box.innerHTML = str
  //					console.log(json.data)
  				}else{
  					console.log(xhr.status)
  				}
  			}
  		}
  ```

- **ajax请求时，如何解释json数据**

  - 前端解析后端数据
    - 前端在解析后端发来的数据，使用**JSON.parse()**方法把字符串转为json对象.
  - 前端向后端发送数据
    - ,使用**JSON.stringify()**方法把json对象转为字符串.

- **服务器状态码status**

  - 1**	信息，服务器收到请求，需要请求者继续执行操作
  - 2**	成功，操作被成功接收并处理
  - 3**	重定向，需要进一步的操作以完成请求
  - 4**	客户端错误，请求包含语法错误或无法完成请求
  - 5**	服务器错误在处理请求的过程中发生了错误


- **http的状态码有哪些？**
  - 400：客户端请求的语法错误，服务器无法理解；
  - 401：请求要求用户的身份验证；
  - 402：保留，将来使用；
  - 403：服务器理解请求客户端的请求，但是拒绝此请求；
  - 404：服务器无法根据客户端的请求找到资源；
  - 405：客户端请求中的方法被禁止；
  - 406：服务器无法根据客户端请求的内容特性完成请求；
  - 407：请求要求代理的身份证，与401类似，但请求者应当使用代理进行授权；
  - 408：服务器等待客户端发送的请求时间长，超时；
  - 409：服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突；
  - 410：客户端请求的资源已经不存在；


- **ajax状态码readyState**

  - 0 － （未初始化）还没有调用send()方法
  - 1 － （载入）已调用send()方法，正在发送请求
  - 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
  - 3 － （交互）正在解析响应内容
  - 4 － （完成）响应内容解析完成，可以在客户端调用了
- **ajax**
  - $.ajax()
  - 格式：$.ajax({})。参数为json的形式。
  - url    请求的地址
  - success 成功的回调
  - error  失败的回调
  - contentType 请求头信息
  - data     发送到后台的数据
  - type 请求类型
  - cache     是否缓存
  - timeout 延迟
  - async: false 是否异步
  - dataType    返回的数据类型，XML、html、json、jsonp、script或者text 
- **写出原生 jsonp 的步骤及 jq 里面的写法**

  - JS
    1. 创建一个script 标签
    2. src里面引地址 
    3. 追加到页面中
    4. 在外面声明个全局的回调函数 进行对接
  - JQ
    1.  type:'get',发送方式
    2.  url地址
    3.  dataType:'jsonp' 跨域
    4.  jsonp:'cb', 跨域参数
    5.  data   发送后台的数据
    6.  success 成功回调
    7.  error 失败回调

- **GET和POST的区别，何时使⽤POST？**

  - GET：从指定的资源请求数据， 从服务器上获得数据， 传输量小，安全性低
  - POST：向指定的资源提交要被处理的数据，向服务器上传递数据。传输量大，安全性高

- **简述同步和异步的区别**

  1. 同步 =》false -》阻塞-》更直接更简单
  2. 异步 -》 true -》会复杂一点

- **xml和json的区别**


  - `JSON`相对`于XML`来讲，数据的体积小，传递的速度更快些
  - 交互更加方便，更容易解析处理，更好地数据交互
  - json对数据的描述性比XML较差
  - json的速度要远远快于XML

- **eval是指做什么的？**

  - 把字符串参数解析成JS代码并运行，并返回执行的结果；
  - 应该避免使⽤eval，不安全，⾮常耗性能（2次、⼀次解析成js语句，⼀次执⾏）； 
  - 由JSON字符串转换为JSON对象的时候可以⽤eval，val obj=eval('('+str+')')

- **Falsh、Ajax各⾃的优缺点，在使⽤中如何取舍？**

  - Falsh适合处理多媒体，⽮量图形、访问机器；对css、处理⽂本上不⾜，不容易被搜索。
  - Ajax对css、⽂本⽀持很好、⽀持搜索；多媒体、⽮量图形、机器访问不⾜。 共同点：与服务器的⽆刷新传递消息、⽤户离线和在线状态，操作DOM

- **为什么要同源限制**


  - 源策略指的是：协议，域名，端口相同，同源策略是一种安全协议

- **列举⼏种解决跨域问题的⽅式，且说明原理**

  - **jsonp**
    - script标签是不受同源策略影响的，它可以引入来自任何地方的js文件。动态添加script
  - **使用window.name来进行跨域**
    - window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。
  - **使用HTML5中新引进的window.postMessage方法来跨域传送数据**
    - window.postMessage(message,targetOrigin) 方法是html5新引进的特性，可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源，目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持window.postMessage方法。

- http协议和tcp协议区别？

  - TCP协议对应于传输层，定义数据传输和连接方式的规范。
  - HTTP超文本传送协议是应用层协议，在服务器和浏览器之间的请求和响应的交互，必须按照规定的格式和遵循一定的规则。
  - http使用了面向连接的TCP作为运输层协议，保证了数据的可靠传输。

- HTTP 和 HTTPS 的区别

  - HTTP是一种用于分布式、协作式和超媒体信息系统的应用层协议。
  - HTTPS是一种透过计算机网络进行安全通信的传输协议

- JSONP 的原理是什么

  - 1、创建一个script  2、src里面引地址  3、追加到页面中  4、在外面声明个全局的回调函数 进行对接

- 刷新⻚⾯，js请求⼀般会有哪些地⽅有缓存处理

  - DNS缓存：短时间内多次访问某个网站，在限定时间内，不用多次访问DNS服务器。
  - CDN缓存：内容分发网络
  - 浏览器缓存：浏览器在用户磁盘上，对最新请求过的文档进行了存储
  - 服务器缓存：将需要频繁访问的web页面和对象保存在离用户更近的系统中，当再次访问这些对象的时候加快了速度。

- 如何对⽹站的⽂件和资源进⾏优化 

  - 图片优化，服务器响应时间，使用cdn 避免重定向 避免错误请求

- 你对⽹⻚标准和W3C重要性的理解

  - 标签闭合，合理嵌套，英文小写，标签语义化
  - 外链式的css和js脚本，把结构、样式、行为分离
  - 开发组件化可复用，代码精简易维护

- http的⼏种请求⽅法和区别 

  - get:获取网络资源
    - get方法提交的表单数据 只是经过了简单的编码，存在着安全的隐患，
    - 提交的数据量不能太多， 浏览器对url的长度是有限制的，数据就是url的一部分。
    - 该方法的响应是可缓存的
  - post:主要是向web服务器提交表单数据，尤其是大批量的数据。
    - 优点：信息保密性好，数据量大，但是响应不可缓存，除非响应里有合适的expires头域或 cache-control ,不能进行管道化传输。

- Http和https的区别 

  1. http是超文本传输协议，信息是明文传输，https则是具有安全性的ssI加密传输协议。
  2. http和https使用的是完全不同的链接方式，用的端口也不一样，前者是80，后者是443。
  3. https协议需要用到ca申请证书，一般免费证书较少，因而需要一定的费用。
  4. http的链接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输，身份认证的网络协议，比http协议安全。

- 如何实现⻚⾯每次打开时清除本⻚缓存 

  1. 用html 标签设置HTTP头信息

     ```js
     <meta http-equiv="Pragma" content="no-cache">
     <meta http-equiv="Cache-Control" content="no-cache">
     <meta http-equiv="Expires" content="0">
     ```

     - no-cache: 强制缓存从服务器上获取新的页面
     - no-store: 在任何环境下缓存不保存任何页面

  2. 在需要打开的url后面增加一个随机参数：

     - 增加参数前： url = test/test.jsp
     - 增加参数后：url = test/test.jsp?ranparam = random()

  3. 说明： 因为每次请求的url后面的参数不一样，相当于请求的是不同的页面，用这样的方法来曲线救国，清除缓存

- 

- 

- **在js的计时器运⾏原理是怎样的，为什么可以触发计时器效果？计时器是多线程吗？**

  - JavaScript引擎只有⼀个线程，强迫异步事件排队等待被执⾏。
  - .setTimeout和setInterval本质上不同的地⽅是他们如何执⾏异步代码的。
  - 如果⼀个定时器正在执⾏的时候被阻塞了，那么它将会被推迟到下⼀个可能的执⾏点，这既是使得延迟时 间有可能会超过声明定时器时设置的值。
  - 计时器通过设定⼀定的时间段（毫秒）来异步的执⾏⼀段代码。因为JavaScript是⼀个单线程，计时器提供 了⼀种绕过这种语⾔限制来执⾏代码的能⼒。
  - 计时器是单线程的，需要等待上⼀个执⾏完，如果上⼀个没有执⾏完，下⼀个需要延迟执⾏，直到上⼀个执 ⾏完

- **cookie**

  - 设置：document.cookie = 'a=12';
  - 不安全
  - 大小只有 4k  （1kb = 1024个英文文字，中文文字占两个字节）
  - 同一个域名 公用一套cookie

- **请解释Cookie、sessionStroage、localStroage的区别？**


  - Cookie：不安全、大小只有 4k、同一个域名 公用一套cookie、过期时间默认是浏览器关闭就过期。（我们可以自己设定）
  - localStroage：默认是永久储存的。大小 提供了5M
  - sessionStroage：默认是临时储存的，浏览器关闭过期，大小 提供了5M

- **this对象的理解**

  - this是⼀个关键字，它代表函数运⾏时，⾃动⽣成⼀个内部对象，只能在函数内部使⽤，this是js的⼀个关键字，随着函数使⽤场合不同，this的值会发⽣变化。
  - 但是有⼀个总原则，那就是this指的是调⽤函数的那个对象。
  - 定时器的this指向window
  - 作为纯粹的函数调⽤this指向全局对象
  - 作为对象的⽅法调⽤this指向调⽤对象
  - 作为构造函数被调⽤this指向新的对象（new会改变this的指向） 
  - apply调⽤this指向apply⽅法的第⼀个参数 
  - this总是指向函数的直接调⽤者（⽽并⾮间接调⽤者）；
  - 如果有new关键字，this指向new出来的那个对象；
  - 在事件中，this指向这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象 Window；

- **call()和play()的区别和作⽤？改变this的指向的方法**

  - call()函数的方法 改变函数的this指向，第一个参数是目标，从第二个参数开始是实参
  - applay()函数方法 改变函数的this指向，第二个参数是一个数组
  - bind() 返回的是一个新的函数 调用时才会执行

- **如何改变函数内部的this指针的指向 **

  - ​	call()函数的方法 改变函数的this指向，第一个参数是目标，从第二个参数开始是实参
  - applay()函数方法 改变函数的this指向，第二个参数是一个数组
  - bind() 返回的是一个新的函数 调用时才会执行列举⼏种解决跨域问题的⽅式，且说明原理

- **new操作符具体⼲了什么呢？**

  - 创建⼀个空对象，并且this变量引⽤该对象，同时还继承了该函数的原型。
  - 属性和⽅法被加⼊到this所引⽤的对象中。
  - 新创建的对象由this所引⽤，并且最后隐式的返回this。

- **什么是window对象？什么是document对象？**

  - window是 浏览器对象模型，一定都是 window 开头的
  - document对象是文档对象模型，一定都是 document 开头的

- **IE和DOM事件流的区别**

  - 执⾏顺序不⼀样、参数不⼀样、事件加不加on、this指向问题\

- **⻚⾯导⼊时，使⽤link和@import有什么区别** 

  - link属于xhtml标签，引入 css时 在页面是同时加载。
  - @import是CSS中提供的， @import需要页面完全载入后才能加载。
  - @import有兼容性问题，而link是xhtml标签，不存在浏览器兼容性问题
    link引入样式的权重大于@import的引用（@import是将引用的样式导入到当前的页面中）

- **DOM怎样添加、移动、复制、创建和查找节点**

  - ```js
    // 创建新节点
    createDocumentFragment() //创建⼀个DOM⽚段
    createElement() //创建⼀个具体的元素
    createTextNode() //创建⼀个⽂本节点
    // 添加、移除、替换、插⼊
    appendChild()
    removeChild()
    replaceChild()
    insertBefore() //在已有的⼦节点前插⼊⼀个新的⼦节点
    // 查找
    getElementsByTagName() //通过标签名称
    getElementsByName() //通过元素的Name属性的值(IE容错能⼒较强，会得到⼀个数组，其中包括id等于name值的)
    getElementById() //通过元素Id，唯⼀性
    
    ```

- **怎么添加、移除、复制、创建、和查找节点**

  - 创建新节点
    - createDocumentFragment() //创建一个DOM片段
    - createElement() //创建一个具体的元素
    - createTextNode() //创建一个文本节点
  - 添加、移除、替换、插入
    - appendChild()
    - removeChild()
    - replaceChild()
    - insertBefore()
  - 查找
    - getElementsByTagName() //通过标签名称
    - getElementsByName() //通过元素的Name属性的值
    - getElementById() //通过元素Id，唯一性

- **事件委托是什么**

  - 通过事件冒泡的原理给父级添加点击事件
  - 后来添加的事件也有此事件

- **如何阻⽌事件冒泡和默认事件**

  - ```js
    function stopBubble(e)
    {
     if (e && e.stopPropagation)
     e.stopPropagation()
     else
     window.event.cancelBubble=true
      }
    return false
      
    ```

- **禁⽌事件冒泡**

  - event.stopPropagation()

- **禁⽌默认事件**

  - event.preventDefault()

- **什么是事件冒泡/捕获**

  - 捕获阶段  从外层到目标的过程
  - 冒泡阶段  从里面到外面的过程
  - 事件监听，第三个参数是布尔值，默认false，false是事件冒泡，true是事件捕获
  - 冒泡是默认触发的 标准浏览器支持捕获

- **普通函数与箭头函数有什么区别？**

  1. 没有this、super、arguments和new.target绑定
  2. 箭头函数是匿名函数，不能作为构造函数，不能使用new
  3. 没有原型属性 由于不可以通过new关键字调用箭头函数
  4. 箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值
  5. 不支持argument对象
  6. 箭头函数不能当做Generator函数,不能使用yield关键字

- **let、const、var 有什么区别？**

  - var
    - var定义的变量可以变量提升     (也叫域解析 域加载 ...) 
    - var定义的变量会成为window属性      
    - 只被函数限制作用域
  - let
    - let   可以在声明的时候不赋值      声明的变量可重新赋值
  - const
    - const 在声明时必须赋值             声明的常量一经赋值不可修改
  - let&const 会把{}限制作用域**必须先声明，后调用 按顺序执行 **
  - let&const:定义的变量写在{}里面 就是一个局部变量  {}执行结束 局部变量就被销毁

- **了解Node？Node的使⽤场景都有哪些？**

  - ⾼并发，聊天，实时消息推送

- **介绍下最常⽤的⼀款框架**

  - jQuery，rn,angular等

- **对于前端⾃动化构建⼯具有了解吗？简单介绍⼀下**

  - Gulp,Grunt等

- **谈谈垃圾回收机制的方式及内存管理**

  - 垃圾回收机制—GC
    - **标记清除**： js中最常用的垃圾回收方式就是标记清除。
    - **引用计数** ：是跟踪记录每个值被引用的次数。
  - 内存管理
    - Javascript引擎基础GC方案是（simple GC）：mark and sweep（标记清除）
      1. 遍历所有可访问的对象。
      2. 回收已不可访问的对象。
    - GC的缺陷
      - 和其他语言一样，javascript的GC策略也无法避免一个问题：GC时，停止响应其他操作，这是为了安全考虑。而Javascript的GC在100ms甚至以上，对一般的应用还好，但对于JS游戏，动画对连贯性要求比较高的应用，就麻烦了。这就是新引擎需要优化的点：避免GC造成的长时间停止响应。
    - GC优化策略
      1. 分代回收（Generation GC）：这个和Java回收策略思想是一致的。目的是通过区分“临时”与“持久”对象；多回收“临时对象”区（young generation），少回收“持久对象”区（tenured generation），减少每次需遍历的对象，从而减少每次GC的耗时
      2. 增量GC：这个方案的思想很简单，就是“每次处理一点，下次再处理一点，如此类推”

- **如何优化图像，图像格式的区别** 

  - 优化图像
    - 不用图片，尽量用css3代替
    - 使用恰当的图片格式。我们常见的图片格式有JPEG、GIF、PNG
    - 使用字体图标webfont、CSS Sprites等
    - 用CSS或JavaScript实现预加载。
    - WebP图片格式能给前端带来的优化
  - 图像格式
    - 矢量图：图标字体，如 font-awesome；svg 
    - 位图：gif,jpg(jpeg),png

- 如何进⾏⽹站性能优化 

  - 页面优化、减少http请求数、外部脚本置地、异步执行inline脚本、将css放在head中、减少不必要的HTTP跳转、避免重复的资源请求

- HTML5的离线储存怎么使⽤，⼯作原理能不能解释⼀下？ 

  - 页面头部像下面一样加入一个manifest的属性；
  - 在cache.manifest文件的编写离线存储的资源；
  - 在离线状态时，操作window.applicationCache进行需求实现。
  - 原理
    -  HTML5的离线存储是基于一个新建的.appcache文件的，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储下来，之后当网络在处于离线状态时，浏览器会通过被离线存储的数据进行页面展示。

- 浏览器是怎么对HTML5的离线储存资源进⾏管理和加载的呢 

  - 在线情况下
    1. 浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件
    2. 如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。
    3. 如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，
    4. 然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作
    5. 如果文件改变了，那么就会重新下载文件中的资源并进行离线存储
  - 离线情况下
    - 浏览器直接使用离线存储的资源

- iframe有那些缺点？

  - 不易管理，用户体验感差，不利于搜索引擎优化，设备兼容性差，增加服务器的http请求。

- WEB标准以及W3C标准是什么? 

  - 对结构的要求：标签要闭合、标签字母要小写、标签不允许随意嵌套。
  - 对css和js要求： 使用外联css样式表和js脚本，样式少使用行间样式表，使结构和表现分离，命名规范，标签越少，加载越快。

- Doctype作⽤? 严格模式与混杂模式如何区分？它们有何意义? 

  - 作用：告诉浏览器文件的类型
  - 意义：如果只存在严格模式，旧网站必然受到影响，如果只存在混杂模式，就会回到浏览器大战时的混乱，每个浏览器都有自己的解析模式。

- HTML全局属性(global attribute)有哪些 

  - `accesskey`:设置快捷键，提供快速访问元素如[aaa](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fattax1994%2FFE-interview%23)在windows下的firefox中按`alt + shift + a`可激活元素
  - `id`: 元素id，文档内唯一
  - class`:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素`
  - `style`: 行内css样式
  - `lang`: 元素内容的的语言
  - `title`: 元素相关的建议信息
  - `dir`: 设置元素文本方向
  - `draggable`: 设置元素是否可拖拽
  - `contenteditable`: 指定元素内容是否可编辑
  - `contextmenu`: 自定义鼠标右键弹出菜单内容
  - `data-*`: 为元素增加自定义属性
  - `dropzone`: 设置元素拖放类型： copy, move, link
  - `hidden`: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
  - `spellcheck`: 是否启动拼写和语法检查
  - `tabindex`: 设置元素可以获得焦点，通过tab可以导航
  - `translate`: 元素和子孙节点内容是否需要本地化

- ⽹⻚验证码是⼲嘛的，是为了解决什么安全问题 

  - 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
    有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试

- 浏览器页面渲染

  - 浏览器接受到http服务器发送过来的响应报文，并开始解析html文档，渲染页面，具体的渲染过程包括：构建DOM树，构建渲染树，定位页面元素，绘制页面元素等。

- **可以通过哪些⽅法优化css3 animation渲染 **

  - @keyframe中尽量选择不会引起重排及重绘的元素属性，消耗最低的是transform 和opacity两个属性
  - 使用box-shadow作为变化属性
  - 使用opacity作为变化属性

- **列举⼏个前端性能⽅⾯的优化** 

  - 网络方面
    - 减少http请求： 合并js文件/合并css文件/雪碧图的使用(css sprite)/使用base64表示简单的图片
    - 减小资源体积：gzip压缩/js混淆/css压缩/图片压缩
  - 渲染和DOM操作方面
    - 优化网页渲染： css的文件放在头部，js文件放在尾部或者异步、尽量避免內联样式
    - 避免空的src和href
    - DOM操作优化： 避免在document上直接进行频繁的DOM操作、使用classname代替大量的内联样式修改
  - 数据方面
    - 图片加载处理： 预加载、图片懒加载、首屏加载时进度条的显示
    - 异步请求的优化： 使用正常的json数据格式进行交互
  - 移动端优化
    - 减少重定向、首屏优化，保证首屏加载数据小于14kb、不滥用web字体
    - 使用touchstart、touchend代替click

- **如何实现同⼀个浏览器多个标签⻚之间的通信**

  - 第一种方式：调用localStorage

    - 在一个标签页里面使用localStorage.setItem(key, value)添加（修改、删除）内容；

    - 在另一个标签页面里面监听storage事件，得到localstorge存储的值，实现不同标签页之间的通信。

      ```js
      <input id="name"> 
      <input type="button" id="btn" value="提交"> 
      <script type="text/javascript"> 
      $(function(){ 
      $("#btn").click(function(){ 
      var name=$("#name").val(); 
      localStorage.setItem("name", name); 
      }); 
      }); 
      </script>
      ```

    - 第二种：调用cookie_setInterval()

      - 将要传递的信息存储在cookie中，每隔一定时间读取cookie信息，即可随时获取要传递的信息

        ```js
        <input id="name"> 
        <input type="button" id="btn" value="提交"> 
        <script type="text/javascript"> 
        $(function(){ 
        $("#btn").click(function(){ 
        var name=$("#name").val(); 
        document.cookie="name="+name; 
        }); 
        }); 
        ```

- **浏览器的存储技术有哪些** 

  - cookies：应用于和服务端通信
  - localStorage是web Storage互联网存储规范中的一部分，低版本浏览器不支持
  - sessionStorage:此方式存储的数据仅窗口级别有效，同一个Tab页面刷新或者跳转，都能获取到本地存储的数据，当新开窗口或者页面时，原来的数据就消失了
  - indexedDB:是一种更复杂和全面地客户端数据存储方案，它是基于javaScript,面向对象的和数据库的，能非常容易的存储数据和检索已经建立关键字索引的数据

- 前端需要注意哪些SEO 

  - SEO: 具体是指通过网站结构调整，网站内容建设，网站代码优化，以及站外优化，使网站满足搜索引擎的收录排名需求，提高网站在搜索引擎中关键字的排名，从而吸引精准用户进入网站，获得免费流量，产生直接销售或品牌推广。
  - 需要注意的：
    - 合理的title,description,keyswords搜索引擎对这三项的权重逐个减少，title值强调重点即可，重要的关键词出现不要超过两次，而且要靠前。	
    - 不同页面的tilte要有所不同，description把页面的内容高度概括，长度合适，不可过分堆叠关键词，不同页面description有所不同，keyswords列举出重要的关键词即可。
    - 语义化的html代码，符合w3c规范，语义化代码有利于搜索引擎理解网页。

- 什么是Virtual DOM,为何要⽤Virtual DOM 

  - 介绍：
    - 所谓的 `virtual dom`，也就是虚拟节点。它通过 `JS` 的 `Object` 对象模拟 `DOM` 中的节点，然后再通过特定的 `render` 方法将其渲染成真实的 `DOM` 节点。

  - Virtual DOM提高性能
    - 将 `Virtual DOM`作为一个兼容层，让我们还能对接非 `Web` 端的系统，实现跨端开发
    - 同样的，通过 `Virtual DOM`我们可以渲染到其他的平台，比如实现 `SSR`、同构渲染等等。
    - 实现组件的高度抽象化
  - 概念化
    - 那就是 `virtual dom` 做的一件事情到底是啥。我们知道的对于页面的重新渲染一般的做法是通过操作 `dom`，重置 `innerHTML` 去完成这样一件事情。而 `virtual dom` 则是通过 `JS` 层面的计算，返回一个 `patch` 对象，即补丁对象，在通过特定的操作解析 `patch` 对象，完成页面的重新渲染。具体 `virtual dom` 渲染的一个流程如图所示

- 从浏览器地址栏输⼊url到显示⻚⾯的步骤 

  1. 域名解析
  2. HTTP协议是使用TCP协议作为其传输层协议的，在拿到服务器的IP地址后，浏览器客户端会与服务器建立TCP连接，该过程包括三次握手:
     - 第一次握手：建立连接时，客户端向服务端发送请求报文
     - 第二次握手：服务器收到请求报文后，如同意连接，则向客户端发送确认报文
     - 第三次握手：客户端收到服务器的确认后，再次向服务器给出确认报文，完成连接。
  3. 浏览器发送HTTP请求
     - 浏览器构建http请求报文，并通过TCP协议传送到服务器的指定端口，http请求报文一共包括三个部分：
     - 请求行：指定http请求的方法，url,http协议版本等
     - 请求头：描述浏览器的相关信息，语言，编码等。
     - 请求正文：发送POST,PUT等请求时，通常需要向服务器传递数据，这些数据就储存在请求正文中。

- **列举你了解Html5. Css3 新特性** 

  - HTML5提供了新的元素来创建更好的页面结构：
  - HTML5 Canvas
  - HTML5 拖放
  - HTML5 地理定位
  - HTML5 Input 类型
  - HTML5 Audio(音频)、Video(视频)
  - HTML5 表单元素
  - CSS3 边框（Borders）
  - CSS3 选择器
  - CSS3 背景
  - CSS3 渐变
  - CSS3 文本效果
  - CSS3 字体
  - CSS3 转换和变形
  - CSS3 过渡

- js常⽤插件

  - 轮播图插件
  - ⼆级城市插件
  - 三级城市插件
  - ⽂字滑动效果 
  - ⼿⻛琴效果 
  - 视频播放插件
  - 弹层插件 
  - 百度编辑器 
  - ACE编辑器（轻巧）
  - 上传图⽚（裁剪）
  - ⻚⾯加载效果 
  - 全选反选各种效果
  - 京东楼层效果 
  - 懒加载

##### es6

- let const var⽐较

- 反引号（`）标识 

- 函数默认参数 

- 箭头函数

- 属性简写

- ⽅法简写 

- Object.keys()⽅法，获取对象的所有属性名或⽅法名

- Object.assign ()原对象的属性和⽅法都合并到了⽬标对象 

- for...of 循环

- import和export 

- Promise对象 

- 解构赋值 

- 

- set数据结构（可⽤于快速去重）

  - ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。`Set`本身是一个构造函数，用来生成 Set 数据结构
  - Set函数可以接受一个数组

- Spread Operator 展开运算符(...) 

- 字符串新增⽅法

- 移动端事件

  - touchstart 触摸开始 
  - touchmove移动 
  - touchend 离开
  - touchcancel

- forEach() 

  - `forEach()` 遍历数组全部元素，利用回调函数对数组进行操作，自动遍历整个数组，且无法break中途跳出循环，不可控，不支持return操作输出，return只用于控制循环是否跳出当前循环。

    回调有三个参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身。

- .map()

  -  `map()`返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
  -  `map()`方法按照原始数组元素顺序依次处理元素。
  -  注意
     -  map() 不会对空数组进行检测。
     -  map() 不会改变原始数组。

- filter() 

  -  `filter()`过滤数组，如果条件成立则会放到新的数组中。

- .reduce()

  - prev （上一次调用return回调返回的值，或者是提供的初始值（initialValue））

  - cur  currentValue （数组中当前被处理的元素）

  - index （当前元素在数组中的索引）

  - array （调用 reduce 的数组）

  - initialValue （作为第一次调用 callback 的第一个参数。）

  - 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

    ```js
    var arr = [1, 2, 3, 4];
            var sum = arr.reduce(function (prev, cur, index, arr) {
                console.log(prev, cur, index);
                return prev + cur;
            }) //没有初始值
            console.log(arr, sum);
    		//函数每一次执行完，return的返回值会被传入函数里的第一个参数，等第二次执行的时候，就会用上一次return的返回值也就是函数第一个参数再去计算
            //没有初始值，是循环少一次等于三次
            /*
                第一次    1 2 1
                第二次    3 3 2
                第三次    6 4 3
            */
    
            // var arr = [1, 2, 3, 4];
            // var sum = arr.reduce(function (prev, cur, index, arr) {
            //         console.log(prev, cur, index);
            //         return prev + cur;
            //     },
            //     1) //注意这里设置了初始值
            // console.log(arr, sum);
            //当有了初始值，会把初始值第一次传到prev，然后下标是从0开始循环，循环4次
            /*
        （必选参数） prev cur  index（可选参数，是循环的下标）
                第一次传入的初始值和第一个相加        0     1    0
                第二次                              1     2    1
                第三次                              3     3    2
                第四次                              6     4    3
                */
    //reduce的简单用法     数组求和，求乘积
    var  arr = [1, 2, 3, 4];
    var sum = arr.reduce((x,y)=>x+y)
    var mul = arr.reduce((x,y)=>x*y)
    console.log( sum ); //求和，10
    console.log( mul ); //求乘积，24
    
    
    
    
    //reduce的高级用法     计算数组中每个元素出现的次数
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    
    let nameNum = names.reduce((pre,cur)=>{
      if(cur in pre){
        pre[cur]++
      }else{
        pre[cur] = 1 
      }
      return pre
    },{})
    console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
    
    
    //数组去重
    let arr = [1,2,3,4,4,1]‘
    let newArr = arr.reduce((pre,cur)=>{
        if(!pre.includes(cur)){
          return pre.concat(cur)
        }else{
          return pre
        }
    },[])
    console.log(newArr);// [1, 2, 3, 4]
    
    
    //将二维数组转化为一维
    let arr = [[0, 1], [2, 3], [4, 5]]
    let newArr = arr.reduce((pre,cur)=>{
        return pre.concat(cur)
    },[])
    console.log(newArr); // [0, 1, 2, 3, 4, 5]
    
    //将多维数组转化为一维
    let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
    const newArr = function(arr){
       return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
    }
    console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
    
    
    //对象里的属性求和
    var result = [
        {
            subject: 'math',
            score: 10
        },
        {
            subject: 'chinese',
            score: 20
        },
        {
            subject: 'english',
            score: 30
        }
    ];
    
    var sum = result.reduce(function(prev, cur) {
        return cur.score + prev;
    }, 0);
    console.log(sum) //60
    ```

- some()

  - `some()` 判断数组中是否至少有一个元素满足条件，只要有一个满足就返回true，只有都不满足时才返回false

- .every() 

  - `every()`判断数组中是否每个元素都满足条件，只有都满足条件才返回true；只要有一个不满足就返回false；

- all()⽅法



