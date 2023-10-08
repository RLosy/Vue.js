export default {
    state: () => ({
        //2.拿到服务器的数据
        banner: [], 
        recommend: [],
    }),
    mutations: {
        changeBanners(state, banners) {
            state.banners = banners
        },
        changeRecommends(state, recommends) {
            state.recommends = recommends
        }
    },
    actions:{
        async fetchHomeMultidataAction(context) {
            return new Promise(async (resolve, reject) => {
                const res = await fetch("http://123.207.32.32:8000/home/multidata")
                const data = await res.json()
                // console.log(data);
                // 修改state数据
                context.commit("changeBanners", data.data.banner.list)
                context.commit("changeRecommends", data.data.recommend.list)
    
                resolve("bbbbbbb")
            })
            }
    }
}