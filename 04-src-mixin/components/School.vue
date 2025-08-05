<template>
  <div class="School">
    <h1 @click="showMsg">School Component</h1>
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin';
export default {
  name: "School",
  data() {
    return {
      name: "Greenwood High",
      address: "123 Main St, Springfield"
    };
  },
  mixins:[mixin]

};
</script>
<style scoped>
.School {
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
}
.School  h1 {
    color: blue;
}
.School  h2 {
    color: darkred;
}
</style>