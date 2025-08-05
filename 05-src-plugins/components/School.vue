<template>
  <div class="School">
    <h1 >School Component</h1>
    <!-- plugin使用myslice方法 -->
    <h2>School Name: {{ name |  myslice}}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="test">click to test plugin protype</button>
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
  methods: {
    test() {
      this.hello();
    }
  },
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