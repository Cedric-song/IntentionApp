import * as types from '../types'
// state
const defaultPhoneInfo = {
  money: '',
  number: '',
  numberid: ''
}

const state = {
  phoneInfo: localStorage.getItem('phoneInfo') ? JSON.parse(localStorage.getItem('phoneInfo')) : defaultPhoneInfo
}

const mutations = {
  [types.SavePhoneInfo](state, result) {
    state.phoneInfo = result
    localStorage.setItem('phoneInfo', JSON.stringify(state.phoneInfo))
  },
  [types.ClearPhoneInfo](state) {
    state.phoneInfo = defaultPhoneInfo
    localStorage.removeItem('phoneInfo')
  }
}

export default {
  state,
  mutations
}
