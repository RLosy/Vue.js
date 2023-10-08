<template>
    <div class="app">
        
        <button @click="changeName">修改name</button>
       
        <button @click="CHANGE_INFO">修改info</button>
        
        <h2>name:{{$store.state.name}}</h2>
        <h2>name:{{$store.state.level}}</h2>


    </div>
</template>

<script>
import { CHANGE_INFO } from "../store/mutation_types"

export default {
    methods:{
        changeName(){
           this.$store.commit("changeName","rosy")
        },
        [CHANGE_INFO](state,payload ){
            this.$store.commit("[CHANGE_INFO]",{
                name:"jisoo",
                level:200
            })
        }
    }
   
}

</script>

<script setup>




</script>



<style scoped></style>