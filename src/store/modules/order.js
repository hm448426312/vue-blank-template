const state = {
  orderInfo: null
};
// actions处理业务逻辑，调用mutation更改state的值
// actions通过dispatch调用，内部可异步
const actions = {
  orderInfo({state, commit, rootState}, orderInfo) {
    commit('orderInfo', orderInfo);
  }
};
// mutation更改state的值
// mutations通过commit调用，内部必须同步
const mutations = {
  orderInfo(state, orderInfo) {
    if (!state.orderInfo) {
      state.orderInfo = orderInfo;
    } else {
      state.orderInfo.name = orderInfo.name;
    }
  }
};
export default {
  // 命名空间，外部通过state、dispatch和commit调用，需要增加命名空间路径
  namespaced: true,
  state,
  actions,
  mutations
}
