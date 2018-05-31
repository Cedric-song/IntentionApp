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
      this.$api.GetMajorItem({ id: this.$route.params.id }).then(res => {
        if (res.data.code == 200) {
          this.item = res.data.data
        } else {
          this.$dialog
            .alert({
              message: '获取数据失败，点击确定请稍后再试。'
            })
            .then(() => {
              this.FetchData()
            })
        }
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
