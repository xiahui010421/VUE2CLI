# first-test
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 脚手架结构
first-test/                  # 项目根目录
├── node_modules/            # 项目依赖包（npm install 安装的内容）
├── public/                  # 静态资源目录（不会被 Webpack 处理）
│   ├── favicon.ico          # 网站图标
│   └── index.html           # 入口 HTML 文件（模板）
├── src/                     # 源代码目录（核心开发目录）
│   ├── assets/              # 静态资源（会被 Webpack 处理，如图片、样式）
│   │   └── logo.png         # Vue 默认 Logo
│   ├── components/          # 可复用组件目录
│   │   └── HelloWorld.vue   # 示例组件
│   ├── App.vue              # 根组件（整个应用的入口组件）
│   └── main.js              # 程序入口文件（加载 Vue、根组件并挂载到 DOM）
├── .gitignore               # Git 忽略文件配置（如 node_modules、dist 等）
├── babel.config.js          # Babel 配置（用于 ES6+ 语法转译）
├── package.json             # 项目配置（依赖、脚本命令等）
├── package-lock.json        # 依赖版本锁定文件（确保依赖一致性）
└── README.md                # 项目说明文档

## 关于不同版本的vue
vue.js  &&  vue.runtime.js 的区别


## vue.config.js 的配置文件
vue inspect > output.js 可以查看vue脚手架的默认配置
vue.config.js 可以对脚手架进行默认的配置

## ref属性
1.被用来给元素或者子组件注册饮用信息
2.应用在html上是真实的dom，使用在组件上是实例对象vue component
3.this.$refs.studentMsg   ｜｜      <h1 v-text="msg" ref="studentMsg"></h1>

## 配置项props
功能：让组件接受外部传进来的数据
1，传递    <Student name="Jane Smith" address="789 Oak St, Springfield" />
2，接受     props:['name', 'address', 'phone']
```
            props:{
                name: {
                type: String,
                required: true
                },
                address: {
                type: String,
                required: true
                },
                phone: {
                type: String,
                required: false,
                default: "No phone number provided"
                }
            }
```
###### props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。


## mixin
功能：可以把多个组件的功用配置提取成一个混合对象
用法：第一步定义混合：
    {
        data(){....},
        methods:{...},
        ...
    }
    第二步使用混合：
    全部混入：Vue.mixin(xxx)
    局部混入：mixins['xxx']

## plugins
功能：用于增强vue
本质：vue.use(obj)时会自动调用install方法
定义：
```
export const obj = {
    //插件的安装方法
    //vue.use(obj)时会自动调用install方法
    install(vue){
        console.log("Plugin installed",vue);
        //全局过滤器
        vue.filter('myslice',function(value){
            return value.slice(0,4);
        });
        //全局自定义指令
        vue.directive('fbind', {
            bind(el, binding, ) {
                el.value = binding.value;   
            },
            inserted(el) {
                el.focus();
            },
            update(el, binding) {
                el.value = binding.value;
            }
        });
        //全局混入
        vue.mixin({
            data() {
                return {
                    name: 'xiahui',
                    address: 'shanghai',
                    phone: '123456789'
                }
            }
        });
        //给vue原型添加方法（vm vc都可以使用） 
        vue.prototype.hello = function() {
            alert('Hello from plugin!');
        };
    }
}
```

## scoped样式
npm install less less-loader --save-dev

## 总结TodoList案例

1. 组件化编码流程：
​(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
​(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
​1).一个组件在用：放在组件自身即可。
​2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。
​(3).实现交互：从绑定事件开始。
2. props适用于：
​(1).父组件 ==> 子组件 通信
​(2).子组件 ==> 父组件 通信（要求父先给子一个函数）
1).父组件（App.vue）通过 :addTodo="addTodo" 把方法传递给子组件。
2).子组件（MyHeader.vue）通过 props: ['addTodo'] 接收这个方法。
3).当用户输入内容并按回车时，add 方法会调用 this.addTodo(todoObj)，把新任务对象传递给父组件。
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage
1,存储内容大小5MB
2，浏览器通过window.sessionStorage & window.localStorage
3, API setItem getItem removeItem clear
4, null ，json.parse(null)的结果还是null

## 自定义事件
1. 组件实例的自定义事件，是一种组件间通信的方式，适用于：子组件 ===> 父组件
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。
3. 绑定自定义事件：
    1). 第一种方式，在父组件中：<Demo @atguigu="test"/> 或 <Demo ref="demo" v-on:atguigu="test"/>
    2). 第二种方式，在父组件中：
    ```
    mounted() {
        this.$refs.demo.$on('atguigu', this.test);
    }
    ```
4. 触发自定义事件：
    1). 第一种方式，在子组件中：<button @click="sendMsg">点我发送消息</button>
    2). 第二种方式，在子组件中：
    ```
    methods: {
        sendMsg() {
            this.$emit('atguigu', this.msg);
        }
    }
    ```
5. 解绑自定义事件：
    1). 第一种方式，在父组件中：<Demo @atguigu="test" />
    2). 第二种方式，在父组件中：
    ```
    mounted() {
        this.$refs.demo.$off('atguigu', this.test);
    }
    ```
    3). 组件销毁时，会自动解绑它的全部自定义事件，除非显式解绑。
6. 注意：通过this.$refs.xxx.$on('事件名', 回调)绑定的自定义事件，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！
7. 适用于子组件 ==> 父组件 通信

## 全局事件总线
1. 适用于：任意组件之间通信
2. 安装全局事件总线：
    ```
    new Vue({
        beforeCreate() {
            Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
        },
        render: h => h(App)
    }).$mount('#app')
    ```
3. 使用全局事件总线：
    1). 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
    ```
    methods() {
        demo(data) {
            console.log('我是School组件，收到了数据：', data);
        }
    }
    ```
    2). 发送数据：在B组件中，$bus触发自定义事件，同时传递数据。
    ```
    this.$bus.$emit('atguigu', this.msg);
    ```
4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
    ```
    beforeDestroy() {
        this.$bus.$off('atguigu');
    }
    ``` 
    或者解绑所有事件
    ```
    beforeDestroy() {
        this.$bus.$off();
    }
    ```
    注意：
    1). 组件销毁时，会自动解绑它的全部自定义事件，除非显式解绑。
    2). 解绑事件时，需要指定事件名，否则会解绑所有事件。

## pubsub订阅与发布
1. 适用于：任意组件之间通信
2. 安装pubsub：npm install pubsub-js
3. 使用pubsub：
    1). 接收数据：A组件想接收数据，则在A组件中订阅事件，事件的回调留在A组件自身。
    ```
    methods() {
        demo(msg,data) {
            console.log('我是School组件，收到了数据：', msg,data);
        }
    }
    ```
    2). 发送数据：在B组件中，发布事件，同时传递数据。
    ```
    pubsub.publish('atguigu', this.msg);
    ```
4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
    ```
    beforeDestroy() {
        pubsub.unsubscribe(this.token);
    }
    ``` 
    或者解绑所有事件
    ```
    beforeDestroy() {
        pubsub.unsubscribe(this.token);
    }
    ```
    注意：
    1). 组件销毁时，会自动解绑它的全部自定义事件，除非显式解绑。
    2). 解绑事件时，需要指定事件名，否则会解绑所有事件。

## nextTick
1. 语法：this.$nextTick(回调函数)
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 当你修改了数据，Vue 将在事件循环队列的末尾立即触发异步更新。
4. 你可以在回调函数中访问更新后的 DOM。
5. 注意：
    1). 组件销毁时，会自动解绑它的全部自定义事件，除非显式解绑。
    2). 解绑事件时，需要指定事件名，否则会解绑所有事件。

## 动画与过渡
1. Vue内置了过渡效果的支持，可以在元素进入或离开 DOM 时应用过渡效果。
2. 使用 `<transition>` 组件包裹需要过渡的元素。
3. 可以通过 `name` 属性指定过渡的名称，默认值为 `fade`。
4. 可以通过 `enter-active-class` 和 `leave-active-class` 属性指定进入和离开过渡的类名。
5. 可以通过 `enter-class` 和 `leave-class` 属性指定进入和离开过渡的类名。
6. 可以通过 `appear` 属性指定组件初始渲染时是否应用过渡效果。
7. 用第三方动画库animate.css
8. 安装animate.css：npm install animate.css
9. 引入animate.css：import 'animate.css'
10. 使用animate.css：
    1). 给元素添加类名：animate__animated animate__bounce
    2). 可以通过 `enter-active-class` 和 `leave-active-class` 属性指定进入和离开过渡的类名。
    3). 可以通过 `enter-class` 和 `leave-class` 属性指定进入和离开过渡的类名。


## 代理服务器
1. 代理服务器的作用：解决跨域问题
2. 代理服务器的工作原理：
    1). 客户端发送请求到代理服务器
    2). 代理服务器收到请求后，转发请求到目标服务器
    3). 目标服务器收到请求后，处理请求
    4). 目标服务器将处理结果返回给代理服务器
    5). 代理服务器将处理结果返回给客户端
3. 代理服务器的配置：
    1). 在vue.config.js中配置代理服务器
    2). 配置项：
        1). target：目标服务器的地址
        2). pathRewrite：路径重写，将请求路径中的/api前缀去掉
        3). changeOrigin：是否改变请求头的host，默认值为true
        4). ws：是否允许websocket跨域，默认值为false
       

## vuex的配置与使用
Vuex 是 Vue 官方提供的状态管理模式，用于集中管理组件共享的状态。

### **一、基本目录结构**
通常在 Vue 项目中，Vuex 的配置文件放在 `src/store` 目录下，基本结构如下：
```
src/
└── store/
    ├── index.js       # 入口文件，创建并导出 store
    ├── state.js       # 存储状态
    ├── mutations.js   # 修改状态的方法
    ├── actions.js     # 处理异步/复杂逻辑
    └── getters.js     # 计算属性（类似组件的 computed）
```


### **二、核心配置文件（index.js）**
`index.js` 是 Vuex 的入口，用于整合所有模块并创建 store 实例：

```javascript
// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
// 1. 安装 Vuex 插件
Vue.use(Vuex);
// 2. 创建并导出 store 实例
export default new Vuex.Store({
  state,       // 存储数据
  mutations,   // 同步修改数据
  actions,     // 处理异步/复杂逻辑
});
```

### **三、各核心模块配置**

#### 1. state.js（存储状态）
用于定义需要共享的状态数据（类似组件的 `data`）：
```javascript
// src/store/state.js
export default {
  // 示例：计数器的数值
  count: 0,
  // 示例：用户信息
  userInfo: {
    name: '',
    age: null
  },
  // 其他共享状态...
};
```


#### 2. mutations.js（修改状态）
唯一能直接修改 `state` 的地方，**必须是同步操作**（类似组件的 `methods`，但只负责修改数据）：
```javascript
// src/store/mutations.js
export default {
  // 第一个参数固定为 state，第二个参数为传入的值（payload）
  INCREMENT(state, payload) {
    state.count += payload;
  },
  DECREMENT(state, payload) {
    state.count -= payload;
  },
  // 修改用户信息
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  }
};
```


#### 3. actions.js（处理异步/逻辑）
用于处理异步操作（如接口请求）或复杂业务逻辑，最终通过 `commit` 调用 `mutations` 修改状态：
```javascript
// src/store/actions.js
export default {
  // 第一个参数是 context（包含 commit、state 等），第二个参数为传入的值
  incrementAsync(context, payload) {
    // 示例：异步操作（定时器）
    setTimeout(() => {
      context.commit('INCREMENT', payload); // 调用 mutation
    }, 1000);
  },
  // 示例：调用接口获取用户信息
  fetchUserInfo(context) {
    // 假设使用 axios 发请求
    return axios.get('/api/user').then(res => {
      context.commit('SET_USER_INFO', res.data); // 成功后修改状态
    });
  }
};
```


#### 4. getters.js（加工数据）
类似组件的 `computed`，用于对 `state` 进行加工处理（缓存结果，依赖变化时自动更新）：
```javascript
// src/store/getters.js
export default {
  // 第一个参数固定为 state
  doubleCount(state) {
    return state.count * 2; // 返回 count 的 2 倍
  },
  userAgeDesc(state) {
    return state.userInfo.age 
      ? `年龄：${state.userInfo.age}` 
      : '年龄未知';
  }
};
```


### **四、在组件中使用 Vuex**
1. **获取 state 或 getters**：
   ```javascript
   // 方式1：直接访问
   this.$store.state.count;
   this.$store.getters.doubleCount;

   // 方式2：通过 mapState 或 mapGetters 映射（推荐）
   import { mapState, mapGetters } from 'vuex';

   export default {
     computed: {
       ...mapState(['count']), // 映射 state.count 为组件的 count 计算属性
       ...mapGetters(['doubleCount']) // 映射 getters.doubleCount
     }
   };
   ```

2. **调用 mutations**：
   ```javascript
   // 方式1：直接 commit
   this.$store.commit('INCREMENT', 1); // 调用 INCREMENT  mutation，传入参数 1

   // 方式2：通过 mapMutations 映射为 methods
   import { mapMutations } from 'vuex';

   export default {
     methods: {
       ...mapMutations(['INCREMENT']), // 映射为 this.INCREMENT(1)
       handleClick() {
         this.INCREMENT(1); // 调用
       }
     }
   };
   ```

3. **调用 actions**：
   ```javascript
   // 方式1：直接 dispatch
   this.$store.dispatch('incrementAsync', 1); // 调用 incrementAsync action
   export default {
     methods: {
       handleAsyncClick() {
         this.incrementAsync(1); // 调用
       }
     }
   };
   ```

### **总结**
**组件触发 action → action 调用 mutation → mutation 修改 state → 组件响应 state 变化**  


## vuex---- mapState mapGetters mapActions mapMutains
Vuex 提供了四个常用辅助函数，用于简化组件中对 store 的操作，避免在模板或方法中重复编写 this.$store 相关代码。
1. mapState
作用：将 store 中的 state 映射到组件的计算属性。
场景：组件需要使用 store 中的多个状态时。
2. mapGetters
作用：将 store 中的 getters 映射到组件的计算属性。
场景：组件需要使用 store 中经过处理的派生状态（getters）时。
3. mapMutations
作用：将 store 中的 mutations 映射到组件的方法。
场景：组件需要通过 mutations 同步修改 store 中的状态时。
4. mapActions
作用：将 store 中的 actions 映射到组件的方法。
场景：组件需要通过 actions 异步修改 store 中的状态时。
```
    <button @click="ADD(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再相加</button>
    <button @click="RESET(n)">重置</button>

    methods: {
      //...mapActions({decrement:'sub',incrementOdd:'addOdd',incrementWait:'addWait'}),
      ...mapActions(['sub','addOdd','addwait']),
      //...mapMutations({increment:'ADD',reset:'RESET'}),
      ...mapMutations(['ADD','RESET']),
    },
    computed:{
      ...mapState(['sum', 'school', 'subject']),
      ...mapGetters(['bigSum']),
    }
```
