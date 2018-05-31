<template>
  <div>
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <img :src="item.img" alt="" style="width: 100%;">
    <wap-subtitle subtitle="专业介绍" class="pd"></wap-subtitle>
    <van-row>
      <van-col span="24" class="cnts">
        {{item.introduce}}
      </van-col>
    </van-row>
    <wap-subtitle subtitle="主修课程" class="pd"></wap-subtitle>
    <van-row>
      <van-col span="24" class="cnts">
        {{item.major}}
      </van-col>
    </van-row>
    <wap-subtitle subtitle="就业方向" class="pd"></wap-subtitle>

    <van-row>
      <van-col span="24" class="cnts">
        {{item.job}}
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    FetchData() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      vm.$api
        .GetMajorItem({ id: vm.$route.params.id })
        .then(res => {
          if (res.data.code == 200) {
            vm.item = res.data.data
          } else {
            vm.$dialog
              .alert({
                message: '获取数据失败，点击确定请稍后再试。'
              })
              .then(() => {
                vm.FetchData()
              })
          }
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
    }
  },
  created() {
    this.FetchData()
  }
}
</script>

<style lang="scss" scoped>
.pd {
  padding: 20px 0;
}

.cnts {
  color: #9e9e9e;
  font-size: 13px;
  text-indent: 2em;
}
</style>
