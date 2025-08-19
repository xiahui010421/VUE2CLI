<template>
    <div>
        <h1>person list</h1>
        <h3 style="color:red">count组件的和为{{sum}}</h3>
        <input type="text" placeholder="input your name" v-model="name">
        <button @click="add">add</button>
         <ul>
            <li v-for="p in personList" :key="p.id" >{{p.name}}</li>
         </ul>
    </div>
</template>
<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return{
            name:'',
        }
    },
    computed:{
        personList(){
           return this.$store.state.personList
        },
        sum(){
           return this.$store.state.sum
        }
        // ...mapState(['personList']),
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            // console.log(personObj)
            this.$store.commit('ADD_PERSON',personObj)
            this.name=''
        }
    }
}
</script>

<style lang="css" scoped>
  div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }
  button {
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 16px;
    margin: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.2s;
  }
  button:hover {
    background-color: #66b1ff;
  }
</style>