<template>
    <div class="app">
        <h2>home中计数器:{{ $store.state.counter }}</h2>

        <h2>computed中计数器:{{ storeCounter }}</h2>

        <h2>setup中的计数器:{{ counter }}</h2>

        <button @click="increment">+1</button>
        <hr>



    </div>
</template>

<script>

export default {
    computed: {
        storeCounter() {
            return this.$store.state.counter
        }
    }
}

</script>

<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const { counter } = toRefs(store.state)
function increment() {
    // store.state.counter++
    store.commit("increment")
}
</script>
<style scoped></style>