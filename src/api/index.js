import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const qs = require('qs')

// axios.defaults.timeout = 30000
if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'http://www.cxnb-bj.com/zhiling/'
}

const config = {
  headers: {
    'Content-Type': 'form-data'
  }
}

const SpecConfig = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
}
Vue.use(VueAxios, axios)

export default {
  GetOpenId(params) {
    return Vue.axios.get('/wx/toOauth.do', {
      params: params
    })
  },
  GetUniversityList(params) {
    return Vue.axios.get('/v1/getUniversity.do', {
      params: params
    })
  },
  GetUniversityById(params) {
    return Vue.axios.get('/v1/getUniversityById.do', {
      params: params
    })
  },
  GetMajorList() {
    return Vue.axios.get('/v1/getMajor.do', {})
  },
  GetMajorItem(params) {
    return Vue.axios.get('/v1/getMajorByCode.do', {
      params: params
    })
  },
  GetScore(params) {
    return Vue.axios.post('/v1/getScore.do', qs.stringify(params))
  },
  GetPhoneNumber(params) {
    return Vue.axios.get('/v1/getNumbers.do', {
      params: params
    })
  },
  SaveBaseInfo(params) {
    return Vue.axios.get('/v1/baseInfo.do', {
      params: params
    })
  },
  SaveEnterInfo(params) {
    return Vue.axios.get('/v1/enterInfo.do', {
      params: params
    })
  },
  SaveShipInfo(params) {
    return Vue.axios.get('/v1/shipInfo.do', {
      params: params
    })
  },
  ActiveCard(params) {
    return Vue.axios.get('/v1/active.do', {
      params: params
    })
  },
  PayAction(params) {
    return Vue.axios.get('/wx/pay.do', {
      params: params
    })
  },
  uploadImg(params) {
    return Vue.axios.post('/v1/upload.do', params, config)
  },
  GetWxConfig(params) {
    return Vue.axios.get('/wx/getWxConfig.do', {
      params: params
    })
  },
  TestUniversity(params) {
    return Vue.axios.post('/v1/test.do', qs.stringify(params), SpecConfig)
  },
  GetTestAnswerById(params) {
    return Vue.axios.post('/v1/getTestById.do', qs.stringify(params))
  },
  GetTestTime(params) {
    return Vue.axios.post('/v1/getTestTime.do', qs.stringify(params))
  },
  GetPayHistory(params) {
    return Vue.axios.post('/v1/hisPayList.do', qs.stringify(params))
  },
  // Report 
  TestReport(params) {
    return Vue.axios.post('/v1/reportTest.do', qs.stringify(params))
  },
  GetReportById(params) {
    return Vue.axios.post('/v1/getReportById.do', qs.stringify(params))
  },
  GetReportUniversity(params) {
    return Vue.axios.post('/v1/getReportUniversityList.do', qs.stringify(params))
  },

  GetReportList(params) {
    return Vue.axios.post('/v1/getReportList.do', qs.stringify(params))
  },
  GetTestList(params) {
    return Vue.axios.post('/v1/getTestList.do', qs.stringify(params))
  },
  CompletePersonInfo(params) {
    return Vue.axios.post('/v1/additionalEnterInfo.do', qs.stringify(params))
  },
  BindingPhone(params) {
    return Vue.axios.post('/v1/bindingPhone.do', qs.stringify(params))
  }
}
