import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.timeout = 30000

Vue.use(VueAxios, axios)

export default {
  Login(params) {
    return Vue.axios.post('/admin/login', params)
  }
}
