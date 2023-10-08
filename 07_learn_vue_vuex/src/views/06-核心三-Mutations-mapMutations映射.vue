<template>
    <div class="app">

        <button @click="changeName('刘炎东')">修改name</button>

        <button @click="CHANGE_INFO({ name: '李四', level: 900 })">修改info</button>

        <h2>name:{{ $store.state.name }}</h2>
        <h2>name:{{ $store.state.level }}</h2>


    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { CHANGE_INFO } from "../store/mutation_types"

export default {
    methods: {
        btnClick() {
            console.log('btnClick');

        },
        ...mapMutations(["changeName", CHANGE_INFO])
    }
}
</script>

<script setup>

import { mapMutations, useStore } from 'vuex'
import { CHANGE_INFO } from "../store/mutation_types"

const mutations = mapMutations(["changeName", " CHANGE_INFO"])
const store = useStore()

const newMutations = {}
Object.keys(mutations).forEach(key => {
    newMutations[key] = mutations[key].bind({ $store: store })
})
const { changeName, CHANGE_INFO } = newMutations


</script>



<style scoped></style>