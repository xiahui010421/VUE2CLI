import Vue from "vue";
import App from "./App.vue";
// 引入vue-resource（用于网络请求，若暂时不用可注释）
import vueresource from 'vue-resource';
// 引入Vuex的store
import store from "./store";

// 关闭生产环境提示
Vue.config.productionTip = false;
// 开启devtools调试工具
Vue.config.devtools = true;

// 使用vue-resource插件
Vue.use(vueresource);

// 创建Vue实例
new Vue({
  render: (h) => h(App), // 渲染App组件
  beforeCreate() {
    // 安装全局事件总线（用于组件间通信，若暂时不用可保留）
    Vue.prototype.$bus = this;
  },
  store: store, // 将store注入所有组件（可简写为store）
}).$mount("#app"); // 挂载到id为app的DOM元素