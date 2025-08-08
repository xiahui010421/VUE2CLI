<template>
    <div>
        <button @click="isShow = !isShow">点击我</button>
        <transition-group name="xiahui" appear>
            <h1 v-show="!isShow " key="1">hello</h1>
            <h1 v-show="isShow " key="2">woowowowooow</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "Test2",
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
.xiahui-enter, .xiahui-leave-to{
    transform: translateX(-100%);
}
.xiahui-enter-active, .xiahui-leave-active{
    transition: 0.5s,linear;
}
.xiahui-leave , .xiahui-enter-to{
    transform: translateX(0);
}

</style>