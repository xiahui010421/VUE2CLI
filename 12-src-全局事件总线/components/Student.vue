<template>
  <div class="Student">
    <h2>student name：{{ name }}</h2>
    <h2>student address: {{ address }}</h2>
    <h2>student phone: {{ phone }}</h2>
    <button @click="sendStudentName">Send Student Name</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Student Information",
      name: "John Doe",
      address: "456 Elm St, Springfield",
      phone: "555-1234"
    };
  },
  methods:{
    sendStudentName() {
      // 通过 $bus 向父组件发送事件
      this.$bus.$emit('xiahui', this.name);
      // 或者通过 $emit 触发父组件监听的事件
      // this.$emit('xiahui', this.name);
    }
  }
};
</script>

<style scoped>  
.Student {
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
}
.Student h1 {
  color: green;
}
.Student h2 {
  color: darkblue;
}
</style>
 