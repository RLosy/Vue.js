<template>
    <div class="app">
        <button @click="incrementLevel">修改level</button>

        <h2>doubleCounter:{{ doubleCounter }} </h2>

        <h2> friendsTotalAge:{{ friendsTotalAge }}</h2>

        <h2>message:{{ message }}</h2>
        <!-- h获取getFriend(111)的信息 -->
        <!-- <h2>id-111的朋友信息:{{ $store.getters.getFriend111 }}</h2>
        <h2>id-112的朋友信息:{{ $store.getters.getFriendById(112) }}</h2> -->
        <h2>id-111的朋友信息:{{ getFriend111 }}</h2>
        <h2>id-112的朋友信息:{{ getFriendById(112) }}</h2>


    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["doubleCounter", "friendsTotalAge",]),
        ...mapGetters(["getFriend111", "getFriendById"])
    }
}

</script>

<script setup>
import { mapGetters, useStore } from 'vuex';
import { computed, toRefs } from 'vue'
const store = useStore()
//1.使用mapGatters
// const { message: messageFn } = mapGetters(["message"])
// const message = computed(messageFn.bind({ $store: store }))


//2.直接解构，并且包裹ref响应式数据
// const { message } = toRefs(store.getters)
// console.log(message);

//3.针对于某个getters属性使用computed
const message = computed(() => store.getters.message)



</script>



<style scoped></style>