<template>
  <div id="app">
    <School />
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue"; 
export default {
  name: "App",
  components: {
    School,
    Student
  }
};
</script>

<style>
body {  
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}
</style>