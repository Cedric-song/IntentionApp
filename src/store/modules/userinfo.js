import * as types from '../types'
// state
const state = {
  openid: ''
}

const mutations = {
  [types.SetUserinfo](state, result) {
    state.openid = result
  }
}

export default {
  state,
  mutations
}
