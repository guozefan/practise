### VUE

1. ##### VUE支持的数组方法响应式

   - push()、pop()、 shift()、unshift()、splice()、sort()、reverse()

2. watch和computed的区别

   - computed：是有缓存的，依赖数据发生改变，才会重新进行计算，不支持异步，
   - watch：没有缓存，支持异步，

3. ##### 组件传值

   - Vuex
   - 父传子：字组件绑上， props接受

   ```vue
   父组件： <Children :msg="message"></Children>
   子组件： props:['msg'],
   通过$parent访问父组件的属性和方法
   子组件：this.$parent.baz()
   ```

   - 子传父：

     1. ​	自定义事件，通过$emit调用

        ```vue
        父组件： <Children-Com @addNum="getNum"></Children-Com>
        子组件： this.$emit('addNum',this.childNum++) 在子组件中需要存放事件中调用
        ```

     2. 把父级的方法传给子级调用

        ```vue
        父组件： <Children-Com addNum="getNum"></Children-Com>
        子组件：  props:{addNum:{type:Function}},this.addNum(this.childNum++) 在子组件中需要存放事件中调用
        ```

     3. 使用$ref

        ```vue
        子组件：事件：updateMsg(msg){
                        this.msg = msg
                    }
        父组件： <Children ref="children"></Children>
        this.$refs.children.updateMsg('Have you received the clothes？')
        通过$ref访问子组件的方法和属性
        ```

   - 兄弟组件传值

     1. 事件总线：创建一个EventBus.js，然后哪需要传值，那引入

     ```js
     import Vue from 'vue'
     export default new Vue()
     ```

     - 需要传值的兄弟组件

       ```vue
       兄弟一： eventBus.$emit('pushMsg',this.childNum++)放在自己定义事件中调用去触发，传值给兄弟二
       兄弟二：  eventBus.$on('pushMsg', (children1Msg) => {
                       this.msg = children1Msg
                   })放在生明周期里
       ```

4. ##### 组件传值实时更新：父组件传值给子组件，子组件props接受，使用watch监听，赋值给自己的属性，页面输出通过自己的属性，mounted()生命周期调用下

5. ##### Vue路由导航守卫

   - 全局守卫：router.beforeEach((to,from,next)=>{})，回调函数中的参数，to：进入到哪个路由去，from：从哪个路由离开，next：函数，决定是否展示你要看到的路由页面。

     ```js
     router.beforeEach((to,from,next)=>{
     	if(to.path== '/login'||to.path == '/register'){
             next()
         }else{
     		alert('您还没有登录，请先登录')
             next('login')
         }
     })
     ```

   -  全局后置钩子：router.afterEach((to,from)=>{})

     ```js
     router.afterEach((to,from)=>{
         alert('after each')
     })
     ```

   - 组件守卫：beforeRouteEnter:(to,from,next)=>{}，到这个组件时触发的，这个里面是拿不到组件里的属性，需要在next里完成

     ```js
     beforeRouteEnter:(to,from,next)=>{
         next(vm=>{
             alert('hello' + vm.name)
     	})
     }
     ```

6. ##### 路由懒加载

   1. Vue异步加载

      - vue-router配置路由，使用vue的异步组件技术，可以实现懒加载，此时一个组件会生成一个js文件。

      ```js
       {
            path: '/problem',
            name: 'problem',
            component: resolve => require(['../pages/home/problemList'], resolve)
          }
      ```

   2. ES6推荐方式imprort ()----推荐使用

      ```js
      const Foo = () => import('../components/Foo')
       {
                  path: '/Foo',
                  name: 'Foo',
                  component: Foo
              },
      ```

   3. webpack提供的require.ensure()实现懒加载：

      ```js
      const HelloWorld=resolve=>{
      		require.ensure(['@/components/HelloWorld'],()=>{
      			resolve(require('@/components/HelloWorld'))
      		})
      	}
      {path:'./',
      	name:'HelloWorld',
      	component:HelloWorld
      	}
      ```

   4. import和require的区别

      1. import 是解构过程并且是编译时执行
      2.  require 是赋值过程并且是运行时才执行，也就是异步加载 
      3. require的性能相对于import稍低，因为require是在运行时才引入模块并且还赋值给某个变量

7. ##### 路由传参

   1. query：类似于get请求，会把参数拼接在URL后面，name和path都可以使用。推荐使用！
   2. params类似于post请求，传过去的参数不在URL中显示，传参不能刷新，只能配合name使用
   3. 参数中的name相当于路由的path，

8. Vuex

   - state:存放数据
   - getters：计算属性
   - mutations：同步，改变state的状态，通过commit调用
   - actions：异步，通过dispatch调用
   - module：模块
   - 辅助函数
     - mapState、mapActions、mapMutations、mapGetters

   ```js
   import api from '@/api';
   import * as types from '../types';
   
   const state = {
     // 用户登录状态
     loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
     // 用户登录信息
     userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
     // 用户数据信息
     userData: []
   };
   
   const actions = {
   	/**
   	 * 用户登录
   	 */
     setUserInfo({ commit }, res) {
       localStorage.setItem('userInfo', JSON.stringify(res));
       localStorage.setItem('loginStatus', true);
       commit(types.SET_USER_INFO, res);
       commit(types.SET_LOGIN_STATUS, true);
     },
   
   	/**
   	 * 退出登录
   	 */
     setSignOut({ commit }) {
       localStorage.removeItem('loginStatus');
       localStorage.removeItem('userInfo');
       commit(types.SET_LOGIN_STATUS, false);
       commit(types.SET_USER_INFO, {});
     },
   
   	/**
   	 * 请求用户信息
   	 */
     getUserData({ commit }, id) {
       commit(types.COM_LOADING_STATUS, true);
       api.UserInfo(id)
         .then(res => {
           commit(types.COM_LOADING_STATUS, false);
           commit(types.GET_USER_DATA, res.data);
         });
     }
   };
   
   const getters = {
     getUserData: state => state.userData,
     loginStatus: state => state.loginStatus,
     userInfo: state => state.userInfo
   };
   
   const mutations = {
     [types.SET_USER_INFO](state, res) {
       state.userInfo = res;
     },
   
     [types.SET_LOGIN_STATUS](state, status) {
       state.loginStatus = status;
     },
   
     [types.GET_USER_DATA](state, res) {
       state.userData = res;
     }
   
   };
   
   export default {
     state,
     actions,
     getters,
     mutations
   };
   ```

   ```js
   在组件中调用
   <script>
   	import { mapGetters } from 'vuex'
   	export default {
           name:'User',
           computed: {
               ...mapGetters([
                 'user',
                 'updateAvatarApi',
                 'baseApi'
               ])
           },
            },
        methods:{
             login() {
           this.form = { id: this.user.id, nickName: this.user.nickName, gender: this.user.gender, phone: this.user.phone }
           this.$store.dispatch('setUserInfo',this.form).then((res) => {
               console.log(res)
           })
         },
        }
       }
   </script>
   ```

   