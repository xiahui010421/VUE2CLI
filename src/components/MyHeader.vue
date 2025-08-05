<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
  import { nanoid } from 'nanoid'
  export default {
    name: 'MyHeader',
    // 接收父组件传递的 addTodo 方法
    // 用于向父组件传递新添加的 todo 对象
    props: ['addTodo'],
    data() {
      return {
        title: '' // 用于存储输入框的值
      }
    },
    // 监听输入框的回车事件
    // 当用户按下回车键时，调用 add 方法
    // 将输入的内容作为新 todo 对象传递给父组件
    methods:{
      add(e){
        if(!this.title.trim()) {
          alert('输入不能为空');
          return;
        }
        // 生成唯一的 id
        // 使用 nanoid 库生成一个唯一的 id
        //包装成todo对象
        const todoObj = {id:nanoid(),title:this.title,done:false}
        console.log(todoObj);
        //接收新添加的 todo 对象
        this.addTodo(todoObj);
        this.title = ''; //清空输入框
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header{
    margin-top: 100px;
  }
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>