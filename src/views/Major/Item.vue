<template>
  <div>
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <section v-for="(item) in formArr" :key="item.name">
      <wap-subtitle :subtitle="item.name" class="pd"></wap-subtitle>
      <van-row>
        <van-col span="24" class="cnts">
          {{item.value}}
        </van-col>
      </van-row>
    </section>
    <section v-show="formArr.length === 0" class="no-data" :class="{'show-data': !$store.state.loading.Loading }">
      暂无数据
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formArr: []
    }
  },
  methods: {
    initData(arr) {
      const vm = this
      vm.formArr = []
      arr.map(item => {
        if (item.trim() !== '' && item.includes('：')) {
          const _it = item.trim().split('：')
          vm.formArr.push({
            name: _it[0],
            value: _it[1]
          })
        }
      })
    },
    FetchData() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      vm.$api
        .GetMajorItem({ code: vm.$route.params.code })
        .then(res => {
          if (res.data.code == 200) {
            // vm.item = res.data.data
            vm.initData(res.data.data.professionRemark.split('<br>'))
          } else {
            vm.$dialog
              .alert({
                message: '获取数据失败，点击确定请稍后再试。'
              })
              .then(() => {
                // vm.FetchData()
                vm.$router.back()
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
  color: #333333;
  font-size: 13px;
  text-indent: 1em;
}

.no-data {
  text-align: center;
  margin-top: 40vh;
  display: none;
  &.show-data {
    display: block;
  }
}
</style>
