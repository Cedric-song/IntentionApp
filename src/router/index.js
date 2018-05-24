import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Score from '@/views/GetScore'
import Test from '@/views/Test'
import Mine from '@/views/Mine'
import History from '@/views/History'
import Verify from '@/views/Verify'
import Answer from '@/views/Answer'
import Qrcode from '@/views/Qrcode'
import Apply from '@/views/Apply'
import Report from '@/views/Report/Index'
import ReportItem from '@/views/Report/Item'
import OpenAccount from '@/views/OpenAccount/Index'
import PickAccount from '@/views/OpenAccount/Pick'
import PayAccount from '@/views/OpenAccount/Pay'
import UniversityList from '@/views/University/List'
import UniversityItem from '@/views/University/Item'
import MajorList from '@/views/Major/List'
import MajorItem from '@/views/Major/Item'


Vue.use(Router)

const router = new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: Qrcode
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/report/:id',
      name: 'ReportItem',
      component: ReportItem
    },
    {
      path: '/open-account',
      name: 'OpenAccount',
      component: OpenAccount
    },
    {
      path: '/open-account/pick',
      name: 'PickAccount',
      component: PickAccount
    },
    {
      path: '/open-account/pay',
      name: 'PayAccount',
      component: PayAccount
    },
    {
      path: '/university',
      name: 'UniversityList',
      component: UniversityList
    },
    {
      path: '/university/:id',
      name: 'UniversityItem',
      component: UniversityItem
    },
    {
      path: '/major',
      name: 'MajorList',
      component: MajorList
    },
    {
      path: '/major/:id',
      name: 'MajorItem',
      component: MajorItem
    }

  ]
})


router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

export default router
