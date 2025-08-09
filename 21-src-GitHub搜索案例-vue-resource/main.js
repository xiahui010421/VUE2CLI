
import Vue from "vue";

import App from "./App.vue";
//引入vue-resource
import vueresource from 'vue-resource'
Vue.config.productionTip = false;
// use
Vue.use(vueresource);

new Vue({
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this; //安装全局事件总线
  }
}).$mount("#app");  
