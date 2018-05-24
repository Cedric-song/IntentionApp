<template>
  <div class="history">
    <van-nav-bar title="智能填报记录" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row :gutter="20" style="margin-top:20px;">
      <van-col :span="24">
        <van-list :finished="finished" @load="onLoad">
          <van-cell v-for="item in list" :key="item.time" :title="item.time + ''" :value="'¥ ' +item.cost" />
        </van-list>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          time: '2018-06-06 20:00:00',
          cost: ''
        },
        {
          time: '2018-06-06 19:00:00',
          cost: ''
        }
      ],
      loading: false,
      finished: false
    }
  },

  methods: {
    onLoad() {
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   this.loading = false
      //   if (this.list.length >= 40) {
      //     this.finished = true
      //   }
      // }, 500)
    }
  }
}
</script>
