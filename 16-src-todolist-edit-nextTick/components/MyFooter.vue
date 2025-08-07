<template>
    <div class="todo-footer" v-show="total > 0">
        <label>
          <input type="checkbox" :checked="isAll" @change="checkAll"/>
        </label>
        <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>

  export default {
    name: 'MyFooter',
    props: ['todos'],
    computed:{
      // 总任务数量
      total(){
        return this.todos.length;
      },
      // 已完成的任务数量
      doneTotal() {
        // return this.todos.filter(todo => todo.done).length;

        // this.todos.reduce((pre,current)=>{
        //   console.log('@',pre, current)  
        //   return pre+(current.done ? 1 : 0) 
        // },0)

        return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0), 0);
      },
      // 是否全选
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0;
        },
        set(value){
          this.$emit('checkAllTodo', value);
        }
      }
    },
    methods: {
      // 全选或全不选
      checkAll(e) {
        // console.log(e.target.checked);
        this.$emit('checkAllTodo', e.target.checked);
      },
      // 清除已完成任务
      clearAll() {
        // console.log('清除已完成任务');
        // this.clearAllTodo();
        this.$emit('clearAllTodo');
      }
    },
    // mounted() {
    //   console.log('todos:', this.todos)
    // }
  }
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 7px;
}
</style>