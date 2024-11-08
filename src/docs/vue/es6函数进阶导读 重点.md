#### 函数的定义方式

- 函数声明的方式 function 关键字 （命名函数） `function fn(){}`

- 函数表达式（匿名函数）`var fun = function(){}`

- 利用 new Function ('参数1','参数2','函数体')（构造函数）

  - Function 里面参数都必须是字符串的格式

  - 执行效率低，也不方便书写，因此比较少用

  - 所有函数都是 Function 的实例（对象）

  - ```js
    var f = new Function('a','b','console.log(a + b)')
    f(1,2)
    console.log(f instanceof Objact); // ture
    ```

- 函数也属于对象

#### 函数的调用方式

1. 普通函数

   - ```js
     function fn(){
     	console.log('1111');
     }
     //fn();
     fn.call(); // call() 方法也可以调用函数
     ```

2. 对象的方法

   - ```js
     var o = {
     	sayHi : function(){
     		console.log('11111');
     	}
     }
     o.sayHi();
     ```

3. 构造函数

   - ```js
     function Star() {};
     new Star();
     ```

4. 绑定事件函数

   - ```js
     btn.onclick = function() {}; // 点击了按钮就可以调用这个函数
     ```

5. 定时器函数

   - ```js
     setInterval(function(){},1000); // 这个函数是定时器自动1秒调用一次
     ```

6. 立即执行函数

   - ```js
     (function(){
     	console.log('1111')
     })()
     // 立即执行函数是自动调用
     ```

#### 函数内this指向

这些 this 的指向，是当我们调用函数的时候确定的，调用方式的不同决定了this的指向不同

一般指向我们的调用者

| **调用方式** | **this指向**                               |
| ------------ | ------------------------------------------ |
| 普通函数调用 | window                                     |
| 构造函数调用 | 实例对象，原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                             |
| 事件绑定方法 | 绑定事件对象                               |
| 定时器函数   | window                                     |
| 立即执行函数 | window                                     |

#### 改变函数内部this指向

- call() 方法 `fun.call(thisArg,arg1,arg2,...)`

  - call() 方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的this指向

  - ```js
    var o = {
    	name : 'andy'
    }
    function fn() {
    	console.log(this); // this指向window
    };
    fn.call(o) // 此时 fn 中的this 指向 对象o 
    // call 的主要作用可以实现继承
    function Father(uname,age,sex) {
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    function Son (uname,age,sex){
        Father.call(this,uname,age,sex);
    }
    ```

- apply() 方法

  - apply 方法调用一个函数，简单理解为调用函数的方式，但是它可以改变函数的this指向 `fnu.apply(thisArg,[argsArray])`

  - thisArg：在fun函数运行时指定的 this 指向

  - argArray：传递的值，必须包含在数组里面

  - **返回值就是函数的返回值，因为它就是调用函数**

  - ```js
    var o = {
    	name : 'andy'
    }
    function fn(arr) {
    	console.log(this); // this指向window
        console.log(arr); // 返回的是字符串
    };
    fn.apply(o,[1]); // 参数必须是数组
    // apply 的主要应用  比如说可以利用 apply 借助于数学内置对象求最大值
    var arr = [1,2,44,556,7];
    var max = Math.max.apply(max,arr); // 不需要改变this指向 可以写 null 但是最好写 调用者
    console.log(max)
    ```

- bind() 方法 

  - bind() 方法不会调用函数，但是能改变函数内部的 this 指向 `fun.bind(thisArg,arg1,arg2,....)`

  - thisArg：在fun函数运行时指定的 this指向

  - arg1,arg2：传递的其他参数

  - **返回由指定的this值和初始化参数改造的原函数改造的原函数拷贝**

  - ```js
    var o = {
        name: 'andt'
    }
    function fn(a,b){
        console.log(this);
        console.log(a + b);
    }
    var f = fn.bind(o,1,2);
    f();
    // 不会调用原来的函数  可以改变原来函数内部的this
    // 返回的是原函数改变this之后产生的新函数
    // 如果有的函数我们不想立即调用 又想改变函数内部的this指向 此时使用bind 
    // 例：有一个按钮，当我们点击后，就禁用这个按钮，3秒之后开启这个按钮
    btn.onclick = function (){
        this.disabled = true; // 这个this指向的是btn 这个按钮
        var that = this;
        setTimeout(function(){
            // that.disabled = false; // 定时器函数里面的this指向的是 window
            this.disabled = false; // 定时器函数里面的this指向的是 btn
        }.bind(this),3000) // 这个 this 指向的是 btn 这个对象
    }
    ```

- **call apply bind 总结**

  - 相同点 
    - 都可以改变函数内部的this指向
  - 区别点
    - call 和 apply 会调用函数，并且改变函数内部this指向
    - call 和 apply 传递的参数不一样，call 传递参数 aur1、aur2、...形式， apply 必须数组形式[arg]
    - bind 不会调用函数，可以改变函数内部 this 指向
  - 主要应用场景
    - call 经常做继承
    - apply 经常跟数组有关系，比如借助于数学对象实现数组最大值最小值
    - bind 不用调用函数，但是还想改变this指向，比如改变定时器内部的this指向

#### 严格模式 （strict mode）

严格模式在IE10以上版本的浏览器才会被支持，旧版本浏览器中会被忽略

- 消除了JavaScript 语法的一些不合理、不严谨之处，减少了一些怪异行为
- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 禁用了在ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的JavaScript做好铺垫。比如一些保留字 如：class、enum、export、import、super 不能做变量名

#### **开启严格模式**

严格模式可以应用到**整个脚本**或 **个别函数**中，因此在使用时，我们可以将严格模式分为 **为脚本开启严格模式**和 **为函数开启严格模式** 两种情况

- 为脚本开启严格模式

  - 为整个脚本文件开启严格模式，需要 **在所有语句之前放一个特定语句 ”use strict‘’；（或 ‘use strict’；）**

  - ```js
    // 为整个脚本开启严格模式
    //<script>
    //	'use strict';
    // 下面的 js 代码就会按照严格模式执行代码
    //</script>
    <script>
        (function)(){
        	'use strict';
    	}
    </script>
    
    ```

- 为某个函数开启严格模式

  - ```js
    <script>
        function fn(){
        	'use strict';
        	// 下面的代码按照严格模式
    	}
    	function fun(){
        	// 里面的代码还是按照普通模式
    	}
    </script>
    ```

#### 严格模式中的变化

- **变量规定**
  - 在正常模式中，如果有一份变量没有声明，默认是全局变量，严格模式禁止这种用法，变量必须先用 var 命令声明，然后再使用
  - 严禁删除已经声明的变量。例如： delete x；语法是错误的
- **严格模式下this指向问题**
  - 以前在全局作用域函数中的this 指向 window 对象
  - **严格模式下全局作用域函数中的this 是undefined**
  - 以前构造函数是不加 new 也可以调用，当普通函数，this 指向全局对象
  - 严格模式下，如果构造函数不加 new 调用，this会报错
  - new 实例化的构造函数指向创建的对象实例
  - 定时器 this 还是指向 window
  - 事件、对象还是指向调用者
- **函数变化**
  - 函数不能有重名的参数
  - 函数必须声明在顶层 新版本 JavaScript会引入“块级作用域”（es6 中已引入）为了与新版本接轨，不允许在非函数的代码块内声明函数

#### 高阶函数

高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出

函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用，最典型的就是作为回调函数

```js
// 高阶函数 -函数可以作为参数传递
function fn(a,b,callback){
	condole.log(a + b);
	callback && callback();
}
fn(1,2,function(){
	console.log('我是最后调用的');
})
```

#### 闭包

变量根据作用域的不同分为两种：全局变量和局部变量

- 函数的内部可以使用全局变量
- 函数外部不可以使用局部变量
- 当函数执行完毕，本作用域内的局部变量会被销毁

**闭包指有权访问另一个函数作用域中变量的函数**（闭包是一个函数）

简单理解就是，一个作用域可以访问另一个函数内部的局部变量

**闭包的主要作用：延伸了变量的作用范围**

```js
// 闭包：我们 fun 这个函数作用域 访问了另一个函数 fn 里面的局部变量 num
function fn(){
	var num = 30;
	function fun(){
		console.log(num);
	}
	fun();
}
fn();

// fn 外面的作用域可以访问fn 内部的局部变量
function fn(){
    var num = 30;
    function fun(){
        console.log(num);
    }
    return fun;
}
var f = fn();
// 类似于
// var f = function(){
//     console.log(num)
// }
```

**案例1**

```js
// 利用闭包的方式得到当前小 li 的索引号
<ul class="list">
    <li>0001</li>
    <li>0002</li>
    <li>0003</li>
    <li>0004</li>
</ul>
<script>
    var lis = document.querySelector('.list').querySelectorAll('li');
    for(var i = 0; i < lis.length; i++){
        // 利用 for 循环创建了 4个立即执行函数
        // 立即执行函数也称为小闭包 因为立即执行函数里面的任何一个函数都可以使用它的 i 这变量
        (function(i){
            lis[i].onclick = function(){
                console.log(i);
            }
        })(i)
    }
    console.log(lis);
</script>
```

**案例2**

```js
// 闭包应用 3秒钟之后，打印所有li 元素内容
<ul class="list">
    <li>0001</li>
    <li>0002</li>
    <li>0003</li>
    <li>0004</li>
</ul>
<script>
    var lis = document.querySelector('.list').querySelectorAll('li');
    for(var i = 0; i < lis.length; i++){
        (function(i){
            setTimeout(function(){
                console.log(lis[i].innerHTML);
            })
        })(i)
    }
```

**案例3**

```js
// 闭包应用 -计算打车价格
// 打车起步价13（3公里），之后每多一公里增加5 块钱，用户输入公里数就可以计算打车价格
// 如果有拥堵情况，总价格多收取10块钱拥堵费

(function(){
    var start = 13; // 起步价
    var total = 0; // 总价
    return {
        // 正常的总价
        price : function(n) {
            if(n <= 3){
                total = start;
            } else {
                total = start + (n - 3) * 5;
            }
            return total

        },
        yd : function(flag) {
            flag ? total + 10 : total;
        } // 拥堵之后的费用
	}
})()
car.price(5);
```

**思考题1**

```js
var name = 'the window';
var objact = {
    name : 'my obj',
    getNameFunc : function(){
        return function(){
            return this.name;
        }
    }
}
console.log(objact.getNameFunc()()); // the window
// 没有产生闭包 没有访问局部变量
// 类似于
// var f = objact.getNameFunc();
// var f = function() {
//     return this.name; // this 指向window
// }
// f(); // the window
```

**思考题2**

```js
var name = 'the window';
var objact = {
    name : 'my obj',
    getNameFunc : function(){
    	var that = this;
        return function(){
            return that.name;
        }
    }
}
console.log(objact.getNameFunc()()); // the window
// 类似于
// var f = objact.getNameFunc();
// var f = function() {
//     return that.name; // this 指向objact objact调用了getNameFunc函数
// }
// f(); // my obj
```

