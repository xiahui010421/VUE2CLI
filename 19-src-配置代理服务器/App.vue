<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
import axios  from 'axios'; 
    export default {
        name: "App",
        methods:{
            getStudents(){
                //加上前缀api 代理服务器会将请求转发到目标服务器
                //否则自己会去public下找资源
                axios.get('http://localhost:8080/api/students').then(
                    Response =>{
                        console.log(Response.data);
                    },
                    error =>{
                        console.log(error.message);
                    }
                )
            },
            getCars(){
                axios.get('http://localhost:8080/api2/cars').then(
                    Response =>{
                        console.log(Response.data);
                    },
                    error =>{
                        console.log(error.message);
                    }
                )
            }
        }
    }
</script>
