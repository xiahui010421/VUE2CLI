<template>
  <div class="Student">
    <h1>{{ msg  }}</h1>
    <h2>student name：{{ name }}</h2>
    <h2>student address: {{ address }}</h2>
    <h2 class="qwe">student phone: {{ phone }}</h2>
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
  }
};
</script>

<style lang="less" scoped>  
.Student {
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
  //less 嵌套 ----npm install less less-loader --save-dev
  .qwe{
    font-size: 40px;
  }
}
.Student h1 {
  color: green;
}
.Student h2 {
  color: darkblue;
}
</style>
 