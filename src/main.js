// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './api'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Lazyload
} from 'vant'
Vue.use(Lazyload, {
  preload: '100%'
})

import _ from 'lodash'

Vue.prototype.$api = axios
Vue.prototype.$_ = _

import VCharts from 'v-charts'

import '@/assets/font/iconfont.js'
import '@/assets/styles/main.scss'
import moment from 'moment'
Vue.prototype.$moment = moment
import * as types from '@/store/types'
Vue.prototype.$types = types

import './components/RegisterComponents'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VCharts)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
