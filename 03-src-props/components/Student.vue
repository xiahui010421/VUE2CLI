<template>
  <div class="Student">
    <h1>{{ msg  }}</h1>
    <h2>student name：{{ name }}</h2>
    <h2>student address: {{ address }}</h2>
    <h2>student phone: {{ phone }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Student Information",
      // name: "John Doe",
      // address: "456 Elm St, Springfield",
      // phone: "555-1234"
    };
  },
  //
  // props:['name', 'address', 'phone'],
  //接受的同时 类型，默认，必要性的限制
  props:{
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false,
      default: "No phone number provided"
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
.Student   h1 {
  color: green;
}
.Student h2 {
  color: darkblue;
}
</style>
 