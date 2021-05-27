import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/direct'
import filter from './components/filter'

// 过滤器
for (let key in filter) {
  Vue.filter(key, filter[key]);
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
