<template>
  <div class="major-list">
    <van-nav-bar title="专业大全" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col :span="8">
        <van-cell-group>
          <van-cell :title="item.name" v-for="item in firstData" :key="item.id" @click="handleClickFirstCell(item)" :class="{'first-cell-active': firstAcitve === item.id}" />
        </van-cell-group>
      </van-col>
      <van-col :span="16">
        <van-collapse v-model="secondActive" accordion>
          <van-collapse-item :title="item.name" :name="item.id" v-for="item in secondData" :key="item.id" :class="{ 'second-cell-active': secondActive === item.id}">
            <div slot="default">
              <van-cell-group class="second-cell">
                <van-cell v-for="it in item.children" :key="it.code" :title="it.name" :to="{name: 'MajorItem',params: {code: it.code },query: {name: it.name} }" />
              </van-cell-group>
            </div>
          </van-collapse-item>
        </van-collapse>
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



