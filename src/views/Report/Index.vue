<template>
  <div class="answer">
    <van-nav-bar title="志愿宝智能报告书" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <wap-subtitle subtitle="冲" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {id: item.id}}" />
    </van-list>

    <wap-subtitle subtitle="稳" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list1" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {id: item.id}}" />
    </van-list>

    <wap-subtitle subtitle="保" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list2" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {id: item.id}}" />
    </van-list>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [
        {
          name: '北京大学',
          percent: '60',
          id: '11'
        },
        {
          name: '清华大学',
          percent: '55',
          id: '12'
        }
      ],
      list1: [
        {
          name: '北京理工大学',
          percent: '90',
          id: '21'
        },
        {
          name: '北京化工大学',
          percent: '85',
          id: '22'
        }
      ],
      list2: [
        {
          name: '北京农学院',
          percent: '91',
          id: '31'
        },
        {
          name: '北京技术学院',
          percent: '90',
          id: '32'
        },
        {
          name: '北京职业学院',
          percent: '87',
          id: '33'
        }
      ]
    }
  },

  methods: {}
}
</script>
