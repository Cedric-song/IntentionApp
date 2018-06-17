<template>
  <van-row gutter="20">
    <van-col span="24" class="subtitle">
      <i class="icon"></i>
      <span>{{subtitle}}</span>
      <slot></slot>
    </van-col>
  </van-row>
</template>


<script>
export default {
  props: {
    subtitle: ''
  }
}
</script>


<style lang="scss" scoped>
.subtitle {
  height: 20px;
  line-height: 20px;
  position: relative;

  span {
    vertical-align: top;
  }

  .icon {
    font-style: normal;
    display: inline-block;
    width: 4px;
    height: 20px;
    background: greenyellow;
  }
}
</style>
