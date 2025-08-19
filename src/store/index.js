// 引入Vue和Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 使用Vuex插件
Vue.use(Vuex);

// 准备actions：处理异步/复杂逻辑（组件通过dispatch调用）
const actions = {
  // 减法
  sub(context, value) {
    context.commit('SUB', value);
  },
  // 奇数时才加（复杂逻辑放在actions）
  addOdd(context, value) {
    if (context.state.sum % 2 !== 0) {
      context.commit('ADD', value);
    }
  },
  // 延迟加（异步操作放在actions）
  addWait(context, value) {
    setTimeout(() => {
      context.commit('ADD', value);
    }, 500);
  }
};

// 准备mutations：唯一修改state的地方（同步操作）
const mutations = {
  // 加法
  ADD(state, value) {
    state.sum += value;
  },
  // 减法
  SUB(state, value) {
    state.sum -= value;
  },
  // 重置
  RESET(state) {
    state.sum = 0;
  }
};

// 准备state：存储数据
const state = {
  sum: 0 // 初始求和为0
};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
});