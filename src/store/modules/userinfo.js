import * as types from '../types'
// state
const state = {
  openid: localStorage.getItem('openid') || '',
  bindingPhone: false
}

const mutations = {
  [types.SetUserinfo](state, result) {
    state.openid = result
    localStorage.setItem('openid', state.openid)
  },
  [types.BindingPhone](state, result) {
    state.bindingPhone = result
  }
}

export default {
  state,
  mutations
}
