import * as types from '../types'
// state
const state = {
  openid: localStorage.getItem('openid') || ''
}

const mutations = {
  [types.SetUserinfo](state, result) {
    state.openid = result
    localStorage.setItem('openid', state.openid)
  }
}

export default {
  state,
  mutations
}
