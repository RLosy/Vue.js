<template>
    <div class="app">
        <button @click="incrementLevel">修改level</button>

        <h2>doubleCounter:{{ $store.getters.doubleCounter}}</h2>
        <h2> friendsTotalAge:{{ $store.getters.totalAge }}</h2>

        <h2>message:{{ $store.getters.message }}</h2>
        <!-- h获取getFriend(111)的信息 -->
        <h2>id-111的朋友信息:{{ $store.getters.getFriend111 }}</h2>
        
        <h2>id-112的朋友信息:{{ $store.getters.getFriendById(112) }}</h2>


    </div>
</template>

<script>
// import { mapState } from 'vuex';


// export default {
//     computed: {
//         fullname() {
//             return "xxxx"
//         },

//         ...mapState(["name", "level", "avatarURL"]), //数组语法 会存在命名冲突
//         ...mapState({                                  //对象语法
//             sName:state => state.name,
//             sLevel:state => state.level
//         })
//     }
// }

</script>

<script setup>

</script>
<style scoped></style>