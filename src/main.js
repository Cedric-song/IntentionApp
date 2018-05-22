// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
// import ECharts from 'vue-echarts/components/ECharts.vue'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/map'
// import 'echarts/lib/chart/radar'
// import 'echarts/lib/chart/scatter'
// import 'echarts/lib/chart/effectScatter'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/component/geo'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/visualMap'
// import 'echarts/lib/component/dataset'

// Vue.component('chart', ECharts)

import VCharts from 'v-charts'

import '@/assets/font/iconfont.js'

import '@/assets/styles/main.scss'
import moment from 'moment'
Vue.prototype.$moment = moment
import * as types from '@/store/types'
Vue.prototype.$types = types

import './components/RegisterComponents'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
