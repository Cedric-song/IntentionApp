import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.timeout = 30000

Vue.use(VueAxios, axios)

// getMajor
// getMajorById
// getScore
// getNumbers
export default {
  GetUniversityList(params) {
    return Vue.axios.get('/v1/getUniversity', {
      params: params
    })
  },
  GetMajorList() {
    return Vue.axios.get('/v1/getMajor', {})
  },
  GetMajorItem(params) {
    return Vue.axios.get('/v1/getMajorById', {
      params: params
    })
  },
  GetScore(params) {
    return Vue.axios.post('/v1/getScore', params)
  },
  GetPhoneNumber() {
    return Vue.axios.get('/v1/getNumbers')
  },
  SaveBaseInfo(params) {
    return Vue.axios.post('/v1/baseInfo', params)
  },
  SaveEnterInfo(params) {
    return Vue.axios.post('/v1/enterInfo', params)
  },
  SaveShipInfo(params) {
    return Vue.axios.post('/v1/shipInfo', params)
  }
}
