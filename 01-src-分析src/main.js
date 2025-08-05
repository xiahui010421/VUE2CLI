import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


function extend(){
  // This function is intentionally left empty
}

new Vue({
  render: h => h(App),
}).$mount('#app')
