import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: false,
    logged: false
  },
  getters: {
    getMode(state){
      return state.mode
    },
    getLogged(state){
      return state.logged
    }
  },
  mutations: {
    changeMode(state, m){
      state.mode = m
    },
    Logged(state, m){
      state.logged = m
    }
  },
  actions: {
  },
  modules: {
  }
})
