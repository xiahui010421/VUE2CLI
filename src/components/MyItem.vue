<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
         <input 
         type="text" 
         :value="todo.title" 
         v-show="todo.isEdit" 
         @blur="handleBlur(todo,$event)"
         ref="inputEdit"
         /> 
      </label>
        <div style="float: right;">
          <button class="btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
          <button class="btn-danger" @click="handleDelete(todo.id)">删除</button>
        </div>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
  export default {  
    name: 'MyItem',
    // 接收父组件传递的 todo 对象
    props: ['todo'],
    methods:{
        //勾选☑️
        handleCheck(id){
            // console.log(id);
            //app组件将对应的todo对象的done属性取反
            // this.checkTodo(id);
            this.$bus.$emit('checkTodo', id);
        },
        //删除❌
        handleDelete(id){
            if(confirm('确定删除吗？')){
                // console.log(id);
                // this.deleteTodo(id);
                pubsub.publish('deleteTodo', id);
            }
        },
        //编辑
        handleEdit(todo){

          // todo.isEdit = true;
          // Vue.set(对象,属性名,属性值) 给对象添加一个属性，属性名是动态的
          if(todo.hasOwnProperty('isEdit')){
            // 如果todo对象已经有isEdit属性，则直接修改它的值
            todo.isEdit = true;
          }else{
            // 如果todo对象没有isEdit属性，则使用$set方法添加它
            this.$set(todo,'isEdit',true);
          }
          // setTimeout(() => {
          //   // 等待DOM更新后，聚焦到输入框
          //   this.$refs.inputEdit.focus();
          // }, 0);
          // 使用$nextTick确保DOM更新后再执行
          this.$nextTick(()=>{
            this.$refs.inputEdit.focus(); // 等待DOM更新后，聚焦到输入框
          })
        },
        handleBlur(todo,event){
          todo.isEdit = false;
          //失去焦点 真正执行修改
          if(event.target.value.trim() === ''){
            alert('请输入内容');
            return;
          }
          this.$bus.$emit('editTodo',todo.id,event.target.value);
        }
    },
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
  display: none;
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