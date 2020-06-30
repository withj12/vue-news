import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';   // 컴포넌트 연결
import { store } from './store/index.js'        // vuex 연결

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, 
  store
}).$mount('#app')
