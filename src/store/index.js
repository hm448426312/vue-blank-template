import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    userInfo(state, userInfo) {
      if (!state.userInfo) {
        state.userInfo = userInfo;
      } else {
        state.userInfo.name = userInfo.name;
      }
    }
  },
  actions: {
    userInfo({state, commit}, userInfo) {
      commit('userInfo', userInfo);
    }
  },
  modules: {
    order
  }
})
