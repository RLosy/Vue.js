const counter = {
    //命名空间 局部
    namespaced:true,
    state: () => ({
        count: 99
    }),
    mutations: {
        incrementCount(state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state, getters, rootstate) {
            return state.count + rootstate.rootCounter
        }
    },
    actions: {
        incrementCountAction(context) {
            context.commit("incrementCount")
        }
    }
}
export default counter