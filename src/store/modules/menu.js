function initialState () {
  return {
    active: false,
    activeMenuSingupLogin: false,
    modalMobileOpen: false
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
  },
  SET_MODAL_MOBILE_OPEN: (state, val) => {
    state.modalMobileOpen = val
  }
}

const actions = {
}

const getters = {
  active: (state) => state.active,
  activeMenuSingupLogin: (state) => state.activeMenuSingupLogin,
  modalMobileOpen: (state) => state.modalMobileOpen
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
