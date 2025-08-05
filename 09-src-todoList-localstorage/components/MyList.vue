<template>
    <ul class="todo-main">
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
  import MyItem from './MyItem.vue';

  export default {
    name: 'MyList',
    components: {
      MyItem
    },
    props: ['todos', 'checkTodo', 'deleteTodo'],
  } // 这里的 todos 是从父组件传递过来的属性

</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>