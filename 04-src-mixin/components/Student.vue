<template>
  <div class="Student">
    <h1 @click="showMsg">{{ msg  }}</h1>
    <h2>student name：{{ name }}</h2>
    <h2>student address: {{ address }}</h2>
    <h2>student phone: {{ phone }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin';
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
  mixins:[mixin]
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
 