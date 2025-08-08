<template>
    <div>
        <button @click="isShow = !isShow">点击我</button>
        <transition-group 
            name="animate__animated animate__bounce" 
            appear
            enter-active-class="animate__backInDown"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow " key="1">hello</h1>
            <h1 v-show="isShow " key="2">woowowowooow</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
    export default {
        name: "Test3",
        data() {
            return {
                isShow:true
            }
        },
        methods: {
            
        }
    }
</script>

<style>
h1{
    color: red;
    background: #000;
}


</style>