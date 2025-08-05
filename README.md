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