<template>
  <div>
    <van-nav-bar title="答题有奖" right-text="提交" @click-right="handlePost" />
    <span>查看结果，提交表单数据</span>
    <van-cell :title="item.name" :value="`${item.id}-${item.label}`" v-for="(item,index) in list" :key="index" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: Object.values(this.$store.state.forJun.form)
    }
  },
  methods: {
    handlePost() {
      this.$toast.success('提交成功')
    }
  }
}
</script>

