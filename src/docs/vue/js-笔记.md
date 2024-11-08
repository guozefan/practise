#### 一 什么是js？作用

> js简称，全称 JavaScript，汉译：脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型
>
> 脚本语言：脚本语言通常以文本保存，只有在被调用的时候才会进行解释式的编译。
>
> 动态类型、弱类型：  用var定义变量，不需要指定具体类型，类型是通过运行时自动检测的

- HTML+CSS：用于写静态页面的

- JS：可以让静态页面动起来的东西。

- js在网页中做了哪些事情？

  - 修改样式

```js
//如：
//1.控制元素左右移动，修改的是 left | transform: translateX()
//2.让元素显示隐藏，修改的是 display
```



#### 二 注释

> 注：代码是给机器看的，而注释是给人看的。快捷键（ctrl+？）

- 单行注释   //
- 多行注释/**/

#### 三 事件

> 用户可以操作的，例如：上面的 onclick (在用户点击的时候)，事件的作用是 相应用户的操作。

```js
<div class="box" onclick="this.style.backgroundColor = 'red'"></div>
<!--
    onclick="this.style.backgroundColor = 'red'"
    onclick点击事件（相应用户点击的行为）

    this，这个（JS中我们管他叫：当前）
    .   的
    style  样式
    . 的
    backgroundColor  背景颜色
    =  变成
    'red'  值（这里面表示红色）
        - 值，一定是 引号括起来。
        - JS中不区分 单引号还是双引号

    JS - fontSize  = CSS font-size
    碰到-的时候，把-去掉，横线后面的第一个字母变成大写
-->
```

#### 四 函数

> 函数 其实就是类似于 css中的class一样的东西。

```js
//函数定义， function 是函数的意思（或者叫方法）
function 函数名字(){
  //你要做的事情
}

<!--下面的 onclick="xxxx"，叫函数调用-->
<div onclick="函数名字()"></div>

<script>
  //错误的代码
    function abc() {
        console.log(this)
        this.style.backgroundColor = 'red';
        /*
        this 指向的是 定义的地方
        因为函数属于window，所以这个this指向的是window，而不是div本身。
        */
    }
</script>
<!--正确的代码-->
<div class="box" onclick="abc()"></div>

<script>
    function abc() {
        document.querySelector('.box').style.backgroundColor = 'red';
        /*
            document  文档（指的是当前这个页面）
            querySelector('选择器的名称')  查找一个选择器
        */
    }
</script>
```

1. 普通函数

   ```js
           function ShowName(name) {
                       alert(name);
                   }
   ```

2. Js中同名函数的覆盖

   - 在Js中函数是没有重载，定义相同函数名、不同参数签名的函数，后面的函数会覆盖前面的函数。调用时，只会调用后面的函数。

   ```js
   		var n1 = 1;	 
   		function add(value1) {
   		    return n1 + 1;
   		}
   		alert(add(n1));//调用的是下面的函数，输出：3
   		 
   		function add(value1, value2) {
   		    return value1 + 2;
   		}
   		alert(add(n1));//输出：3
   ```

3. 函数的默认返回值

   - 若函数没有指明返回值，默认返回的是'undefined'

   ```js
   		function showMsg() {
   		}
   		alert(showMsg());//输出：undefined
   ```

4. 匿名函数

   - 变量匿名函数
     - 说明：可以把函数赋值给变量、事件

   ```js
   var anonymousNormal = function (p1, p2) {
   		    alert(p1+p2);
   		}
   		anonymousNormal(3,6);//输出9
   //适用场景：避免函数名污染。若先声明个带名称的函数，再赋值给变量或事件，就造成了函数名的滥用。
   ```

   - 无名称匿名函数
     - 即在函数声明时，在后面紧跟参数。Js语法解析此函数时，里面代码立即执行

   ```js
   (function (p1) {
   		    alert(p1);
   		})(1);
   //适用场景：只需执行一次的。如浏览器加载完，只需要执行一次且后面不执行的功能
   ```

5. 闭包函数

   - 假设，函数A内部声明了个函数B，函数B引用了函数B之外的变量，并且函数A的返回值为函数B的引用。那么函数B就是闭包函数

   ```js
   //示例1：全局引用与局部引用
   		function funA() {
   		    var i = 0;
   		    function funB() { //闭包函数funB
   		        i++;
   		        alert(i)
   		    }
   		    return funB;
   		}
   		var allShowA = funA(); //全局变量引用：累加输出1,2,3,4等
   		
   		function partShowA() {
   		    var showa = funA();//局部变量引用：只输出1
   		    showa();
   		}
   		
   //allShowA是个全局变量，引用了函数funA。重复运行allShowA()，会输出1,2,3,4等累加的值。
   //执行函数partShowA(),因为内部只声明了局部变量showa来引用funA，执行完毕后因作用域的关系，释放showa占用的资源。
   //闭包的关键就在于作用域：全局变量占有的资源只有当页面变换或浏览器关闭后才会释放。var allShowA = funA() 时，相当于allShowA引用了funB()，从而使funB()里的资源不被GC回收，因此funA()里的资源也不会。
   
   //示例2：有参闭包函数
   		function funA(arg1,arg2) {
   		    var i = 0;
   		    function funB(step) {
   		        i = i + step;
   		        alert(i)
   		    }
   		    return funB;
   		}
   		var allShowA = funA(2, 3); //调用的是funA arg1=2，arg2=3
   		allShowA(1);//调用的是funB step=1,输出 1
   		allShowA(3);//调用的是funB setp=3,输出 4
   
    
   		示例3：父函数funA内的变量共享
   		function funA() {
   		    var i = 0;
   		   function funB() {
   		        i++;
   		        alert(i)
   		    }
   		    allShowC = function () {// allShowC引用匿名函数,与funB共享变量i
   		        i++;
   		        alert(i)
   		    }
   		    return funB;
   		}
   var allShowA = funA();
   var allShowB = funA();//allShowB引用了funA，allShowC在内部重新进行了绑定，与allShowB共享变量i
    
   //适用场景：保证函数funA内里的变量安全，因为外部不能直接访问funA的变量。
   		
   ```

6. 回调函数

   - 传递函数作为回调

   ```js
           function fn(arg1, arg2, callback){
   		 var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
   		 //调用函数，下面的num是实参，将上面num的值作为参数传递给callback函数
   		 callback(num);　　//传递结果  
   		}
   		 
   		fn(10, 20, function(num){//定义函数，这里的的值都是被当作参数传递的，包括匿名函数
   		 console.log("Callback called! Num: " + num); 
   		});　　　　//结果为10和20之间的随机数 
   ```

#### 五 编写流程

1. 你要操作谁和修改谁？

   - 先把操作的和要修改的都获取出来 （**获取元素**）

     ```js
     document.querySelector('选择器的名称，原来你用CSS怎么选择到某个元素，这里就怎么写');
     ```

2. 用户怎么操作？（**事件**）

   - 事件，onclick

     ```js
     var oBox = document.querySelector('.box');
     
     oBox.onclick = function(){}
     ```

   - 当用户点击以后干什么

3. 怎么变？（**函数里面写的就是用户操作以后改变什么**）

   - onclick以后，函数中如何处理（你要让元素怎么变，或者说变什么）

     ```js
     var oBox = document.querySelector('.box');
     
     oBox.onclick = function(){
       //这里是变化以后要做的事儿，例如：改变背景颜色
       oBox.style.backgroundColor = 'red';
     }
     ```

#### 六 获取元素

1. 获取一组元素

   ```js
   //获取一组元素,返回的元素的列表（所有元素）NodeList
   var item = document.querySelectorAll('li');
   ```

   注：NodeList 是网页的节点列表（一组元素）

2. 获取一个元素

   ```js
   //获取的是单个元素，即便你给的是一组元素，他也会反回一组元素中的第一个。
   var item = document.querySelector('li');
   
   //只要是一组什么的时候，这个东西就一定有length
   
   //获取一组元素,返回的元素的列表（所有元素）NodeList
   var item = document.querySelectorAll('li');
   console.log(item.length); //返回item的长度
   
   //有length的东西，一定是有下标的，下标是从 0 开始。
   //item[0] //获取item这一组元素中的第一个元素
   ```

#### 七 点击事件

1. onclick，点击事件
2. onmouseover,.当鼠标移入的时候
3. onmouseout , 当鼠标离开的时候

#### 八 数据类型

1. 基本数据类型：Number String Boolean Null Undefined

2. 引用数据类型：object

   ```js
   //object 对象，网页中获取的元素,取到了返回元素，取不到返回null
   var a = document.querySelector('.box');
   //number 数字
   var b = 12;
   //string 字符串
   var c = '12';
   //boolean  布尔 / true | false
   var d = false;
   //undefined 未定义
   var e;
   //null，空对象，属于object
   var h = null;
   ```

3. 什么情况下会返回undefined？

   - 定义了变量没赋值
   - 根本就没定义

4. 使用typeof查看数据类型

   ```js
   console.log(typeof a);
   ```

#### 九 数据类型转换

1. **显示类型转换**

   - parseInt（）转为整形

     - 当转换的时候，如果字符串某一个位不是数字了，那从这一位开始后面的都不要了

       ```js
       parseInt('123') // 返回 123
       parseInt('12a3') // 返回 12
       parseInt('123.5')  //返回 123
       parseInt(1); // => 1
       parseInt(1.1); // => 1 ：浮点数返回整数
       parseInt('1aaa'); // => 1 ：字符串前面为数字的，只返回数字
       parseInt('1.1aaa'); // => 1
       parseInt('a1'); // => NaN ：非数字开头，返回NaN
       parseInt('a'); // => NaN 
       ```

   - parseFloat（）转为浮点数

     - 当转换的时候，**小数点后**如果字符串某一个位不是数字了，那从这一位开始后面的都不要了

       ```js
       parseFloat('123.45.1a23');  //返回  123.45
       parseFloat('12345.1a23');  //返回  12345.1
       parseFloat(1); // => 1 ：整数还是返回整数
       parseFloat(1.1); // => 1.1
       parseFloat('1aaa'); // => 1 ：字符串前面为数字的，只返回数字
       parseFloat('1.1aaa'); // => 1.1
       parseFloat('a1'); // => NaN ：非数字开头，返回NaN
       parseFloat('a'); // => NaN 
       ```

   - Number（）转为数字类型

     - Number()，数字，确保要转换的是一个 **纯字符串形式的数字**   

     - **注意：Number 中的 N 要大写！！！**

       ```js
       Number('123'); //返回 123
       Number('123a'); //返回 NaN
       ```

   - String（）字符串，把括号中的变成 字符串类型

     - ```js
       String(123); //返回  '123'
       String('123'); //返回 '123'
       ```

2. **隐式类型转换**

   - 你看不到的，但JS内部帮你完成了。

     ```js
        \- * / %(模,取余-不能被整出的部分)、 ==等于、===全等于
        
        == 和 ===区别
        
        ==等于，只判断值是否相等，相等返回true，反之false，
        
     ===全等，先判断类型是否相等，如果类型相等再判断值是否相等，相等返回true，反之false
     ```

3. **NaN**

   - Not a Number，不是数字 应该返回一个数字，但是并没有转成数字。
     - 特点：
       - 和任何值都不相等，包括它自己。
       - 任何值和NaN发生关系都会返回NaN（字符串和它相加除外）

4. **isNaN**

   - 检测某个字符串  是不是 *不是数字* 不是数字的时候会返回true，如果是数字会返回false

     ```js
     console.log(parseInt('a'));
     NaN  Not a Number，不是数字
     console.log(isNaN('1')); //是不是 不是数字
     true 表示 是的，不是数字
     false 不是，不是数字 (是数字)
     ```

5. **作用域**

   1. 全局变量
      - 定义在**函数外面**的，叫**全局变量**，特点：在哪儿都可以用
   2. 局部变量
      - 定义在**函数内部**的，叫**局部变量**，特点：只能在函数内部使用

6. **命名规范**

   - 首字母必须是a-z（js变量的命名，首字母最好是小写的）
   - 不允许有特殊符号，仅可使用 $和_

7. **命名方式**

   - 匈牙利命名法：my_name_is_panpan
   - 驼峰命名法：myNameIsPanpan，驼峰命名的时候 首字母一定是小写的

8. 运算符

   - 算数运算符：加、减、乘、除、 %（取余，求余数）

   - 赋值运算符：=、+=、-=、*=、/=、%=

     ```js
     //i++  等同于 i = i + 1   i+=5 等同于 i = i + 5关系
     
     ++ 自增1   
     ++在前，先运算，后赋值。
     ++在后，先赋值，后运算。
     -- 自减1
     ++在前，先运算，后赋值。
     ++在后，先赋值，后运算。
     
     赋值运算符
     +=        a=a+10等同与a+=10
     -+        a=a-10等同于a-=10
     ```

   - 关系运算符：< 小于、> 大于、<= 小于等于、>= 大于等于、== 等于、=== 全等于

   - 不等于：!= 不等于、!== 不全等于

   - 与或非

     - &&，多个条件都得为 true才成立，如果有任何一个为false，那么整个都为false
     - ||，有一个为true就表示成立
     - !，取反（不是什么），例如：!true

#### 十 流程控制语句

1. **if....else if....** 

   ```js
   if(条件-成立的){ 
     如果怎么样
   }
   else{
     否则怎么样
   }
   
   if(条件成立){
     执行这里的代码
   }
   else{
     执行这里的代码   
   }
   
   var a = 6;
   
   //如果
   if(a == 5){
     document.body.style.backgroundColor = 'pink';
   }
   //否则如果（当前面的if不成立的时候，会走到 else if来继续判断）
   else if(a == 6){
     ...
   }
     else if(a == 7){
   
     }
     //如果上面的if 和else if 都不成立id时候，执行else
       else{
         document.body.style.backgroundColor = 'green';
       }
   ```

2. 注意事项

   - JS如果看到了 xxx.style 这个东西了，一定是设置或获取的都是行间样式
   - 条件判断的中的语句 是 双等号，双等号表示判断的意思，而一个等号表示赋值
   - if语句中条件成立走if，不成立走else
   - if的判断条件返回的是 true - 真 / false - 假

3. **switch**

   ```js
   //if的判断条件中可以支持很多复杂的条件，而switch的条件相对单一。
   switch (a) {
     case 1:
       console.log('这个是1哦');
       //break 跳出循环或判断
       break; //当case 1 成立了  brack掉就表示  终止点（结束）
     case 2:
       console.log('这个是2哦')
       break;
     case 3:
       console.log('这个是3哦')
       break;
       //如果上面的case都不成立，执行default （相当于 else）
     default:
       console.log('default')
       break;
   }
   ```

   - 注意事项
     - 注意：switch语句中，case 表示判断的分支，default会在上面所有的case都不成立的时候执行
     - **break** 会跳出 循环或判断条件，如果switch语句中没有写break，则会继续执行后面的case

4. **break 跳出 和 continue 跳过 return终止函数区别**

   - break终止循环，不再进行判断
   - return终止函数，并返回一个值
   - continue 跳过本次循环，接着判断是否执行下一次循环

   ```js
    <script>
           // return 返回值，终止函数在return后的内容不会被执行.
           function jisuan(a, b) {
               return a + b;
   
               alert(123)
               alert(123)
           }
           console.log(jisuan(10, 20));//30
       </script>
   ```

   

5. **?: 三目 （三元） （运算符）**

   - ? 前面写判断条件
   - ?后面和:前面写的是 成立的时候执行的语句
   - : 后面写的是 不成立的时候执行的语句

6. .[了解] try catch 执行代码，如果代码异常，会执行catch，并像catch追加一个新的变量，使用 catch（变量）形式来接收上面所带来的错误

   ```js
   try {
     //你要进行查看错误的代码，如果有问题了 会执行到 catch中，通过 error 来显示错误。
     // 如果没有问题，就直接执行try中的语句
     console.log(a)
   } catch (error) {
     console.log(error)
   }
   ```

#### 十一 循环

1. for循环

   ```js
   for(初始化条件; 判断条件; 自增/自减){
     循环体中的语句（不断执行的）
   }
   //循环一组元素
   
   <ul class="list">
     <li>01</li>
     <li>02</li>
     <li>03</li>
     <li>04</li>
     <li>05</li>
     <li>06</li>
     <li>07</li>
     <li>08</li>
     <li>09</li>
     <li>10</li>
   </ul>
   <script>
   var item = document.querySelectorAll('.list li');
   
   //item.length 表示 li的个数
   for (var i = 0; i < item.length; i++) {
       item[i].onclick = function(){
           this.style.backgroundColor = 'red';
       }
   }
   </script>
   
   //案例-只保留一个点击的变化
   
   var item = document.querySelectorAll('.list li');
   
   //我们要的 点击的元素是红色的，其他的元素都是粉色的
   
   //外面这个循环是给所有的item添加事件的
   for (var i = 0; i < item.length; i++) {
     item[i].onclick = function () {
       //这个循环是让所有的元素变成粉色
       for (var j = 0; j < item.length; j++) {
         item[j].style.backgroundColor = 'pink';
       }
       //让当前元素变成红色
       this.style.backgroundColor = 'red';
     }
   }
   //改变class的形式
   
   for (var i = 0; i < item.length; i++) {
     item[i].onmouseover = function () {
       for (var j = 0; j < item.length; j++) {
         item[j].className = ''
       }
       this.className = 'active';
     }
   }
   //注意：我们用JS修改页面的时候，HTML中怎么写的属性，js就怎么写，唯一需要注意的是class得写成className
   ```

2. while

   ```js
   //在外面自行初始化
   var i = 0;
   
   // while (判断条件) {
   while (i < 5) {
     //只要while中条件成立会一直执行里面的代码
     console.log(i);
     //自增
     i++;
   }
   ```

3. do while

   ```js
   do {
     //循环体
     console.log(i);
     i++;
   } while (i == 0); // i == 0 的地方写判断条件
   ```

4. while和dowhile区别：

   - while是先判断再执行，do...while 先执行 再判断（最少他得执行一次）。

#### 十二 真和假

1. 真: true、非零的数字、非空字符串、非空对象
2. 假: false、数字0、空字符串、空对象、undefined

#### 十三 Number里的其他方法

1. **isInteger(value)-判断参数是否为整数 **

   - 只有是纯数字整数才会返回true

     ```js
     isInteger(1); // => true
     isInteger(1.1); // => false
     isInteger('1'); // => false ：纯整数的字符串也返回false
     isInteger('1.1'); // => false
     isInteger('a'); // => false ：非字符串返回false
     ```

2. **toExponential(value) ：将一个数字转为指数类型，参数表示小数点后的位数**		

   ```js
   (123456789).toExponential(2); // => 1.23e+8 ：小数点2位
   (123456789).toExponential(5); // => 1.23457e+8 ：小数点5位
   (123456789).toExponential(10); // => 1.2345678900e+8 ：小数点10位，不足位数用0补位
   ```

3. **toFixed(value)-小数点后保留几位**

   ```js
   console.log((1).toFixed(2)); // => 1.00
   console.log((1.2).toFixed(2)); // => 1.20 ：不足位数，以0补位
   console.log((1.277).toFixed(2)); // => 1.28 ：进行了四舍五入
   ```

4. **toString()使用指定的进制，将一个数字转换为字符串。不传入参数，默认为十进制**

   ```js
   (10).toString(); // => 10 ：默认为十进制
   (10).toString(2); // => 1010 ：二进制
   (10).toString(10); // => 10 ：十进制
   (10).toString(16); // => a ：十六进制
   ```

#### 十四 js1字符串方法

> String 对象，对字符串进行操作，如：截取一段子串、查找字符串/字符、转换大小写等等。
>
> 字符串是长度的。有长度的东西就一定有下标，用于存储和处理文本,一种基本的数据类型。
>
> 有长度：length：有下标：下标从0开始到length-1结束
>
> 所有字符串的操作方法都不会直接改变原字符串，
> 字符串一旦创建不能直接修改，只能重新赋值。

1. **charAt( index )**

   - 通过下标找字符,参数是下标

   - 当括号里面的值是 小于0或者大于字符串的长度了，返回的是 ''  (空字符)

     ```js
     var str2 = 'ABCADASDASDASDASD';
     console.log(str2.charAt(2)); // C
     ```

2. .**toLowerCase()**

   - 将字符串变为小写

3. **.toUpperCase() **

   - 将字符串变为大写

4. **.length**

   - 返回字符串的长度

     ```js
     var s = 'abc';
     console.log(s.length); // => 3
     console.log('新年快乐'.length); // => 4 ：一个中文字符也计算为1个数量
     console.log(''.length); // => 0 ：空字符串返回0
     ```

5. **.indexOf(value startPosition )**

   - 从前往后查找某个字符出现的位置 （下标）

   - indexOf() 找到了对应的字符，返回下标。找不到的时候，返回 -1

   - 参数可写2个 参数1：要查找的元素 参数2：开始查找的下标

     ```JS
     var s = 'abc';
     console.log(s.indexOf('b')); // => 1
     console.log(s.indexOf('d')); // => -1 ：未找到
     console.log(s.indexOf('b', 2)); // => -1 ：从位置2(第3个字符处)开始查找
     ```

6. **.lastIndexOf(value , |startPosition)**

   - 从后往前查找，找到了以后返回下标，找不到返回-1

   - 注意：虽然是从后往前找的，但下标依然是从前往后数。

   - 参数可写2个 参数1：要查找的元素 参数2：开始查找的下标

     ```js
     var s = 'abcabc';
     console.log(s.lastIndexOf('a')); // => 3 ：从后往前查找
     console.log(s.lastIndexOf('d')); // => -1 ：未找到返回-1
     console.log(s.lastIndexOf('a', 2)); // => 0 ：从位置2(第3个字符处)开始往前查找
     ```

7. **.split()**

   - 切割-将字符串转为数组

   - 将字符串拆分为数组。括号里面的参数是希望通过 什么 字符来拆分

   - 通过什么拆分，那就是把这个字符前面分为一组，后面分为一组

     ```js
     var str3 = 'my name is Panpan';
     //这里是通过 空格 来拆分的，那么妹空格前面是一组 后面是一组
     console.log(str3.split(' ')); // ["my", "name", "is", "Panpan"]
     
     //通过m来拆分，每一个m的前面是一组，后面是一组。
     console.log(str3.split('m'));
     
     //通过一个字符串中没有的字符拆分的话，返回的就是整个是一个数字。
     console.log(str3.split(',')); // ['my name is Panpan']
     
     //通过 '' 来拆分，返回的是每个是一个数组项
     console.log(str3.split(''); // ["m", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "P", "a", "n", "p", "a", "n"]
     注：数组： [1,2,3,4,5]，获取一组元素的时候他就是放到了数组中。（获取元素的数组叫类数组）
     ```

8. **.substring(index, [end])**  **字符串裁剪（切割） `.substring(起始下标,结束下标)`**

   - 两个参数：第一个参数：从第几个下标开始包含的, 第二个参数：到第几个下标-不包含的

   - 参数若为负数，按0来处理 从头开始截取

   - 参数只有一个参数，从当前参数（下标）位置截取到最后

     ```js
     var s = 'abcdefg';
     console.log( s.substring(0) ); // =>  abcdefg ：省略end参数，返回从位置序号0开始，一直到最后的字符
     console.log( s.substring(0, 3) ); // => abc ：返回从位置序号0开始到位置序号2(②参的前一个)的字符
     console.log( s.substring(2, 4) ); // => cd ：返回从位置序号2开始到位置序号3(②参的前一个)的字符
     console.log( s.substring(-3, 3) ); // abc ：参数若为负，就按数字0来处理，所以此参数实际返回位置序号0到位置序号3的字符
     ```

9. **substr(start, |wordLength)：返回从字符串start位置开始计算到wordLength个长度的子串**

   - 参数只有一个参数，从当前参数（下标）位置截取到最后

   - 两个参数：第一个参数开始截取位置下标 第二个参数表示截取长度

   - 参数如果是负数：倒数（是几就是倒数第几个）

     ```js
     ar s = 'abcdefg';
     onsole.log( s.substr(0) ); // =>  abcdefg ：省略第二个参数，返回从位置序号0开始，一直到最后的字符
     onsole.log( s.substr(0, 3) ); // => abc ：返回从位置序号0开始，计数3个字符
     onsole.log( s.substr(2, 4) ); // => cdef ：返回从位置序号2开始，计数4个字符
     onsole.log( s.substr(-2, 3) ); // fg ：返回从倒数第二个字符串开始，计数3个(超过字符长度，就只返回可统计的字符)
     ```

10. **slice(start, |end)：返回从字符串start位置到end前一个位置的子串**

    - 参数只有一个参数，从当前参数（下标）位置截取到最后

    - 两个参数：第一个参数：从第几个下标开始包含的, 第二个参数：到第几个下标-不包含的

    - 参数如果是负数：倒数（是几就是倒数第几个）

      ```js
      var s = 'abcdefg';
      console.log( s.slice(1) ); // bcdefg ：省略end参数，结束位置为末尾
      console.log( s.slice(1, 3) ); // bc ：返回从位置序号1到位置序号2(end前一个位置)的子串
      console.log( s.slice(-3) ); // efg ：返回从倒数第三个开始到末尾的所有字符
      console.log( s.slice(-3, -1) ); // ef ：返回从倒数第三个开始到第二个(end前一个位置)的所有字符
      ```

11. **.String.fromCharCode()**	

    ```js
    参数：一组序列数字，表示 Unicode 值。该方法返回一个字符串，而不是一个 String对象。（返回的是Unicode字符集中的对应的文字）
    由于fromCharCode是String的静态方法，所以应该像这样使用：`String.fromCharCode(参数是数字)`，而不是作为你创建的 String对象的方法。
    ```

12.  **charCodeAt(index) ：返回一个字符串中指定位置字符的Unicode编码**

    - 找到了返回字符对应的编码，找不到返回NaN

    ```js
    var s = 'abc';
    console.log(s.charCodeAt(0)); // => 98 ：字符b的Unicode编码
    console.log(s.charCodeAt(5)); // => NaN ：获取一个不存在位置的字符，返回NaN
    ```

13. **concat(value1,value2 ... valueN) ：连接一个或多个字符串,并返回连接后的字符串**

    ```js
    var s = 'abc';
    console.log(s.concat('d')); // => abcd
    console.log(s); // => abc ：不影响原先的字符串
    console.log(s.concat('d', 'e')); // => abcde
    ```

14. **repeat（重复次数）重复**

15.  **localeCompare(value) 比较大小（实例与参数）**

    - 实例>参数=1

    - 实例<参数=-1

    - 实例=参数=0

      ```js
      var s='abc';
      console.log(s.localeCompare('ab')); // => 1 ：实例比参数大
      console.log(s.localeCompare('abc')); // => 0 ：实例与参数相等
      console.log(s.localeCompare('abd')); // => -1 ：实例比参数小
      ```

16. **trim（）去左右空格**

    - trimStart()` 方法从字符串的开头删除空格。`trimLeft()` 是此方法的别名。
    - `trimEnd() `方法从一个字符串的末端移除空白字符。`trimRight()` 是这个方法的别名。

17. **search(regexp) ：返回查找正则表达式第一个匹配的位置**

    - 没找到数字放回-1
    - 有数字返回第一个数字出现的下标

    ```js
    console.log( 'abcd'.search(/\d+/) ); // => -1 ：没有找到数字
    console.log( 'abcd1234'.search(/\d+/) ); // => 4 ：位置序号为4，返回第一个数字的位置
    ```

18. **replace(regexp, replaceStr) ：替换正则表达式匹配的子串，并返回替换后的字符串**

    ```js
    var reg = /['尼玛','玩意']/g;//声明正则表达式
    var str ='尼玛,这是个什么玩意';
    console.log(str.replace(reg,'*'))
    ```

19. **字符串比较大小**

    - 英文、数字：字典序(字典中的顺序)，0-9A-Za-z  顺序中 后面的大于前面的。
    - 中文：按照Unicode内部码位来 a 97 A 65 通过 `str.charCodeAt()` 查看码位 ( 位码：是在整个Unicode字符集中的第几个位置 )

    ```js
    console.log('李飞'>'李万通');
    console.log('飞'.charCodeAt()); //李 26446  万 19975  飞 39134
    //比较规则
    //先比较第一位，第一位如果大，就算大了。如果第一位相同，比较第二位，以此类推
    ```

20. **单引号和双引号区别**

    - 符串可以是插入到引号中的任何字符。你可以使用单引号或双引号

    - 注意的是单引号和双引号不能混用
    - 单引号套双引号/双引号套单引号，不能同样的套用。

    ```js
    1.String（）   可以把任何数据类型都转换成字符串类型。
    	语法：String（变量名）；
    2.toString（）  可以把 数值，布尔类型，字符串值转换成字符串类型；
    	语法： 变量名.toString()；
    ```

21. **js1字符串方法统计**

    ```js
    //一常用：							//不常用
    1.charAt()通过下标找字符 				 1.localeCompare()比较大小	
    2.indexOf()查找 						2.search()查找
    3.lastIndexOf()查找
    4.concat()链接
    5.split()字符串转数组
    6.trim()去除左右空格//trimLeft()trimRight()
    7.slice()截取
    8.substr()截取
    9.substring()截取
    10.repeat()重复
    11.replace()替换
    12.charCodeAt()查找
    13.toUpperCase()转为大写
    14.toLowerCase()转为小写
    ```

#### 十五 ES6字符串方法

1. startsWith( )返回布尔值，表示参数字符串是否在原字符串的头部

2. endsWith( )返回布尔值，表示参数字符串是否在原字符串的尾部

3. includes( )返回布尔值，表示是否找到参数字符串

   ```
   这三个方法都支持第二个参数，表示开始搜索的位置
   ```

4. padStart( ) 头部补全   参数1是补全的长度，参数2补全有用的元素

5. padEnd( )   尾部补全   参数1是补全的长度，参数2补全有用的元素

6. trimStart(  )  去除头部空格

7. trimEnd（）去除尾部空格

8. 方法统计

   ```
   1. startsWith( )返回布尔值，表示参数字符串是否在原字符串的头部
   2. endsWith( )返回布尔值，表示参数字符串是否在原字符串的尾部
   3. includes( )返回布尔值，表示是否找到参数字符串
   4. padStart( ) 头部补全   参数1是补全的长度，参数2补全有用的元素
   5. padEnd( )   尾部补全   参数1是补全的长度，参数2补全有用的元素
   6. trimStart(  )  去除头部空格
   7. trimEnd（）去除尾部空格
   ```

   

#### **十六 数组操作方法**

> 数组是值的有序集合。每个值叫做一个元素，数组元素可以是任意类型.
>
> 注意：数组在定义的时候，切记，一个数组中最好放相同类型的数据

```js
错误示范：`var arr2 = ['1', 2, false, document.querySelector('div'), '5'];
正确：`var arr = [1, 2, 3, 4, 5]` 或 `var arr2 = ['1', '2', '3', '4', '5']`
```

1. **声明数组**	

   - 凡是跟 **组**有关的东西，都有 `length`，而有 `length`的东西，必然有 下标，数组的下标使用 []

   ```js
   //推荐第一种
   var arr = [1,2,3,4,5];
   //或者使用
   var arr = new Array(1,2,3,4,5);
   ```

2. **通过 下标 往数组中添加 或者修改东西**

   - 如果没有这个下的时候 是添加，有的话是修改。

   ```js
   var arr = [1, 2]; //一堆相同类型的数据组合，叫数组
   arr[1] = 123; //这里的数组 变成了 [1,123]
   arr[2] = 456; //[1,123,456]
   arr[5] = 789; //[1,123,456,undefined,undefined,789]; 切记 不要跳着这么去添加。
   ```

3. **数组方法**

   1. **push（）数组尾项添加**

      ```js
      var demoArray = ['a', 'b', 'c'];
      demoArray.push('d'); // => 4, demoArray ： ['a', 'b', 'c', 'd']
      demoArray.push('e', 'f'); // => 6, demoArray ：['a', 'b', 'c', 'd', 'e', 'f']
      console.log(demoArray); // => ['a', 'b', 'c', 'd', 'e', 'f']
      ```

   2. **unshift（）数组头部添加**

      ```js
      var arr = [1, 2];
      arr.unshift(3);// 从前面添加  [3,1,2]
      ```

   3. **pop（）数值尾项删除**

      ```js
      var arr = [1, 2, 3, 4, 5];
      arr.pop(); // [1,2,3,4]
      ```

   4. **shift（）数组首项删除**

      ```js
      var arr = [1, 2, 3, 4, 5];
      arr.shift(); // [2,3,4,5]
      ```

   5. **slice（startIndex,endIndex）截取**

      - 参数只有一个参数，从当前参数（下标）位置截取到最后

      - 两个参数：第一个参数：从第几个下标开始包含的, 第二个参数：到第几个下标-不包含的

      - 参数如果是负数：倒数（是几就是倒数第几个）

      - 会返回新的数组。（换句话的意思是  **切割不会影响原数组的变化**）

      - 如果想使用切割后的数组，那么需要 使用一个变量去接收一下 切割后的数组。

        ```js
        [1, 2, 3, 4, 5, 6].slice(); // => [1, 2, 3, 4, 5, 6]
        [1, 2, 3, 4, 5, 6].slice(1); // => [2, 3, 4, 5, 6] ：从序号1开始截取
        [1, 2, 3, 4, 5, 6].slice(0, 4); // => [1, 2, 3, 4] ：截取序号0到序号3(序号4的前一个)的元素
        [1, 2, 3, 4, 5, 6].slice(-2); // => [5, 6] ：截取后面的2个元素
        
        var arr = [1,2,3,4,5];
        var 接收的变量名 = arr.slice(2,4);
        
        //返回的是  [3,4]
        ```

   6. **splice（）添加 替换 删除**

      - 替换

        ```js
        var arr = [1, 2, 3, 4, 5];
        arr.splice(1,3,9,8,7); //从第1个开始删掉三个，然后把后面的添加到刚刚删除的位置去   [1,9,8,7,5]
        ```

      - 删除

        ```js
        var arr = [1, 2, 3, 4, 5];
        arr.splice(1,3); //从第1个开始删掉三个   [1,5]
        ```

      - 添加

        ```js
        var arr = [1, 2, 3, 4, 5];
        arr.splice(1,0,8,9,10); //从第1个开始删掉0个   [1, 8，9，10, 2，3，4，5]
        ```

   7. **concat（）链接数组**

      ```js
      //数组.concat(数组)
      var arr = [1,2,3];
      var arr2 = [4,5,6];
      var arr3 = [7,8,9];
      var abc = arr.concat(arr2.concat(arr3));//arr 和 arr2 连接在一起。
      ```

   8. **join（）数组转字符串**

      - join，把数组转为字符串。会返回新的字符串

      - join中的参数是字符串通过什么东西来连接。

        ```js
        var arr = [1, 2, 3, 4, 5];
        console.log(arr.join('-'));  // '1-2-3-4-5'
        console.log(arr.join(''));  // '12345'
        ```

   9. **reverse（）数组反转**

      ```js
      var arr = [1,2,3,4,5];
      arr.reverse();  // [5, 4, 3, 2, 1]
      ```

   10. **sort（）数组排序**

       - 参数是一个函数。函数还有两个参数a和b （随便写两个参数就行）

       - a-b 升序

       - b-a降序

         ```js
         var arr = [88, 123, 12, 9, 8, 3, 11, 87, 33];
         //从小到达进行排序
         arr.sort(function(a,b){
           console.log({a,b})
           return a - b;
         })
         a - b 是从小到大进行排序
         b - a 是从大到小进行排序
         如果compareFunction(a, b)小于 0 ，那么 a 会被排列到 b 之前；
         如果compareFunction(a, b)等于 0 ， a 和 b 的相对位置不变。
         ```

   11. **indexOf(value,start) ：查找**

       - 在数组中查找匹配元素。若不存在匹配的元素时，就返回-1。

         ```js
         ['a', 'b', 'c'].indexOf('a'); // =>0
         ['a', 'b', 'c'].indexOf('a', 1); // =>-1
         ['a', 'b', 'c'].indexOf('d'); // =>-1
         ```

   12. **lastIndexOf（）查找**

       - 在数组中反向查找匹配元素。若不存在匹配的元素时，就返回-1

         ```js
         ['a', 'b', 'c'].lastIndexOf('a'); // => 0
         ['a', 'b', 'c'].lastIndexOf('a', 1); // => 0
         ['a', 'b', 'c'].lastIndexOf('d'); // => -1
         ```

   13. every（）依次遍历数组元素，所有成员都满足条件才返回true，只要有一个不满足就返回false

       ```js
       var demoArray = [1, 2, 3];
       var rs = demoArray.every(function (item, index, self) {
           return item > 0;
       });
       console.log(rs); // => true
       ```

   14. some（）依次遍历数组元素，只要有一个满足条件就返回true，只有都不满足才返回false

   15. map（）依次遍历并计算每个元素，返回计算好的元素的数组

       ```js
       [1, 2, 3].map(function (value, index, self) {
       			    return value * 2;
       			}); // => [2, 4, 6]
       ```

   16. Array.isArray() ：判断对象是否为数组

       ```js
       Array.isArray([]); // => true
       Array.isArray(['a', 'b', 'c']); // => true
       Array.isArray('a'); // => false
       Array.isArray('[1, 2, 3]'); // => false
       ```

   17. toString() ：将数组中所有元素通过一个英文逗号','拼接为一个字符串

       ```js
       [1, 2, 3, 4, 5].toString(); // => '1,2,3,4,5'
       ['a', 'b', 'c', 'd', 'e'].toString(); // => 'a,b,c,d,e'
       ```

   18. forEach() ：依次遍历元素，执行指定的函数；无返回值

       -  遍历数组全部元素，利⽤回调函数对数组进⾏操作，⾃动遍历整个数组，且 ⽆法break中途跳出循环，不可控，不⽀持return操作输出，return只⽤于控制循环是否跳 出当前循环。 
       -  回调有三个参数：第⼀个参数是遍历的数组内容，第⼆个参数是对应的数组索引，第三个 参数是数组本身 

       ```js
       var arr = [1,2,3,4,5,] ;
       arr.forEach(function(item,index，arr){
        console.log(item);//12345
       });
       ```

   19. js1数组方法统计

       ```
       1. push（）数组尾项添加
       2. unshift（）数组首项添加
       3. pop（）数组尾项删除
       4. shift（）数组首项删除
       5. reverse（）数组反转
       6. join（）数组转字符串
       7. concat（）链接
       8. indexOf（）查找
       9. lastIndexOf（）查找
       10. slice（）截取
       11. splice（）添加 替换 删除
       12. sort（）数组排序
       13. forEach（）循环
       14. map（）循环
       15.some()
       16.every()
       ```

   20. 浅度复制

       > 说明：Array类型是一种引用类型；当数组a复制给数组b时，对数组b进行元素修改，数组a也会发生修改

       ```js
       var demoArrayA = ['a', 'b', 'c', 'd', 'e'];
       var demoArrayB = demoArrayA; // 把数组A 赋值给数组B
       demoArrayB[0] = 1; // 对数组B 的元素进行修改
       console.log(demoArrayA); // => [1, 'b', 'c', 'd', 'e']：数组A 的元素也发生了变更
       ```

   21. 深度复制

       > 使用concat()方法，返回新的数组；防止浅度复制的情况发生，对数组b进行元素修改操作，数组a不发生变更。

       ```js
       var demoArrayA = ['a', 'b', 'c', 'd', 'e'];
       var demoArrayB = demoArrayA.concat(); // 使用concat()方法，返回新的数组
       demoArrayB[0] = 1; // 对数组B 的元素进行修改
       console.log(demoArrayA); // => ['a', 'b', 'c', 'd', 'e']：数组A 的元素没变更
       console.log(demoArrayB); // => [  1, 'b', 'c', 'd', 'e']：数组B 的元素发生了变更
       ```

       # 判断2个数组是否相等

		

说明：Array数组为引用类型，所以哪怕 []===[] 都会返回false，所以可通过数组toString()方法返回的字符串判断是否相等。


		例： console.log([]===[]); // => false
	
			console.log(['a', 'b'] === ['a', 'b']); // => false
	
			console.log(['a', 'b'].toString() === ['a', 'b'].toString()); // true


获取数组中的随机一项


		例：	var test = ["aa", "bb", "cc", "dd", "ee"];			
			 console.log(test[Math.floor(Math.random() * test.length)]);


随机排序整个数组


		例： var Arr1=[1,2,3,4,5,6,7,8,9,10,22,33,55,77,88,99]; 
	
			Arr1.sort(function(){return Math.random()>0.5?-1:1;}); 
	
			alert(Arr1);  

例：	var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17];

			//通过函数来排序
	
			var shuffle = function(v) {
	
				//使用交换下标的方式实现
	
				for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);				
				return v;
	
			};


​			
​			console.log(shuffle(A));


​				
​			//为数组对象添加新的方法	
​			if(!Array.prototype.shuffle) {
​	
​				Array.prototype.shuffle = function() {
​	
​					//使用交换下标的方式实现
​	
​					for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
​	
​					return this;
​	
​				};
​	
​			}


​			
​			console.log(a.shuffle());


​       

#### 十七 ES6数组方法

1. Array.from（）类数组转为数组

2. Array.of（）转为数组（将一组数字转成真正的数组）

3. filter（）数组过滤 参数：第一个数组每一项，第二个下标 第三个数组本身

   ```js
   var demoArray = [1, 2, 3];
   var rs = demoArray.filter(function (value, index, self) {
   return value > 0;
   });
   console.log(rs); // => [1, 2, 3]
   ```

4. find（）查找（满足条件的第一个元素）

   -  ⽤于找出第⼀个符合条件的数组成员。它的参数是⼀个回调函数，所有数组成员 依次执⾏该回调函数，直到找出第⼀个返回值为true的成员，然后返回该成员。如果没有 符合条件的成员，则返回undefined。 

   ```js
     var arr=[1,2,6,4,5,6,11];
          let arr1=arr.find(function (item,index,arr) { 
              return item>3//返回的是首次满足条件的那个值
           })
           console.log(arr1);
   ```

5. findIndex（）查找（返回第一个满足条件的元素的下标）

   -  如果所有成员都不符合条件，则返回-1。 

   ```js
   let arr2=arr.findIndex(function (item,index,arr) { 
              return item>30 //如果没有找到满足条件的 返回的-1 
              //如果找到 返回的是首次出现的下标 
           })
           console.log(arr2);
   ```

6. some（）判断有一个值满足条件就返回true

7. every（）判断所有值满足条件就返回true

8. includes（）包含 

   - 返回布尔值，有就是true反之false

   ```js
   et a1=[1, 2, 3].includes(20)
   ```

9. reduce（）求和 参数1：函数 （上一个元素,当前元素,当前元素的下标,数组） 参数：2为数字是几加几

   ```js
   let n=arr.reduce(function (prev,item,index,arr) { 
                console.log(prev,item,index,arr);
                return prev+item
            }，（参数2）)
             //如果不写第 2 个参数 执行数组的 length-1如果写了第2 个参数那么执行 数组.length
            console.log(n);
   ```

10. splice（）清空  <!--括号里写0-->

11. fill（）填充

    - 两个参数：1：填充元素 2：开始下标 3：结束下标

    - 只写一个填充全部

      ```js
      let arr9=['a', 'b', 'c'].fill(7);
          参数1：fill（7）填充全部
      ['a', 'b', 'c'].fill(7, 1, 2);//['a', 7, 'c']
      	参数2：fill（要填充的元素，填充的位置起始下标不含末尾下标，）
      ```

12. [...数组1，...数组2] 链接数组

13. copyWithin（开始替换的下标，拷贝的开始下标，拷贝结束的下标）

    ```js
    [1,2,3,4,5,6].copyWithin(2,0,2) ==>[1, 2, 1, 2, 5, 6]
    ```

14. 方法统计

    ```
    1. Array.from（）转为数组
    2. Array.of（）转为数组（将一组数字转成真正的数组）
    3. filter（）数组过滤 参数：第一个数组每一项，第二个下标 第三个数组本身
    4.find（）查找（满足条件的第一个元素）
    5.findIndex（）查找（返回第一个满足条件的元素的下标）
    6. some（）判断有一个值满足条件就返回true
    7. every（）判断所有值满足条件就返回true
    8. includes（）包含 
    9.reduce（）求和 参数1：函数 （上一个元素,当前元素,当前元素的下标,数组） 参数：2为数字是几加几
    10.splice（）清空  <!--括号里写0-->
    11.fill（）填充只写一个填充全部 两个参数：1：填充元素 2：开始下标 3：结束下标
    12.[...数组1，...数组2] 链接数组
    13.copyWithin（开始替换的下标，拷贝的开始下标，拷贝结束的下标）
    ```

#### 十八 arguments对象

```js
arguments对象（不定型参数）
arguments对象：在函数体内具有数组功能的一个对象。但不是数组对象的实例（即不是数组类型）。
            arguments对象作用：保存函数实参。
            1、函数声明后，函数体内就存在了arguments对象。
            2、函数调用，初始化实参时，实参按照顺序保存在arguments对象中。
            3、通过下标值可以访问arguments对象中保存的实参值。
            4、arguments对象只能在函数中使用。
 function hello(){
	     console.log(arguments[0],arguments[1],arguments[2]);
       	}
hello(10,20,30,40)

随便输入几个数字计算和；
			//定义一个变量为he，初始值是0，用于储存和
			var he=0;
			function jisuan(num){
				for (var i=0;i<arguments.length;i++) {
					
					he+=arguments[i]
				}
				alert(he);
			}
			//调用函数计算并传入10,20,30,40
			jisuan(10,20,30,40)
```

#### 十九 Math 对象

> Math 对象 ：数学对象，提供对数据的数学计算
>
> Math 对象无构造函数，无法被初始化，只提供静态属性和方法。

1. 静态属性

   - Math.E ：	常量e。 返回自然对数的底数：2.718281828459045
   - Math.PI ：	常量π。返回圆周率的值 ：3.141592653589793		
   - Math.LN2 		返回 2 的自然对数（约等于0.693）。
   - Math.LN10 		返回 10 的自然对数（约等于2.302）。
   - Math.LOG2E 		返回以 2 为底的 e 的对数（约等于 1.414）。
   - Math.LOG10E 	返回以 10 为底的 e 的对数（约等于0.434）。		
   - Math.SQRT1_2 	返回返回 2 的平方根的倒数（约等于 0.707）。
   - Math.SQRT2 		返回 2 的平方根（约等于 1.414）

2. 静态方法（不常用）

   - Math.sin(value) ：正弦函数
   - Math.cos(value) ：余弦函数
   - Math.tan(value) ：正切函数
   - Math.asin(value) ：反正弦函数
   - Math.acos(value) ：反余弦函数
   - Math.atan(value) ：反正切函数

3. 静态方法（常用）

   - Math.abs(value) ：返回绝对值

     ```js
     Math.abs('123'); // => 123 ：纯数字字符串
     Math.abs('-123'); // => 123
     Math.abs(123); // => 123
     Math.abs(-123); // => 123
     Math.abs('123a'); // => NaN ：非纯数字字符串
     ```

   - Math.ceil(value) ： 对一个数向上取整，并不是四舍五入

     ```js
     Math.ceil(2.7); // => 3
     Math.ceil(2.3); // => 3 ：2.3 向上取整返回 3
     Math.ceil(-2.7); // => -2
     Math.ceil(-2.3); // => -2
     Math.ceil('2.7'); // => 3 ：纯数字字符串
     Math.ceil('2.7a'); // => NaN ：非纯数字字符串
     ```

   - Math.floor(value) ：对一个数向下取整，并不是四舍五入

     ```js
     Math.floor(2.7); // => 2
     Math.floor(2.3); // => 2
     Math.floor(-2.7); // => -3 ：-2.7 向下取整返回 -3
     Math.floor(-2.3); // => -3
     Math.floor('2.7'); // => 2 ：纯数字字符串
     Math.floor('2.7a'); // => NaN ：非纯数字字符串
     ```

   - Math.round(value) ： 四舍五入后取整

     ```js
     Math.round(2.5); // => 3
     Math.round(2.4); // => 2
     Math.round(-2.6); // => -3
     Math.round(-2.5); // => -2 ：-2.5四舍五入为 -2
     Math.round(-2.4); // => -2
     Math.round('2.7'); // => 3 ：纯数字字符串
     Math.round('2.7a'); // => NaN ：非纯数字字符串
     ```

   - Math.max(value1,value2...valueN) ：返回参数中最大的值

     ```js
     Math.max(1, 2, 3, 4, 5); // => 5
     Math.max(1, 2, 3, 4, '5' ); // => 5
     Math.max(1, 2, 3, 4, 'a'); // => NaN 
     ```

   - Math.min(value1,value2...valueN) ：返回参数中最小的值

     ```js
     Math.min(1, 2, 3, 4, 5); // => 1
     Math.min('1', 2, 3, 4, 5); // => 1
     Math.min(1, 2, 3, 4, 'a'); // => NaN 
     ```

   - Math.pow(x,y) ：返回x的y次方

     ```js
     Math.pow(2, 3); // => 8 ：2的3次方
     Math.pow(3, 2); // => 9 ：3的2次方
     Math.pow('4', 2); // => 16 ：4的2次方
     Math.pow('2a', 2); // => NaN
     ```

   - Math.sqrt(value) ：返回参数的平方根

     ```js
     console.log( Math.sqrt(9) ); // => 3
     console.log( Math.sqrt(16) ); // => 4
     console.log( Math.sqrt('25') ); // => 5
     console.log( Math.sqrt('a') ); // => NaN
     ```

   - Math.random() ：返回一个伪随机数,大于0，小于1.0

     ```js
     Math.random(); // => 0.8982374747283757
     Math.random(); // => 0.39617531932890415
     ```

4. Math常用方法统计

   ```js
   1. Math.max（）找最大
   2. Math.min（）找最小
   3. Math.ceil（）向上取整
   4. Math.floor（）向下取整
   5. Math.round（）四舍五入
   6. Math.random（）0-1之间包含0的随机数
   7. Math.sqrt（）算术平方根
   8. Math.abs（）绝对值
   9. Math.PI（） π值
   10. Math.floor（Math.random（）*（大-小+1）+小） 随机数
   
   如果要一个 1~20的随机数使用：
   console.log(parseInt(Math.random() * 20) + 1);
   //最小是 0 * 20 = 0
   //最大是 0.9999 * 20 = 19.xxxxx; parseInt 以后是 19 
   //最后得+1
   要一个  15  ~ 33 之间的随机数
   原理很简单，最小的是多少，最大的是多少。
   最小是15，如果随机到0，是不是的是 15 ，   0+15
   最大是33，如果随机到 0.99999 * (最大的数 - 15 + 1)  + 15
   ```

#### 二十 日期对象

> Date对象，是操作日期和时间的对象。Date对象对日期和时间的操作只能通过方法

1. new Date（）创建日期对象

2. getTime（）时间戳

3. getFullYear（）获取年份

4. getMonth（）获取月份

5. getDate（）获取日

6. getDay（）获取星期

7. getHours（）获取小时

8. getMinutes（）获取分钟

9. getSeconds（）获取秒

10. getMilliseconds（）获取毫秒数

11. setFullYear（）设置年份

12. setMonth（）设置月份

13. setDate（）设置日

14. setDay（）设置星期

15. 其他方法

    - toString() ：将Date转换为一个'年月日 时分秒'字符串
    - toLocaleString() ：将Date转换为一个'年月日 时分秒'的本地格式字符串
    - toDateString() ：将Date转换为一个'年月日'字符串
    - toLocaleDateString() ：将Date转换为一个'年月日'的本地格式字符串
    - toTimeString() ：将Date转换为一个'时分秒'字符串
    - toLocaleTimeString() ：将Date转换为一个'时分秒'的本地格式字符串
    - valueOf() ：与getTime()一样， 返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00') 

    ```js
    var dt = new Date();
    console.log(dt.toString()); // => Tue Dec 23 2014 22:56:11 GMT+0800 (中国标准时间) ：将Date转换为一个'年月日 时分秒'字符串
    console.log(dt.toLocaleString()); // => 2014年12月23日 下午10:56:11  ：将Date转换为一个'年月日 时分秒'的本地格式字符串			 
    console.log(dt.toDateString()); // => Tue Dec 23 2014 ：将Date转换为一个'年月日'字符串
    console.log(dt.toLocaleDateString()); // => 2014年12月23日 ：将Date转换为一个'年月日'的本地格式字符串			 
    console.log(dt.toTimeString()); // => 22:56:11 GMT+0800 (中国标准时间) ：将Date转换为一个'时分秒'字符串
    console.log(dt.toLocaleTimeString()); // => 下午10:56:11 ：将Date转换为一个'时分秒'的本地格式字符串		 
    console.log(dt.valueOf()); // => 返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00') 
    ```

16. Date now（）Date.now()返回当前日期和时间的Date对象与'1970/01/01 00:00:00'之间的毫秒值

17. Date.parse(dateStr)把字符串转换为Date对象 ，然后返回此Date对象与'1970/01/01 00:00:00'之间的毫秒值

    ```js
    console.log(Date.parse('2014/12/25 12:00:00')); // => 1419480000000
    console.log(Date.parse('2014-12-25 12:00:00')); // => 1419480000000  (注意：此转换方式在IE中返回NaN！)
    
    获取倒计时
    		例： function getDownTime(dt) {
    		    // 1.获取倒计时
    		    var intervalMsec = dt - Date.now(); // 目的时间减去现在的时间，获取两者相差的毫秒数
    		    var intervalSec = intervalMsec / 1000; // 转换成秒数
    		    var day = parseInt(intervalSec / 3600 / 24); // 天数
    		    var hour = parseInt((intervalSec - day * 24 * 3600) / 3600); // 小时
    		    var min = parseInt((intervalSec - day * 24 * 3600 - hour * 3600) / 60); // 分钟
    		 
    		    // 2.若相差的毫秒小于0 ,表示目的时间小于当前时间，这时的取的值都是负的：-X天-时-分，显示时，只显示天数前面为负的就行。
    		    if (intervalMsec < 0) {
    		        hour = 0 - hour;
    		        min = 0 - min;
    		    }
    		 
    		    // 3.拼接字符串并返回
    		    var rs = day + '天' + hour + '时' + min + '分';
    		    return rs;
    		}
    		 
    		// 当前时间：2014/12/28 13:26
    		console.log(getDownTime(new Date('2015/06/01'))); // => 154天10时33分
    		console.log(getDownTime(new Date('2014/01/01'))); // => -361天13时26分
    
    ```

#### 二十一 Object对象

> Object对象，是所有JavaScript对象的超类(基类)。Object.prototype(Obecjt的原型)定义了Js对象的基本方法和属性。
>
> - new Object() ：返回一个Object实例
> - new Object(value) ：根据value的值，返回不同的对象(Number、Boolean、String)
> - 参数：value {number | bool | string} ：一个数字、布尔值或者字符串
> - 返回值：{Number、Boolean、String} 返回一个转换后的对象

```js\
		var o = new Object(123);
		console.log(o); // => Number对象
		o = new Object(true);
		console.log(o); // => Boolean对象
		o = new Object('abc');
		console.log(o); // => String对象
```

1. 继承

   - 创建一个临时对象，在临时对象的原型中存放获取到的对象；然后返回新对象

   ```js
   		function obj(o){
   			function f(){};
   			f.prototype = o;
   			return new f();
   		}
   		
   		//在这个函数中执行上面创建的obj函数
   		function transfrom(child,parent){
   			var new = obj(parent.prototype);
   			prototype.constructor = child;
   			child.prototype = new;			
   		}
   		
   		function sup(name){
   			this.name = name;
   			this.color = ["red","blue","green"]
   		}
   		
   		sup.prototype.sayName = function(){
   			console.log(this.name)
   		}
   		
   		function sub(name,age){
   			sup.call(this,name)
   		}
    
    		transfrom(sub,sup);
    		sub.prototype.sayAge = function(){
    			console.log(this.age)
    		}
   ```

2. Object.is（）比较两个值是否相等

   ```js
           console.log(Object.is('foo', 'foo'));//true
           console.log(Object.is({}, {}));//false
           console.log(Object.is(NaN, NaN));//true;
        console.log(Object.is([], []));//false
           console.log(Object.is('+0', '-0'));
   ```
   
3. Object.assign（）对象的合并

   ```js
   		var target = { a: 1 }
           var source1 = { b: 2 }
           var source2 = { c: 3 }
           Object.assign(target, source1, source2);
           console.log(target)//返回的是一个写入的数组中
   ```

4. JSON.parse（）把字符串转对象 只能解析标准的JSON类型。

5. JSON.stringify（）把对象转字符串 按标准来解析（可以把不标准的JSON类型转为标准的）

6. 实例属性

   - __proto__ ：设置或返回对象的原型对象(IE中不支持此属性)
     - 赋值时，对象继承新原型的所有方法和属性，以及新原型的原型链中的所有方法和属性
     - 属性名称以两个下划线开始和结束
     - 对象的__proto__ == 对象类的prototype

   ```js
   // 1.自定义对象多层继承
   		function People(name) {
   		    this.name = name;
   		}
    
   		function Student(age) {
   		    this.age = age;
   		}
   		Student.prototype = new People(); // 设置Student的原型为People对象
   		 
   		var s = new Student(22);
   		console.log(s.__proto__); // => People 对象
   		console.log(Student.prototype); // => People 对象
   		console.log(s.__proto__ == Student.prototype); // => true
    
   		// 2.对象直接量
   		var p = {}; // 等于new Object()
   		console.log(p.__proto__ == Object.prototype); // => true
   
   ```

7. prototype 

   - 设置或返回对象类的原型对象
     - prototype为对象类的属性。__proto__是对象的属性。
     - Js内置对象(Array、Date等对象)都有一个只读的prototype属性。 可将属性和方法添加到原型中，但不能为内置对象分配其他原型。
     - 自定义对象的prototype属性可进行读写操作。

   ```js
   		var Student = function (name) {
   		    this.name = name;
   		};
   		// 给Student的原型添加一个sayHello方法
   		Student.prototype.sayHello = function () {
   		    alert('Hello,' + this.name);
   		}
   		var st = new Student('张三'); // 初始化对象st
   		console.log(st.name); // => 张三
   		st.sayHello(); // 弹出：Hello,张三
   ```

8. constructor

   - 表示创建此对象的构造函数
     - 设置或返回创建此对象的构造函数。
     - 若一个对象有多层继承，将返回最先调用的构造函数。
     - obj.constructor.prototype 可表示对象的原型。

   ```js
   		// 1.内置对象
   		var str = 'abc';
   		console.log(str.constructor); // => function String 构造函数
   		var o = {};
   		console.log(o.constructor); // => function Object 构造函数
    
   		// 2.自定义对象多层继承 ：constructor返回最先调用的构造函数
   		function People(name) {
   		this.name = name; // s对象初始化时，先调用People构造函数，再调用Student构造函数
   		    console.log('People调用');
   		}
   		function Student(age) {
   		    this.age = age;
   		    console.log('Student调用');
   		}
   		Student.prototype = new People(); // 设置Student的原型为People对象
   		 
   		var s = new Student(22);
   		console.log(s.constructor); // => function People 构造函数
   ```

9. __proto__、prototype、constructor 的关系

   -  对象的__proto__ 等于 类的prototype
   - 对象的constructor 等于类，所以obj.constructor.prototype 可表示对象的原型。

   ```js
   var o = {};
   console.log(o.__proto__ === Object.prototype); // true ：对象的__proto__等于类的prototype
   console.log(o.constructor === Object); // true ：对象的constructor 等于 类
   console.log(o.constructor.prototype === Object.prototype); // true ：o.constructor.prototype 可表示对象的原型。
   ```

10. 实例方法

   - hasOwnProperty(propertyName) ：判断对象是否拥有一个指定名称的实例属性(非继承)
   - 参数：propertyName {string} ：属性名称。
   - 返回值：{bool} 判断对象是否拥有一个指定名称的本地定义(非继承)的属性；此方法不会检查对象原型链中的属性。
     - true ：属性为对象的实例属性，非继承。				
     - false ：属性不为对象的实例属性。

   ```js
   //示例 ：
   		// 1.Object对象
   		var o = new Object();
   		o.name = '自定义属性'; // 定义一个实例属性
   console.log(o.hasOwnProperty('name')); // => true：name属性为实例o自己定义的，而非继承
   console.log(o.hasOwnProperty('toString')); // => false：toString为继承属性
   		 
   		// 2.自定义对象
   		var Student = function (name) {
   		    this.name = name;
   		};
   		// 给Student的原型添加一个sayHello方法
   		Student.prototype.sayHello = function () {
   		    alert('Hello,' + this.name);
   		}
   		// 给Student的原型添加一个age属性
   		Student.prototype.age = '';
   		 
   		var st = new Student('张三'); // 初始化对象st
   console.log(st.hasOwnProperty('name')); // => true ：调用构造函数时，通过this.name附加到实例对象上
   console.log(st.hasOwnProperty('sayHello')); // => false ：sayHello方法为原型上的成员
   console.log(st.hasOwnProperty('age')); // => false ：age属性为原型上的成员
   ```

11. isPrototypeOf(obejct) 判断某个原型是否出现在对象的原型链中

    - 语法：prototype.isPrototypeOf(object)
    - 参数：obejct {object} ：被检测的对象。
    - 返回值：{bool} 返回某个原型是否出现在对象的原型链中
      - true ：是
      - false ：不是

    ```js
    // 1.Obejct对象
    		var o = new Object();
    console.log(Object.prototype.isPrototypeOf(o)); // => true ：o为Obejct一个对象
    		 
    		// 2.Array
    		var array = [1, 2, 3];
    console.log(Array.prototype.isPrototypeOf(array)); // => true ：数组原型
    console.log(Object.prototype.isPrototypeOf(array)); // => true ：Object是所有对象的基原型
    		 
    		// 3.自定义对象
    		var People = function () {
    		}
    		var Student = function () {
    		}
    		// 设置Student类的原型为People
    		Student.prototype = new People();
    		var st = new Student();
    console.log(Student.prototype.isPrototypeOf(st)); // => true ：st为Student一个对象
    console.log(People.prototype.isPrototypeOf(st)); // => true ：Student的原型为People
    console.log(Object.prototype.isPrototypeOf(st)); // =>true ：Object是所有对象的基原型
    ```

12. propertyIsEnumerable(propertyName) ：判断指定名称的属性是否为实例属性并且是可枚举的(可用for/in循环枚举)

    - 参数：propertyName {string} ：属性名称
    - 返回值：{bool} 判断属性是否为实例属性并且是可枚举的(可用for/in循环枚举)，不考虑原型链中的成员。
      - true ：是
      - false ：不是

    ```js
    // 1.Array对象
    		var array = [1, 2, 3];
    		array.name = 'Array';
    console.log(array.propertyIsEnumerable('name')); // => true ：name属性为实例属性
    console.log(array.propertyIsEnumerable('join')); // => false ：join方法继承自Array
    console.log(array.propertyIsEnumerable('length')); // => false ：length属性继承自Array
    console.log(array.propertyIsEnumerable('toString')); // => false ：toString方法继承自Object
    		 
    		// 2.自定义对象
    		var Student = function (name) {
    		    this.name = name;
    		}
    		// 定义一个原型方法
    		Student.prototype.sayHello = function () {
    		    alert('Hello' + this.name);
    		};
    		var a = new Student('tom');
    console.log(a.propertyIsEnumerable('name')); // => true ：name为自身定义的实例属性
    console.log(a.propertyIsEnumerable('age')); // => false ：age属性不存在，也返回false
    console.log(a.propertyIsEnumerable('sayHello')); // => false ：sayHello属于原型方法
    
    ```

13. toLocaleString() ：返回当前对象的一个本地化的字符串表示

14. toString() ：返回当前对象的一个字符串表示形式

15. valueOf() ：返回当前对象的原始值

    - 参数：无
    - 返回值：{object} 返回当前对象关联的原始值，若没有相关联的值，则返回对象本身

    ```js
    		var a = [1, 2, 3];
    		console.log(a.valueOf()); // => [1, 2, 3]
    		 
    		var b = true;
    		console.log(b.valueOf()); // => true
    		 
    		var c = {};
    		console.log(c.valueOf()); // => Object {}
    		 
    		var s = 'abc';
    		console.log(s.valueOf()); // => abc
    		 
    		// 自定义个对象，重写valueOf
    		var customObject = {};
    		customObject.valueOf = function () {
    		    return '自定义对象';
    		}
    		console.log(customObject.valueOf()); // => 自定义对象
    ```

16. 静态方法

    - Object.create(prototype, propertyDescriptor)：创建并返回一个指定原型和指定属性的对象
    - 参数：
      - prototype {prototype} ：返回对象的原型，可以为null。若为null，对象的原型为undefined。
      - propertyDescriptor {propertyDescriptor} 可选：属性描述符。

    ```js
    //属性描述符：设置属性的一系列特性；
    			
    语法格式：
    propertyName: {
        value: '', // 设置此属性的值
            writable: true, // 设置此属性是否可写入；默认为false：只读
                enumerable: true, // 设置此属性是否可枚举(通过for/in预付)；默认为false：不可枚举
    configurable: true // 设置此属性是否可配置；如：是否可以修改属性的特性及删除属性。默认为false
    			}
    	
    //返回值：{object} 返回一个指定原型和指定属性的对象
    
    		示例 ：	
    		// 建立个自定义对象，设置name和age属性
    		var obj = Object.create(null, {
    		    name: {
    		        value: 'tom',
    		        writable: true,
    		        enumerable: true,
    		        configurable: true
    		    },
    		    age: {
    		        value: 22
    		    }
    		});
    		console.log(obj.name); // => tom
    		console.log(obj.age); // => 22
    		 
    		obj.age = 28;
    console.log(obj.age); // => 22 ：age属性的writable默认为false，此属性为只读
    		 
    		for (p in obj) {
    console.log(p); // => name ：只输出name属性；age属性的enumerable默认为false，不能通过for/in 枚举
    		}
    ```

    - Object.defineProperties(object, propertyDescriptor) ：添加/修改对象一个或多个属性的特性
    - 参数：
      - object {object} ：对象
      - propertyDescriptor {propertyDescriptor} 属性描述符。
      - 若对象包含此属性，则是修改此属性的特性；否则为为对象添加此属性。

    ```js
    		var obj = {};
    		 
    		// 为对象添加name和age属性
    		Object.defineProperties(obj, {
    		    name: {
    		        value: 'tom',
    		        enumerable: true
    		    },
    		    age: {
    		        value: 22,
    		        enumerable: true
    		    }
    		});
    		for (p in obj) {
    		    console.log(p); // => name、age ：输出name和age属性
    		}
    ```

    - Object.defineProperty(obj, propertyName, propertyDescriptor) ：添加/修改对象指定属性的特性
    - 参数：
      - object {object} ：对象
      - propertyName {string} ：属性的名称
      - propertyDescriptor {propertyDescriptor} 属性描述符。
      - 说明 ：若对象包含此属性，则是修改此属性的特性；否则为添加此属性。

    ```js
    //示例：
    		var obj = {};
    		// 添加一个name属性
    		Object.defineProperty(obj, 'name', {
    		        value: 'tom',
    		        writable: true,
    		        enumerable: true,
    		        configurable:true
    		    }
    		);
    		console.log(obj.name); // => tom ：输出name属性的value的值
    ```

    - Object.freeze(object) ：冻结对象，使其不能添加属性以及无法对现有的实例属性进行特性更改、值修改、属性删除等操作
    - 参数：
      - object {object} ：对象
      - 说明 ：此操作不可逆，冻结后无法进行解封。只影响实例属性，不影响原型属性。

    ```js
    		//示例：	
    		var obj = {
    		    name: 'tom',
    		    age: 22
    		};
    		Object.freeze(obj); // 冻结对象
    		 
    		obj.email = '123@qq.com';
    		console.log(obj.email); // undefined ：无法添加属性
    		obj.age = 25;
    		console.log(obj.age); // 22 ：无法设置属性的值
    ```

    - Object.getOwnPropertyDescriptor(object, propertyName) ：返回对象属性的描述符
    - 参数：
      - object {object} ：对象
      - propertyName {propertyName} 属性名称
    - 返回值：
      - {propertyDescriptor} 属性描述符对象

    ```js
    //示例 ：			
    		var obj = {
    		    name: 'tom',
    		    age: 22
    		};
    		 
    		var propertyDes = Object.getOwnPropertyDescriptor(obj, 'name');
    console.log(propertyDes); // => Object {value: "tom", writable: true, enumerable: true, configurable: true} ：输出描述符对象
    
    ```

    - Object.getOwnPropertyNames(object) ：返回一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法
    - 参数：
      - object {object} ：对象
    - 返回值：
      - {Array} 一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法

    ```js
    var obj = {
    		    name: 'tom',
    		    age: 22,
    		    sayHello: function () {
    		        alert('Hello' + this.name);
    		    }
    		};
    console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的实例成员
    
    ```

    - Object.getPrototypeOf(object) ：返回对象的上一级原型
    - 参数：
      - object {object} ：对象
    - 返回值：
      - {object} 返回原型对象

    ```js
    // 1.对象直接量
    		var obj = {
    		    name: 'tom',
    		    age: 22,
    		    sayHello: function () {
    		        alert('Hello' + this.name);
    		    }
    		};
    console.log(Object.getPrototypeOf(obj)); // => Object 对象：对象直接量的原型为Object
    		 
    // 2.自定义对象
    		var People = function (name) {
    		    this.name = name;
    		};
    		 
    		var p = new People('tom');
    		var people = Object.getPrototypeOf(p);
    console.log(people); // => People 对象：new 创建的对象使用构造函数的prototype属性作为他们的原型
    console.log(Object.getPrototypeOf(people)); // => Object 对象：原型People的原型为Object
    ```

    - Object.isExtensible(object) ：判断是否可向对象添加新的属性
    - Object.isFrozen(object) ：判断对象是否冻结;true：不能修改对象的现有属性特性和值并且不能添加新的属性
    - Object.isSealed(object) ：判断对象是否封闭;true：不能修改对象的现有属性特性并且不能添加新的属性
    - Object.keys(object) ：返回一个数组，包含对象的可枚举的实例属性名称
    - 参数：
      - object {object} ：对象
    - 返回值：
      - {Array} 返回一个数组，包含对象可枚举的实例属性名称
      - 此方法与getOwnPropertyNames()类似，但getOwnPropertyNames()包含了可枚举和不可枚举的成员

    ```js
    //示例 ：
    		var obj = {
    		    name: 'tom',
    		    age: 22,
    		    sayHello: function () {
    		        alert('Hello' + this.name);
    		    }
    		};
    		 
    		//getOwnPropertyNames与keys方法返回的内容都相同
    console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有实例成员
    console.log(Object.keys(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有可枚举成员
    		 
    // 设置对象的name属性不可枚举
    		Object.defineProperty(obj, 'name', {
    		        enumerable: false
    		    }
    		);
    		 
    		//keys方法，只包含可枚举成员
    console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "sayHello"] ：返回对象的所有实例成员
    console.log(Object.keys(obj)); // => ["age", "sayHello"] ：返回对象的所有可枚举成员
    ```

    - Object.preventExtensions(object) ：设置对象不能添加新的属性
    - 参数：
      - object {object} ：对象
    - 返回值：
      - {object} 返回此对象

    ```js
    //示例 ：	
    		var obj = {
    		    name: 'tom',
    		    age: 22
    		};
    		Object.preventExtensions(obj); // 设置对象不能添加新的属性
    		obj.email = '123@qq.com';
    		console.log(obj.email); // => undefined ：无法向对象添加新的属性
    
    ```

    - Object.seal(object) ：密封对象，使其无法修改现有属性的特性以及不能添加新的属性
    - 参数：
      - object {object} ：对象
    - 返回值：
      - {object} 返回此对象

    ```js
    //示例 ：
    		var obj = {
    		    name: 'tom',
    		    age: 22
    		};
    		Object.seal(obj); // 密封对象
    		obj.email = '123@qq.com';
    		console.log(obj.email); // => undefined ：无法向对象添加新的属性
     
    		// 报异常：无法修改对象属性的特性
    		Object.defineProperty(obj, 'name', {
    		        enumerable: false
    		    }
    		);、、
    ```

17. 属性描述符

    - 属性描述符分为  "数据属性"  和   "访问器属性" ；
    - 两者可相互转换，若转换后未设置enumerable和configurable特性(两类属性描述符都包含这2个特性)，将默认采用转换前的值。

#### 二十二 正则

1. 创建

   - 方法一：var patt=new RegExp(pattern,modifiers);
   - 方法二：var patt=/pattern/modifiers; 

2. 组成

   - = /  (方括号/元字符) {量词}   / 修饰符

3. 修饰符

   - i 	执行对大小写不敏感的匹配。
   - g 	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
   - m 	执行多行匹配。

4. 方括号

   - 方括号用于查找某个范围内的字符
     - [abc] 	查找方括号之间的任何字符。	
     - [^abc] 	查找任何不在方括号之间的字符。
     - [0-9] 	查找任何从 0 至 9 的数字。
     - [a-z] 	查找任何从小写 a 到小写 z 的字符。
     - [A-Z] 	查找任何从大写 A 到大写 Z 的字符。
     - [A-z] 	查找任何从大写 A 到小写 z 的字符。
     - [adgk] 	查找给定集合内的任何字符。
     - [^adgk] 	查找给定集合外的任何字符。
     - (red|blue|green) 	查找任何指定的选项,用于匹配单词。 

5. 元字符

   - 元字符是拥有特殊含义的字符
     - . 	查找单个字符，除了换行和行结束符。
     - \w 	查找单词字符。
     - \W 	查找非单词字符。
     - \d 	查找数字。
     - \D 	查找非数字字符。
     - \s 	查找空白字符。
     - \S 	查找非空白字符。
     - \b 	匹配单词边界。
     - \B 	匹配非单词边界。
     - \0 	查找 NUL 字符。
     - \n 	查找换行符。
     - \f 	查找换页符。
     - \r 	查找回车符。
     - \t 	查找制表符。
     - \v 	查找垂直制表符。
     - \xxx 	查找以八进制数 xxx 规定的字符。
     - \xdd 	查找以十六进制数 dd 规定的字符。
     - \uxxxx 	查找以十六进制数 xxxx 规定的 Unicode 字符。

6. 量词

   - n+ 	匹配任何包含至少一个 n 的字符串。
   - n* 	匹配任何包含零个或多个 n 的字符串。
   - n? 	匹配任何包含零个或一个 n 的字符串。
   - n{X} 	匹配包含 X 个 n 的序列的字符串。
   - n{X,Y} 	匹配包含 X 或 Y 个 n 的序列的字符串。
   - n{X,} 	匹配包含至少 X 个 n 的序列的字符串。
   - n$ 	匹配任何结尾为 n 的字符串。
   - ^n 	匹配任何开头为 n 的字符串
   - ?=n 	匹配任何其后紧接指定字符串 n 的字符串。
   - ?!n 	匹配任何其后没有紧接指定字符串 n 的字符串。

7. 实例方法

   - test(string)
     -  方法用于检测一个字符串是否匹配某个模式
     - 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。

   ```js
      var str = "Visit W3School";
   	var patt1 = new RegExp("W3School");	
   	var result = patt1.test(str);	
   	document.write("Result: " + result); 
   ```

   - stringObject.replace(regexp/substr,replacement)
     - 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
     - 如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。
     - 参数:
       - regexp/substr 	必需。规定子字符串或要替换的模式的 RegExp 对象。
       - replacement 	必需。一个字符串值。规定了替换文本或生成替换文本的函数。

   ```js
   <script>
         var arr = /['尼玛','爹']/g;
         var str = '尼玛，你玩的什么鬼，你爹啊';
         console.log(str.replace(arr,'*'))
    </script>
   ```

#### 二十三 键盘事件

1. onkedown 键盘按下事件
2. onkeyup    键盘抬起事件
3. onkeypress按下与抬起中间的事件
4. 判断键值：keyCode

#### 二十四 事件绑定

1. 事件对象：event

2. 事件流：先捕获后冒泡 捕获：从父级到子级，由外向内；冒泡：从子级到父级，由内向外；

3. 绑定事件：

   - 标准浏览器 ：addEventListener（‘click’，fn，true）
   - .IE：  attachEvent(‘onclick’，fn）

   ```js
   div1.addEventListener('click',function () { 
               alert(1);
            },true)
   //true捕获false冒泡 false是默认行为
   ```

4. 取消绑定：

   - 标准浏览器： removeEventListener（‘click’，fn，true）
   -  IE               :    detachEvent('onclick',fn)

5. 取消浏览器的默认行为

   - return false-----ie8不兼容
   - ve.returnValue= false------除了火狐兼容ie
   - ev.preventDefault（）-------兼容谷歌

6. 取消冒泡：

   - 标准浏览器：stopPropagation（）
   - ie               ：ev.cancelBubble= true

7. .事件委托：

   - 原理：利用事件冒泡的原理，把事件加到父级上；
   - 好处：减少绑定次数，后添加元素也有此事件；

```js
 		u1.onclick=function(ev){
            var ev=ev || event;
            var tag=ev.target || ev.srcElement;//事件源
            console.log(tag.innerHTML);
        }
        var li=document.createElement('li');
        li.innerHTML=4;
        u1.appendChild(li);
```

#### 二十五 改变this指向

1. bind（） 需要一个返回值，再调用，需要放在变量里再调用
2. apply（）  参数需要放到数组里面

3. call（）    参数用逗号分开

```JS

        function fn(a,b) { 
            console.log(a);
            console.log(b);
            console.log(this);
         }
         box.onclick=function(){
             //fn.call(box,1,2);//window 参数直接用逗号分开
             //fn.apply(box,[1,2]);//把参数放在数组里面
              var fn1=fn.bind(box,1,2);
              console.log(fn1);
              //需要放在变量里 再调用
            //  fn1();
            //fn.bind(box,1,2)();
         }
```

#### 二十六 定时器

1. 重复定时器

```js
			setInterval(function () { 
				代码段
        	 },1000)
        	 clearInterval()//清除重复定时器
```

1. 间隙定时器

```js
            setTimeout(function () { 
				代码段
              },1000)
               clearTimeout()//清除间隙定时器
```

#### 二十七 本地存储

| 名称 |            cookie            |    localstorage     |      sessionstorage      |
| :--: | :--------------------------: | :-----------------: | :----------------------: |
| 存储 |             4KB              |         5M          |            5M            |
|      |         移动端不推荐         |        普及         |           普及           |
|      |   客户端不安全没有自己API    | 客户端安全有自己API |   客户端安全有自己API    |
|      |         自己封装方法         |                     |                          |
|      | 不支持内地打开，在服务器打开 |                     |                          |
|      |        有效期自己设置        |        永久         | 临时会话关闭浏览器就没有 |

注：localstorage如果存满了就会报错，降级存储，用sessionstorage存储。

​       本地存储：取出来的都是字符串，唯一数据类型

1. 对象在什么情况下变成[object,object]
   - json 对象使用toString（）强行转换时会变成[object,object]
   - json.stringify()按标准来解析，会把不标准json类型转换为标准的
   - 本地存储会把对象强行转化为字符串就会变成[object,object]
2. localstorage操作方法
   - localstorage.getItem（）获取
   - localstorage.setItem（）设置
   - localstorage.clear（）     清除
   - localstorage.removeItem（） 删除

#### 二十八 箭头函数

1. 写法

```js
 box.onclick=()=>{}   let f=x=>x 
```

1. 特点
   - 没有arguments，只能写成函数表达式的形式
   - 没有自己的this，不能当做构造函数。
   - 参数只有一个时，可以省略括号
   - 参数是0或多个，需要写括号来站位
   - 语句只有一句，可以省去return和{}
   - 参数是一个对象，想要省去return需要加括号

#### 二十九 模板字符串

1. 写法：·· 反引号
   - ${ 变量}
   - ${表达式}
   - ${函数调用}

#### 三十 AJAX

1. 介绍：

   ```
   全称：Asynchronous JavaScript and XML
   中文翻译：异步JavaScript和XML 用javascript异步形式去操作xml）
   Ajax唯 一能做的事：就是数据交互。
   ```

2. 好处：

   ```
   1、节省用户操作时间，提高用户体验，减少数据请求
   2、传输获取数据
   ```

3. 应用在何处

   ```
   1、注册时手机号的验证（看这个号有没有注册过）
   2、新闻定时刷新（不用手动刷新）
   ```

4. 同步与异步的区别

   ```
   同步：一个执行完了，在执行下一个，需要排队。（false）
   异步；同时进行，不需要排队 （true）
   ```

5. status服务器状态码 http状态码分类

   ```
   1.消息
   2.成功
   3.重定向
   4.请求错误
   5.服务器错误
   ```

6. get与post区别

   - get

     ```
     1：需要编码
     2：限制大小
     3：明文提交
     4：有缓存
     5：中文需要使用encodeURI进行转义
     6：地址放在？后面用&链接
     ```

   - post

     ```
     1：不需要编码
     2：不限制大小
     3：密文提交
     4：没有缓存
     5：数据放到send中发送
     6：声明请求头
     请求头：xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
     ```

7. AJAX步骤

   ```js
   //第一步 创建Ajax对象
   var str = new XMLHTTPRequest();
   //第二步 打开方式
   ser.open('get/post','地址',true);
   //第三步 发送
   str.send();
   //获取数据
   ser.onreadystatechange = function (){
       if(str.readyState == 4){
           if(str.status == 200){
               document.write(str.responseText);
           }else{
               console.log(str.status + '错误了ERR')
           }
       }
   }
   ```

8. get方式-Ajax封装

   ```js
   function ajax(method,url,data,success) { 
       var xhr = null;
       try{
           xhr = new XMLHttpRequest();
       }
       catch(error){
           xhr = new ActiveXObject('Microsoft.XMLHTTP');//兼容IE6；
       }
       if(method == 'get && data'){
           url+='?' + data;
       }
       xhr.open(method,url,true);
       if(method == 'get'){
           xhr.send();
       }
       else{
           xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
           xhr.send(data);
       }
       xhr.onreadystatechange = function () { 
           if(xhr.readyState == 4){
               if(xhr.status == 200){
                   success && success(xhr.responseText)
               }
               else{
                   console.log(xhr.status)
               }
           }
       }
    }
   //调用+渲染到页面代码： 
        <ul>
           <li>
               <a href=""></a>
               <span></span>
           </li>
       </ul>
       <script>
          function fn() { 
               var ul = document.querySelector('ul')
               ajax('get', './php/getNews.php', '',function (data) {
                   var a = JSON.parse(data);
                   var html = '';
                   for (var i = 0; i < a.length; i++) {
                       html += `
                       <ul>
                           <li>
                               <a href="">${a[i].title}</a>
                               <span>${a[i].date}</span>
                           </li>
                       </ul>`
                   }
           setInterval(fn,1000)
                   ul.innerHTML = html;
               })
           }
           fn();
   
           setInterval(fn,1000)
       </script>
   ```

9. 兼容IE写法

   ```js
   try{
                   xhr = new XMLHttpRequest();
               }
               catch(error){
                   xhr = new ActiveXObject('Microsoft.XMLHTTP');//兼容IE6；
               }
   
   
    var btn = document.querySelector('input');
         
           btn.onclick = function () { 
               var xhr = null;
               try{
                   xhr = new XMLHttpRequest();
               }
               catch(error){
                   xhr = new ActiveXObject('Microsoft.XMLHTTP');
               }
               xhr.open('get','./php/1.get.php?username=www&age=123',true); 用？链接 多个属性用&链接
               xhr.send();
               xhr.onreadystatechange = function () { 
                   if(xhr.readyState == 4){
                       if(xhr.status == 200){
                           console.log(xhr.responseText);
                       }
                       else{
                           console.log(xhr.status)
                       }
                   }
                }
            }
   ```

#### 三十一 JSONP操作

> JSON with padding

1. 步骤

   ```js
   //第一步 创建一个script标签，因为script可以解决跨域问题
   var str = document.createElement('script');
   //第二步 在src中写入地址
   str.src = '地址'；
   //第三步 渲染到页面中
   document.body.appenChild(str);
   ```

#### 三十二 JSON	

```JS
        var obj={//属性就是变量 
            "name":'王小花',
            "age":18,
            "girl-friend":true
            //严格的 JSON属性需要====双引号
         }
         
         console.log(obj.name);//点语法  的  获取属性的值
         console.log(obj["name"]);//获取属性的值
         obj.tel='18032018189';//没有 就是添加
         console.log(obj);
         obj.age=17;//如果是已经有的属性 就是修改
         console.log(obj.age);
         console.log(obj['age']);
         delete obj.age;//删除属性
         console.log(obj);
         var obj1=JSON.stringify(obj);//把 json转成字符串
         console.log(obj1);
        //  {"name":"王小花","girl-friend":true,"tel":"18032018189"}
        var obj2='{"name":"王小花","girl-friend":true,"tel":"18032018189"}';
        var obj3=JSON.parse(obj2);//把 Json 字符串转成对象
```

#### 三十三 获取元素非属性

```js
var m = getComputedStyle(item,false)['border-color']
```

#### 三十四 LET方法

1. let与const区别

   | let       |              |              |              |                |                |              |
   | --------- | ------------ | ------------ | ------------ | -------------- | -------------- | ------------ |
   | 声明变量  | 不能重复声明 | 先声明后使用 | 有块级作用域 | 在作用域内有效 |                | 没有变量提升 |
   | **const** |              |              |              |                |                |              |
   | 声明常量  | 不能重复声明 | 先声明后使用 | 有块级作用域 | 在作用域内有效 | 声明时必须赋值 | 没有变量提升 |

2. let声明结构赋值的几种情况

   - let[a,b,c]=[1,2,3]
   - let[a,[b],c]=[1,[2,3],4]
   - let[x,y]=new Set（['a','b']）
   - let[x=1]=[undefined]
   - let[head,...text]=[1,2,3,4]

3. 对象结构与数组有一个重要的不同

   - 数组的元素按顺序排列的，变量取值由位置决定
   - 对象属性没有顺序，变量必须与属性同名才能获取到正确的值

#### 三十五 SET 方法

> new Set( ) 方法用于数组去重
>
> 它会把NaN当成相等的值
>
> {}对象不是相等的

1. 方法
   - add（）添加
   - clear（）清除
   - delete（）删除
   - keys（ ）键名
   - values（）键值
   - has（）查找 返回true/false
   - entries（）返回所有成员遍历器

#### 三十六 MAP方法

> 它的属性是一个对象，对象的每一项是字符串

1. 方法
   - get（）获取
   - set（）设置
   - has（）查找 返回true/false
   - clear（）清除
   - delete（）删除
   - keys（）键名
   - values（）键值
   - entries（）返回所有成员遍历器
   
   ```js
    var obj7={
               name:'小明',
               age:13
           }
           console.log(obj7);
           console.log(Object.keys(obj7));
           Object.keys(obj7).forEach((item)=>{
               console.log(item,obj7[item]);
           })
   // item = name age    obj7[item]=小明 13
   ```

#### 三十七 for in forof forEach

1. for in

   - 会遍历到数组的属性，包含后添加的，不建议循环数组
   - 循环声明的变量，就是每一项的下标

   ```js
   var arr=[1,2,4,5,6,7,'a'];
   for(var a in arr){//并不推荐循环数组，如果添加一个属性，会遍历数组的属性  a是下标
   ```

2. for of

   - 可以循环数组，不会遍历到数组属性
   - 循环声明的变量，是数组的每一项

   ```js
   var arr=[1,2,4,5,6,7,'a'];
   for(let a of arr){//它可以循环数组 不会遍历数组的属性 a直接就是数组的每一项
   ```

3. forEach

   ```js
   var s=new Set([1,2,3,4,'a']);
   s.forEach((value,key)=>{
          console.log(value,key);
        }) key与value相同
   ```

#### 三十八 DOM

> DOM是 Document Object Model 叫文档对象模型，所有以document开头的都是DOM操作；

1. 所有的元素获取方式都属于dom操作：
   - document.getElementById()通过id获取
   - document.getElementsByTagName('')通过标签名获取到一组元素；
   - document.querySelector()通过选择器获取到一个元素；
   - document.querySelectorAll()通过选择器获取到一组元素。
   -  document.documentElement专门用来获取html标签的
   -  document.body 专门获取body标签
2. 节点
   - 所有的html属性也是节点，注释/换行也是节点，插入的文本内容。
   - 节点和元素的区别：节点包含了以上内容，而元素只包含标签。
   - 节点包含所有元素，但是元素不包含所有节点。
3. 获取某个元素下所有子节点的方法
   - 元素.childNodes：会获取到一组元素。
   -  nodeValue 节点值 所有节点都是空的，文本节点除外，文本节点的值会是文本内容的字符串格式。

   -  nodeType  节点类型  一共十二个，常用的：元素 1 属性2 文本3 注释8 文档9；

   -  nodeName 节点名称  元素节点会返回这个元素的大写状态。
4. 获取父节点： parentNode
5. 获取第一个子节点：firstChild
6. 获取第一个子元素：firstElementChild
7. 获取最后一个子节点：lastChild
8. 获取最后一个子元素：lastElementChild
9. 获取和它同级的下一个节点：nextSibling、
10. 获取和它同级的下一个元素：nextElementSibling
11. 获取到和它同级的上一个节点：previousSibling、
12. 获取到和它同级的上一个节点：previousElementSibling
13. 所有的子元素（子集) -------(是一个集合，可以使用下标获取指定的子集)：children
14. 创建元素节点：document.createElement(元素标签)
15. 创建属性节点：docment.createAttribute(元素属性)
16. 创建文本节点：document.createTextNode(文本内容)
17. 追加：appendChild（所要添加的新节点）
18. 插入：insertBefore(新节点，已知节点-旧的)
19. 替换：replaceChild（新节点，要被替换的节点）
20. 删除：removeChild（要删除的节点）
21. 复制节点：cloneNode（true----复制当前及其所有节点/false----复制当前节点）
22. 获取属性：getAttribute（属性名）
23. 设置属性：setAttribute（属性名，属性值）
24. 删除属性：removeAttribute（属性名）

#### 三十九 DOM

> BOM是 Browser Object Model 叫浏览器对象模型，所有以window开头的都是BOM操作；
>
> location 查看网页的url信息 属于window的一个对象

1. href:
   - location.href可以获取到网页的url信息。
   - location.href='http://www.baidu.com' 可以设置一个网页的url信息
2. host:域名
3. reload:刷新当前页面
4. history 对象  包含了用户访问过的url信息
   - history.back()   后退到上一个的页面
   - history.forward()前进到下一个网页
   - history.go()  放入数字，决定是前进还是后退
     -   负数代表后退，负几代表后退几个页面
     - 正数代表前进，是几代表前进几个页面；
5. screen 对象 包含了客户端显示屏幕的信息；
   - width 当前浏览网页屏幕的宽度
   - height 当前浏览网页屏幕的高度
   - availHeight 除去 当前信息栏的度
6. navigator
   - appCodeName：浏览器代号 都是Mozilla
   - appName：浏览器名称    基本都是Netscape
   - appversion 浏览器版本号
   - userAgent 用户的系统信息

#### 四十 Tweenlite动画

> TweenLite.to(哪个元素发生变化,动画持续时间,配置对象)

1. JS中的动画
   - 动画的本质就是dom操作，就是让元素的style（位置变化（定位，位移），缩放，透明度，旋转）发生变化；
   - 运动的原理：在规定的时间内完成规定的变化。
2. 引入js文件
   - TweenLite.js - 动画的主文件
   - CSSPlugin.js - 拓展文件（让css支持任意的单位）
   - EasePack.js -缓动效果
3. 参数
   - 第一个就是要变化的元素
   - 第二个值就是帧数/时间(s)
   - 第三个值是配置对象

```js
<body>
    <div></div>
    <script src="js/TweenLite.js"></script>
    <script src="js/EasePack.js"></script>
    <script src="js/CSSPlugin.js"></script>
    <script>
        //TweenLite.to(哪个元素发生变化,动画持续时间,配置对象)
        var oDiv = document.querySelector('div')
        oDiv.onclick = function() {
            TweenLite.to(oDiv, 4, {
                left: '400px',
                background: 'green'
            })
        }
    </script>
</body>
```

