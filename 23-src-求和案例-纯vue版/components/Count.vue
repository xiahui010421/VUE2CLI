<template>
    <div>
        <h1>当前求和为:{{sum}}</h1>
        <select v-model="n" >
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再相加</button>
        <button @click="reset">重置</button>
    </div>
</template>

<script>
    export default{
        name:'Count',
        data(){
            return{
                n:1,
                sum:0,
            }
        },
        methods:{
            increment(){
                this.sum += this.n;
            },
            decrement(){
                this.sum -= this.n;
            },
            incrementOdd(){
                if(this.sum % 2 !== 0){
                    this.sum += this.n;
                }
            },
            incrementWait(){
                setTimeout(()=>{
                    this.sum += this.n;
                },500)
            },
            reset(){
                this.sum = 0;
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 20px;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background: #f9f9f9;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 16px;
        letter-spacing: 1px;
    }
    select {
        padding: 4px 12px;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        margin-right: 8px;
        font-size: 16px;
        outline: none;
        transition: border 0.2s;
    }
    select:focus {
        border-color: #409eff;
    }
    button{
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