<template>
    <div class="home">
        <h2>home page</h2>
        <ul>
            <!-- 在module组件中获取数据 state.moduleName  -->
            <template v-for="item in $store.state.home.banners" :key="item.acm">
                <li>{{ item.title }}</li>
            </template>
        </ul>
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

store.dispatch("fetchHomeMultidataAction").then(res => {
    console.log('home中的then方法被回调用了', res);

})


</script>

<style scoped></style>