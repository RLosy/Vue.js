import { createStore } from 'vuex';
import { CHANGE_INFO } from '../store/mutation_types'

import homeModule from '../store/modules/home'
import counterModule from '../store/modules/counter'

const store = createStore({
    state() {
        return {
            //模拟数据
           rootCounter: 100,
           counter:100,
            name: "lyd",
            level: 100,
            avatarURL: "http://xxxxxxx",
            friends: [
                { id: 111, name: "lyd", age: 20 },
                { id: 112, name: "lisa", age: 23 },
                { id: 113, name: "jennie", age: 25 },
            ],

            //2.拿到服务器的数据
            //   banner: [],
            //   recommend: [],
        }
    },
    getters: {
        //1.基本使用
        doubleCounter(state) {
            return state.counter * 2
        },
        totalAge(state) {
            return state.friends.reduce((preValue, item) => {
                return preValue + item.age
            }, 0)
        },
        //2.在getters属性中,获取其他的getters
        message(state, getters) {
            return `name:${state.name} level:${state.level} friendTotalAge:${getters.totalAge}`
        },
        getFriend111(state) {
            return state.friends.find(item => item.id === 111)
        },
        //  3.getters是可以返回一个函数的,调用这个函数可以传入参数(了解)
        getFriendById(state) {
            return function (id) {
                const friend = state.friends.find(item => item.id === id)
                return friend
            }
        }

    },
    mutations: {
        increment(state) {
            state.counter++
        },
        changeName(state, payload) {
            // state.name = "rosy"
            state.name = payload
        },
        [CHANGE_INFO](state, payload) {
            state.name = payload.name,
                state.level = payload.level
        },
        // changeBanners(state, banners) {
        //     state.banners = banners
        // },
        // changeRecommends(state, recommends) {
        //     state.recommends = recommends
        // }

    },
    actions: {
        incrementAction(context) {
            // console.log(context.commit);
            // console.log(context.getters);
            // console.log(context.state);
            context.commit("increment")
        },
        changeNameAction(context, payload) {
            context.commit("changeName", payload)
        },
        // async fetchHomeMultidataAction(context) {
        //1.返回Promise,给Promise设置then
        // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //     res.json().then(data => {
        //         console.log(data);
        //     })
        // }).then
        //2.Promise链式调用
        // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //     return res.json()
        // }).then(data => {
        //     console.log(data);
        // })

        //3.await/async
        // const res = await fetch("http://123.207.32.32:8000/home/multidata")
        // const data = await res.json()
        // // console.log(data);
        // // 修改state数据
        // context.commit("changeBanners",data.data.banner.list)
        // context.commit("changeRecommends",data.data.recommend.list)

        // return new Promise(async (resolve, reject) => {
        //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
        //     const data = await res.json()
        //     // console.log(data);
        //     // 修改state数据
        //     context.commit("changeBanners", data.data.banner.list)
        //     context.commit("changeRecommends", data.data.recommend.list)

        //     resolve("aaaaaa")
        // })
        // }
    },
    modules: {
        home: homeModule,
        counter: counterModule
    }
})

export default store