#### git指令符

- 创建管理    git init
- 加入版本管理    git add 文件名   git add .   （选中当前文件的所有文件）
- 添加到版本库        git commit  -m ‘备注
- 查看修改过的     git status
- 添加到远程仓库      git push  地址 分支名
- 在本地声明一个远程地址的名字     git  remote add   名字  地址
- 克隆远程   git clone 地址
- 远程更新本地     git pull 地址 分支名
- 版本日志     git log  --pretty-oneline
-  切换版本      git reset --hard HEAD
- 痕迹    git reflog
- 查看分支     git branch
- 创建分支    git branch 名字
- 切换分支     git checkout  分支名字
- 合并分支      git merge 分支名字
- 配置 账号密码公钥  push 需要用 sshssh-keygen -t rsa -c  邮箱地址

#### 自定义指令 directive 

```js
<div v-自定义的名字></div>
// 如果自定义名字中有大写 abcD  v-abc-d

<script>
    Vue.directive('自定义名字',function(绑定的dom元素，参数配置，最新的虚拟dom树，上一个节点的虚拟dom树){
        //函数定义形式，比较简单
    })

	全局
    Vue.directive('自定义名字',{
        //生命周期形式，思路更清晰一点
        bind(绑定的dom元素，参数配置，最新的虚拟dom树，上一个节点的虚拟dom树){}，//初始化
        inserted(绑定的dom元素，参数配置，最新的虚拟dom树，上一个节点的虚拟dom树){}//插入之后
        update(...){},//更新前
        componentUpdated(...){},//更新后
        unbind(...){}//移除
    })

    局部
	new Vue({
        el: '#box',
        data: {},
        methods: {}
        directives: {
              name: {
                inserted: function () {}
              }
        }
    })
</script>
```



#### 过滤器 filter

过滤器就是把原来的数据加工一下变成想要的

{{输出  |  过滤器的名称}}

```js
 局部
    new Vue({
        ...
        filters:{
            name(过滤的数值,参数1,参数2,...){
                retrun data
            }
        }
    })
全局
    Vue.filter(name,function(过滤的数值,参数1,参数2,...){
        retrun data
    })

```



```js

// 内置过滤器
{{msg | capitalize}} // 首字母大写
{{msg | uppercase}} // 所有的英文字母变大写
{{msg | lowercase}} // 所有的英文字母变小写
{{msg | currency}} // 变成货币形式的输出

<ul v-for='i in arr'>
    <li>{{i}}{{i | pluralize}}</li>
</ul>
{{msgs | pluralize '呵呵' '哈哈'}} // 英文复数 + s 定向过滤 不常用

<input type='' v-model='money'>
{{money | currency}} // 默认$
{{money | currency '￥' '3'}} // 第二个参数可更改默认符号 第三个参数是小数点后几位
// 传参   过滤器名 "参数一" "参数二" "参数三"


<input type='button' value='点击' @click='add | debounce '5000'' id='ipt'>
debounce // 做等待处理 默认是300ms 也可以自己去处理时间 传参

limitBy // 截取 第一个参数 截取几个 第二个参数 从第几个开始
filterBy // 给出关键字 过滤掉没有关键字的 
orderBy // 参数1 或 -1 用于升序降序

new Vue({
    el:'body',
    data:{
        msg:'abcd',
        money:'',
        msgs:'1',
        arr:[1,2,3]
        
    },
    methods：{
        add(){
            ipt.style.display='none'
        }
	}
})

// 自定义过滤器
Vue.filter('过滤器的名字'，function(val){// 第一个值是过滤的数据 参数1,参数2,...
    // 自定义过滤器必须有 return
    return 值（过滤出来最后的值）
})

Vue.filter('过滤器的名字'，{
	read(oldvalue){},
    write(newvalue){}
})
```

#### 自定义组件 component

- ```js
  声明
      全局
      Vue.component('name',{
          template:'',
          data(){
              return{
                  a:12
              }
          }
      })
      局部
      new Vue({
          el:''
          ...
          components:{
              name:{
                  template:'',
                  data(){
                      return {
  
                      }
                  }
              }
          }
      })
  ```

**组件输出**

- ```js
  <component is="lee"></component>
  <lee></lee>
  ```

**插槽   slot**

- ```html
  <div></div>
  <slot></slot>
  <div slot="a"></div>
  <solt name="a"></slot>
  
  例：
  <div id="box">
      <lee style="color: red;">
          <div slot="a">
              {{str}}
          </div>
          <div slot="b">
              vue
          </div>
      </lee>
  </div>
  
  <template id="lee">
     <div>
         <cc></cc>
          <slot name="a"></slot>
          <div @click="btn">
              我点击了{{num}}次
          </div>
          <slot name="b"></slot>
     </div>
  </template>
  ```

#### 组件传值

- https://note.youdao.com/s/5vP46EPC 尚硅谷vue2笔记

- 父级到子级  props

  - ```js
    <body>
        <div id="box">
            {{num}}:父级  <button @click='num++'>++</button>
            <lee :num='num'></lee>
        </div>
        <template id="lee">
            <div>
                子级：{{num}} <button @click='num++'>++</button>
    		</div>
        </template>
    </body>
    <script src="./vue.js"></script>
    <script>
        Vue.component('lee',{
            template:'#lee',
            props:['num'],
            data(){
                return{
                    num : this.num
                }
            },
            methods:{
                btn(){
                    this.num2++;
                }
            },
            watch:{
                num(a,b){
                    this.num2 = a
                }
            }
        })
    
        new Vue({
            el : '#box',
            data:{
                num:0,
            },
            methods:{}
        })
    ```

    

- 子级到父级

  - 自定义事件 `this.$emit('name',data)`

  - 调取父级函数进行回调

  - ```js
    <script>
        Vue.component('lee',{
            template:'#lee',
            props:['num','fun1'],
            data(){
                return{
                    num2 : this.num
                }
            },
            methods:{
                btn(){
                    this.num2++;
                    this.$emit('btn1',this.num2) //1、自定义事件
                    this.fun1(this.num2) // 2、调取父级函数进行回调
                }
            },
            watch:{
                num(a,b){
                    this.num2 = a
                }
            }
        })
        new Vue({
            el : '#box',
            data:{
                num:0,
            },
            methods:{
                fun(num){
                    this.num = num
                },
                fun1(str){
                    this.num = str
                }
            }
        })
    ```

    

- 兄弟级别

  - bus 

  - ```js
    <script>
        let bus = new Vue() // 全局创建bus实例
        Vue.component('lee',{
            template:'#lee',
            props:['num'],
            data(){
                return{
                    num2 : this.num
                }
            },
            methods:{
                btn(){
                    this.num2++;
                    bus.$emit('a',this.num2)
                }
            },
            watch:{
                num(a,b){
                    this.num2 = a
                }
            }
        })
    
        Vue.component('lee2',{
            template:'#lee2',
            data(){
                return{
                    num:0,
                }
            }, 
            mounted(){
                bus.$on('a',(data)=>{
                    this.num = data
                })
            }
        })
    
        new Vue({
            el : '#box',
            data:{
                num:0,
            },
            methods:{
                fun(num){
                    this.num = num
                }
            }
        })
    ```



#### 动态组件

- ```html
  <component :is=""></component>
  ```

#### 组件缓存 

- ```js
  <body>
      <div id="box">
          <button @click='type="lee"'>lee</button>
          <button @click='type="lee2"'>lee2</button>
          {{type}}
          <keep-alive>//组件缓存
              <lee v-if='type=="lee"'></lee>
              <lee2 v-if='type=="lee2"'></lee2>
          </keep-alive>
      </div>
  </body>
  <script src="./vue.js"></script>
  <script>
      Vue.component('lee', {
          template: `<div>hello lee</div>`,
          data() {
              return {}
          },
          activated(){
              console.log('组件激活');
          },
          deactivated(){
              console.log('组件停用');
          }
      })
      Vue.component('lee2', {
          template: `<div>hello lee2</div>`,
          data() {
              return {}
          },
      })
      new Vue({
          el: '#box',
          data: {
              type: 'lee'
          },
          methods: {},
      })
  </script>
  
  ```



#### 递归组件

- 自己调用自身

- 案例：

  - ```js
    <body>
        <div id="box">
            <lee :arr="arr"></lee>
        </div>
        <template id="lee">
            <div>
               <div v-for="(i,$index) in arr">
                    <div>
                        {{i.t}}
                        <button v-if="i.c" @click="index=$index">展开</button>
                    </div> 
                    <div style="padding-left: 20px;" v-show="index==$index">
                        <lee :arr="i.c"></lee>
                    </div>
               </div>
            </div>
        </template>
    </body>
    <script src="./vue.js"></script>
    <script>
        Vue.component('lee',{
            template:'#lee',
            props:['arr'],
            data() {
                return {
                    index:0
                }
            },
        })
        new Vue({
            el:"#box",
            data:{
                arr:[
                    {t:'河南省',c:[
                        {t:'郑州市',c:[
                            {t:'荥阳市'},
                            {t:'新密市'}
                        ]},
                        {
                        t:'新乡市',c:[
                            {t:'新乡县'},
                            {t:'平原新区'}
                        ]
                        }
                    ]},
                    {t:'河北省',c:[
                        {t:'邯郸市',c:[
                            {t:'大名县'},
                            {t:'魏县'}
                        ]},
                        {
                        t:'唐山市',c:[
                            {t:'滦州'}
                        ]
                        }
                    ]}
                ]
            }
        })
    </script>
    ```

    

#### transition 动画组件

预期：`v-if`  `v-show`   `动态组件`  `改变根节点`

class：隐藏到显示 :`v-enter`  `v-enter-active`  `v-active-to` 

​			显示到隐藏： `v-leave`  `v-leave-active`  `v-leave-to`

​            分别是初始状态、过渡状态、结束状态

```js
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .nav{
        width: 100%;
        height: 50px;
        background-color:#000;
        color: #fff;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #fff;
        position: relative;
    }
    body{
        overflow-x: hidden;
    }
    .navlist{
        background-color:#000;
        position: absolute;
        width: 100%;
        top: 51px;
    }
    [v-cloak]{
        display: none;
    }
    .lee-enter,.lee-leave-to{
        top: 300px;
        opacity: 0;
    }
    .lee-enter-active,.lee-leave-active{
        transition: all .5s;
    }
    .lee-enter-to,.lee-leave{
        top: 51px;
        opacity: 1;
    }
    .lee2-enter{
        left: 100%;
    }
    .lee2-enter-active,.lee2-leave-active{
        transition: all .3s;
    }
    .lee2-enter-to,.lee2-leave{
        left: 0;
    }
    .lee2-leave-to{
        left: -100%;
    }
    .lee3-enter{
        left: -100%;
    }
    .lee3-enter-active,.lee3-leave-active{
        transition: all .3s;
    }
    .lee3-enter-to,.lee3-leave{
        left: 0;
    }
    .lee3-leave-to{
        left: 100%;
    }
    .navlist>div{
        position: relative;
        border-bottom: 1px solid #fff;
    }
    .navlist span{
        position: absolute;
        top: 0px;
        right: 20px;
    }
</style>
</head>
<body>
    <div id="box" v-cloak>   
        <div class="nav">
            <div class="title" @click="navbtn">导航</div>
            <transition :name="transtion1">
                <div class="navlist" v-show="type">
                    <div v-for="i in nav">
                        {{i.title}}
                        <span v-if="i.children.length" @click="childbtn(i.children)"> > </span>
                    </div>
                </div>  
            </transition>
            <transition :name="transtion2">
                <div class="navlist" v-show="type2">
                    <div @click="topnav">返回上一级</div>
                    <div v-for="i in navchild">
                        {{i.title}}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</body>
    <script src="./vue.js"></script>
    <script>
        new Vue({
            el:"#box",
            data:{
                type:false,
                type2:false,
                transtion1:'lee',
                transtion2:'lee2',
                nav:[
                    {title:'首页',children:[]},
                    {title:'关于',children:[
                        {title:'关于我们',children:[]},
                        {title:'关于产品',children:[]},
                        {title:'关于产权',children:[]},
                    ]},
                    {title:'产品',children:[
                        {title:'最新产品',children:[]},
                        {title:'热门产品',children:[]},
                    ]},
                    {title:'联系我们',children:[]},
                    {title:'产品',children:[
                        {title:'最新产品',children:[]},
                        {title:'热门产品',children:[]},
                    ]}
                ],
                navchild:''
            },
            methods: {
                navbtn(){
                    this.transtion1 = 'lee'
                    this.transtion2 = 'lee'
                    if(this.type2 == true){
                        this.type2 = false
                    }else{
                        this.type = !this.type
                    }
                    
                },
                childbtn(arr){
                    this.transtion1 = 'lee2'
                    this.transtion2 = 'lee2'
                    this.type = false
                    this.type2 = true
                    this.navchild = arr
                },
                topnav(){
                    this.transtion1 = 'lee3'
                    this.transtion2 = 'lee3'
                    this.type = true
                    this.type2 = false
                }
            },
        })
    </script>
```

##### 路由

​	实现原理：实现不刷新但是更新页面的效果

- vue-router

  - router->单页面应用->spa

  - 理解

    - 适合用于构建单页面应用，vue-router是基于路由和组件的；路由用于设定访问路径，将路径和组件映射起来；在vue-router的单页面应用中，页面的路径的改变就是组件的切换；

  - 下载

    - cnpm i vue-router

  - 引入

    - 先引入vue基本语法：vue.js ，	再引入vue-router.js

  - <router-link to="/">xxx</router-link> 默认渲染为一个a标签 

  - <router-view></router-view>视图暴露
  
  - 使用
  
  1. 有模板
    2. 需要配置routes
  3. 创建路由实例对象
    4. 挂载到vue实例对象
  
    代码片段
  
    ```
    
    <body>
        <div id="box">
            <div>
                <router-link to="/"> <button>小王</button></router-link>
                <router-link to="/wb"> <button>小汪</button></router-link>
            </div>
            <hr>
            <div>
                <router-view></router-view>
            </div>
        </div>
        <template id="wzx">
            <div>小王</div> 
        </template>
        <template id="wb">
            <div>小汪</div>
        </template>
    </body>
    <script src="./vue.js"></script>
    <script src="./vue-router.js"></script>
    <script>
        // 1
        let wzx={
            template:"#wzx"
        }
        let wb={
            template:'#wb'
        }
        // 2
        let routes=[  
            {path:'/',name:'wzx',component:wzx},
            {path:'/wb',name:'wb',component:wb},
        ]
        // 3
        let router=new VueRouter({
            routes,
        })
        // 4
        new Vue({
            el:'#box',
            router,
      })
    </script>
    </html>
    ```
  
- 动态路由

  - {path:'/no1/:id/:name',component:xxx} /后面跟  ：

  - <router-link to="/no1/12/08"><router-link>

  - 获取参数

    $route.params.id

    放在辅助组件中会报错，需要$route跟key值，不会报错

- 二级路由

   {path:'/',name:'wzx',component:wxz,children:[  ]},需要后面跟children数组的形式

##### vue-cli

- 版本号 cnpm i vue-cli -g  //2X          cnpm i @vue/cli -g  //3

- npm install -g @vue/cli-service-global    快速原型开发，可安装或不可安装，没多大卵用

- 步骤

  1. cnpm i @vue/cli -g 

  2. 创建一个app文件 vue create app

     - 默认 default
     -  自定义  linter  /  Formatter  、  ESLint严格模式 回车 、 默认 Lint on  save  、  In package.json  回车完成

       创建完成以后会进行git托管

  3. cd app 进入到文件夹

  4. 

  5. npm run serve  执行指令

- 文件

  - gitignore git   作为一个限制

  - node_modules 插件

  - public  公共资源  index是首页

  - src 引入地址 开发项目这个是唯一需要改的

  - babel es6转向es5

  - package-lock 、package     下载完插件的一个配置

  - README   和开源网站有关系

  -  src 
    assets 静态文件 里面会有一张图片

    main.js  最终打包会进入到index.html  相当于一个html

    App.vue   设置打开的那个界面  

    ```js
    <template> //模板
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </template>
    
    <script> //js行为
            
     //引入
    import HelloWorld from './components/HelloWorld.vue'  
    
     //暴露export 
    export default { 
      name: 'App',
      components: {
        HelloWorld
      }
    }
    </script>
    
    <style></style>  //样式 里面有sass、less、等等
    
    ```

    components 文件夹 下的HelloWorld.vue  没用的一个组件，可以自己修改引入，

    ```js
    在App.vue引入的语法
    import hello from './components/hello'
    export default{
    	data(){
    	     return{
    	      str:'hello'
               }
           },
       components:{
              hello,
        }
    }
    //之后就可以输出变量了
    ```

  **打包上线**

  - 打包上线的步骤

    打开服务 点击Gitee Pages 服务

    先放入vue.config.js

    打包：npm run build 
  
    在dist 中查看能不能打开
  
    进入dist文件   cd dist 
  
    然后初始化项目 git init
    
    vue.config.js中的配置
    
    ```js
    module.exports={
        publicPath:"./"
    }
    
    ```
  
  git add.

​	  git commit -m '名字'

​		git remote add origin https://gitee.com/hao-jiali/shop.git

​		git push -u origin mastergit

  

  ##### elementUI框架

   安装：cnpm i element-ui -S

   在main.js中写入以下内容

  ```js
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import App from './App.vue';
  
  Vue.use(ElementUI);
  ```

##### 路由配置

- ```js
  //引入文件
  import Vue from 'vue'
  import Router from 'vue-router'
  
  
  //全局可以使用
  Vue.use(Router)
  //暴露
  export default new Router({
      routes:[
      
      ]
  })
  ```

- **vue内置组件**

  - template 
  - component 
  - transition
  - keep-alive
  - slot
  - router-view
  - router-link

##### vuex

- 核心概念 store树

- state =》data 放初始化数据的

- getter =》computed 类似计算属性，用于计算后输出

-  mutation =》修改状态的唯一方式（对内）

  - 主要方法用于购物车的添加，删除，修改，查找，传入id

- action =》methods 事件函数（对外）    

- Module =》分割vuex数据模块

- 获取
      state  =》 $store.state
      getter =》 mapGetters

- 修改
      this.$store.commit('')
      组件-》action -》mutation->state

  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  let state = {//放初始化数据
      godsCart: [], //购物车
      gods: {//跳转商品详情页赋值的数据
          id: 1,
          img: '',
          title: '女士新款单肩背提包',
          price: '2300',
          num: 1,
      }
  }//输出：{{$store.state.变量名}}
  
  let getters = {//计算属性
      total(state) {
          let num = 0
           for (let i = 0; i < state.godsCart.length; i++) {
              num += state.godsCart[i].num * state.godsCart[i].price
          }
          return num
      },
  }//输出：1、import { mapGetters } from 'vuex' 2、  computed:{...mapGetters(["变量名"]) } 3、{{变量名}}
  
  let mutations = {//购物车的操作方法
      // 商品详情页
      m_arr(state, arr) {
          state.gods = arr
      },
      // 购物车
      add_cart(state, json) {//添加购物车
          let type=true;
          for (let i = 0; i < state.godsCart.length; i++) {
              if( state.godsCart[i].id==json.id){
                  state.godsCart[i].num=json.num
                  type=false
              }
          }
          if(type){
              state.godsCart.push(json)
          }
      },
      add(state,id){//商品加加
          for (let i = 0; i < state.godsCart.length; i++) {
              if(state.godsCart[i].id==id){
                  state.godsCart[i].num++
              }
          }
      },
      less(state,id){//商品减减
          for (let i = 0; i < state.godsCart.length; i++) {
              if(state.godsCart[i].id==id){
                  state.godsCart[i].num--
                  if( state.godsCart[i].num<=1){
                      state.godsCart[i].num=1
                  }
              } 
          }
      },
      remove(state,id){//删除数组的某一项
          for (let i = 0; i < state.godsCart.length; i++) {
              if(state.godsCart[i].id==id){
                  state.godsCart.splice(i,1) 
              }
          }
      }
  }//输出：methods:{ name(id){ this.$store.commit('变量名',id)} } 
  
  let actions = {
      a_arr({commit}，num){
        	commit('m_arr',num)  
  	}
  }//输出：会自动托管 1、import {mapActions} from 'vuex' 2、methods:{...mapActions(['a_arr'])   } 3、a_arr就可以直接用了
  
  export default new Vuex.Store({
      state,
      getters,
      mutations,
      actions,
  })
  ```


##### vue3.0

- vue create app /自定义安装 ，选择3.0

```js
<template>
  <div id="nav">
    {{name}} ---------- {{id}}----{{n}}
    <button @click="change()">click</button>
  </div>
</template>
<script>
import {reactive,toRefs,computed, onMounted} from 'vue'
//vue3 按需引入，用哪个引哪个
// reactive 存放初始变量
//toRefs 改变响应状态，数据更新，视图进行更新
//computed 计算属性
export default({
  setup() {
    const state=reactive({
        name:'wangbing',
        id:1,
        n:computed(()=>state.id+1)
    })
    const change=()=>{ //定义事件
      state.id+=1;
      console.log(state.id);
    }
    onMounted(()=>{ //生命周期钩子函数挂载完成
      change()
    })
    // const methods={
    //   //函数一，函数二，函数三，
    // }
    return {
      ...toRefs(state),
      change
      //methods
      }
  },
})
</script>

<style>
</style>

```

###### Vue导航守卫

- 全局导航守卫

  - `router.beforeEach` 全局前置守卫 进入路由之前

  - `router.beforeResolve` 全局解析守卫(2.5.0+) 在`beforeRouteEnter`调用之后调用

  - `router.afterEach` 全局后置钩子 进入路由之后

  - main.js

    ```vue
    import router from './router';
    router.beforeEach((to,from,next)=>{
    	next();
    })
    
    router.beforeResolve((to,from,next)=>{
    	next();
    })
    router.afterEach((to,from)=>{
    	console.log('afterEach 全局后置钩子')
    })
    
    ```

    

- 路由独享守卫

  - 上档次

  - router.js

    ```vue
    
    
    const router=new VueRouter({
    	routes:[
    		{
    			path:'/foo',
    			component:Foo,
    			beforeEnter:(to,from,next)=>{
    				//参数用法都一样，调用顺序在全局前置守卫后面，所以不					会被全局守卫覆盖
    			}
    		}
    	]
    
    })
    ```

    

- 组件路由守卫

  - `beforeRouteEnter` 进入路由前, 在路由独享守卫后调用 不能 获取组件实例 `this`，组件实例还没被创建
  - `beforeRouteUpdate (2.2)` 路由复用同一个组件时, 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 `this`
  - `beforeRouteLeave` 离开当前路由时, 导航离开该组件的对应路由时调用，可以访问组件实例 `this`

VUE路由传参

- `$router`和`$route`的区别

  - $router : 是路由操作对象，只写对象

  - $route : 路由信息对象，只读对象

    ```vue
    //操作 路由跳转
    this.$router.push({
          name:'hello',
          params:{
              name:'word',
              age:'11'
         }
    })
    
    //读取 路由参数接收
    this.name = this.$route.params.name;
    this.age = this.$route.params.age;
    ```

- params和query两种方式传参

  - 使用params传参只能用name来引入路由，是路由的一部分，必须在路由后面添加参数名，相当于post请求，参数不会再地址栏中显示。
  - query是拼接在url后面的参数，没有也没关系。相当于get请求，页面跳转的时候，可以在地址栏看到请求参数

- query

  ```js
  this.$router.push({
    name:'second',
    query: {
      id:'20180822',
       name: 'query'
    }
  })
  
  this.$router.push({
    path:'second',
    query: {
      id:'20180822',
       name: 'query'
    }
  })
  
  this.name = this.$route.query.name;
  this.age = this.$route.query.age;
  
  ```

  

- params(只能用name传参)

  ```js
  //params传参 使用name
  this.$router.push({
    name:'second',
    params: {
      id:'20180822',
       name: 'query'
    }
  })
  
  //params接收参数
  this.id = this.$route.params.id ;
  this.name = this.$route.params.name ;
  
  //路由
  
  {
  path: '/second/:id/:name',
  name: 'second',
  component: () => import('@/view/second')
  ```

- 二者区别

  - 









  ​	

  

