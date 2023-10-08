<template>
    <div class="app">
        <button @click="incrementLevel">修改level</button>



        <!-- 1.直接在模板中使用 -->
        <h2>name:{{ this.$store.state.name }}</h2>
        <h2>level:{{ this.$store.state.level }}</h2>
        <h2>avatar:{{ this.$store.state.avatarURL }}</h2>

        <!-- 使用mapState映射 -->
        <!-- <h2>name:{{ name }}</h2>
        <h2>level:{{ level }}</h2>
        <h2>avatar:{{ avatarURL }}</h2> -->

        <!-- 在setup中使用 -->
        <!-- <h2>name:{{ cName }}</h2>
        <h2>level:{{ cLevel }}</h2> -->

        <!-- 在useState中使用 -->
        <h2>name:{{ name }}</h2>
        <h2>level:{{ level }}</h2>

        <h2>name:{{ sName }}</h2>
        <h2>level:{{ sLevel }}</h2>

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
import { computed, toRefs } from 'vue';
import { mapState, useStore, } from 'vuex';
import useState from '../hooks/useState'
//1.一步步完成
// const { name, level } = mapState(["name", "level"])
// const store = useStore()
// const cName = computed(name.bind({ $store: store }))
// const cLevel = computed(level.bind({ $store: store }))

//2.使用useState
// const { name,level } = useState(["name","level"])

//3.直接对store.state进行解构
const store = useStore()
const { name: sName, level: sLevel } = toRefs(store.state)
// const { name, level } = toRefs(store.state)


function incrementLevel() {
    store.state.level++
}


</script>
<style scoped></style>