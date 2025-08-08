<template>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
        />
      </transition-group>
    </ul>
</template>

<script>
  import MyItem from './MyItem.vue';

  export default {
    name: 'MyList',
    components: {
      MyItem
    },
    props: ['todos'],
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

    .todo-enter-active {
      animation: todo 1s ease-in-out;
    }
    .todo-leave-active{
      animation: todo 0.3s linear reverse;
    }
    @keyframes todo {
      from {
        opacity: 0;
        transform: translateX(-10%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
</style>