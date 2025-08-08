<template>
    <div>
        <button @click="isShow = !isShow">点击我</button>
        <transition name="xiahui" appear>
            <h1 v-show="isShow ">hello</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Test",
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
.xiahui-enter-active{
    animation: xiahui 1s linear 0s 1 normal forwards;
}
.xiahui-leave-active{
    animation: xiahui 1s linear 0s 1 reverse forwards;
}
@keyframes xiahui {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>