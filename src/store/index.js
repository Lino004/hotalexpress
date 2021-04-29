import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listModalViewComponent: [],
    cookies: false
  },
  mutations: {
    ADD_TO_MODAL_VIEW: (state, val) => {
      const index = state.listModalViewComponent.findIndex(el => el === val)
      if (index === -1) {
        state.listModalViewComponent.push(val)
      }
    },
    REMOVE_TO_MODAL_VIEW: (state, val) => {
      const index = state.listModalViewComponent.findIndex(el => el === val)
      if (index !== -1) {
        state.listModalViewComponent.splice(index, 1)
      }
    },
    RESET_LIST_MODAL_VIEW: (state) => {
      state.listModalViewComponent = []
    },
    SET_COOKIES: (state, val) => {
      state.cookies = val
    }
  },
  actions: {
  },
  getters: {
    listModalViewComponent: (state) => state.listModalViewComponent,
    cookies: (state) => state.cookies
  },
  modules: {
    menu
  },
  plugins: [createPersistedState({
    key: 'holalexpress',
    paths: ['cookies']
  })]
})
