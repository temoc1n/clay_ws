import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: true
  },
  getters: {
    getMode(state){
      return state.mode
    }
  },
  mutations: {
    changeMode(state, m){
      state.mode = m
    }
  },
  actions: {
  },
  modules: {
  }
})
