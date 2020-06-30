import Vue from 'vue';
import Vuex from "vuex";
import mutations from './mutations.js';
import actions from './actions.js';
// import getters from './getters.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [], 
        jobs: [], 
        ask: [], 
        user: {}, 
        item: {}, 
        list: [],        // news: [] jobs: [] ask: [] 묶음
    }, 
    // computed와 동일한 속성.
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }, 
        fetchedItem(state) {
            return state.item;
        }
    },
    // mutations - state에 데이터 전달 역할
    mutations, 
    // API 모음
    actions 
});