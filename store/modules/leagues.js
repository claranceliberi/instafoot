export default {
  namespaced: true,
  state () {
    return {
      loadedLeagues: []
    }
  },
  mutations: {
    storeLoadedLeagues (state, d) {
      console.log(d,'loaded')
      state.loadedLeagues = d
    }
  },
  actions: {},
  getters: {}
}
