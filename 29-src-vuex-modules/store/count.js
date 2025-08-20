//求和功能相关的配置
export default{
  namespaced:true,
  actions:{
    sub(context, value) {
      context.commit('SUB', value);
    },
    addOdd(context, value) {
      if (context.state.sum % 2 !== 0) {
        context.commit('ADD', value);
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit('ADD', value);
      }, 500);
    },
  },
  mutations:{
    ADD(state, value) {
      state.sum += value;
    },
    SUB(state, value) {
      state.sum -= value;
    },
    RESET(state) {
      state.sum = 0;
    },
  },
  state:{
    sum: 0 ,// 初始求和为0
    school:'atguigu',
    subject:'front-end',
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  },
}
