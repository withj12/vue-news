import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchUserInfo, 
    fetchCommentItem, 
    fetchList 
} from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS({ commit }) {
    //     // api/index.js
    //     return fetchNewsList()
    //         .then(({ data }) => {
    //             commit('SET_NEWS', data);
    //             return data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // async
    async FETCH_NEWS(context) {
        // api/index.js
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }        
    }, 
    // FETCH_ASK의 try catch 처리는 fetchAskList()에서 함
    async FETCH_ASK({ commit }) {        
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;        
    }, 
    async FETCH_USER({ commit }, name) {
        try {
            const response = await fetchUserInfo(name);
            commit('SET_USER', response.data);
        } catch (error) {
            console.log(error);
        }
    }, 
    async FETCH_ITEM({ commit }, id) {
        try {
            const response = await fetchCommentItem(id);
            commit('SET_ITEM', response.data)
        } catch (error) {
            console.log(error);
        }
        
    }, 
    // 하이오더 컴포넌트를 위한
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    }, 
}