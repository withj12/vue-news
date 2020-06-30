import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import bus from '../utils/bus.js';
import { store } from '../store/index.js'        // vuex 연결

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',         
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: 'news', 
      // views/CreateListView.js로 컴포넌트 이름을 인자로 넘겨준다.
      // component: createListView('NewsView')  // hoc 하이오드 컴포넌트를 위한 코드
      component: NewsView, 
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // store/action.js
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();     // 스피너까지 실행하고 이동한다.
          })
          .catch((error) => {
            console.log(error);
          });

        // to에 인증값이 있으면 이동url로 가고 없으면 로그인으로 가라
        // if(to.auth) {
        //   next();
        // } else {
        //   router.replace('/login')
        // }
      }
    },
    {
      path: "/ask",
      name: 'ask', 
      // component: createListView('AskView')
      component: AskView, 
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            // bus.$emit('end:spinner');    ask컴포넌트에서 인스턴스 mounted에서 작동함
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: "/jobs",
      name: 'jobs', 
      // component: createListView('JobsView')
      component: JobsView, 
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next() )
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    }    
  ],
});