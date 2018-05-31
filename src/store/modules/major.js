import * as types from '../types'
// state
const state = {
  MajorList: []
}

const mutations = {
  [types.GetMajorList](state, result) {
    state.MajorList = result
  }
}

export default {
  state,
  mutations
}
