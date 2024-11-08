### react

##### 全局安装

- cnpm i create-react-app -g

##### 卸载

- npm uninstall create-react-app -g

##### 创建项目

- create-react-app app

##### **运行**

- npm start	

#### react普通模式

**继承模式下的生命周期**

- constructor() =》初始化触发 **（常用）**
- componentWillMount() =》将要渲染  **（常用）**
- render() =》渲染 **（常用）**
- componentDidMount  =》渲染完成 **（常用）**
- componentWillReceiveProps  =》props将要发生改变
- shouldComponentUpdate =》是否要响应改变
  - 必须return  值为true/false
- componentWillUpdate  =》将要更新
- componentDidUpdate =》更新完成
- componentWillUnmount =》移除组件

index.js相当于全局组件，app.js相当于局部组件

```js
// 普通模式 （继承）
import React,{Component} from 'react'
import Hello from './components/holle' // 引入组件 可以直接输出
import './App.css'
class App extends Component{
  // 构造器 constructor
  // 必须要写的
  constructor(props){ // 不管父级通过什么形式的传给子级 都会在props里面
    super(props) // super作用 把 props 传给父级
    this.state={ // 声明初始化变量
      num:0
    }
    this.btn = this.btn.bind(this) // 需要改变this指向 让this指向 constructor
  } // 可以放分号 但不能放逗号
  // name (){}
  // let 变量名 = 
  btn(){ //  事件需要用对象的方式声明，但是this指向已经发生了改变，容易出现问题
    this.setState({ // 继承模式下声明组件 修改数据的唯一方法 this.setState
      // num:this.state.num+1 // 不可以++ 只能 +1 可以先++ 后赋值
      num : ++this.state.num // 返回出的结果是 初始化变量的替代
    }) // 不存在指令 只能通过原生去改变
  }
  render(){ // 生命周期 constructor也是生命周期
    return(
      // 事件加on on后字母大写 需要绑定一个函数
      <div onClick={this.btn}>
        helloasdfghjkl{this.state.num} // 变量输出用单括号 输出初始化变量this.state中的值 
        {/* 直接输出组件 */}
        <Hello></Hello> 
      </div> 
    )
  }
}
export default App;
```

#### Hook模式

- 成员
  - useState  //用于初始化变量
  - useEffect  //初始后回调，可以写多个,有两个参数，第二个参数是数组
  - useref  //获取dom元素
  - useContext
  - useMemo//监听父组件数据变化
  - useCallback //父组件监听子组件数据变化
  - useReducer
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue

```js
// Hook 模式 Hook 没有生命周期 
import {useState} from 'react'; // 修改数据时 需要引入Hook模式
// 不需要引入任何东西 首字母大写
function Hello() {
    const [index,setindex] = useState(0) // 解构赋值
    // index 是你的数据
    // setindex 是一个方法 用来修改index
    function btn(){
        setindex(index+1) // 调取setindex 对 index 进行修改
    }
    return ( // 单行可以直接 return 多行必须加小括号
        // onClick{()=>{setindex}} 可以直接写箭头函数
        <div onClick={btn}>sdfghjkl{index}</div> // 只能有一个根元素
    )
}
export default Hello
```

#### 父子级传值

```js
// 父级到子级 props
import {useState} from 'react'
import Hello from './components/Hello'
import './App.css';
function App(props) {
  // console.log(props);
  const [num,setnum] = useState(0)
  return (
    <div>
      <div onClick={()=>{setnum(num+1)}}>
        app:{num}
      </div>
      <Hello num={num} setnum={setnum}></Hello> // 子级向父级传值 需要父级把set函数传到子级
      // 父级自定义props对象中的name a={}/b={}/num={} 参数通过props传到子级
    </div>
  );
}
export default App;

// 子级到父级 调用父级函数
import {useState,useMemo} from 'react'
function Hello(props){
    // console.log(props); // 父级传回的参数
    const [num,setnum] = useState(props.num)
    useMemo(()=>{
        setnum(props.num)
    },[props.num])// 监听props的变化 重新设置num的值
    return(
        <div onClick={()=>{props.setnum(num+1)}}> // 子级向父级传值 调用父级函数
            Hello{num}
        </div>
    )
}
export default Hello
```

#### ECharts

- 网址：https://echarts.apache.org/examples/zh/index.html

- 安装： npm install echarts --save

- ```html
   1.下载安装Echarts到项目中，通过npm/yarn包管理器:
          npm i -S echarts 或 yarn add echarts （注意需要安装到生产依赖）
  2.将ECharts引入编写的react组件中并使用的范式:
  import React, {
   Component
  } from "react";
  // 引入ECharts主模块 
  import * as echarts from "echarts/lib/echarts";
  //按需引入需要的Echart模块
  ...
  class APP extends Component {
   componentDidMount() {
    // 初始化echarts实例，将其挂载到id为main的dom元素上展示 
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表 
  myChart.setOption({
     ...
    });
   }
   render() { //渲染需要陈放Echart实例的容器元素
    return <div id = "main"
    style = {
     {
      width: 400,
      height: 400
     }
    } > < /div>; 
   }
  }
  export default APP;
  ```
  

#### Ant

- 一款可以配合react使用的插件

- cnpm i antd -S

### react-router-dom

- 安装指令：cnpm i react-router-dom -s

- **exact** 完全匹配  不加**exact**是半匹配模式，一般默认斜杠/路由需要 **exact**

- 语法

  ```js
  app.js
  import {HashRouter,Switch,Route,Link} from 'react-router-dom' //引入
  import No1 from './view/no1'  //路由文件一
  import No2 from './view/no2' //路由文件一
  import './App.css';
  
  function App() {
    return (
      <div>
        <HashRouter>
          <Link to="/">no1</Link>
          <Link to="/no2">no2</Link>
          <Switch>
              <Route path="/" component={No1} exact></Route>
              <Route path="/no2" component={No2}></Route>
  			<Route path="/no3/:id" component={No3}></Route>	
          </Switch>
        </HashRouter>
      </div>
    );
  }
  
  export default App;
  ```

  ```js
  no1.js
  import {Link} from 'react-router-dom'
  let No1=function (params) {
      return(
          <div>
              <Link to="/no2">返回</Link> //跳到no2
              no1
          </div>
      )
  }
  
  export default No1	
  ```

##### 二级路由

```js
No2.js
import {HashRouter,Route,Switch ,Link} from 'react-router-dom'
import No2_1 from './no2_1'
import No2_2 from './no2_2'
let No2=function (params) {
    return(
        <div>
            hello
            <Link to="/no2">no2_1</Link>
            <Link to="/no2/no2_2">no2_2</Link> //二级路由的写法需要把第一层路由写上
            <Switch>
                <Route path="/no2" component={No2_1} exact></Route>
                <Route path="/no2/no2_2" component={No2_2} ></Route>
            </Switch>
        </div>
    )
}

export default No2
```

##### 动态路由

- <Route path="/no3/:id" component={No3}></Route>

```js
no1.js
import {Link} from 'react-router-dom'
let No1=function (params) {
    let arr=[1,2,3,4,5,6,7,8]
    return(
        <div>
            <Link to="/no2">返回</Link>
            <div>
                {arr.map((itm)=>{
                    return(
                        <div key={itm}>
                            <Link to={'/no3/' +itm}>{itm}</Link>//动态路由
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default No1
```

```js
no3.js
let No3=function ({history}) {
    function btn() {
        history.go(-1) //返回上一级
    }
    return(
        <div onClick={btn}>
            no3
        </div>
    )
}

export default No3
```

##### redux 状态管理器

- 安装：cnpm i redux -S,  cnpm i react-redux -S

- 在src文件创建个store文件夹，文件里index.js

- store/index.js 

  ```js
  import {createStore} from 'redux' //引入
  
  const state={  //放初始化数据
      num:12
  }
  
  export default createStore((mystate=state,action)=>{
      //mystate：数据，action作为修改，从别的地方传过来的回调
      switch(action.type){//判断条件
          case 'jia' :return {...mystate,num:mystate.num+1}
          default :return mystate
      }
  })
  ```

- index.js

  ```js
  import {Provider} from 'react-redux'
  import store from './store/index'
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>//这个地方用Providerbao'包住App,必须要传值，
         <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  ```

- 子组件.js

  ```js
  import {connect} from 'react-redux'
  let name=function(props){
      console.log(props)//从这里可以拿到store下index.js里的数据，和方法，直接调用props.xxx就可以了
       <button onClick={props.jia}>++++</button>
  }
  
  export default connect((state)=>{//数据
      return state
  },(dispatch)=>{//方法
      return{
          jia(){//加方法 和store下index.js里的switch case 'jia'想照应
              dispatch({type:'jia'})
          }
      }
  })(name) 
  ```

#### react购物车的简单实现

```js
index.js
import {createStore} from 'redux'

const state={
    num:12,
    arr:[1,2,3,4,5]
}
function add(mystate,str) {
    let jsonstate={...mystate}
    if(str==''){
        alert('请输入内容')
    }else{
        jsonstate.arr.push(str)
        alert('ok')
    }
    return jsonstate
}

export default createStore((mystate=state,action)=>{
    switch(action.type){
        case 'jia' :return {...mystate,num:mystate.num+action.num}
        case 'add' :return add(mystate,action.str)
        default :return mystate
    }
})

no2.js
import {useState} from 'react'
import {connect} from 'react-redux'
let No2=function (props) {
    const [val,setval] = useState('')
    
    function getval(event) {
        setval(event.target.value)
    }
    function btn() {
        props.add(val)
        setval('')
    }
    return(
        <div>
            <input type="text" value={val} onChange={getval}></input>
            <button onClick={btn}>评论</button>
        </div>
    )
}

export default connect((state)=>{
    return state	
},(dispatch)=>{
    return{
        jia(num){
            dispatch({type:'jia',num:num})
        },
        add(str){
            dispatch({type:'add',str})
        }
    }
})(No2) 


//直接使用props.arr就可以输出渲染了
```

##### react-redux

```js
import {createStore,combineReducers} from 'redux'
import content1 from './reducer/content1'
import content2 from './reducer/content2'

可以在一个js里写两个状态树，也可以分开放在store下的reduce文件下，重新引入
// function content1(state={a:23},actions) {
//     switch(actions.type){
//         default: return {...state}
//     }
// }
// function content2(state={a:12},actions) {
//     switch(actions.type){
//         default: return {...state}
//     }
// }  


let conbine=combineReducers({
    content1,
    content2,
})
export default createStore(conbine)

这是老的写法
// let state={
//     a:12
// }
// reducer
// export default createStore( (mystate=state,action)=> {
//     switch(action.type){
//         default: return {...mystate}
//     }
// })

用法和以前的还一样 ，放在dispatch下面
export default connect((state)=>{//数据
    return state
},(dispatch)=>{//方法
    return{
        name(){
            dispatch({type:'name'})
        }
    }
})(name) 
```



