function initialState () {
  return {
    active: false
  }
}

const state = initialState()

const namespaced = true

const mutations = {
  SET_ACTIVE: (state, val) => {
    state.active = val
  }
}

const actions = {
}

const getters = {
  active: (state) => state.active
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
