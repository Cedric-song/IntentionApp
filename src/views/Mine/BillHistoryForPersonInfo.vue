<template>
  <div class="history">
    <van-nav-bar title="上传照片信息记录" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row :gutter="20" style="margin-top:20px;">
      <van-col :span="24">
        <van-list :finished="finished" @load="onLoad">
          <van-cell v-for="item in list" :key="item.tradeNo" :title="`${item.phoneNo}`" label="电话号码" @click="handleClick(item)" is-link />
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
      form: {},
      noDataMsg: ''
    }
  },

  methods: {
    onLoad() {},
    handleClick(item) {
      this.$router.push({ name: 'CompletePersonInfo', query: item })
    },
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
        if (vm.list.length === 0) {
          vm.noDataMsg = '暂无数据'
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
