function initialState () {
  return {
    active: false,
    activeMenuSingupLogin: false
  }
}

const state = initialState()

const namespaced = true

const mutations = {
  SET_ACTIVE: (state, val) => {
    state.active = val
  },
  SET_ACTIVE_MENU_SINGUP_LOGIN: (state, val) => {
    state.activeMenuSingupLogin = val
  }
}

const actions = {
}

const getters = {
  active: (state) => state.active,
  activeMenuSingupLogin: (state) => state.activeMenuSingupLogin
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
