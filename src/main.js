// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './api'
import './data'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(Vant)


import {
  Lazyload
} from 'vant'

Vue.use(Lazyload, {
  preload: '100%'
})

import wx from 'weixin-js-sdk'
Vue.prototype.$wx = wx

import _ from 'lodash'

Vue.prototype.$api = axios
Vue.prototype.$_ = _

import '@/assets/font/iconfont.js'
import '@/assets/styles/main.scss'

if (process.env.NODE_ENV === 'production') {
  console.log(`Package time: ${PACKAGE_TIME}`)
}

import * as types from '@/store/types'
Vue.prototype.$types = types

import './components/RegisterComponents'

Vue.config.productionTip = false


import {
  Table,
  TableColumn,
  Input,
  InputNumber
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)

import VeHistogram from 'v-charts/lib/histogram'
import VeBar from 'v-charts/lib/bar'
import VeLine from 'v-charts/lib/line'
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeBar.name, VeBar)
Vue.component(VeLine.name, VeLine)

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
