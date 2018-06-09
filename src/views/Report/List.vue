<template>
  <div class="report-list">
    <van-nav-bar title="智能填报批次列表" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <van-cell-group>
      <van-cell title="本一批院校推荐列表" is-link :to="{name: 'Report',params: {id: 1}}" />
      <van-cell title="本二批院校推荐列表" is-link />
      <van-cell title="本三批院校推荐列表" is-link />
      <van-cell title="专科批院校推荐列表" is-link />
    </van-cell-group>
  </div>
</template>


<script>
export default {
  data() {
    return {}
  },

  methods: {}
}
</script>


<style lang="scss" scoped>
.report-list {
}
</style>
