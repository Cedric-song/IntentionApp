<template>
  <div class="history">
    <van-nav-bar title="购买记录" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row :gutter="20" style="margin-top:20px;">
      <van-col :span="24">
        <van-list :finished="finished" @load="onLoad">
          <van-cell v-for="item in list" :key="item.orderNo" :title="item.payTime + ''" :value="`¥ ${item.payAmt}`" />
        </van-list>
        <div v-if="list.length === 0" style="text-align:center;"> 暂无数据 </div>
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
      finished: false
    }
  },

  methods: {
    onLoad() {},
    getHistory() {
      const vm = this
      const param = {
        wxId: this.$store.state.userinfo.openid
      }

      vm.$store.commit(vm.$types.ShowLoading, true)
      this.$api.GetPayHistory(param).then(res => {
        if (res.data.code == '200') {
          vm.list = res.data.data
        } else {
          vm.$toast.fail(`${res.data.message}`)
        }

        vm.$store.commit(vm.$types.ShowLoading, false)
      })
    }
  },
  created() {
    this.getHistory()
  }
}
</script>
