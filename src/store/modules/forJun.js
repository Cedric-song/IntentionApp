import * as types from '../types'
// state
const state = {
  form: {}
}

const mutations = {
  [types.SaveAnswer](state, result) {
    state.form[result.name] = {
      id: result.id,
      label: result.label,
      name: result.name
    }
  }
}

export default {
  state,
  mutations
}
