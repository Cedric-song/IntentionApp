<template>
  <div class="major-list">
    <van-nav-bar title="选择意向专业" left-text="返回" left-arrow @click-left="$router.push({name: 'Apply'})" />
    <van-row>
      <van-col :span="8">
        <van-cell-group>
          <van-cell :title="item.name" v-for="item in firstData" :key="item.id" @click="handleClickFirstCell(item)" :class="{'first-cell-active': firstAcitve === item.id}" />
        </van-cell-group>
      </van-col>
      <van-col :span="16">
        <van-cell-group>
          <van-cell :title="item.name" v-for="item in secondData" :key="item.id" :class="{'first-cell-active': secondActive === item.id}" @click.native="handleClick(item.name, item.code)" />
        </van-cell-group>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondActive: '',
      firstAcitve: '',
      firstData: [],
      secondData: []
    }
  },
  methods: {
    handleClick(name, code) {
      this.$router.push({
        name: 'Apply',
        query: Object.assign(this.$route.query, {
          major: name,
          majorCode: code
        })
      })
    },
    handleClickFirstCell(item) {
      this.secondData = item.children
      this.firstAcitve = item.id
      window.scrollTo(0, 0)
    },
    FetchData() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      vm.$api
        .GetMajorList()
        .then(res => {
          if (res.data.code == 200) {
            vm.$store.commit(vm.$types.GetMajorList, res.data.data.tree)
            vm.initMajorList(res.data.data.tree)
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
    },
    initMajorList(list) {
      this.firstData = list
      this.secondData = this.firstData[0].children
      this.firstAcitve = this.firstData[0].id
    }
  },
  created() {
    if (this.$store.state.major.MajorList.length !== 0) {
      this.initMajorList(this.$store.state.major.MajorList)
    } else {
      this.FetchData()
    }
  }
}
</script>
<style lang="scss" >
.major-list {
  .van-collapse-item__content {
    padding: 0;
  }
  .first-cell-active {
    background-color: rgba(28, 212, 174, 0.3);
    border-left: 4px solid #1cd4ae;
    box-sizing: border-box;
  }

  .second-cell-active {
    .van-cell__value {
      color: #1cd4ae;
    }
    .van-cell__right-icon {
      color: #1cd4ae;
    }
  }
}
</style>



