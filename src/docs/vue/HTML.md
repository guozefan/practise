## HTML+CSS

PS

- 切片工具使用
  - 切片导出
  - cutterman  PS的切图神器
- 格式选择
  - jpeg | jpg
    - 大图保存为jpg格式的
    - jpg可以支持压缩，压缩的品质越低，文件就越小 （文件越小，越不清晰）
  - png
    - 图标用png的、logo
  - gif
    - 网页中的动态表情
- 吸管工具
  - 量取颜色
- 测量工具



前端核心语言

HTML：超文本标记 - 结构

CSS：层叠样式表 - 样式

JS（JavaScript）：脚本语言 - 行为

> web开发中，要做到行为、样式、结构、三者分离



##### HTML部分

##### 布局类（块）

div，划分区域

h1~h6，标题

p，段落（用于多段文件、多行文字、或者一行描述性质的文字）

ul，无序列表，li表示列表项

ol，有序列表，li表示列表项

dl，定义列表，dt为定义列表的标题，dd为定义列表的内容

> 切记：不要把dl、dt、dd标签作用放图片的盒子！！！这是一个严重性质的错误用法。
>
> dl叫定义列表,定义列表中放同类的东西。（看一下京东最小面区域）

##### 细节类（行内）

span，区分样式（例如：所有的文字都是黑色，某个是红色，需要变红的内容 用span包裹）

strong，强调，默认 粗体

em，强调，默认倾斜

i，斜体

> 这个标签已经被HTML5的规范废弃，但浏览器都有向下兼容的原则，也就是说虽然规范中不不允许使用了，但实际上可以用于iconfont的使用

a，超链接，href 表示链接地址，target 目标窗口，\_blank 新窗口，\_self 当前窗口

img，插入图片，src为图片地址

del，删除（默认带一个中划线）

ins，替换（默认带一个下划线）

> 一般del和ins都是同时使用的，（例如：del用于表示原价，ins用于表示现价）

##### 表单类

input

​	type：

​		text  文本框

​		password  密码框

​		radio  单选框 | 单选按钮

​		checkbox   多选框 | 多选按钮 | 复选框 | 复选按钮

​		button 按钮

​		reset  重置按钮

​		submit 提交按钮

​		file  文件

button, 按钮，跟 input的 button 几乎一样的

```html
<button>按钮中显示的文字</button>
```

textarea，文本域 | 多行文本框，一般用户 留言板

```html
<textarea cols="30" rows="10"></textarea>
```

> rows表示行（显示10行），cols表示列（一行可以写30个文字），但一般我们在使用该标签的时候，不用cols和rows，因为我们都是用width和height来控制他的宽高，有了宽高以后，自然就会换行。

select，下拉菜单，option选项

```html
<select>
  <option value="后台需要的值">网页中看到的文字</option>
  <option value="后台需要的值">网页中看到的文字</option>
  <option value="后台需要的值">网页中看到的文字</option>
</select>
```



**注意事项：**

> **语义化的目的是便于我们去阅读代码，我们在代码中看到的是什么东西，大致就知道网页上展示的是什么内容了**

> **要习惯多去加注释，因为代码是给机器看的，而注释是给人看的。所有，多加注释！！！**

> 结构划分原则：先上下，后左右



##### CSS部分

> CSS书写规范

规范一，横向写法

```css
.box { width: 300px; height: 300px; }
```

规范二，竖向写法

```css
.box { 
  width: 300px; 
  height: 300px; 
}
```

**描述盒子的样式**

width，宽度

height，高度

margin，外边距

- 盒子以外的距离（盒子与其他盒子的距离）

 - 四个方向
   - 缩写：
     - 一个值，四个方向
     - 两个值，1 上下，2左右
     - 三个值，1 上，2 左右，3下
     - 四个值，上、右、下、左  （顺时针）

padding

- 内边距，盒子与内容之间的间距

 - 四个方向
   - 缩写
     - 同margin的缩写

border

 - 边框

 - 缩写

   - border-style

     - solid

     - dashed

     - dotted

     - [border-style详细资料]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style	"border详细资料"

   - border-color

     - border-width

background

 - 背景

 - 展开

   - background-image

     ```css
     background-image: url("图片地址");
     ```

     > background-image，url中的地址要用引号括起来，不区分单引号或双引号，但标准是 双引号

   - background-color

   - background-position

     - x轴:  left center right | 任意值
     - y轴: top、center、bottom | 任意值

   - background-repeat

     - no-repeat
     - repeat-x
     - repaat-y
     - repeat - 默认值

   - background-attachment

     - 背景固定

     ```css
     background-attachment: fixed;
     ```



**描述内容的样式**

> 所有描述内容的样式都可以继承
>
> 如果给父级加了‘描述内容的样式’，那么所有的子元素都会继承

**text-***

text-align

 - 文本对齐方式
 - 值
   - left
   - center
   - right

text-indent

- 首行缩进

text-overflow

- 文本溢出

 - 值
   - ellipsis 表示显示为省略号

**font-***

font-size

​	- 字体大小

font-weight

- 字体加粗

 - 值
   - bold 加粗
     - normal 正常字体

font-family

- 字体类型

 - 值
   - 一定要使用双引号括起来

font-style

- 字体样式

 - 值
   - initial  倾斜
     - normal 正常

**其他**

line-height

- 行高

 - 如何量取行高
   - 两种情况
     - 多行
       - 从上一行文字底部 量取到下一行文字底部
     - 单行
       - 上下 加 3~5 像素来作为行高

color

- 颜色

vertical-align

- 垂直对齐方式
  - 默认以基线对齐
  - 参照物是最高的元素（如果N个元素都给了对齐方式，那么它们默认以最高元素为参照物来对齐）
- 值
  - top
  - middle
  - bottom
  - 数值

> inherit 值，表示继承，inherit的继承是直接继承父级的值。
>
> 如果父级width: 300px; 子元素 宽度为 width: inherit; 则该值也是300px。
>
> 该值可以用在任何一个属性上



##### 盒模型

> 盒模型的概念：width/height + padding + border + margin

有宽度的盒模型

- 盒子实际宽度：width/height + padding + border
- 盒子实际所占位置：width/height + padding + border + margin

无宽度的盒模型

- 盒子实际宽度：父级的宽度 - margin
- 盒子实际所占位置：就是父级的宽度
- 盒子内容宽度：父级宽度- margin - border - padding



##### 选择器

| 选择器名称 | 名称                                              | 特点/描述                                                |
| ---------- | ------------------------------------------------- | -------------------------------------------------------- |
| ID         | #                                                 | ID具有唯一性，相同名称的ID，只允许在同一个页面中出现一次 |
| class      | .                                                 | 可重复使用                                               |
| 标签       | 直接写标签名                                      |                                                          |
| 群组       | xxx, xxx                                          | 谁和谁                                                   |
| 包含       | xxx空格xxx  例如：.list li，表示.list里面所有的li | 谁里面的谁                                               |
| 子代       | >                                                 | 只能选择第一层子元素                                     |
| 兄弟       | ~                                                 | 某个选择器后面所有的相同元素                             |
| 相邻       | +                                                 | 某个元素紧邻的下一个元素                                 |
| 通配符     | *                                                 |                                                          |
| 伪类       | :hover                                            |                                                          |
| 伪元素     | ::after，::before                                 |                                                          |

选择器优先级

!important > style > id > class > 标签选择器 > 通配符

>  !important，使用方式：在属性后面 添加， 空格  !important
>
>  ```css
>  例如：.box{ width: 300px !important; }
>  ```
>
>  可以提升样式的有限，让某个属性的样式优先级变为最高。
>
>  注意：慎用或最好不用！
>
>  > 为什么慎用或最好不用？
>
>  > 因为这个优先级会高于行间样式，而js操作页面的时候修改的就是行间样式，所以如果某个属性加了important，则会导致js修改后无法高于important属性的样式，造成页面修改无效果的情况。

注意：在同等优先级的情况下，后面覆盖前面的。



##### 块和行内

块元素定义：

- 独占一行
- 支持全部样式
- 默认父级宽度

行内元素定义：

 - 并在一行

 - 支持部分样式

   - 不支持以下样式
     - padding的top和bottom
      - margin的top和bottom
      - line-height
      - width
      - height

 - 宽度由内容决定

 - 代码换行产生间距

   - 如何解决代码换行产生间距？

     - 父级加 font-size: 0; 

       > 子集的字体大小要注意修改



##### 块和行内转换：

diaplay，显示方式（你只能修改呈现的方式，原来默认是block元素还是inline元素是不会改变的）

- 值：
  - block
  - inline
  - inline-block

> 块元素和行内元素  原本是什么就按照原来的方式用。是块元素那就是划分大的区域用的，行内元素就是去强调（处理）某一些小块或者细节用的。



##### 标签嵌套规范：

1. 块元素可以嵌套任何元素
2. 行内元素只能嵌套除自己以外的行内元素
3. h1~h6、dt、p中不能包含任何的块元素



##### 浮动 - float

- 特点

  - 脱离文档流

  - 浮动可以适应内容的宽高

  - 浮动可以让元素并在一行

  - 浮动可以让行内元素支持宽高

    > 注意：让行内行内元素支持宽高不一定要加浮动，如果仅仅只是为了有宽高的话，用`display: inline-block`就可以了。

- 问题

  - 父级无法撑开高度（无法适应到内容的高度）

- 清浮动

  > 清浮动的目的是是让父元素适应内容的高度
  >
  > 什么要适应内容高度？元素之间是依据盒模型来排列的。如果某个元素没有高度，那么后面的元素就会在这个元素的位置排列，而该元素值有浮动，就会导致页面乱掉。

- 清浮动的方法

  - 如果能定高度就直接给固定高度（例如：标题）
  - 如果不能固定高度，使用 `.clearfix` 清浮动 （例如：内容，因为内容往往不确定有多上行内容）

  ```css
  /*清浮动方法*/
  .clearfix::after, .clearfix::before{ content:''; display: table; }
  .clearfix::after{ clear:both; }
  ```



##### 定位 - position

static

- 默认值，表示不定位（跟没写没区别）

relative

- 相对定位
- 特点
  - 保留原有位置不变
  - 偏移值可选

absolute

- 绝对定位
- 特点
  - 不保留原有位置
  - 根据有定位的父级来定位
    - 不考虑父级相对、绝对还是固定，只要知道有定位的父级，就把这个父级当做参照
  - 偏移值必选
    - 偏移值
      - x轴： left、right
      - y轴： top、bottom

fixed

- 固定定位
- 特点
  - 根据可视区来定位的
  - 偏移值必选
    - 偏移值
      - x轴： left、right
      - y轴： top、bottom

> 只要是定位元素（除static值以外），就有提升层级的效果。
>
> `z-index`属性，只能用用在有定位的元素身上，如果没有`position`属性，`z-index`值则不会生效。（除static值以外）



##### 表格 - table

table 表格

- 属性

  - `cellpadding`  相当于  `padding`   单元格的内边距

  - `cellspacing`  相当于  `margin`    单元格的外边距


  > 表格中不能使用margin

thead 表头

tbody 内容

tr 行

th 标题列

td 列

- 属性

  - width 宽度（HTML中的属性都不需要有单位，因为默认就是px）

  - align 水平对齐方式

    - left

    - center

    - right

    - > 水平对齐方式一般我们是css的text-align属性来对齐

  - valign 垂直对齐方式

    - top

    - middle

    - bottom

    - > 垂直对齐方式一般我们用padding上下值挤

  - colspan  跨列 (横向合并)

  - rowspan  跨行 (竖向合并)

  - > 无论跨行还是跨列，都要删除相应的单元格

表单 - from、input、select、textarea

form 

- 属性
  - action 提交的地址（要提交到哪里去）
  - method 提交方式
    - get   明文发送
    - post  加密发送

```html
<form action="提交的地址" method="get|post"></form>
```

input、select、textarea 参照上面标签中的[表单类](#####表单类)































