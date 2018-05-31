import * as types from '../types'
// state
const state = {
  Loading: false
}

const mutations = {
  [types.ShowLoading](state, result) {
    state.Loading = result
  }
}

export default {
  state,
  mutations
}
