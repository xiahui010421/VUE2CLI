<template>
  <div class="Student">
    <h1>{{ msg  }}</h1>
    <h2>student name：{{ name }}</h2>
    <h2>student address: {{ address }}</h2>
    <h2>student phone: {{ phone }}</h2>
    <button @click="sendStudentName">send student Name</button>
    <!-- 添加解绑按钮 -->
    <button @click="unbindEvent">解绑事件</button>
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
  methods: {
    sendStudentName() {
      this.$emit('xiahui', this.name);
    },
    // 添加解绑事件触发方法
    unbindEvent() {
      // 通知父组件执行解绑操作---解绑一个
      this.$off('xiahui');
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
 