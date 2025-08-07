<template>
  <div class="School">
    <h1 >School Component</h1>
     <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
// 使用 pubsub-js 作为事件总线
// 你需要先安装 pubsub-js：npm install pubsub-js
import pubsub from 'pubsub-js';

export default {
  name: "School",
  data() {
    return {
      name: "Greenwood High",
      address: "123 Main St, Springfield"
    };
  },
  mounted(){
    // this.$bus.$on('xiahui',(data)=>{
    //   console.log('Received from Student:', data);
    // })
    // 订阅事件
    this.token = pubsub.subscribe('xiahui', (msg,data) => {
      console.log('Received from Student:', msg,data);  
      // 这里可以处理接收到的消息

    });

  },
  beforeDestroy(){
    // this.$bus.$off('xiahui'); // 解绑事件监听
    pubsub.unsubscribe(this.token); // 取消订阅事件
  }
};
</script>
<style scoped>
.School {
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
}
.School  h1 {
    color: rgb(2, 63, 36);
}
.School  h2 {
    color: darkred;
}
</style>