<template>
    <div class="home">
        <h2>当前计数:{{ $store.state.counter }}</h2>
        <button @click=" actionCounterBtn">发起action改数字</button>
        <h2>修改名字:{{ $store.state.name }}</h2>
        <button @click="actionChangeNameBtn">发起action改名字</button>
    </div>
</template>

<script>
export default {
    methods: {
        actionCounterBtn() {
            this.$store.dispatch("incrementAction")
        },
        actionChangeNameBtn(){
            this.$store.dispatch("changeNameAction","rosy")
        }
        
    }
}
</script>

<script setup>

</script>

<style scoped></style>