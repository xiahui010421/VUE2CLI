<template>
  <div id="app">
    <h1>student name: {{ name }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现 -->
    <School :get-school-name="getSchoolName"/>
    <hr>
    <!-- 通过自定义事件实现 -->
    <Student v-on:xiahui="getStudentName"/>
    <!-- 通过 $refs 获取子组件实例，实现子组件向父组件传值 -->
    <!-- <Student 
      ref="student"  
      @xiahui.on="getStudentName"
      @request-unbind="handleUnbind"
    /> -->
    <!-- <student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue"; 
export default {
  name: "App",
  data(){
    return{
      studentName:'',
    }
  },
  components: {
    School,
    Student
  },
  methods:{
    getSchoolName(name){
      alert(name);
    },
    getStudentName(name){
      alert(name);
      this.studentName = name;
    },
    handleUnbind() {
      // 解除特定事件的监听
      this.$refs.student.$off('xiahui', this.getStudentName);
      alert('事件已解绑');
    }
  },
  mounted() {
    // 通过 $refs 获取子组件实例
    setTimeout(() => {
      this.$refs.student.$on('xiahui', this.getStudentName);
    }, 3000);
    // this.$refs.student.$once('xiahui', this.getStudentName);
    // this.$refs.student.sendStudentName();
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