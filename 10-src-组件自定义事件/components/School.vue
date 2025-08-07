<template>
  <div class="School">
    <h1 >School Component</h1>
     <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="sendSchoolName">Send School Name</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ['getSchoolName'],
  data() {
    return {
      name: "Greenwood High",
      address: "123 Main St, Springfield"
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    }
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