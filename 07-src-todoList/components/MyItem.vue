<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>

  export default {  
    name: 'MyItem',
    // 接收父组件传递的 todo 对象
    props: ['todo', 'checkTodo', 'deleteTodo'],

    methods:{
        //勾选☑️
        handleCheck(id){
            // console.log(id);
            //app组件将对应的todo对象的done属性取反
            this.checkTodo(id);
        },
        //删除❌
        handleDelete(id){
            if(confirm('确定删除吗？')){
                // console.log(id);
                this.deleteTodo(id);
            }
        }
    }

    // mounted() {
    //   // 这里可以使用 this.todo 来访问传入的 todo 对象
    //   console.log(this.todo);
    // }
  }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 7px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color: #d8d7d7;
}
li:hover button {
  display: inline-block;
}
</style>