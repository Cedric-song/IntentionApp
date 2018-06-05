import * as types from '../types'
// state
const state = {
  search: ''
}

const mutations = {
  [types.SetFilter](state, result) {
    state.search = result.search
  }
}

export default {
  state,
  mutations
}
