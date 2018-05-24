import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Score from '@/views/GetScore'
import Test from '@/views/Test'
import Mine from '@/views/Mine/Mine'
import BillHistory from '@/views/Mine/BillHistory'
import ReportHistory from '@/views/Mine/ReportHistory'
import TestHistory from '@/views/Mine/TestHistory'
import Verify from '@/views/Verify'
import Answer from '@/views/Answer'
import Qrcode from '@/views/Qrcode'
import Expert from '@/views/Expert'
import Apply from '@/views/Apply'
import Report from '@/views/Report/Index'
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
      path: '/open-account/pay',
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
