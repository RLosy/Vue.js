<template>
    <div class="home">
        <h2>home page</h2>
        <!-- 1.使用state时,是需要state.moduleName.xxx -->
        <h2>Counter模块中的counter:{{ $store.state.counter.count }}</h2>
        <!-- 2.使用getters时,是直接getters.xxx -->
        <!-- <h2>Counter模块中的doubleCounter:{{ $store.getters.doubleCount }}</h2> -->
        <h2>Counter模块中的doubleCounter:{{ $store.getters["counter/doubleCount"] }}</h2>

        <button @click="incrementCount">count模块+1</button>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<script setup>
import { useStore } from 'vuex';
//告诉vuex发起网络请求
const store = useStore()
//派发事件时,默认也是不需要根模块的
//提交mutation时,默认也是不需要跟上模块的名称
// store.dispatch("fetchHomeMultidataAction").then(res => {
//     console.log('home中的then方法被回调用了', res);
// })
function incrementCount() {
    store.dispatch("counter/incrementCountAction")
}

</script>

<style scoped></style>