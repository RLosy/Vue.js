<template>
    <div class="home">
        <h2>当前计数:{{ $store.state.counter }}</h2>
        <button @click="incrementAction">发起action改数字</button>
        <button @click="increment">递增action改数字</button>

        <h2>修改名字:{{ $store.state.name }}</h2>
        <button @click="changeNameAction('jennie')">发起action改名字</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // actionCounterBtn() {
        //     this.$store.dispatch("incrementAction")
        // },
        // actionChangeNameBtn(){
        //     this.$store.dispatch("changeNameAction","rosy")
        // }
        ...mapActions(["incrementAction", "changeNameAction"]) //在template中传入参数

    }
}
</script>

<script setup>
import { useStore, mapActions } from 'vuex';
const store = useStore()

//1.在setup中使用mapActions
// const actions = mapActions(["incrementAction", "changeNameAction"])
// const newActions = {}
// Object.keys(actions).forEach(key => {
//     newActions[key] = actions[key].bind({ $store: store })
// })
// const { incrementAction, changeNameAction } = newActions

//2.基本用法 定义函数
function increment() {
    store.dispatch("incrementAction")
}

</script>

<style scoped>
</style>