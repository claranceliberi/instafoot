export default {
  namespaced: true,
  state () {
    return {
      loadedLeagues: []
    }
  },
  mutations: {
    storeLoadedLeagues (state, d) {
      state.loadedLeagues = d
    }
  },
  actions: {},
  getters: {}
}
