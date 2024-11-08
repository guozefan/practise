 

#### 数据类型

​	基本数据类型：Number、String、Boolean、Undefined、null

​	引用数据类型：Object

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

#####  真和假

真: true、非零的数字、非空字符串、非空对象

假: false、数字0、空字符串、空对象、undefined

##### 数据类型转换

​		什么要进行数据类型转换？

​			js只要是从页面中取出来的值，都是字符串 （id、class、value），字符串 和 任何类型相		加 	都返回字符串（只要字符串和别人相加，就变成了字符串拼接）

- 转数字
  - Number()
  - parseInt()
  - parseFloat()
  - 非加法的数学运算

- 转字符串
  - String()
  - toString()
  - 使用  + 进行字符拼接

- 转布尔
  - Boolean()

##### 显示类型转换

​	显示类型转换 `parseInt()、parseFloat()、Number()、String()`,你能看到的

###### parseInt()

转换为 整数

当转换的时候，如果字符串某一个位不是数字了，那从这一位开始后面的都不要

```js
parseInt('123') // 返回 123
parseInt('12a3') // 返回 12
parseInt('123.5')  //返回 123
```

###### parseFloat()

转换为浮点 - 小数

当转换的时候，**小数点后**如果字符串某一个位不是数字了，那从这一位开始后面的都不要了

```js
parseFloat('123.45.1a23');  //返回  123.45
parseFloat('12345.1a23');  //返回  12345.1
```

###### Number()

Number()，数字，得确保要转换的是一个 **纯字符串形式的数字** 

> 注意：Number 中的 N 要大写！！！

```js
Number('123'); //返回 123
Number('123a'); //返回 NaN
```

###### String()

字符串，把括号中的变成 字符串类型

```js
String(123); //返回  '123'
String('123'); //返回 '123'
```

###### NaN

Not a Number，不是数字

###### isNaN()

检测某个字符串  是不是 *不是数字*

```js
console.log(parseInt('a'));
// NaN  Not a Number，不是数字
console.log(isNaN('1')); //是不是 不是数字
```

true 表示 是的，不是数字
false 不是，不是数字 (是数字)

###### 隐式类型转换

> 你看不到的，但JS内部帮你完成了。

\- * / %(模,取余-不能被整出的部分)、 ==等于、===全等于

== 和 ===区别

==等于，只判断值是否相等，相等返回true，反之false，

===全等，先判断类型是否相等，如果类型相等再判断值是否相等，相等返回true，反之false

**检测数据类型**

- typeof  变量

- typeof（变量）

```js
//例如：
console.log(typeof a);
```

#### **拷贝**

- JSON的方法
  - **JSON.stringify()** 
    - 把一个JS的对象或者数组，转换成JSON格式的字符串
    - 语法：JSON.stringify(要转换的对象或者数组)
    - 返回值：是一个字符串，只不过是JSON的字符串
  -   **JSON.parse()**
    - 把一个JSO格式的字符串转换成js的对象或者数组
    - 语法： JSON.parse(json格式字符串)
    - 返回值：一个对象或者数组啊
-  栈
  - js基本数据类型存贮的空间，是有序排列
- 堆
  - 引用类型存贮的空间，没有顺序排列，会引出一个地址到栈里面，
- 浅拷贝
  - Array类型是一种引用类型；当数组a复制给数组b时，对数组b进行元素修改，数组a也会发生修改。（根据栈里面引入的地址去改变堆里库存的内容）
- 深拷贝
  -  使用concat()方法，返回新的数组；防止浅度复制的情况发生，对数组b进行元素修改操作，数组a不发生变更。（彻底改变内容，改变栈）

#### 作用域  （变量作用域）

##### 全局变量

定义在**函数外面**的，叫**全局变量**，特点：在哪儿都可以用

##### 局部变量

定义在**函数内部**的，叫**局部变量**，特点：只能在函数内部使用

##### 闭包

**子函数使用父函数的变量**，叫闭包。

##### 变量提升机制

JS会把所有的变量,函数拿到最上面去，先声明变量。再去赋值。

在函数体内没有var和let、const关键字，赋值的变量会挂在window全局上，没有提升机制

如下代码

```js
console.log(a); // undefined
var a = 12;
```

等同于

```js
var a;
console.log(a);
a = 12;
```

小区别

```js
abc();
//定义和调用 没有顺序之分，谁在前谁在后都可以
function abc(){
  console.log(123123);
}

//必须先定义后调用，否则就会报错
var bbb = function () {

}
bbb()
```

​	

##### **域解析**

1. 域解析  var let const  function  参数 这些东西  var 后面的变量 默认是 undefined，如果是一个函数 把整个函数块拿过来  如果变量跟函数名字一样  函数会把变量覆盖
2. JS会把所有的变量,函数拿到最上面去，先声明变量。再去赋值。
3. 从上面往下 逐行解读代码

#####  什么情况下会返回undefined？

1. 定义了变量没赋值

##### **var和let-const区别**     

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

##### window属性

- var 和 function 定义的全局变量和函数会成为window的属性和方法

- let & const 定义的变量不会成为window的属性

  - ```js
    // var和function定义的全局变量和函数会成为window的属性和方法
    // var a = 10;
    // // let&const定义的变量不会成为window的属性
    // let b = 20;
    // function fn() {
    // 	this.a++;//11
    // 	this.b--;//window.b = window.b+1;
    // 	// 成为了window的属性 全局变量  
    // 	c = a + b;//31
    // }
    // fn();
    // console.log(a);//11
    // console.log(b);//20
    // console.log(c);//31
    ```

- delete 删除对象的属性或者方法

  - ```js
    // var和function定义的全局变量和函数会成为window的属性和方法
    // var a = 10;
    // // let&const定义的变量不会成为window的属性
    // let b = 20;
    // function fn() {
    // 	this.a++;//11
    // 	this.b--;//window.b = window.b+1;
    // 	// 成为了window的属性 全局变量  
    // 	c = a + b;//31
    // }
    // fn();
    // console.log(a);//11
    // console.log(b);//20
    // console.log(c);//31
    
    // delete window.a;
    // delete window.c;
    // console.log(a)
    // console.log(c)
    
    // delete:删除对象的属性或者方法
    // var o = {
    // 	name:"zhang3",
    // 	age:18
    // }
    // delete o.name;
    // console.log(o);
    ```

  - ```js
    var a = 10;//window.a = 10
    let b = 20;
    function fn() {//var a
        b = --this.a;//9
        this.b = a++;// window.b = NaN
        if ([] == {}) {
            var a = 30;
            b--;
        }else {
            let b = 40;
            a++;//NaN
        }
        (function () {
            c = a+b+this.a+this.b;//NaN
        })();
        console.log(a)//1.NaN
        console.log(b)//2.9
        console.log(c)//3.NaN
    }
    fn();//window.fn();
    console.log(a)//4.9
    console.log(b)//5.9
    console.log(c)//6.NaN
    ```

- 选项卡案例

  - ```js
    <style>
           .box {
               width: 500px;
           }
           
           .box div div:not(:first-of-type) {
               display: none;
           }
       </style>
    </head>
    
    <body>
    
        <div class="box">
            <div>
                <button>A</button>
                <button>B</button>
                <button>C</button>
            </div>
            <div>
                <div>AAAA</div>
                <div>BBB</div>
                <div>CCCC</div>
            </div>
        </div>
    
        <script>
            var btns = document.querySelectorAll('button')
            var divs = document.querySelectorAll('.box div div')
    
            // for(var i = 0;i<btns.length; i++){
            //     btns[i].index = i
            //     btns[i].onclick = function(){
            //         for(k=0;k<divs.length;k++){
            //             divs[k].style.display = 'none'
            //         }
            //         divs[this.index].style.display = 'block'
            //     }
            // }
            
            // for(var i = 0;i<btns.length; i++){
            //     btns[i].onclick = (function(i){
            //         return function(){
            //             for(k=0;k<divs.length;k++){
            //                 divs[k].style.display = 'none'
            //             }
            //             divs[i].style.display = 'block'
            //         }
            //     })(i)
            // }
    
            // for(var i = 0;i<btns.length; i++){
            //     // btns[i].onclick = toggle(i)
            // }
    
            function toggle(i) {
                return function() {
                    for (k = 0; k < divs.length; k++) {
                        divs[k].style.display = 'none'
                    }
                    divs[i].style.display = 'block'
                }
            }
    
            for (let i = 0; i < btns.length; i++) {
                btns[i].onclick = function() {
                    for (k = 0; k < divs.length; k++) {
                        divs[k].style.display = 'none'
                    }
                    divs[i].style.display = 'block'
                }
            }
    
            for(let i=0;i<10;i++){
                let i = 100
                console.log(i) 
            }
    
        </script>
    </body>
    ```


##### **作用域:变量起作用的区域**

- 在JS中 var和function定义的变量是根据函数划分作用域
- 闭包        实际上 函数嵌套函数      父函数不可以调用子函数的  
- 定义在局部作用域中的变量就是局部变量
- 定义在函数外部的变量就是全局变量 局部变量仅限于函数内部使用 
- 出了函数 就被销毁   全局变量可以在任何地方使用
- 当全局变量和局部变量重名时  在局部环境中优先使用局部变量
- 定义变量时 省略了var关键字 则变量会成为全局变量



#### js基本语法

##### 命名规范

可读性：别人一看就知道是啥

规范性：

1. 首字母必须是a-z（js变量的命名，首字母最好是小写的）
2. 不允许有特殊符号，仅可使用 $和_

类型命名参考

| 类型           | 前缀             | 类型 | **例子**                                   |
| -------------- | ---------------- | ---- | ------------------------------------------ |
| Object - 常用  | 对象             | o    | oDiv  \|  oBox                             |
| Array- 常用    | 数组 \| 一组元素 | a    | aDiv \|  aItem                             |
| String         | 字符串           | s    | str \| sText                               |
| Function       | 函数             | fn   | fnShow，实际上一般我们直接写函数名就可以了 |
| Boolean - 常用 | 布尔             | b    | bfalse （开关）                            |
| RegExp         | 正则             | re   | rePhone \| reTel                           |
| 数字类型       | 数字             | i    | iNow \| iNum                               |

命名方式：

> 示例：my name is panpan

匈牙利命名法：my_name_is_panpan

驼峰命名法：myNameIsPanpan，驼峰命名的时候 首字母一定是小写的



##### 	**JS的三种书写方式**

- 行内式
  - a标签 ，直接写在href属性上 <a href="javascript: js代码;"<a href="javascript: js代码;"></a>
  - 非a标签，需要依赖行为 <div onclick="js代码"></div>
- 内嵌式
  - 写在script标签内部
  - script标签最好head的尾部或者body的尾部
- 外链式
  - 使用script的src属性引入一个‘js’的文件

##### **JS的运算符与流程控制语句**

- 数学运算符

  - ‘+’，‘-’，‘*’，‘/’,'%'

- 赋值运算符

  - ‘=’，‘+=’，‘-=‘，’*=‘，’/=‘,'%='

- 比较运算符

  - “==”，“===”，“！=”，“！==”，“<”,">","<=",">="
  - NaN==NaN    false
  - NaN===NaN     false
  - undefiend == null     true
  - undefiend === null     false

- 逻辑运算符

  - “&&      ||    ！  ”
  - 当&&和||同时出现的时候，先运算&&后运算||
  - 双取反也是转布尔一种方式

- 运算符

  算数运算符：加、减、乘、除、 %（取余，求余数）

  赋值运算符：=、+=、-=、*=、/=、%=

  >  i++  等同于 i = i + 1
  >
  >  i+=5 等同于 i = i + 5关系

  关系运算符：< 小于、> 大于、<= 小于等于、>= 大于等于、== 等于、=== 全等于

  不等于：!= 不等于、!== 不全等于

  与或非

  1. &&，多个条件都得为 true才成立，如果有任何一个为false，那么整个都为false
  2. ||，有一个为true就表示成立
  3. !，取反（不是什么），例如：!true

- 自增自减运算符（一元运算符）

  - 自增
    - 前置++
    
    - 先改变变量的值，用改变后的值去参与运算
    
      ```JS
      var a = 1;
      console.log(++a);//2
      ```
    
    - 后置++
    
    - 先把变量的值参与运算，在改变变量的值
    
    ```js
    var a = 1;
    console.log(a++);//1
    ```

- 条件分支

  - if

    - if(){}

    - if(){}else{}

    - if(){}else if(){}

    - if(){}else if(){} else{}

    - **if**

      ```js
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

  - switch

    - 拿条件和每一个case取进行比较

    - 在比较的时候必须是===的状态

    - break关键字如果不写会向下穿透，直到一个由break的为止

    - default就是在所有的case都不合适的时候执行

    - ##### switch

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

      > 注意：switch语句中，case 表示判断的分支，default会在上面所有的case都不成立的时候执行。
      >
      > **break** 会跳出 循环或判断条件，如果switch语句中没有写break，则会继续执行后面的case

  - 循环结构

    - 四个要素

      - 初始化
      - 条件判断
      - 执行代码
      - 自身改变

    - while(){}

      - 先进行条件判断，在执行代码

      - ##### while

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

    - do{} while{}

      - 不管条件满不满足都先执行一遍代码

      - ##### do while

        ```js
        do {
          //循环体
          console.log(i);
          i++;
        } while (i == 0); // i == 0 的地方写判断条件
        ```

        while和dowhile区别

        while是先判断再执行，do...while 先执行 再判断（最少他得执行一次）。

    - for(){}

      - 写起来简单，看起来不容易

      - 当你固定次数的时候，使用for

      - 当你不固定次数的时候，用while

      - ##### for

        ```js
        // for (初始化条件; 判断条件; 自增或自减) {
        for (var i = 0; i < 5; i++) {
          //循环体
        }
        ```

    - break

      - 在循环中使用的时候，当执行到break的时候，会终止循环

    - continue

      - 在循环中使用的时候，当执行到continue的时候，会结束循环中的本次，直接进行下一次

    - **` 模板字符串**        

      -  ${} 模板字符串的语法 

    ###### ?: 三目 （三元） （运算符）

    ? 前面写判断条件

    ?后面和:前面写的是 成立的时候执行的语句

    : 后面写的是 不成立的时候执行的语句

    ```js
    条件?成立执行:不成立执行;
    ```

    > 三目 执行完判断以后，要么返回 成立里面的东西，要么返回不成立里面的东西。

    ##### break 跳出 和 continue 跳过

    break叫跳出，相当于 结束的意思

    continue 跳过，相当于跳过了本次，后面的继续执行

    ```js
    for (var i = 0; i < 5; i++) {
      // if(i == 3) break;
      if(i == 3) continue;
      console.log(i);
    }
    //break; 跳出循环或判断(结束循环或判断)
    //continue 跳过本次循环
    ```

    > **注意：break、continue 和 return的区别**
    >
    > **break和continue是用在循环中的，结束或跳过循环用的。**
    >
    > **return是只能用在函数中，用于终止函数**

    ##### [了解] try catch 执行代码，如果代码异常，会执行catch，并像catch追加一个新的变量，使用 catch（变量）形式来接收上面所带来的错误。

    ```js
    try {
      //你要进行查看错误的代码，如果有问题了 会执行到 catch中，通过 error 来显示错误。
      // 如果没有问题，就直接执行try中的语句
      console.log(a)
    } catch (error) {
      console.log(error)
    }
    ```

    ##### 低配版计算器

    ```html
    <input type="text" id="in1">
    <select>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" id="in2">
    <button>计算</button>
    <input type="text" id="in3">
    
    <script>
        var oIn1 = document.querySelector('#in1');
        var oIn2 = document.querySelector('#in2');
        var oIn3 = document.querySelector('#in3');
        var oSel = document.querySelector('select');
        var oBtn = document.querySelector('button');
    
        oBtn.onclick = function () {
            if(oSel.value == '+'){
                oIn3.value = parseInt(oIn1.value) +  parseInt(oIn2.value);
            }
            else if(oSel.value == '-'){
                oIn3.value = oIn1.value - oIn2.value;
            }
            else if(oSel.value == '*'){
                oIn3.value = oIn1.value * oIn2.value;
            }
            else if(oSel.value == '/'){
                oIn3.value = oIn1.value / oIn2.value;
            }
            // console.log(oSel.value)
        }
    </script>
    ```


##### **js调错**

所有能用 . 的地方 都可以变成 [] 

有报错

- 看控制台（看看有没有报错）
- 常见的报错
  - Unexpected end of input
    - 少了结束的 } 号
  - 凡是看到带 token 
    - 肯定是符号 （大括号、中括号、小括号、冒号、分号、引号）
  - ERR_FILE_NOT_FOUND
    -  路基不对（基本上都是图片路径不对）
  - xxx is not defined 
    - 这个东西没有定义
  - Cannot set property '属性名字 | 事件名' of undefined | null 
    - 元素没有找到
  - missing ) after argument list
    - 少了括号(一般都是结束的括号）
- 一些未知的报错，去翻译 
  - [推荐]网易有道：http://fanyi.youdao.com/
  - 百度翻译：https://fanyi.baidu.com/
  - 百度翻译：https://fanyi.baidu.com/
- 看行号
  - 行号提示的信息，基本上就是错误的地方。
  - 如果行号这行没问题，那就找跟行号相关的（如获取的元素、设置或声明的变量）
- 没报错
  - 谁没出来？那就找跟他相关的语句来做排除。
    - 先看看元素获取出来的是什么
    - 再看循环进去了没有
    - 函数进去了没有

#### 函数

- 函数参数默认值：
  - 参数设置默认值，即直接写在形参的后面；（只有实参为 undifined 时才只用默认 值）
  - 参数变量是默认声明的，所以不能用 let 或 const 再次声明
  - 函数不能有同名参数。
  - 参数默认值是惰性求值的。

- 函数签名

  - 参数及参数的类型

  - 返回值及其类型

  - ```js
    函数签名
    // fname(number:a): number
    // 函数名(函数类型: 参数) : 返回值类型
    ```

- **自执行函数**

  - 定义完毕以后，自己就把自己调用了
- 语法
  - 语法1（function(){)()
  - 语法2   ~function(){}()
  - 语法3  ！function(){}()
  - 优点
    - 变量不去污染全局

- #### **arguments**

  - 每个函数都有该属性，该属性是一个类数组，存储所有实参的值

    - ```js
      function fn(a, b, c) {
      console.log(a, b, c)
      // arguments: 每个函数都有该属性, 该属性是一个类数组, 存储所有实参的值
      console.log(arguments);
      }
      
      fn(10, 20, 30, 40);
      ```

    - ```js
      // 函数参数的默认值: 当参数取值为undefined时  默认值生效
      function fn(a = 1, b = 2, c = 3) {
          console.log(a, b, c);  // 10 2 3
      }
      fn(10);
      ```

  

  #### 函数作用域

  - 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域 ， 各个参数相当于在此作用中重新声明；

  - 函数参数默认值 ： 作用域是单独的

    - ```js
      // var a = 10;
      // 函数参数默认值:作用域是单独的 
      // function fn(a, b = a) {
      // 	console.log(a,b); // 5 5
      // }
      // fn(5); 
      
      ```

  - 默认值使用变量时 不会使用局部变量

    - ```js
      // var a = 10;
      // 默认值使用变量时  不会使用局部变量
      // function fn(a, b = a) {
      // 	var a = 1;
      // 	console.log(a,b);//1 5
      // }
      // fn(5);
      ```

  #### 改变this指向 call() apply() bind()

  - 全局调用函数名（）this => window
- 对象调用对象.函数名（）this => 点前面是谁就是谁
  - 定时器处理函数  this => window
  - 事件处理函数   this => 事件源（谁身上的事件）
  - 自执行函数   this => window
  
  - 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

  - 三个函数的第一个参数都是this 指向对象 

    - bind() 返回的是一个新的函数 调用时才会执行

    - apply() 第二个 是数组形式的参数

      - 当第一个参数为 null undefind 的时候 默认指向window

      - ```js
      Math.max.apply(null, [1,2,3])
        ```
  
    - call() 第二个参数  是一个单独的参数列表

      - 当第一个参数为 null undefind 的时候 默认指向window

      - ```js
      Math.max.call(null, 1, 2, 3)
        Math.max.call(null, ...([1,2,3]))
        // ...() 扩展运算符 展开数组
        ```
  
  #### 构造函数

  - 原生构造函数的继承：
  - Boolean()
    - Number()
    - String()
    - Array()
    - Date()
    - Function()
    - RegExp()
    - Error()
    - Object()
  
  - 函数使用new关键词调用的时候，无论里面有没有值，都会返回一个对象。里面的this指向对象本身，当使用new关键词的时候，直接调用函数本身，里面的属性会成为window属性，
- prototype原型
    - 所有对象都可以访问这个属性,
    - _proto_存在是为了方便调试
    - 对于prototype原型的修改会提升到对象上，不要轻易进行修改
  - 普通函数，匿名函数都可以使用new，成为构造函数
  - 箭头函数没法用new，因为里面的this的没法更改，会报错，也不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  
  #### 函数解构赋值

  - 解构数组是必须放在最后，否则报错；	

  - ```js
  // let arr = [1,2,3];
    // function fn([a, b, c]) {
    // 	console.log(a, b, c); // 1 2 3
    // }
    // fn(arr);
    
    // let arr = [1,2,3];
    // function fn([a, b, c, d = 'a']) {
    // 	console.log(a, b, c, d); // 1 2 3 "a"
    // }
    // fn(arr);
    
    // let arr = [1, 2, 3, 4, 5, 6];
    // function fn([a, b, c, d = 'a', ...rest]) {
    // 	console.log(a, b, c, d, rest); // 1 2 3 4 [5, 6]
    // }
    // fn(arr);
    
    // let o = {
    // 	name:'zhang3',
    // 	age:18
    // }
    
    // function fn({name='无名氏', age='不详'}) {
    // 	console.log(name, age) // zhang3 18
    // }
    // fn(o);
    
    function f1({x,y} = {x:0, y:0}) {
        console.log(x, y)
    }
    
    function f2({x = 0, y = 0}) {
        console.log(x, y)
    }
    
    // f1();//0 0
    // f2();//报错
    
    f1({});//undefined  undefined
    f2({});//0 0
    ```


##### **函数默认值**

- 函数在定义形参的时候给一个默认值
- 如果你传递了实参， 就用你传递的实参  
- 如果没传递实参        就会用定义的默认值
- 直接在形参的位置写     形参=默认值	

##### **传参**

```js
<body>
    <span>变宽</span>
    <span>变高</span>
    <span>背景</span>
    <span>圆角</span>
    <div class="box"></div>

    <script>
        var aSpan = document.querySelectorAll('span');
        var oBox = document.querySelector('.box');

        aSpan[0].onclick = function () {
            // oBox.style.width = '300px';

            change('width', '301px');
        }
        aSpan[1].onclick = function () {
            oBox['style']['height'] = '300px';
        }
        aSpan[2].onclick = function () {
            // oBox.style.backgroundColor = 'green';
            change('backgroundColor', 'red');
        }
        aSpan[3].onclick = function () {
            oBox.style.borderRadius = '20px';
        }

        function change(attr, value){
            // console.log(attr, value)
            //所有能用 . 的地方 都可以变成 [] 
            oBox.style[attr] = value;
        }


        // //函数定义
        // function abc(n, h) {
        //     console.log(h)
        // }

        // //调用
        // abc(5, 44);


    </script>
</body>
```

##### **定时器**

1秒 = 1000毫秒

1分钟 = 60秒

1小时 = 60分

1天 = 24小时

- 定时器：

- 定时器中的this指的是window

  - 单次的：setTimeout(函数-要做什么事儿, 时间-单位毫秒)
  - 重复的：setInterval(函数,时间)

- 清楚定时器：

  - 单次的：clearTimeout(id)
  - 重复的：clearInterval(id)

```js
setTimeout(function(){
	console.log(123);
}, 1000)  //单次计时器
```

```js
setInterval(function() {
    console.log(456);
}, 1000)  //重复计时器
```

##### **日期和对象**

```js
<script>
        /*
        日期对象
        */ 
    一天 = 86400秒
    一小时 = 3600 秒
    一分钟 = 60秒
    function db(n) {//自动补0变成双位数
        return n < 10 ? '0' + n : n;
    }
      var day = parseInt(t / 86400);//天
      var hours = parseInt(t / 3600);//小时
      var minutes = parseInt(t % 3600 / 60);//分钟
      var seconds = parseInt(t % 3600 % 60)//秒
        
        var d = new Date();//创建日期对象
        var yy = d.getFullYear();//年
        var mm = d.getMonth() + 1; //月份 (从0开始的，获取出来的是比正常月份少1的)
        var dd = d.getDate();//日
        var day = d.getDay();//星期  (计算机中星期日 为一周的第一天， 星期日 是 0，星期六是 6)
        var h = d.getHours(); //时
        var m = d.getMinutes(); //分
        var s = d.getSeconds();//秒
        console.log(d.getTime())//getTime 返回1970年1月1日0时0分0秒  到此刻的毫秒数  格林威治时间

        // console.log(yy, mm, dd, day, h, m , s)
    </script>
```

**案例：倒计时关闭广告**

```css
    .mask{
        position: absolute;
        left: 0; top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        background: url("./a.jpg") no-repeat center center / cover;
    }
    .mask span{
        position: absolute;
        right: 30px;
        top: 30px;
        height: 30px;
        border-radius: 15px;
        padding: 0 20px;
        color: #fff;
        line-height: 30px;
        background-color: rgba(0,0,0,.5);
    }
    .mask em{
        font-style: normal;
    }
```

```html
<div class="mask">
    <span><em>5</em>s后可关闭</span>
</div>
```

```js
<script>
    var oMask = document.querySelector('.mask');
    var oEm = document.querySelector('.mask em');
    var mins = 5;
    var timer = null;
    oEm.innerHTML = mins;

    timer = setInterval(function(){
        mins--;
        oEm.innerHTML = mins;
        if(mins == 0){
            oMask.style.display = 'none';
            clearInterval(timer);
        }
    }, 1000)
</script>
```

####   对象， json -> JavaScript Object Notation

-  json用于描述不同类型的一组数据
-  内部的对象中，key和value都必须包裹在双引号内部（只有当value是null或者数字或者布尔或者undefined的时候除外）
-  对象中，可以存储任何类型的 数据 
   - ​      例如：数组、字符串、对象、函数、布尔、null、undefined
-  标准的规范中：json对象  属性 和 值 都要包裹在括号中。 
   -   值如果为数字、对象、数组、布尔、null、undefined 可以不用写括号
-  获取：
   - json.属性名
-  添加：
   -  json.属性名 = 值
-  修改
   -   如果json对象中有这个属性 就是修改 没有就是 添加
-  删除：
   -  delete json.属性名

```js
//例：
//添加一个
json.boyfriend = null;
//修改一个
json.age = 100;
//删除一个
delete json.name;
```

- 下标：
  -   数字、字符串 下标   就是数字
  -   对象的下标 就是 属性名

- 循环

##### json循环

`js`

```js
// var arr = [ {a: 12}, {a: 5} ];
    // var json = {
    //     arr: [1,2,3,4,5]
    // }
//数组对象可多层嵌套
	//查找某个元素
    // console.log(json.arr[4])
    // console.log(arr[1].a)
```



##### 对象循环方法

```js
  var json = {
            name: "盼盼",
            sex: "女",
            age: "23",
            weight: 100,
            IQ: -1000,
            combatEffectiveness: 10000
        };

        // json.boyfriend = null;
        // json.age = 100;
        // delete json.name;

        for (var key in json) {
            //获取 属性名  key
            //取值   json[key]
            console.log(json[key])
        }
  		for (var item of json) {
            //获取 属性名  key
            //取值   json[key]
            console.log(json[item])
        }

```

```js
  oBox.innerHTML += 
                        `<div class="item">
                            <div class="img-box"><img src="${item.img}" alt=""></div>
                            <p class="title">${item.title}</p>
                            <p class="info">${item.info}</p>
                            <p class="good">${item.good} 人说好</p>
                        </div>`;
        })

```



##### 什么时候用 数组 什么时候用对象？

- 什么时候用数组？
  -  一组相同类型的数据的时候  使用数组 (有个数的时候)
  -  (例如: 数组每一项都是字符串 、或者都是数字)

- 什么时候用对象？

  -  一组不相同类型的数据，但数据描述的是一个"东西"

- （数据中可能包含多种类型，例如 数字、字符串、布尔、函数、数组、对象）

##### 创建对象的方式

- 对象字面量
- new Objact()
- 自定义构造函数
  - 构造函数用于创建某一类对象 其 **首字母大写**
  - 构造函数要 **和new一起使用**才有意义
- **new 在执行时会做四件事情**
  - 在内存中创建一个新的空对象
  - 让this指向这个对象
  - 执行构造函数里面的代码，给这个新对象添加属性方法
  - 返回这个新对象（所以构造函数里面不需要return）

##### 静态成员和实例成员

**构造函数中的属性和方法我们称为成员，成员可以添加**

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

##### 构造函数原型 prototype

构造函数的问题存在浪费内存的问题

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

##### 对象原型__proto__

- 子类的__proto__属性，表示构造函数的继承，总是指向父类
- 子类 prototype 属性的__proto__属性，表示方法的继承，总是指向父类的 prototype 属性
- 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是 说，子类的原型的原型，是父类的原型。

- 对象都会有一个属性__proto__指向构造函数的prototype原型对象，之所以我们对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有__proto__原型的存在
- 对象身上系统自己添加一个__proto__指向我们构造函数的原型对象
- __proto__对象原型和原型对象 prototype 是等价的
- __proto__ 对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象prototype
- 实例对象身上的对象原型指向原型对象

##### constructor 构造函数

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

##### 成员查找机制

- 当访问一个对象的属性（包括方法），首先找到这个对象自身有没有该属性
- 如果没有就直接找它的原型（也就是 proto 指向的 prototype原型对象）
- 如果还没有找到就直接查找原型对象的原型（Object的原型对象）
- 以此类推一直找到Object为止（null）

##### 原型对象指向问题

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



### 正则表达式

**介绍**

- 正则表达式是构成*搜索模式（search pattern）*的字符序列。
- 正则表达式可用于执行所有类型的*文本搜索*和*文本替换*操作。
- 当您搜索文本中的数据时，您可使用搜索模式来描述您搜索的内容。
- 正则表达式可以是单字符，或者更复杂的模式。

**方法**

- search() 方法使用表达式来搜索匹配，然后返回匹配的位置。
- replace() 方法返回模式被替换处修改后的字符串。
- test() 它通过模式来搜索字符串，然后根据结果返回 true 或 false。
- exec() 它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。如果未找到匹配，则返回 null。

**模式**   

- *括号*用于查找一定范围的字符串：

| 表达式 | 描述                       |                                                              |
| :----: | :------------------------- | ------------------------------------------------------------ |
| [abc]  | 查找方括号之间的任何字符。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_abc) |
| [0-9]  | 查找任何从 0 至 9 的数字。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_0-9) |
| (x\|y) | 查找由 \| 分隔的任何选项。 |                                                              |

- *元字符（Metacharacter）*是拥有特殊含义的字符：

| 元字符 | 描述                                                  |                                                              |
| :----: | :---------------------------------------------------- | ------------------------------------------------------------ |
|   \    | 转义符                                                |                                                              |
|   \d   | 查找数字。找到为true，没找到为false                   | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_d) |
|   \D   | 查找非数字                                            |                                                              |
|   \s   | 查找空格 ，找到为true，没找到为false                  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_s) |
|   \S   | 查找非空格                                            |                                                              |
|   \b   | 匹配单词边界。                                        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_b) |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。           | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_ux) |
|   \w   | 表示需要包含字母数字下划线，找到为true，没找到为false |                                                              |
|   \W   | 表示不包含字母数字下划线，结果为true                  |                                                              |

| 边界符         | 用来限制正则的边界，也是限制字符串的边界 |      |
| -------------- | ---------------------------------------- | ---- |
| ^              | 开始                                     |      |
| $              | 结束                                     |      |
| /^abcd$/       | 开头和结尾中间的内容只能是abcd           |      |
| /^\d\d\d\d\d$/ | 开头和结尾中间的内容只能是5位数字        |      |

| 限定符    | 用来描述一个正则 元字符 出现的次数   |      |
| --------- | ------------------------------------ | ---- |
| /^\d+$/   | 表示只能由一位以上的数字组成         |      |
| /^\d*$/   | 表示只能由0到多个数字组成            |      |
| /\d{3}/   | 表示需要包含一个三个数字连着的字符串 |      |
| /^\d{3}$/ |                                      |      |
|           |                                      |      |



**例子**

```js
 		 //正则表达式
        var arr = '123456789';
        var str = /[1-4]/g;
        var str1 = arr.match(str)
        console.log(str1);



		//正则表达式
        var part = "Give 100%!";
        //限定查找规则
        var patt1 = /\d/g;
        //进行匹配
        var result = part.match(patt1);
        console.log(result);
```

### 字符串

> 字符串是长度的。有长度的东西就一定有下标。

##### .length

返回字符串的长度



##### .toUpperCase()

将字符串变为大写



##### .toLowerCase()

将字符串变为小写



##### .charAt()

.charAt() 获取字符串中的第几个。  ()里面写的是 下标，下标从0开始。

```js
var str2 = 'ABCADASDASDASDASD';
console.log(str2.charAt(2)); // C
```

当括号里面的值是 小于0或者大于字符串的长度了，返回的是 ''  (空字符)



##### .indexOf()

从前往后查找某个字符出现的位置 （下标）。`str2.indexOf('要查找的字符')`

惰性原则：只要找到了一个他就算结束任务了，后面再有也不会再去执行了。

**indexOf() 找到了对应的字符，返回下标。找不到的时候，返回 -1**



##### .lastIndexOf()

从后往前查找，找到了以后返回下标，找不到返回-1

**注意：虽然是从后往前找的，但下标依然是从前往后数的下标**

字符的下标不可能是倒着来的。



##### .split()

将字符串拆分为数组。括号里面的参数是希望通过 什么 字符来拆分。

通过什么拆分，那就是把这个字符前面分为一组，后面分为一组

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
```

> 数组： [1,2,3,4,5]，实际上数组之前见过，获取一组元素的时候他就是放到了数组中。（获取元素的数组叫类数组）



##### .substring(index, [end])

字符串裁剪（切割） `.substring(起始下标,结束下标)`

```js
str4.substring(第一个参数：从第几个下标开始裁剪-包含的, 第二个参数：到第几个下标-不包含的)
```

> 注意：
>
> 1. 参数1是必选参数，参数2是可选参数。
> 2. 如果只写了参数1，会从 参数1的下标开始截取到最后。
> 3. 如果起始下标比结束下标要大，那么两个参数互换顺序。



##### fromCharCode()

参数：一组序列数字，表示 Unicode 值。该方法返回一个字符串，而不是一个 String对象。（返回的是Unicode字符集中的对应的文字）

由于fromCharCode是String的静态方法，所以应该像这样使用：`String.fromCharCode(参数是数字)`，而不是作为你创建的 String对象的方法。



##### trim()

去除字符串的左右的空格。

`trimStart()` 方法从字符串的开头删除空格。`trimLeft()` 是此方法的别名。

`trimEnd() `方法从一个字符串的末端移除空白字符。`trimRight()` 是这个方法的别名。



##### 字符串比较大小

英文、数字：字典序(字典中的顺序)，0-9A-Za-z  顺序中 后面的大于前面的。

中文：按照Unicode内部码位来 a 97 A 65 通过 `str.charCodeAt()` 查看码位 ( 位码：是在整个Unicode字符集中的第几个位置 )

```js
console.log('李飞'>'李万通');
console.log('飞'.charCodeAt()); //李 26446  万 19975  飞 39134
```

> 比较规则：
>
> 先比较第一位，第一位如果大，就算大了。如果第一位相同，比较第二位，以此类推。

> ASCII ['æskɪ] 和 Unicode 区别
>
> - ASCII，一个是英文的，只包含数字、字母、部分的特殊符号 
> - 而Unicode是包含了ASCII全部编码的，是一个国际的



### Array

##### 声明数组

什么叫数组？一组 相同类型数据 的 集合。叫数组。

> 注意：数组在定义的时候，切记，一个数组中最好放相同类型的数据。
>
> 错误示范：`var arr2 = ['1', 2, false, document.querySelector('div'), '5'];`
>
> 正确：`var arr = [1, 2, 3, 4, 5]` 或 `var arr2 = ['1', '2', '3', '4', '5']`

> 凡是跟 **组**有关的东西，都有 `length`，而有 `length`的东西，必然有 下标，数组的下标使用 []

```js
//推荐第一种
var arr = [1,2,3,4,5];
//或者使用
var arr = new Array(1,2,3,4,5);
```

##### 通过 下标 往数组中添加 或者修改东西

如果没有这个下的时候 是添加，有的话是修改。

```js
var arr = [1, 2]; //一堆相同类型的数据组合，叫数组
arr[1] = 123; //这里的数组 变成了 [1,123]
arr[2] = 456; //[1,123,456]
arr[5] = 789; //[1,123,456,undefined,undefined,789]; 切记 不要跳着这么去添加。
```



##### 添加

##### push()  

从后面添加。括号里面写的是要添加的东西。

```js
var arr = [1, 2];
arr.push(8); //推，一定是从后往前去推，在数组后面去添加  [1,2,8]
```

##### unshift() 

从前面添加，括号里面写的是要添加的东西

```js
var arr = [1, 2];
arr.unshift(3);// 从前面添加  [3,1,2]
```

括号中写一个参数就会在相应的位置添加几个

```js
arr.push(1,2,3);   [1,2,1,2,3];
```

##### 删除

##### pop() 

从后面删除

```js
var arr = [1, 2, 3, 4, 5];
arr.pop(); // [1,2,3,4]
```

##### shift() 

从前面删除

```js
var arr = [1, 2, 3, 4, 5];
arr.shift(); // [2,3,4,5]
```

##### slice

**slice(start-含, end-不含)** 

发音: [ slīs ]

slice，切割数组（裁剪数组）,类似于 substring，substring是裁剪字符串。slice是裁剪数组的。

> 会返回新的数组。（换句话的意思是**切割不会影响原数组的变化**）
>
> 如果想使用切割后的数组，那么需要 使用一个变量去接收一下 切割后的数组。
>
> 例如： 
>
> ```js
> var arr = [1,2,3,4,5];
> var 接收的变量名 = arr.slice(2,4);
> 
> //返回的是  [3,4]
> ```

##### splice()

发音：[ splīs ]

splice，添加数组、删除数组、替换数组

> splice 会改变原数组 （注意：slice 不会改变原数组）

> 参数(下标, 删除几个, 替换成什么...)

##### 替换

```js
var arr = [1, 2, 3, 4, 5];
arr.splice(1,3); //从第1个开始删掉三个，
```

##### 删除

```js
var arr = [1, 2, 3, 4, 5];
arr.splice(1,3); //从第1个开始删掉三个  
```

##### 添加

```js
var arr = [1, 2, 3, 4, 5];
arr.splice(1,0); //从第1个开始删掉0个  
```

##### concat()

连接数组.

```js
//数组.concat(数组)
var arr = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var abc = arr.concat(arr2.concat(arr3));//arr 和 arr2 连接在一起。
```

##### join()

join，把数组转为字符串。会返回新的字符串。

join中的参数是字符串通过什么东西来连接。

```js
var arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));  // '1-2-3-4-5'
console.log(arr.join(''));  // '12345'
```

##### reverse

数组反转

```js
var arr = [1,2,3,4,5];
arr.reverse();  // [5, 4, 3, 2, 1]
```

##### sort()

`sort()`数组排序。参数是一个函数。函数还有两个参数a和b （随便写两个参数就行）

```js
var arr = [88, 123, 12, 9, 8, 3, 11, 87, 33];
//从小到达进行排序
arr.sort(function(a,b){
  console.log({a,b})
  return a - b;
})
```

> a - b 是从小到大进行排序
>
> b - a 是从大到小进行排序

> 排序规则：
>
> 如果compareFunction(a, b)小于 0 ，那么 a 会被排列到 b 之前；
> 如果compareFunction(a, b)等于 0 ， a 和 b 的相对位置不变。
>
> 备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
>
> 如果compareFunction(a, b)大于 0 ， b 会被排列到 a 之前。
>
> compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。(完全乱掉的随机数)

##### [案例]双色球

> 规则：
>
> 红球6个，蓝球1个。红球的取值范围是 1~32之间，蓝球的取值范围 1~16之间。



##### find()

 `find()`用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

 ```js
[1, 2, 5, -1, 9].find((n) = n < 0)
//找出数组中第一个小于 0 的成员
// -1
 ```

##### findIndex()

` findIndex()`方法的用法与find()方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

```js
[1, 2, 5, -1, 9].findIndex((n) = n < 0)
//返回符合条件的值的位置（索引）
// 3
```

##### filter()

 `filter()`过滤数组，如果条件成立则会放到新的数组中。

##### forEach()

 `forEach()` 遍历数组全部元素，利用回调函数对数组进行操作，自动遍历整个数组，且无法break中途跳出循环，不可控，不支持return操作输出，return只用于控制循环是否跳出当前循环。

 回调有三个参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身。

 ```js
var arr = [1,2,3,4,5,] ;
 // aLi.forEach(function(数组的每一项，相当于原来第 xx[i], 相当于原来的i, 数组本身)
arr.forEach(function(item,index){
	console.log(item);
});
 ```

 这个方法是**没有返回值的**，仅仅是遍历数组中的每一项，不对原来数组进行修改；

 但是可以自己通过数组的索引来**修改原来的数组**；

 ```js
var ary = [12,23,24,42,1];  
var res = ary.forEach(function (item,index,input) {  
    input[index] = item*10;  
})  
console.log(res);//-- undefined;  
console.log(ary);//-- 通过数组索引改变了原数组；
 ```

##### every()

 `every()` 判断数组中是否每个元素都满足条件，只有都满足条件才返回true；只要有一个不满足就返回false；

##### some()

 `some()` 判断数组中是否至少有一个元素满足条件，只要有一个满足就返回true，只有都不满足时才返回false

##### map()

 `map()`,返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

 map() 方法按照原始数组元素顺序依次处理元素。

 **注意：** map() 不会对空数组进行检测。

 **注意：** map() 不会改变原始数组。

 ```js
var data = [1, 2, 3, 4];
var arrayOfSquares = data.map(function (item) { //接收新数组
	return item * item;
});
console.log(arrayOfSquares); // [1, 4, 9, 16]
 ```

##### reduce()

 `reduce()` 

    1. reduce()方法接收一个函数作为累加器(accumulator),数组中的每个值(从左到右)开始合并,最终为一个值.
    2. callback:执行数组中每个值的函数(也可以叫做reducer),包含4个参数.
       1. previousValue:上一次调用回调返回的值,或者是提供的初始值(initialValue)
       2. currentValue:数组中当前被处理的元素
       3. index:当前元素在数组中的索引
       4. array:调用reduce的数组

 ```js
// 获取购物车中商品列表的价格总和
let goodList = [{id: 1, price: 10, qty: 5}, {id: 2, price: 15, qty: 2}, {id: 3, price: 20, qty: 1}]
  
let totalPrice = goodList.reduce((prev, cur) = {
  return prev + cur.price * cur.qty
}, 0)
  
console.log(totalPrice) // 100
 ```

### Math

##### Math.random() 

返回的0~1之间的随机数，不包含1.（意味着最大的情况是 0.999999....）

如果要一个 1~20的随机数使用：

```js
console.log(parseInt(Math.random() * 20) + 1);
//最小是 0 * 20 = 0
//最大是 0.9999 * 20 = 19.xxxxx; parseInt 以后是 19 
//最后得+1
```

要一个  15  ~ 33 之间的随机数

> 原理很简单，最小的是多少，最大的是多少。
>
> 最小是15，如果随机到0，是不是的是 15 ，   0+15
> 最大是33，如果随机到 0.99999 * (最大的数 - 最小的数 + 1)  + 最小的数

##### Math.abs()

绝对值

##### Math.round()

四舍五入

##### Math.floor()

向下取整

##### Math.ceil()

向上取整

![image-20200617213916908](C:\Users\86131\AppData\Roaming\Typora\typora-user-images\image-20200617213916908.png)

**保留小数点后两位 toFixed(2)

> 

##### **节点（节点 文本3  注释8  属性节点2  document 9   标签节点 1）**

- attributes获取属性节点

- parentNode找父元素节点

- children找儿子（找到所有的标签节点  第一层的子节点)

- childNodes找所有的的节点，文本  注释 标签 等

- nodeType节点类型

- nodeName节点名字

- nodeValue节点值

**offset**

- offsetLeft找最近有定位的 父级 ，距离左边的值

- offsetTop找最近有定位的父级， 距离上边的值

- offsetParent 找最近的有定位的父级， 如果没有定位 就会找到 body

**非行间样式**

- 获取方法

  - getComputedStyle （标准浏览器获取非行间样式）
  - currentStyle

- 兼容

  ```js
    if(window.currentStyle){//非行间样式做兼容 
              console.log(box.currentStyle.width);
          }else{
              console.log(getComputedStyle(box).width);
          }
  ```


**.window.open() **

- 打开窗口
- 默认在新窗口打开  写第2 个参数 _self 在本窗口打开

**window.close() **

- 关闭窗口

**事件**

- 鼠标事件
  - onclick 点击事件
  - ondblclick 双击事件
  - onmouseover鼠标移入事件
  - onmouseout 鼠标离开事件
  - onmousemove 鼠标移动事件
  - onmouseenter 跟 mouseover一样 不同的是不支持事件冒泡
  - onmouseleave 跟onmouseout一样 不同的是不支持事件冒泡
  - oncontextmenu 右击菜单事件
  - onmousedown 鼠标按下事件
  - onmouseup 鼠标抬起事件

- 键盘事件

  - onkeydown 键盘按下事件
  - onkeypress 按下 抬起中间的事件
  - onkeyup 键盘抬起事件

- onresize 窗口发生变化的时候 触发    

- 焦点事件

  - onfocus（获取焦点的时候）
  - onblur （失去焦点的时候）

**鼠标的值**

- .pageX/pageY距离页面的左边 上边的值 加滚动的距离 ******
- .clientX/clientY 可视区 左边  上边的值，不加滚动的距离******
- .screenX/screenY 距离电脑屏幕左边 上边的值 做为了解
- offsetX/offsetY 距离元素本身左边 上边的值  做为了解

**盒子跟随鼠标的案例**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box{width: 100px;
        height: 100px;background:red;position: absolute;left:0;top:0}
    </style>
</head>
<body>
    <div id="box"></div>
    <script>
        document.onmousemove=function(ev){
            var ev= ev || event;
            box.style.left=ev.pageX-box.offsetWidth/2+'px';
            box.style.top=ev.pageY-box.offsetHeight/2+'px';
        }
    </script>
</body>
</html>
```

**吸顶条的原理：**
        滚动条滚动的距离>吸顶条所在的offsetTop距离时，让它吸上去

**延迟加载原理：**
        滚动条滚动的距离+屏幕的可视高clientHeight>图片所在的offsetTop距离时

**放大镜原理：**

​			 小盒子移动的位置/图片的大小-小盒子的大小 = 图片要移动的位置/盒子的大小-图片的大小

**元素自身的宽高**

- offsetWidth/offsetHeight      width(height)+border+padding******
- .clientX/clientY  width(height)+padding  做为了解

**可视区的宽高**

- document.documentElement.clientWidth/clientHeight

可视区滚动的值

- 低版本
  -  ie document.documentElement.scrollTop
- 标准浏览器
  - document.body.scrollTop

**随机数**

```js
function sj(min,max) { 
           return Math.floor(Math.random()*(max-min+1)+min)
        }
       var arr=['李飞','家宝','赵盼','李万通','王小明'];
       var index=sj(0,arr.length-1) 
```

**文字右移的案例**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{padding: 0;margin:0;}
        body{background: #ccc;}
        #wrapper{width:800px;margin:50px auto;background: #fff;
        border-radius: 10px;padding: 20px;overflow: hidden;}
        #left{width:320px;height: 220px;background: green;color:#fff;
        font-size: 18px;float: left;border:none;padding: 10px;}
        #center{float: left;width:120px;text-align: center;}
        #center a{text-decoration: none;background: red;color:#fff;
        display: block;padding: 10px;margin:0 5px;border-radius: 10px;}
        #center p{font-size: 20px;}
        #center ul{opacity:0}
        #center ul li{width:8px;height: 10px;background: orange;
        display: inline-block;margin:2px;}
        #right{width:320px;height: 220px;background: skyblue;float:right;
        padding: 10px;color:#fff;}

    </style>
</head>
<body>
    <div id="wrapper">
        <textarea  id="left"></textarea>
        <div id="center">
            <a href="javascript:;" id='btn'>把文字右移</a>
            <p><span id='current'>0</span>/<span id='all'>0</span></p>
            <ul id='progress'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div id="right"></div>
    </div>
    <script>
        var timer=null;
        var p=document.querySelector('p');
        btn.onclick=function(){
            progress.style.opacity=1;
            if(!left.value){
                btn.style.opacity=0.5
                alert('还没有内容，请输入内容')
            }
            var total=left.value.length;//左边的总长度
            clearInterval(timer);
            timer=setInterval(function () { 
                right.innerHTML+=left.value.charAt(0);//一个个地拿
                left.value=left.value.substring(1);//每拿到右边一个 左边就少一个 从第1个开始截取一直到最后
                console.log(left.value,right.innerHTML);
                p.innerHTML='<span id="current">'+right.innerHTML.length+'</span>/<span id="all">'+total+'</span>'
               if(left.value.length==0){
                  clearInterval(timer);
               }
             },200)
        }
    </script>
</body>
</html>
```



**预览器默认行为**

- 浏览器的默认行为 拖拽的时候 图片会有默认行为 return false ie8不起作用

- returnValue:false //除火狐都兼容    ie的

- preventDefalut() ie 6 7 8 不兼容   谷歌的

**事件流**

.捕获阶段  从外层到目标的过程

冒泡阶段  从里面到外面的过程

事件监听，第三个参数是布尔值，默认false，false是事件冒泡，true是事件捕获

1. 冒泡是默认触发的 标准浏览器支持捕获 冒泡  ie8 及以下 只支持冒泡 所以一般用冒泡

2. 取消冒泡，如果不取消冒泡，那么就会冒泡到 document 上

   ```js
   ev.cancelBubble=true;
   ```

##### 事件监听,绑定案例

-  document.addEventListener('click',fn,false)**标准预览器**
-  document.attachEvent('onclick',fn1)**IE预览器**

**事件绑定兼容**

```js
function fn1(param){
            console.log(this);
        }
        function  bind(obj,evName,fn) {
            if(obj.addEventListener){
                obj.addEventListener(evName,fn,false)
            }
            else{
                obj.attachEvent('on'+evName,function () {  
                    fn.call(obj);
                })
            }
          }
          bind(document,'click',fn1)
```

**事件解绑**

- 对象.onclick = null;
- 对象.removeEventListener("click", f1, false);
- 对象.detachEvent("onclick", f1);

```js
document.onclick = null;

对象.removeEventListener("click", f1, false);

对象.detachEvent("onclick", f1);

```

**取消冒泡案例**

- ev.cancelBubble=true;//IE浏览器  取消冒泡 
- ev.stopPropagation();//标准浏览器 取消冒泡 
- 事件经过的元素 如果也绑定了相应的处理函数 就会执行这个处理函数

#### 在函数里改变this指向

- call()函数的方法 改变函数的this指向，第一个参数是目标，从第二个参数开始是实参

- applay()函数方法 改变函数的this指向，第二个参数是一个数组

- bind() 返回的是一个新的函数 调用时才会执行

- 案例

  ```
  <body>
      <div class="box"></div>
      <script>
          var oBox = document.querySelector('.box');
  
          function fn(a, b, c) {
              console.log(this);
              console.log(a + b + c);
          }
          oBox.onclick = function () {
              fn.call(oBox, 1, 2, 3)
              fn.applay(oBox, [1, 2, 3])
          }
          //    call()函数的方法 改变函数的this指向第一个参数是目标，从第二个参数开始是实参
          // applay()函数方法 改变函数的this指向第二个参数是一个数组
      </script>
  </body>
  ```

  



**事件委托**

- 通过事件冒泡的原理给父级添加点击事件
- 在事件对象里有两个成员
- 叫做 e.target || e.srcElement
- 后来添加的元素也有此事件
- 减少绑定事件，性能比较好

```js
<script>
        var ul = document.getElementById('ul');
         var aList = document.getElementsByTagName('li');
        //  for (var i = 0; i < aList.length; i++){
        //     aList[i].onclick=function(){
        //         console.log(this.innerHTML);
        //     }
        // }
        // var li =document.createElement('li');
        // li.innerHTML = 4;
        // ul.appendChild(li);//点击第4个，li是没有点击事件的

        ul.onclick=function(ev){
            var ev = ev ||event;
            var target = ev.target || ev.srcElement;
            console.log(target.innerHTML);
        }
        var li=document.createElement('li');
        li.innerHTML=4;
        ul.appendChild(li);
        // 事件委托好处，1.减少绑定事件，性能比较好   2.后来添加的元素也有此事件
        // 事件委托的原理  利用事件冒泡的原理 把事件加在父级的身上

    </script>
```

**动画**

- TweenLite.to(运动的dom元素, 时间/帧数, 配置)
  - false 表示用时间
  - true:用的是关键帧

```js
//动画

<script src="./tweenLite/TweenLite.js"></script>
   <script src="./tweenLite/EasePack.js"></script>
   <script src="./tweenLite/CSSPlugin.js"></script>
</head>
<body>
    <div class="box"></div>
    <script>


        var box = document.querySelector('.box');
        box.onclick = function(){
            // TweenLite.to(box,100,{
            //     css:{width:'200px',height:'200px',backgroundColor:'pink'},
            //     useFrames:true,
            //     onStart:function(){  //动画开始执行的回调函数
            //         console.log('活动开始了');
            //     },
            //     onCompelete:function(){  // 动画执行完毕执行的函数
            //         console.log('运动完成了');
            //     }
            // })
            TweenLite.to(box, 2.5, { ease: Bounce.easeOut, x: 500 , y: 500});
        }
```

### JS2基础

######  DOM 操作

- 简介
  - Document Object Model
  - 文档对象模型
  - 区分：dom操作一定都是以 document 开头的
- 方法
  - document.body.insertBefore(box,p);
  - document.body.replaceChild(p,box);
  - document.createElement('div')//**创建元素**     
  - 父元素.appendChild(子元素);//**追加元素**
  - 父元素.removeChild(子元素)**删除元素  子元素.remove()删除元素**  
  - 父元素.insertBefore(新元素,参照元素) 
  - 父元素.replaceChild(新的元素,要替换的元素) 
  - 要克隆的元素.cloneNode(true) **不写参数 不克隆内容**
  - 元素.getAttribute('id')//**获取属性的值 自定义的也可以获取**
  - 元素.setAttribute('index',1)**设置或修改属性值** 
  - 元素.removeAttribute('a')**删除属性** 

######  BOM 操作

- 简介
  - Browser Object Model
  - 浏览器对象模型
  - 区分：bom操作一定都是 window 开头的

######  children 获取子元素

######  childNodes  子节点

-  节点 包含：文字、标签、注释

###### [nodeValue  节点的值]( https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue)

###### [ nodeType   节点类型](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)

###### [ nodeName   节点名称](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName)

######  attributes 返回节点的所有属性

###### parentNode 父节点

######  firstChild 第一个子节点、firstElementChild 第一个元素节点

######   lastChild 最后一个子节点、lastElementChild 最后一个元素节点

######  nextSibling 下一个节点、nextElementSibling 下一个元素节点

######  previousSibling 上一个节点、previousElementSibling 上一个元素节点

###### 创建元素

```js
   var oItem = document.createElement('div');
        //给创建的元素添加属性  （原来获取的时候怎么给他加的属性  这里也是一样的操作）

  // 放到页面中(放到谁里面)
        document.body.appendChild(oItem);
```



###### 创建一组元素

```js
arr.forEach(function(item){
            //创建元素
            //外层的div
            var oDiv = document.createElement('div');
            oDiv.className = 'item';
            //外层div中的图片父级
            var itemImg = document.createElement('div');
            itemImg.className = 'item-img';
            //外层div中图片
            var oImg = document.createElement('img');
            oImg.src = item.img;
            //标题
            var oTitle = document.createElement('p');
            oTitle.className = 'title';
            oTitle.innerHTML = item.text
            //文字
            var oText = document.createElement('p');
            oText.className = 'text';
            oText.innerHTML = item.info;

            itemImg.appendChild(oImg);
            oDiv.appendChild(itemImg);
            oDiv.appendChild(oTitle);
            oDiv.appendChild(oText);
            oBox.appendChild(oDiv);
        })
```

###### 什么样的条件下需要创建元素 

1. 最外层的盒子  需要创建 （循环了一组数据，都要放到某个盒子中，这个盒子一定要创建。）
2. 子元素中如果有需要事件的，要创建。

```js
 var oList = document.querySelector('.list');
 var oIn = document.querySelector('input');
 var oBtn = document.querySelector('button');  

console.log(oList.children[1])

        //从  谁里面删除一个子元素 (子元素是谁)
        // oList.removeChild(oList.children[1]);

        oBtn.onclick = function () {
            var oLi = document.createElement('li');
            oLi.innerHTML = oIn.value;

            //插入删除按钮
            var oLink = document.createElement('a');
            oLink.innerHTML = '删除';
            oLink.href = "javasdript:;"
            oLink.onclick = function(){
                oList.removeChild(oLi)
            }
            oLi.appendChild(oLink);

            //放到谁的里面  谁的里面插入.insertBefore(创建出来的元素, 在哪个元素之前)
            oList.insertBefore(oLi, oList.children[0]);
        }
```



###### 替换元素 : replaceChild()

```js
  var oEm = document.createElement('em');
        oEm.innerHTML = '哇卡卡卡卡卡卡';

        // oList.replaceChild(新的子节点，要替换哪个节点)
        oList.replaceChild(oEm, oList.children[1])
```

###### 删除元素 : removeChild()

```js
 //从  谁里面删除一个子元素 (子元素是谁)
        // oList.removeChild(oList.children[1]);
```



###### 添加元素 : insertBefore()

```js
   //放到谁的里面  谁的里面插入.insertBefore(创建出来的元素, 在哪个元素之前)
            oList.insertBefore(oLi, oList.children[0]);
```

###### 插入元素 ：appendChild（）



##### event事件对象

- ###### 简介

  - 事件对象 event 记录事件的一些信息 就像飞机上的黑匣子  标准浏览器 event
  - 火狐浏览器是用的是事件函数的第一个参数  非标准浏览器(iE 6 7 8)通过事件函数的第一个参数

- ###### **兼容性**

  - var ev=ev || event

- ######  **keyCode查看键值**

  - enter 13 
  - 空格 32
  - 方向键  37  38 39 40

```js
  console.log(ev.ctrlKey);//如果按了 ctrl 返回 true 反之为 false 
  console.log(ev.altKey);//如果按了 alt 返回 true 反之为 false
  console.log(ev.shiftKey);//如果按了 shift 返回 true 反之为 false
```



- ###### **键盘事件**

  - onkeyDown

    ```html
      document.onkeydown=function(ev){//键盘按下事件
                var ev=ev || event;
                console.log('按下');
    			console.log(ev.ctrlKey);//如果按了 ctrl 返回 true 反之为 false 
                console.log(ev.altKey);//如果按了 alt 返回 true 反之为 false
                console.log(ev.shiftKey);//如果按了 shift 返回 true 反之为 false
                console.log(ev.keyCode);//查看键值  回车 13  空格32  方向 左 上 右 下(37,38,39,40)
            }
    ```

  - onkeyPress

    ```html
     document.onkeypress=function(ev){
                var ev=ev || event;
                console.log('中间');//不支持某些功能键 shift alt ctrl
            }
    ```

    

  - onkeyUp

    ```html
     document.onkeyup=function(ev){//键盘抬起事件
                var ev=ev || event;
                console.log('抬起');
            }
    ```

    

- 焦点事件

  - onfocus

  ```js
  text.onfocus=function(){//获取焦点
             this.value='';
      }
  ```

- 失去焦点

  - onblu

- 窗口事件

  - onresize

    ```html
      <div>box</div>
      <script>
            window.onresize=function(){
                console.log('窗口大小发生了变化');
            }
         </script>
    ```

    

- 下拉框事件

  - onchange 

    ```html
        <select name="" id="s1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <script>
            s1.onchange=function(){//
                console.log('值发生了变化');//当下拉框里面的值发生变化的时候触发此事件
            }
        </script>
    
    ```


##### 留言板案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box{width: 100px;
        height: 100px;background: red;}
    </style>
</head>
<body>
    <div id='box'>box</div>
    <script>
        // box.onclick=function(ev){
        //     //console.log(this.innerHTML);
        //     var ev =ev || event;//顺序不能换
        //     console.log(ev);
        //     console.log(ev.pageX);
        //     console.log(ev.pageY);
        // }
        document.onkeydown=function(ev){//键盘按下事件
            var ev=ev
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" value="" id='text'>
    <input type="button" value="留言" id='btn'>
    <ul id='ul'>

    </ul>
    <script>
       btn.onclick=function(){
          var li=document.createElement('li');
          li.innerHTML=text.value;
          ul.appendChild(li);
       } 
       text.onfocus=function(){//获取焦点
           this.value='';
       }
       document.onkeydown=function(ev){
            var ev=ev || event;
            console.log(ev);
            if(ev.keyCode==13){//如果按下的是回车键 功能跟点击一样
                var li=document.createElement('li');
                li.innerHTML=text.value;
                ul.appendChild(li);
            }
       }
    </script>
</body>
</html>
```



**getBoundingClientRect()方位对象    获取元素的信息**   

- left  top  right bottom width  height  x  y 会受滚动条的影响
- left 盒子距离页面左边的值         right   left+盒子的宽 
- top  盒子距离页面顶部的值         bottom  top+盒子的高

**js里写多个样式**

-  box.style.cssText=''

盒子居中显示 案例

```js
<style>
        *{padding: 0;margin:0}
        #box{width:400px;height: 400px;background: #ccc;
        border:10px solid red;position: absolute;position: fixed;}
    </style>
</head>
<body style="height: 2000px;">
    <div id="box"></div>
    <script>
        var box=document.getElementById('box');
        function fn() {   
            var l=(document.documentElement.clientWidth-box.offsetWidth)/2;
            var t=(document.documentElement.clientHeight-box.offsetHeight)/2;
            box.style.left=l+'px';
            box.style.top=t+'px';
         }
         fn();
        window.onresize=function(){//窗口改变大小的时候触发
            //console.log(1);
            fn();
        }
    </script>

```

点击移动 案例

```js
<style>
        *{padding: 0;margin: 0;}
        #div1{width:100px;height: 100px;background: pink;border:5px solid
        red;margin-left:100px;position: relative;}
        #div2{width:60px;height: 60px;background: green;border:5px solid
       lime;position: relative;}
        #div3{background:orange;height: 30px;border:5px solid;width:30px;
        position: absolute;left:0;transition:1s left;}
    </style>
</head>
<body>
    <input type="button" id='btn' value="点击就走">
    <div id="div1">
        <div id="div2">
            <div id="div3">

            </div>
        </div>
    </div>
   <script>
       console.log(div3.getBoundingClientRect());//获取元素的信息 对象    方位对象
       //left  top  right bottom width  height  x  y 会受滚动条的影响
       btn.onclick=function(){
           div3.style.left=-div3.getBoundingClientRect().left+'px';
       }

    //    left 盒子距离页面左边的值         right   left+盒子的宽 
    //    top  盒子距离页面顶部的值         bottom  top+盒子的高 

   </script>
```

键盘控制方向  案例

```js
<style>
        *{padding: 0;margin: 0;}
        #box{width:100px;height: 100px;background: red;position: absolute;}
    </style>
</head>
<body>
    <div id="box"></div>
    <script>
        var box=document.getElementById('box');
        document.onkeydown=function(ev){
            var  ev=ev || event;
            switch(ev.keyCode){
                case 37:
                box.style.left=box.offsetLeft-10+'px';
                break;//中断
                case 38: 
                box.style.top=box.offsetTop-10+'px';
                break;
                case 39:  
                box.style.left=box.offsetLeft+10+'px';
                break;
                case 40: 
                box.style.top=box.offsetTop+10+'px';
                break;
            }
        }
    </script>
```



#### **ajax - > 交互** （无刷新局部更新）

- 交 -》交流
- 互 -》相互
- 两者
  - 前台
  - 后台

1. 创建ajax对象：let xhr = new XMLHttpRequest()

2. 配置：xhr.open(发送类型，地址，同步或异步)

3. 发送： xhr.send()

4. ```js
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

   

**性能上**

- get 明文提交 相对不安全 相对于来说比较方便
- post 隐式提交 相对安全 相对繁琐

**语法上**

1. 参数
   - get &拼接在路径后面，？后面跟参数
   - post &拼接放到send里面发送

 2.请求头

1. get 不需要设置
2. post 需要设置请求头
   1. application/json（JSON数据格式）
   2. application/x-www-form-urlencoded
   3. multipart/form-data 	

**区别**

- 同步 =》false -》阻塞-》更直接更简单
- 异步 -》 true -》会复杂一点

**服务器状态码status**

- 1**	信息，服务器收到请求，需要请求者继续执行操作
- 2**	成功，操作被成功接收并处理
- 3**	重定向，需要进一步的操作以完成请求
- 4**	客户端错误，请求包含语法错误或无法完成请求
- 5**	服务器错器在处理请求的过程中发生了错误

**ajax状态码readyState**

- 0 － （未初始化）还没有调用send()方法
- 1 － （载入）已调用send()方法，正在发送请求
- 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
- 3 － （交互）正在解析响应内容
- 4 － （完成）响应内容解析完成，可以在客户端调用了

#### **箭头函数**

- 是一种对函数表达式的缩写(也就是所说的赋值式函数)

- this指向，始终指向父级函数

- ()=>{}

- 箭头函数：

  ​      //   就是一个匿名函数

  ​      //   this指向上下文，就是你上一个作用于的this指向哪里this就指向哪里

  ​      //   如果只有一个形参时可以省略小括号

  ​      //   箭头函数没有 arguments 

  ​      //   如果后面是一局话的时候可以省略花括号，并且自动return

**... 运算符**

- 但凡可以循环的属性都可以使用...引出

### ES6

##### **string**

- string.includes(内容) 是否包含
- string.startswith(内容)头部包含
- string.endswith(内容) 尾部包含
- string.repeat(重复的次数) 重复
- string.padStart(长度，填充的内容) 头部补充
- string.padEnd(长度，填充的内容) 尾部补充

##### **array**

- Array.from() 返回数组

- 只要有length就可以返回数组

- Array.of(2) 创建数组

  - ```js
    bug Array(1) ==>//[]
    Array.of(1) ==> [1]
    ```

- find(function（value，index，array）{}) 

- 返回第一个符合的值   

- findIndex(function(function（value，index，array）))

- 返回第一个符合标准的下标 

- fill(填充的值，开始填充的下标，结束填充的下标)  填充

- copyWithin(开始替换的下标，拷贝的开始下标，拷贝结束的下标)

- Array.includes() 返回布尔值，判断是否存在

- **Array.reduce(function(prev,cur,index,arr),initialValue ) （常用于求和）**

  -  prev （上一次调用return回调返回的值，或者是提供的初始值（initialValue））
  -  cur  currentValue （数组中当前被处理的元素）
  -  index （当前元素在数组中的索引）
  -  array （调用 reduce 的数组）
  -  initialValue （作为第一次调用 callback 的第一个参数。）
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
  
  

**递归**

- 函数调取自身的函数。

  ```js
    let arr = [1,2,3,4,[1,2,43,[2,3,4,5,[3434,3434]]]]
    
     function fun(data){
         let arr=[]
          for (let i = 0; i < data.length; i++){
              if(Array.isArray(data[i])){
                  let arr2=arguments.callee(data[i])
                  arr=[...arr,...arr2]
              }  else{
                  arr.push(data[i])
              }
         }
         return arr
     }
     console.log(fun(arr));
  ```

  

**过滤筛选去重**

- ```js
  var arr = ['bananer', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
  ```

1. ```js
   var arr1 = Array.from(new Set(arr));
   console.log(uniqueFruits); // returns    bananer,apple,orange,watermelon,grape
   ```

1. ```js
   var arr2 = [...new Set(arr)];
   console.log(uniqueFruits2); // returns    bananer,apple,orange,watermelon,grape
   ```
   
1. ```js
   var arr1 = arr.filter(function(item,index,array){
         return  array.indexOf(item) === index
    })
    console.log(arr1);
   ```

1. ```js
   var arr1=[]
   for (let i = 0; i < arr.length; i++) {
      if(arr1.indexOf(arr[i])== -1){
             arr1.push(arr[i])
         }  
     }
   console.log(arr1);
   ```

**ajax封装**

```js
	//函数调用
		ajax({
			url:'http://api.cimns.com:8081/playlist',//请求地址
			type:'get',//请求方式
			data:{//请求参数
				cid:142//参数名：参数值
			},
			success:function(data){//成功回调
				console.log(data)
			},
			//失败回调
			error:function(err){
				console.log(err)
			}
		})
		//ajax函数封装
		function ajax(json){
			//1 创建ajax对象
			let xhr = new XMLHttpRequest
			//判断请求方式
			if(json.type == 'get'){
				//get请求，配置
				xhr.open('get',json.url+'?'+jsonparse(json.data),true)
				//发送
				xhr.send()
			}else if(json.type=='post'){
				//post请求配置
				xhr.open('post',json.url,true)
				//设置请求头
				xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
				//发送请求
				xhr.send(jsonparse(json.data))
			}
			//监听ajax状态码改变
			xhr.onreadystatechange = function(){
				//判断ajax状态码等于4
				if(xhr.readyState == 4){
					//判断服务器状态码
					if(xhr.status>=200&&xhr.status<300||xhr.status==304){
						//解析请求过来的数据
						let data = JSON.parse(xhr.responseText)
						//调取成功的回调函数
						json.success(data)
					}else{
						//调取失败的回调函数，传入失败状态码
						json.error(xhr.status)
					}
				}
			}
			//json 转化为拼接
			function jsonparse(json){
				let arr = []
				for(let i in json){
					arr.push(i+'='+json[i])
				}
				return arr.join('&')
			}
		}
```

#### 案例

- ​	延迟加载

  - 不用生成dom，dom存在，但是没有加载，一般用于图片加载，用那一部分就加载那一部分

  - 每个图片父级到顶部的距离

  - 滚动条的距离

  - 获取可视区的高度

    判断条件如果图片父级到顶部的距离小于可视区高度+滚动条的距离，就让图片显示

  - 原理：滚动条滚动的距离+屏幕的可视高>图片所在的offsetTop距离时，让图片加载

- 瀑布流

  - 生成dom，（原来的dom不存在）但是马上
  - 随机生成高度（在400之内，就用随机数乘以200并且加上200
  - 随机生成颜色（用随机数乘以255，透明度保留后一位小数，随机的数要化成整数
  - 把生成的盒子数转为数组，并且用sort排序，然后在第0个追加插入
  - 可视区的高度
  - 滚动的距离

- 页面的高度

  - 判断条件：可视区的高度+滚动的距离大于页面高度减去一个不多不少的值，然后让他不断生成，

- 滑动解锁

  - 开始坐标
  - 滑动的距离
  - 限制范围
    - 如果填充颜色宽度到头就让他return
    - 如果滑动距离小于等于0就让滑动距离等于0，如果滑动距离大于或等于最大范围，就让他等于这个最大范围

  - 判断条件：当滑动距离加上本身宽度等于这个父级的宽度，就让他验证通过，否则回到初始位置，

- 吸顶条

  - 原理：滚动条滚动的距离大于吸顶条所在的offsettop距离时，让他吸上去
  - 元素本身的offsettop
  - 滚动的距离

- 放大镜原理

  - 按比例放大：小盒子移动的位置/图片的大小-小盒子的大小=图片移动的位置/盒子的大小-图片的大小
  - 百分比，大图的宽除以小图的宽
  - 百分比，大图的高除以小图的高

- 拖拽

  - 鼠标的中心点
    - var disX = ev.clientX -oSmall.offsetLeft - oMask.offsetWidth/2;
    - var disY = ev.clientY - oSmall.offsetTop - oMask.offsetHeight/2;  

- 鼠标光辉效果

  - 中心点
  - 鼠标的位置
  - 思路
    - document加滑动事件
    - 获取鼠标X，Y轴坐标
    - 计算中心点位置
    - 计算阴影位置

  - X=中心点X坐标 - 鼠标X坐标
  - Y= 中心点Y坐标 - 鼠标Y坐标
  - box-shadow:  X Y 阴影大小 增强 颜色 内阴影

- 跟随鼠标方向

  - 获取移动的X,Y坐标
  - 获取要操作元素的left，top,width，height
  - 获取元素4个角的位置
    - 角一（offsetleft,offsettop)
    - 角二（offsetleft+offsetwidth,offsettop)
    - 角三（offsetleft+offsetwidth，offsettop+offsetheight）
  - 判断
    - 左上：X小于角一的X轴坐标，Y小于角一的Y轴坐标
    - 上：X大于角一的X轴坐标并且小于角二的X轴坐标，Y小于角一并且小于角二的Y轴坐标
    - 右上：X大于角二的X轴坐标，Y小于角一并且角二的Y轴坐标

  ###                                                     
  
  ###                                                     jq考试

1. **写出jQ的设计思想**

   - 模拟 css  方法函数化 取值赋值合体 链式操作 

2. **写出 css 的几种用法**

   - .css()         .css({})    

3. **写出有关 parent 的知识点**

   - :parent()    匹配含有子元素或者文本的元素
   - .parent()    找父级    
   - .parents()   找所有的父级，一直到HTML  ，可以写筛选条件
   - .offsetParent()  找最近有定位的父级

4. **写出常用的几种筛选方法不少于 10 个**

   - .slice()     .eq()      .first()     .last()    .has()   .filter()   .is()     .map()   .not()   .hasClass()  

5. **写出 dom 操作的方法**

   - .remove ()     .detach()          .clone()    A.replaceAll(B)       A.replaceWith(B)       子元素.appendTo(父元素)    父元素.append(子元素)     (A).insertBefore(B)        (B).before(A)

6. **写出position offset 的区别**

   - position  找最近有定位的父级
   - .offset()    寻找元素在当前页面的left和top位置

7. **写出原生 ajax 的步骤**

   1. 创建ajax对象：var xhr = new XMLHttpRequest()
   2. 配置：xhr.open(发送类型，地址，同步或异步)
   3. 发送： xhr.send()
   4. 接受  xhr.responseText

8. **写出 jq ajax 里面常用的参数及中文意思 及 dataType 里面的类型**

   -  $.ajax()
   -  格式：$.ajax({})。参数为json的形式。
   -  url    请求的地址
   -  success 成功的回调
   -  error  失败的回调
   -  contentType 请求头信息
   -  data     发送到后台的数据
   -  type 请求类型
   -  cache     是否缓存
   -  timeout 延迟
   -  async: false 是否异步
   -  dataType    返回的数据类型，XML、html、json、jsonp、script或者text

9. **写出原生 jsonp 的步骤及 jq 里面的写法**

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

10. 写运行结果     

11. **remove detach 的区别**

    - 同样是删除元素 .remove ()   事件行为不保留       detach()    再追加  事件行为保留

12. **怎么获取修改属性及他们的区别**

    - .attr()  可以获取属性  设置系统属性和自定义属性    .prop() 只能获取系统属性  一般用于属性值为 true  false 的属性

13. **绑定事件的写法 解绑**

    - .on()  off()          .bind()    .unbind()

14. **jq 里面的运动都有哪些**

    - .slideDown() 、.slideUp() 、.slideToggle()、.fadeIn() 、.fadeOut()、.fadeTo()、.stop()   
    - animate(对象,时间,缓动风格,回调函数)

15. **事件委托的写法 及好处**

    - $('ul').delegate('li','click',function(){}）

    - $('ul').on('click','li',function(){})
    - 减少事件绑定 提高性能

16. **事件绑定跟直接 click()的区别**  

    - 事件绑定可以绑定多次事件还可以绑定自定义事件，，而click只能写单次事件

17. **filter not has 的区别**

    - filter（not）是针对当前这个元素自身的。而has是包含，看这个元素里面的子孙元素。

18. **empty empty 的区别** 

    - 属性是匹配所有不包含子元素或者文本的空元素
    - 方法是    清空内容

19. **写出有关 class的知识点**''

    - .addClass() 、.removeClass()、.toggleClass()、.hasClass()

20. **写出 jq里面的 两个循环及区别** 

    - $(元素).each() 循环元素 、$.each()循环对象

21. **写出工具方法都有哪些**

    - $.type(参数)、$.trim(参数) 、$.inArray(元素，数组) 、$.proxy() 

22. **怎么把标签里面的内容清空**

    - .empty()   、''空字符串

23. .**获取可视区的宽高 文档的宽高**

    - $(window).width()  可视区的宽
    - $(document).height()  页面的高

24. **获取滚动的值**

    - .scrollTop()、. scrollLeft()  

25. **把一个类数组转成真正数组的几种方法**

    - $.makeArray()、$().toArray()         、js方法Array.from()  

26. **end() closest() 的用法**

    - .end()     回到最近的一个"破坏性"操作之前 
    - 从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素

27. **面向对象的 工厂模式 构造函数模式 原型模式的写法**

    - 工厂模式 封装函数
    - 构造函数模式       new后面调用的函数就叫构造函数 构造函数里面的 this 就是创建出来的对象 它直接可以隐式返回 不需要再写 return 返回 
    - 原型 方法写在原型的下面 属性写在构造函数里面

28. **什么是构造函数 什么是原型**

    -  new后面调用的函数就叫构造函数 构造函数里面的 this 就是创建出来的对象 它直接可以隐式返回 不需要再写 return 返回 
    -  把方法放在构造函数的原型下面

    ####                                              JQ

    - 设计思想

      - 模拟 css  方法函数化 取值赋值合体 链式操作 

    - JQ转原生js用[下标]或.get(下标)

    - HTML（）相当于原生的 innerHTML，不能解析标签 取值 会取满足条件的第一个

    - text（）相当于原生的 innertext，可以解析标签  取值 会取的是所有的,赋值的时候，赋的全部

    - this在JQ里用$(this)

    - ```js
      $(document).ready(function () { 
             console.log($('.box1').text(9999));
       })
      $(function () { //这个是简写 它可以写多次，等 dom 加载完成，性能要比 window.onload 要好
            console.log($('.box1').text(9999));
         })
      ```

    - ```js
      window.onload=function(){//就只能写一次 会覆盖上面的等所有的资源加载加载完成之后再执行 js 
                console.log(1);
            }
      ```

    - 选择器 (id,class,标签)

      - :first   获取匹配的第一个元素
      - :last   获取匹配的最后一个元素
      - :even()     匹配所有索引值为偶数的元素
      - :odd()      匹配所有索引值为奇数的元素
      - :eq()         匹配一个下标的元素
      - :gt()          匹配所有大于给定索引值的元素
      - :lt()          匹配所有小于给定索引值的元素
      - :lt():gt()       匹配小于条件，大于条件的元素，顺序不能变
      - :nth-child(even)     匹配为奇数的元素
      - :nth-child(odd)       匹配为偶数的元素
      - :first-child       匹配第一个子元素
      - :last-child        匹配最后一个子元素 
      - :only-child       如果某个元素是父元素中唯一的子元素，那将会被匹配 ，如果父元素中含有其他元素，那将不会被匹配。
      - :not()    查找非这个元素的元素
      - :empty()    匹配所有不包含子元素或者文本的空元素
      - :parent()    匹配含有子元素或者文本的元素
      - :has         匹配选择器包含子元素的元素
      - :hidden   匹配所有不可见元素
      - :visible     匹配所有的可见元素

    - 方法   

      - .slice()    截取（）里的参数，第一个值为起始下标，第二个值为结束下标的前一个
      - .eq()     匹配一个下标的元素 
      - .first()   匹配第一个元素
      - .last()   匹配最后一个元素
      - .has()   匹配选择器包含子元素的元素
      - .end()     回到最近的一个"破坏性"操作之前 
      - has和filter（not）的区别：filter（not）是针对当前这个元素自身的。而has是包含，看这个元素里面的子孙元素。
      - .children()  找儿子    不写参数找所有的儿子 ，可以写筛选条件
      - .find()   找孙子
      - .filter()   过滤 筛选满足条件的 
      - .parent()    找父级    
      - .parents()   找所有的父级，一直到HTML  ，可以写筛选条件
      - .prev() 上一个兄弟
      - .next() 下一个兄弟
      - .prevAll()  上一个所有的兄弟，可以写筛选条件
      - .nextAll()   下一个所有的兄弟  ，可以写筛选条件
      - .siblings()  找所有的兄弟 ，可以写筛选条件
      - .is()  一般用来判断                                                                                       
      - .index() 找下标 ，同级之间的
      - .val()获取设置表单里面的值，默认获取第一个里面的值
      - **.each(function(index,item){})  循环元素，第一个参数是下标，第二个参数是每一项，**
      - **$.each(person,function(index,item){}）循环对象**
      - .add() 连接
      - .addClass()  添加class
      - .removeClass()  删除class
      - .toggleClass()  切换 class
      - .hasClass()  一般用来做判断
      - .attr()  可以获取属性  设置系统属性和自定义属性
      - .prop()  只能获取系统属性  一般用于属性值为 true  false 的属性
      - .removeProp()    删除系统属性
      - .removeAttr()      删除系统属性 自定义属性
      - .closest()   从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素
      - closest和parents的主要区别是：，前者从当前元素开始匹配寻找，后者从父元素开始匹配寻找
      - .width()    宽度
      - .height()   高度
      - ..innerWidth()    width+padding
      - .innerHeight()
      - .outerWidth()    width+padding+border
      - .outerWidth(true)    width+padding+border+margin
      - .outerHeight(true)
      - .offset()    寻找元素在当前页面的left和top位置
      - .position()    寻找元素与有定位父级的left和top位置
      - $(window).width()  可视区的宽
      - $(document).height()  页面的高

    - **事件**

      - .scrollTop()     获取纵向滚动的值
      - . scrollLeft()       获取横向滚动的值
      - .on()     绑定事件可以绑定多个事件 用空格分开 
      - .off()    解绑定 不写参数 默认解绑的全部 写参数解绑的具体的事件
      - .bind()     绑定事件可以绑定多个事件 用空格分开 
      - .unbind()   解绑定 不写参数 默认解绑的全部 写参数解绑的具体的事件
      - .one()     只能执行一次的事件
      - .hover()   鼠标移入移出 ，里面是两个函数
      - .offsetParent()  找最近有定位的父级
      - .empty()    清空内容

    - **dom操作**

      - 添加元素

        - 子元素.appendTo(父元素) 往后面追加
        - 父元素.append(子元素)
        - 子元素.prependTo(父元素)   往前面追加
        - 父元素.prepend(子元素)   

      - 插入

        - .insertBefore            (A).insertBefore(B)
        - .before           (B).before(A)
        - .insertAfter             (A).insertAfter(B)
        - .after             (B).after(A)

      - 删除

        - .remove ()   返回值是删除掉的元素 再追加  事件行为不保留
        - .detach()   返回值是删除掉的元素 再追加  事件行为保留

      - 克隆

        - .clone()  不写参数不克隆事件行为    写参数克隆事件行为  true

      - 替换

        - A.replaceAll(B)  用A 替换 B
        - A.replaceWith(B)   用B替换A

      - 事件委托

        - 

        - ```js
          //通过冒泡给父级添加事件
          $('ul').delegate('li','click',function(){
               console.log($(this).html);
           })
          $('<li>3</li>').appendTo($('ul'))
              
          $('ul').undelegate();//取消事件委托
          ```

    ```js
             
              $('ul').on('click','li',function(){
                  console.log($(this).html);
              })
              $('<li>3</li>').appendTo($('ul'))
              $('ul').off();//取消事件委托
    ```

-   键值记录
  - e.wich() 需要配合键盘事件使用
  - event对象 在jquery中     在函数中传参e后 单独一个e即可代表时间对象

- 包装（包裹）对象

  - $('span').wrap($('<div>'))    给每个元素都包裹一个div标签
  - $('span').wrapAll(创建的对象)   用一个div包裹所有
  - $('span').wrapInner($('<a>'))  span里面是a a里面是内容
  - $('span').unwrap()  删除父级  但是不能删除  body 

- 动画效果

  - .show()   显示    类如:display:none;     参数为数值,没有数值参数默认为没有过渡时间

  - .hide()      隐藏     类似:  display:block    参数为数值,没有参数为默认没有过渡

  - .toggle()   显示/ 隐藏切换     显示的元素切换隐藏  隐藏的元素显示为显示  

  - .slideDown()   向下展开          参数同上

  - .slideUp()   向上卷起     参数:两个参数,第一个参数为数值,控制过渡时间,第二个参数为回调函数

  - .slideToggle()      展开/卷起切换     参数为数值,没有参数默认没有过渡时间

  - .fadeIn()      淡入         参数为数值,没有参数默认没有过渡时间

  - .fadeOut()   淡出     

  - .fadeTo()    淡入 ，第2个参数是透明度

  - .fadeToggle()  淡入/ 淡出切换

  - .animate()   动画

  - animate(对象,时间,缓动风格,回调函数)缓动风格

  - ```js
      $('.box').click(function () { 
                  //     $(this).animate({
                  //         width:300,
                  //         height:300,
                  //         fontSize:50
                  //     },1000,'linear',function () {
                  //         $('.box').animate({
                  //             left:300
                  //         }) 
                  //         console.log('运动完');
                  //      })
                  //  })  animate(对象,时间,缓动风格,回调函数)缓动风格
                  //默认是 swing(慢快慢) linear(匀速)
                  $('.box').click(function () {
                      $('.box').animate({
                          width: 300
                      }).animate({
                          height: 300
                      })
                  })
    ```

  - .stop()    停止当前运动

  - .stop(true)  停止所有的运动

  - .stop(true,true);   让当前运动立即回到目标点

  - . finish()    让所有的运动回到目标点

  - .delay()   延迟

  - 案例

- **工具**

  - var mv=$.noConflict();    解决冲突

  - $.type(参数)    检测类型

    - $.trim(参数)    去除首尾空格

    - $.inArray(元素，数组)   相当于indexOf() 如果找到 返回首次出现的下标 没找到返回-1

    - $.proxy()     改变函数里的this指向  

    - ```js
       function show(n1,n2){
          	alert(n1);
          	alert(n2);
          	alert(this);
          }
          $.proxy(show , document)	//虽然改了函数的this，但是没有调用
          $.proxy(show , document)(); //调用
          $.proxy(show , document)(3,4); //调用
          $.proxy(show , document,3,4)(); //调用
          $.proxy(show , document,3)(4); //调用
      ```

      

    - 类数组转为数组

        - $.makeArray()
        - $().toArray()
        - Array.from()      JS里转为数组

  - $.fn.extend({})  扩展JQ对象

  - $.extend()   扩展工具方法

- Jq中的方法分为两派：

  -  一派是$().css()， $().html() ，$().val()，只能给JQ对象用（jq对象方法）
  - 一派是$.type() ，$.trim()， $.inArray()，不仅可以给JQ用，也可以给原生JS用，叫做工具方法

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

  ```js
   try{
             console.log(2);//容错处理语句
         }catch{
             console.log(1);
         }
      $.ajax({
      				type: 'get',//请求方式
      				url: 'guestbook/index.php',//地址
      				dataType: 'json',//数据类型
      				data: {//进行传参，
      					m: 'index',
      					a: 'verifyUserName',
      					username: Ousername1.val()
      				},
      				success: function (data) {//成功回调
      					console.log(data);
      				}
      			})
  ```

- **Jsonp：** **（json with padding）** 跨域

  ​	1. 创建一个 script 标签 因为 script 可以解决跨域

  ​	2. src 里面写地址

  ​	3. 追加到 body 里面去

  4.  在外面声明一个回调函数 这个回调函数必须是一个全局的函数

  - 百度接口        http://suggestion.baidu.com/su?wd=

  - 淘宝接口     https://suggest.taobao.com/sug?code=utf-8&q=

  - **JQ写法**

  - ```js
     <body>
           <input type="text" id='txt'>
           <ul id='u2'>
               <li><a href="">111</a></li>
           </ul>
           <script>
               $('#txt').keyup(function (){ 
                    $.ajax({
                        type:'get',
                        url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd',
                        dataType:'jsonp',//如果是 jsonp 就写 jsonp
                        jsonp:'cb',//在一个jsonp请求中重写回调函数的名字
                        // jsonpCallback:fn, 为jsonp请求指定一个回调函数名
                        data:{
                            wd:$('#txt').val()
                        },
                        success:function(data){
                            console.log(data);
                            fn(data);
                        }
                    })
                })
               function fn (data) {
                   $('#u2').html('')
                  $.each(data.s,function (index,item) {  
                    $('#u2').css('display','block');
                    $('#u2').append(`<li><a href="http://www.baidu.com/s?wd=${item}">${item}</a></li>`)
                  })
                }
           </script>
        </body>
    ```

  - **JS写法**
    $$
    
    $$

    ```js
     <input type="text" id='txt'>
           <ul id='u2'>
               <li><a href="">111</a></li>
           </ul>
           <script>
               var txt=document.getElementById('txt');
               var u2=document.getElementById('u2');
               txt.onkeyup=function(){
                 if(this.value!=''){
                    var Oscript=document.createElement('script');
                     Oscript.src='http://suggestion.baidu.com/su?wd='+txt.value+'&cb=fn';
                     document.body.appendChild(Oscript);   
                 }else{
                     u2.style.display='none';
                 }
               }
               //1、创建一个script  2、src里面引地址  3、追加到页面中  4、在外面声明个全局的回调函数 进行对接
               function fn (data) {
                  console.log(data);
                  if(data.s.length){
                    u2.style.display='block';
                    var html='';
                    for(var i=0;i<data.s.length;i++){ 
                        html+='<li><a href="http://www.baidu.com/s?wd='+data.s[i]+'">'+data.s[i]+'</a></li>';
                        u2.innerHTML=html;
                    }
                  }else{
                      u2.style.display='none';
                  }
                }
           </script>
    ```

- **工厂模式 封装函数**

  ```js
   //工厂模式 封装函数
             function createPerson(name,age) {  
                 var obj=new Object();//原料
                 obj.name=name;//加工
                 obj.age=age;
                 obj.showName=function(){
                     console.log(this.name);
                 }
                 return obj//出厂
             }
             var p1=createPerson('王小明',12);
             console.log(p1);
             p1.showName();
             var p2=createPerson('王小五',13);
             console.log(p2);
             p2.showName();
  ```

- **构造函数模式       new后面调用的函数就叫构造函数 构造函数里面的 this 就是创建出来的对象 它直接可以隐式返回 不需要再写 return 返回 **

  ```js
    function CreatePerson(name,age) { 
                console.log(this);
                this.name=name;
                this.age=age;
                this.showName=function(){
                    console.log(this.name);
                }
             }
             var p1=new CreatePerson('王小明',12);
             p1.showName();
             var p2=new CreatePerson('王小五',30);
             p2.showName();
  ```

-  **原型 方法写在原型的下面 属性写在构造函数里面**

  ```js
   			function CretePerson(name,age) { 
                this.name=name;
                this.age=age;
             } 
             CretePerson.prototype.showName=function(){
                 console.log(this.name);
             }
             CretePerson.prototype.showJbo=function(){
                 console.log('学生');
             }
             var p1=new CretePerson('wjc',12);
             p1.showName();
             var p2=new CretePerson('cnj',13);
             p2.showName();
  ```

- **原型模式          Array.prototype.reverse=function(){}把方法放在构造函数的原型下面**

  ```js
   var arr=[1,2,3,4,5];
           var arr1=[1,2,3,4];
           var arr2=[4,5];
           // arr.push();
           // arr.pop();//原型
           Array.prototype.push=function(){}//把方法放在
           //构造函数的原型下面
           Array.prototype.pop=function(){}
           Array.prototype.reverse=function(){}
         
           //封装求和方法
           Array.prototype.sum=function(){
               var result=0;
               for(var i=0;i<this.length;i++){
                   result+=this[i];
               }
               return result; 
           }
           console.log(arr.sum());
           console.log(arr1.sum());
           console.log(arr2.sum());
           console.log(arr.sum()==arr1.sum());
  ```



##### 函数柯力化

```js
		// 普通的add函数
        function add(x, y) {
            return x + y
        }

        // 柯力化后
        function curryingAdd(x) {
            return function (y) {
                return x + y
            }
        }

        add(1, 2)  // 3
        curryingAdd(1)(2)  // 3
        //函数柯力化其实就是函数里再return个函数，就是上面这种形式，调用的时候两个括号，第一个括号的参数是第一个函数的传参，第二个括号里的参数是里面那个函数的传参
```

##### 防抖和节流

防抖：所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。需要加定时器去控制，每次触发前，再清掉定时器

节流：**所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。**节流会稀释函数的执行频率。加定时器在一定时间内触发，

