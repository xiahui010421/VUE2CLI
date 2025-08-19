<template>
    <div>
      <h1>当前求和为:{{ sum }}</h1>
      <h1>当前求和为:{{ bigSum }}</h1>
      <h1>我在{{ school }},学习{{ subject }}</h1>
      <!-- 组件共享数据vuex -->
      <h3 style="color:red">下方人数的总人数{{personList.length}}</h3>
      <!-- 选择数字（.number修饰符确保n为数字类型） -->
      <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <!-- 按钮组 -->
      <button @click="ADD(n)">+</button>
      <button @click="sub(n)">-</button>
      <button @click="addOdd(n)">当前求和为奇数再加</button>
      <button @click="addWait(n)">等一等再相加</button>
      <button @click="RESET(n)">重置</button>
    </div>
  </template>
  
  <script>
  import { mapState ,mapGetters , mapMutations , mapActions} from 'vuex';
  export default {
    name: 'Count',
    data() {
      return {
        n: 1 // 选择的数字，默认1
      };
    },
    methods: {
      //...mapActions({decrement:'sub',incrementOdd:'addOdd',incrementWait:'addWait'}),
      ...mapActions(['sub','addOdd','addwait']),
      //...mapMutations({increment:'ADD',reset:'RESET'}),
      ...mapMutations(['ADD','RESET']),
    },
    computed:{
      ...mapState(['sum', 'school', 'subject','personList']),
      ...mapGetters(['bigSum']),
    },
    // 可以注销
    mounted(){
      const x = mapState({sum:'sum'},{school:'school'},{subject:'subject'});
      const y = mapGetters({bigSum:'bigSum'});

    }
  };
  </script>
  
  <style scoped>
  div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }
  select {
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    margin-right: 8px;
    font-size: 16px;
    outline: none;
    transition: border 0.2s;
  }
  select:focus {
    border-color: #409eff;
  }
  button {
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    margin: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.2s;
  }
  button:hover {
    background-color: #66b1ff;
  }
  </style>