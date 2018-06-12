<template>
  <div class="history">
    <van-nav-bar title="智能填报记录" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row :gutter="20" style="margin-top:20px;">
      <van-col :span="24">
        <van-list :finished="finished" @load="onLoad">
          <van-cell v-for="item in list" :key="item.createTime" :title="item.createTime + ''" :value="`${item.score}分-${item.typeName}`" :to="{'name': 'ReportList','query': { userTestId: item.id }}" />
        </van-list>
        <div v-if="list.length === 0" style="text-align:center;"> {{noDataMsg}} </div>

      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      noDataMsg: ''
    }
  },

  methods: {
    onLoad() {}
  },

  created() {
    const vm = this
    vm.$store.commit(vm.$types.ShowLoading, true)
    this.$api
      .GetReportList({ wx_id: this.$store.state.userinfo.openid })
      .then(res => {
        if (res.data.code == '200') {
          vm.list = res.data.data
        } else {
          vm.$toast.fail(`${res.data.message}`)
        }
        if (vm.list.length === 0) {
          vm.noDataMsg = '暂无数据'
        }
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
  }
}
</script>
