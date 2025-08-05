//引入vue
import Vue from "vue";
//
import App from "./App.vue";
Vue.config.productionTip = false;
//创建一个空函数
new Vue({
  render: (h) => h(App),
}).$mount("#app");  
