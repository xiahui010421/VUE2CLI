//引入vue
import Vue from "vue";
//
import App from "./App.vue";

Vue.config.productionTip = false;

// const demo = Vue.extend({})//创建一个空组件构造器
// const d = new demo({}) //创建一个空组件实例
// Vue.prototype.x= d

//创建一个空函数
new Vue({
  render: (h) => h(App),
}).$mount("#app");  
