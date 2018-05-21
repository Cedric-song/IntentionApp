import * as types from '../types'
// state
const state = {
  ShowFilter: false
}

const mutations = {
  [types.ShowFilter](state, result) {
    state.ShowFilter = result
  }
}

export default {
  state,
  mutations
}
