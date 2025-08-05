//引入vue
import Vue from "vue";
//
import App from "./App.vue";
//引入插件
import { obj } from "./plugins.js";

Vue.config.productionTip = false;

//使用插件
Vue.use(obj);

//创建一个空函数
new Vue({
  render: (h) => h(App),
}).$mount("#app");  
