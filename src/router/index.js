import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Score from '@/views/GetScore'
import Test from '@/views/Test/Test'
import Answer from '@/views/Test/Answer'
import SelectUniversity from '@/views/Test/SelectUniversity'

import Mine from '@/views/Mine/Mine'
import BillHistory from '@/views/Mine/BillHistory'
import ReportHistory from '@/views/Mine/ReportHistory'
import TestHistory from '@/views/Mine/TestHistory'
import Verify from '@/views/Verify'
import Qrcode from '@/views/Qrcode'
import Expert from '@/views/Expert'
import Apply from '@/views/Report/Apply'
import SelectMajor from '@/views/Report/SelectMajor'
import Report from '@/views/Report/Index'
import ReportList from '@/views/Report/List'
import ReportItem from '@/views/Report/Item'
import OpenAccount from '@/views/OpenAccount/Index'
import InputInfo from '@/views/OpenAccount/InputInfo'
import InputPersonInfo from '@/views/OpenAccount/InputPersonInfo'
import CompletePersonInfo from '@/views/OpenAccount/CompletePersonInfo'
import PayAccount from '@/views/OpenAccount/Pay'
import PaySuccess from '@/views/OpenAccount/Success'
import ActiveCard from '@/views/OpenAccount/Active'
import UniversityList from '@/views/University/List'
import UniversityItem from '@/views/University/Item'
import MajorList from '@/views/Major/List'
import MajorItem from '@/views/Major/Item'


Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      path: '/test/select-university',
      name: 'SelectUniversity',
      component: SelectUniversity
    },

    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/mine/bill-history',
      name: 'History',
      component: BillHistory
    },
    {
      path: '/mine/test-history',
      name: 'TestHistory',
      component: TestHistory
    },
    {
      path: '/mine/report-history',
      name: 'ReportHistory',
      component: ReportHistory
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
      path: '/expert',
      name: 'Expert',
      component: Expert
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/apply/select-major',
      name: 'SelectMajor',
      component: SelectMajor
    },
    {
      path: '/report-list/:id',
      name: 'Report',
      component: Report
    },
    {
      path: '/report-list',
      name: 'ReportList',
      component: ReportList
    },
    {
      path: '/report-item/:id',
      name: 'ReportItem',
      component: ReportItem
    },
    {
      path: '/open-account',
      name: 'OpenAccount',
      component: OpenAccount
    },
    {
      path: '/open-account/input-info',
      name: 'InputInfo',
      component: InputInfo
    },
    {
      path: '/open-account/input-person-info',
      name: 'InputPersonInfo',
      component: InputPersonInfo
    },
    {
      path: '/h5/pay',
      name: 'PayAccount',
      component: PayAccount
    },

    {
      path: '/open-account/success',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/open-account/active',
      name: 'ActiveCard',
      component: ActiveCard
    },
    {
      path: '/open-account/upload',
      name: 'CompletePersonInfo',
      component: CompletePersonInfo
    },
    {
      path: '/university',
      name: 'UniversityList',
      component: UniversityList,
      meta: {
        keepAlive: true
      }
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
      path: '/major/:code',
      name: 'MajorItem',
      component: MajorItem
    },
    {
      path: '*',
      redirect: '/'
    }

  ]
})


router.afterEach((to, from) => {
  if (to.name !== 'UniversityItem') {
    window.scrollTo(0, 0);
  }
})

export default router
