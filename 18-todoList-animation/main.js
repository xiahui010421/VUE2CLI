//引入vue
import Vue from "vue";
//
import App from "./App.vue";

Vue.config.productionTip = false;

//创建一个空函数
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
  render: (h) => h(App),
}).$mount("#app");  
