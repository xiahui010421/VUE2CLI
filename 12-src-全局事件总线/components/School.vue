<template>
  <div class="School">
    <h1 >School Component</h1>
     <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "Greenwood High",
      address: "123 Main St, Springfield"
    };
  },
  mounted(){
    this.$bus.$on('xiahui',(data)=>{
      console.log('Received from Student:', data);
    })
  },
  beforeDestroy(){
    this.$bus.$off('xiahui'); // 解绑事件监听
    // 或者解绑所有事件
    // this.$bus.$off();
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