#### vue基础

- mvvm类型  module view view-module
  
- 渐进式框架
  
  - 需要什么就引入什么
  
- 安装

  - cnpm i vue 

- 开发

  1.  直接引入
  2.   环境开发

- 指令符

  - v-text ： innerText 输出（需要赋值）

  - v-html ： innerHTML输出（需要赋值）

  - v-pre ：跳出渲染  

  - v-cloak ：在绑定元素渲染完成之后移除

  - v-once ：只渲染一次

  - v-on ：事件绑定 ，语法糖@，可以用@符代替、参数  event

    - `.stop` - 调用 `event.stopPropagation()`。

    - `.prevent` - 调用 `event.preventDefault()`。

    - `.capture` - 添加事件侦听器时使用 capture 模式。

    - `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。

    - `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。

    - `.native` - 监听组件根元素的原生事件。

    - `.once` - 只触发一次回调。

    - `.left` - (2.2.0) 只当点击鼠标左键时触发。

    - `.right` - (2.2.0) 只当点击鼠标右键时触发。

    - `.middle` - (2.2.0) 只当点击鼠标中键时触发。

    - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

    - ```html
      <!-- 方法处理器 -->
      <button v-on:click="doThis"></button>
      
      <!-- 动态事件 (2.6.0+) -->
      <button v-on:[event]="doThis"></button>
      
      <!-- 内联语句 -->
      <button v-on:click="doThat('hello', $event)"></button>
      
      <!-- 缩写 -->
      <button @click="doThis"></button>
      
      <!-- 动态事件缩写 (2.6.0+) -->
      <button @[event]="doThis"></button>
      
      <!-- 停止冒泡 -->
      <button @click.stop="doThis"></button>
      
      <!-- 阻止默认行为 -->
      <button @click.prevent="doThis"></button>
      
      <!-- 阻止默认行为，没有表达式 -->
      <form @submit.prevent></form>
      
      <!--  串联修饰符 -->
      <button @click.stop.prevent="doThis"></button>
      
      <!-- 键修饰符，键别名 -->
      <input @keyup.enter="onEnter">
      
      <!-- 键修饰符，键代码 -->
      <input @keyup.13="onEnter">
      
      <!-- 点击回调只会触发一次 -->
      <button v-on:click.once="doThis"></button>
      
      <!-- 对象语法 (2.4.0+) -->
      <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
      在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：
      
      <my-component @my-event="handleThis"></my-component>
      
      <!-- 内联语句 -->
      <my-component @my-event="handleThis(123, $event)"></my-component>
      
      <!-- 组件中的原生事件 -->
      <my-component @click.native="onClick"></my-component>
      ```

  -  v-model  ：双向绑定 不能文件表单file使用,随表单控件类型不同而不同

  - v-show： 显示隐藏 css操作 没有缓存 适合频繁的切换

  - v-if ：条件判断 dom操作 是有缓存的 适合偶尔的切换

  - v-else

  - v-else-if

  - v-for 循环

    -  :key=""代表唯一值

    -  写的好处  为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素 

    - 字符串、数字、数组、对象json

      ```html
       <div v-for="(i,$index) in num">
                {{i}}=>{{$index}}
        </div>
        <div v-for="(i,$index) in 'asfashfashf'">
               {{i}}=>{{$index}}
        </div>
        <div v-for="(i,$index) in [1,2,3,4,5]">
               {{i}}=>{{$index}}
        </div>
        <div v-for="(i,$key,$index) in json">
                {{i}}==>{{$key}}-{{$index}}
      </div>
      ```

  - v-bind：属性绑定

    - ```html
      <!-- 绑定一个 attribute -->
      <img v-bind:src="imageSrc">
      
      <!-- 动态 attribute 名 (2.6.0+) -->
      <button v-bind:[key]="value"></button>
      
      <!-- 缩写 -->
      <img :src="imageSrc">
      
      <!-- 动态 attribute 名缩写 (2.6.0+) -->
      <button :[key]="value"></button>
      
      <!-- 内联字符串拼接 -->
      <img :src="'/path/to/images/' + fileName">
      
      <!-- class 绑定 -->
      <div :class="{ red: isRed }"></div>
      <div :class="[classA, classB]"></div>
      <div :class="[classA, { classB: isB, classC: isC }]">
      
      <!-- style 绑定 -->
      <div :style="{ fontSize: size + 'px' }"></div>
      <div :style="[styleObjectA, styleObjectB]"></div>
      
      <!-- 绑定一个全是 attribute 的对象 -->
      <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
      
      <!-- 通过 prop 修饰符绑定 DOM attribute -->
      <div v-bind:text-content.prop="text"></div>
      
      <!-- prop 绑定。“prop”必须在 my-component 中声明。-->
      <my-component :prop="someThing"></my-component>
      
      <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
      <child-component v-bind="$props"></child-component>
      
      <!-- XLink -->
      ```

- 数据更新视图不更新
  - 数组
    1. 通过下标改数值
       1. this.arr.splice(1,1,'hello')
       2. this.$set(this.arr,1,'hello')
    2. 不能通过length改变长度
       1.  解决 slice截取
  - 对象
    - 不能动态添加key值
    -  this.$set(this.json,'c','hasdha')
  
- watch

  - 监听属性
  
  - watch监听的是数据，可以监听单个数据， update监听的是视图不监听数据，监听的全部
  
  - ```js
     watch:{
        index(a,b){
          consolo.log(a,b)//a是新值，b是旧值
        } 
    }
    ```
  
- this.$nextTick 渲染完成之后的回调
  - 可以写在任何地方
  
  - 始终在渲染后，即使放在其他地方也会延迟到渲染后这个时间段的时候执行
  
  - ```js
    this.$nextTick(function () {
             console.log(this.$refs);
      })
    ```
  
- vue的请求数据
  - 安装vue-resource
  - get
    
    - this.$http.get(url,{params:{user:'',pass:''}}).then((data)=>{},(error)=>{})
  - post
    
    - this.$http.post(url,{user:'',pass:''},{emulateJSON:true}).then((data)=>{},(error)=>{})
  -  jsonp
    
    - this.$http.jsonp(url,{params:{user'',pass:''},jsonpCallback:callback}).then((data)=>{},(error)=>{})
  - promise （简化异步操作）
    		- promise 取同步和异步的优点进行请求（promise是一个方法，不是ajax请求）
    - 异步操作让代码变得更加复杂了
    - 同步比较简单（容易出现阻塞）
     - Promise.all()  多个请求，全部成功执行成功回调，如果说有一个失败，执行失败回调
       - Promise.race()  多个请求 一个成功就算成功。全部失败才算失败
  
- computed:{}计算属性，里面的函数必须写return返回值,调用的时候直接写函数名就可以，可以直接输出到视图 可以被watch进行侦听，可以拿到上个数据节点，有缓存

  - ```html
    <body>
    <div id="box">
           <div v-for="i in type" :key="i.type">
                <h4>{{i.type}}</h4>
                <div v-for="a in arr" v-if="i.type==a.type" :key="a.id">
                    {{a.title}}
                    |{{a.j}}
                    |数量<button @click="a.s++">+</button>{{a.s}}<button @click="a.s--">-</button>
                    |小计 {{a.j*a.s}}
                </div>
                <div>
                    合计：{{i.num}}
                </div>
           </div>
        </div>
    </body>
    <script src="./vue.js"></script>
    <script>
        new Vue({
            el:"#box",
            data:{
                arr:[
                    {id:0,title:'苹果',type:'水果',j:5,s:3},
                    {id:1,title:'三星手机',type:'电子产品',j:5999,s:1},
                    {id:2,title:'衣柜',type:'家具',j:2999,s:2},
                    {id:3,title:'华为手机',type:'电子产品',j:6999,s:2},
                    {id:4,title:'车厘子',type:'水果',j:109,s:9},
                    {id:5,title:'沙雕大衣',type:'服饰',j:19999,s:4},
                    {id:6,title:'大裤衩子',type:'服饰',j:9.9,s:3},
                    {id:7,title:'奥拓',type:'交通工具',j:8000,s:1},
                    {id:8,title:'法拉利',type:'玩具',j:1999,s:2},
                ]
            },
            computed:{
                type(){
                    let arr = []
                    for(let i=0;i<this.arr.length;i++){
                        if(arr.indexOf(this.arr[i].type)==-1){
                            arr.push(this.arr[i].type)
                        }
                    }
                    let arr2 = []
                    for(let i=0;i<arr.length;i++){
                        let num = 0
                        for(let a=0;a<this.arr.length;a++){
                            if(arr[i]==this.arr[a].type){
                                num+=this.arr[a].j*this.arr[a].s
                            }
                        }
                        arr2.push({type:arr[i],num:num})
                    }
                    return arr2
                }
            }
        })
    </script>
    ```

**生命周期**

- 创建 create
  - 前 beforeCreate
  - 后 created
- 渲染 mount
  -  前 beforeMount
  - 后  mounted
- 视图更新 update
  - 前 beforeUpdate
  - 后  updated
- 销毁 destroy
  - 前 beforeDestroy
  -  后 destroyed

###### 数组去重原理

- 准备一个空数组，进行循环需要去重的数组，在进行判断，如果没有则放到空数组中，如果有则放回原数组

  ```js
  let arr = []
  for(let i=0;i<this.arr.length;i++){
      if(arr.indexOf(this.arr[i].type)==-1){
          arr.push(this.arr[i].type)
      }
  }
  ```

###### node

- 这么检测node
  - 调出终端  输入 node -v可以
  - 可以作为前台的开发环境、还可以写后台、本身就是js的语法
- **创建项目**
  - 进入文件夹，在终端执行  mkdir app   创建一个app文件夹，
  - 进入刚创建的app文件夹目录下，执行  npm init  初始化，就会生成一个package.json
  - 在package.json里把命令符改为start  : node app
  - 执行 cnpm i express -- save  装入插件
  - 在app文件夹里创建两个文件
    - public项目文件
      - html、js、css、img
    - routes路由文件
      - 子路由

两种开发模式

- 交互式   不提倡
  - 在终端中输入node  然后就可以在里面写东西了
  - 退出交互模式 ctrl+c 按两次
- 文件启动
  - 文件启动格式一定会有文件
  - 在文件中写代码  在终端中执行node 文件名 可以查看结果
  - 每次都要写 node  把package中的"test": "echo \"Error: no test specified\" && exit 1"  改为  "start": "node 文件名" 然后在终端中执行npm start  指令中没有这个指令需要加扩展  npm run 指令

node以模块化的形式管理代码

- __dirname 文件夹名字

- __filename, 文件名字

- exports, 单个暴露

  - ```js
    //a.js
    var a = 23
    exports.a = a
    //app.js
    var b = require('a.js')
    console.log(b);
    ```

- require, 引入

  - 系统模块  node官方提供的
    - require('name')
  - 第三方模块 npm 下载的
    - require('name')
  - 自定义模块
    - require('./name')

- module

  -   module.exports 暴露对象
  -   可以暴露多个东西
  -   module.exports = login//变量名4
  -   引入的是什么暴露的就是什么 

- 输入 npm statr 会出现报错

  - ```js
    Error: Cannot find module 'a.js'
    ```

- 项目

  ```js
  const express = require('express')//引入插件
  const loginrouter = require('./routes/login')//引入文件
  const usersrouter = require('./routes/users')//引入文件
  const app = express()//建立服务器
  
  app.use(express.urlencoded({}))//中间件
  
  app.use('/login',loginrouter)//子路由
  app.use('/users',usersrouter)//子路由
  app.get('/getme',(req,res)=>{//get发送方式
      res.setHeader('Access-Control-Allow-Origin','*')//解决跨域，设置请求头
      let json = req.query
      res.send('ok')
  })
  app.post('/getme',(req,res)=>{//post发送方式
      res.setHeader('Access-Control-Allow-Origin','*')//解决跨域，设置请求头
      let json = req.body
      res.send('ok')
  })
  app.use(express.static('./public'))//静态资源加载
  app.listen(8000,function(){//设置端口
      console.log('启动了')
  })
  ```

###### fs

- **文档**

  -  写文档/覆盖/替换/修改
    -  异步  fs.writeFile('名字','内容','编码',(err)=>{})
    -  同步  fs.writeFileSync('名字','内容','编码')
  - 读取
    -   fs.readFile('名字','编码',(err,data)=>{})
    - var data = fs.readFileSync('名字','编码')
  - 重命名
    -  fs.rename('原来的名字','新的名字',(err)=>{})
    -   fs.renameSync('原来的名字','新的名字')
  -  追加
    -  fs.appendFile('名字','内容','编码',(err)=>{})
    -  fs.appendFileSync('名字','内容','编码')
  - 删除
    -  fs.unlink('名字',(err)=>{})
    -  fs.unlinkSync('名字')

- **文件夹 dir**

  -  创建

    -   fs.mkdir(名字,(err)=>{})
    -   fs.mkdirSync(名字)

  -  读取

    -  fs.readdir(名字,(err,files)=>{})
    - var files = fs.readdirSync(名字)

  -  重命名

    -   fs.rename('原来的名字','新的名字',(err)=>{})
    -  fs.renameSync('原来的名字','新的名字')

  - 删除

    -    fs.rmdir(名字,(err)=>{})
    -   fs.rmdirSync(名字)
    - 注意！！！！
      -   如果文件夹里面有东西的时候，不能直接删除文件夹
      -   解决 ：先移除文件夹里面的东西，然后再删除文件夹
      - 循环，声明个变量，循环的每一项加上路径等于这个变量，就OK了            
    - <img src="A:\笔记\fs.png" style="zoom:60%;" /> 
  
- 异步的写法
  
    ```js
    fs.rename('轩轩','轩轩1',(err)=>{
        if(err){
            console.log('none');
        }
        console.log('ok');
    })
    ```

- 文件上传

  - 插件安装

    -  cnpm i multer -S

    ```html
      <div id="box">
            <div class="img">
                <img :src="imgupst.img" >
                <input type="file" class="file" accept="/img/*" @change="imgup">
            </div>
        </div>
     <script >
     new Vue({
       el: '#box',
       data: {
         imgupst:{
             img:"https://tse2-mm.cn.bing.net/th/id/OIP.G2Y8Aq-ovlEHj2zFXjzplgHaNK?pid=Api&rs=1"
          },
        },
        methods: { 
            imgup(){
                    let file=this.$refs.file.files[0]//获取上传的文件
                    let fd=new FormData //创建一个文件对象
                    fd.append('img',file)  //追加到这个文件对象里，括号里第一个值是表头名，可以随意取名，第二个值是要上传的文件
                    this.$http.post('/files/img',fd,{ //文件上传只能是post形式
                     headers: { 'Content-Type':'multipart/form-data'}  //请求头
                    }).then((data)=>{
                       this.imgup.img=data.data  //从后台拿到的数据赋值给这个对象
                    })
            } 
         },
    })
     </script>
     <script >
    	const express=require('express') //引入express
    	const fs=require('fs')   //引入fs
    	const path=require('path')  //引入path
    	const multer=require('multer')  // 引入multer
    	const files=express.Router()   //配置路由
    
    
        let loginuser='./public/img'   //引入路径
        files.use(multer({dest:loginuser}).any())  //中间件，dest是自动命名，放在一个文件里面，any是接受所有的上传文件
        files.post('/img',(req,res)=>{
            let files=req.files[0] 拿到前台发送的文件
    
            let oldname=files.filename  原来的名字    原来的名字是：data返回的文件名叫files.filename
            let newname=oldname +path.parse(files.originalname).ext  解析原来的名字并区分后缀
            fs.renameSync('./public/img/'+oldname,'./public/img/'+newname)  修改名字
            res.send('/img/'+newname) 后台的地址返回给前台 '/img/' +newname 文件的静态路径
    
        })
    </script>
    ```


#### 数据库

- **数据类型**

  - 数值
    - int
    - bigint
  - 时间
    -  datatime
    -   timestamp    

  - 字符串
    -   varchar
    -   longtext

- **sql 语句**

  - 增 insert 
    -  insert into 表名(key1,key2,key3...) values(v1,v2,v3..)
    -  insert into login(user,pass,names,img) values(1,2,3,4)
  -  删 delete
    - delete from 表名 where 条件
    - delete from login where id=1
  -  改 update
    -  update 表名 set key1=v1,key2=v2,... where 条件
    -  update login set pass='cccc',names='hhhh',img='ccc.jpg' where id=2 and user='lee2'
  - 查 select
    -  select 返回数据范围 from 表名 where 条件
    -  select * from login 
    - select id,user,names,img from login
    -  select * from login where id=2 
    - select * from login where user like '%2%' 
    - select * from login limit 开始的下标,截取的数量
    -  select * from login limit 0,2  
    - select * from login limit 4,2 
  - 单词
    - 条件 where、或者 or、并且 and 、截取 limit 、模糊 like

- **数据池**

```js
数据池
let pool=mysql.createPool({
    hoset:'127.0.0.1',
    user:'root',
    password:'root',
    database:'2004',
    port:'3306'
})
```

- **语法**

```js
login.post('/up',function(req,res){
    let json=req.body

    pool.getConnection((err,connection)=>{ //与数据库建立连接
        if(err){
            console.log('connection:::'+err);
            return
        }
        //成功回调
        connection.query('select user from user where user=?',[json.user],(err,data1)=>{
            if(err){
                console.log('mysql::'+err);
                return
            }
            if(data1.length==0){
                connection.query('insert into user (user,pass,title,img,tel,email,shoptype) values(?,?,?,?,?,?,?)',[
                    json.user,json.pass,'xxx','xxx.jpg','xxx','xxx','xxx'
                ],(err,data2)=>{
                    if(err){
                        console.log('mysql::'+err);
                        return
                    }
                    connection.query('select * from user where user=?',[json.user],(err,data3)=>{
                        if(err){
                            console.log('mysql::'+err);
                            return
                        }
                        connection.release()
                        res.send({type:0,data:data3})
                    })
                })
            }else{
                connection.release()
                res.send({type:1,data:[]})
            }
        })
    })
})
```







