<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section> 
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Search',
        data(){
            return{
                keyWord:''
            }
        },
        methods:{
            searchUsers(){
                //请求前更新list数据
                this.$bus.$emit('updateListData',{isFrist:false,isloading:true,errMsg:'',users:[]})
                //请求数据
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    Response=>{
                        console.log(Response.data.items);
                        //给list发数据
                        this.$bus.$emit('updateListData',{isloading:false,errMsg:'',users:Response.data.items})
                    },
                    Error=>{
                        // console.log(Error.message);
                        this.$bus.$emit('updateListData',{isloading:false,errMsg:Error.message,users:[]})
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
