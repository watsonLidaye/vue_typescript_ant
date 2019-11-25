import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLeftMenu: true,
  },
  mutations: {
    showLeftMenu(state, status) {
      state.showLeftMenu = status
    },
  },
  actions: {
    showLeftMenu({
      commit
    }, status) {
      commit('showLeftMenu', status)
    },
  }
})
