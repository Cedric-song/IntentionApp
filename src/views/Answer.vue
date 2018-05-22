<template>
  <div class="answer">
    <van-nav-bar title="测试结果" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <wap-subtitle subtitle="高校信息" style="margin-top: 20px;"></wap-subtitle>

    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item">意向院校名称（代码）： 天津大学（00101）</van-col>
      <van-col span="24" class="info-item">录取概率： 87%</van-col>
      <van-col span="24" class="info-item item-red">学校热度：
        <van-rate class="rate" v-model="form.rating" :size="13" :count="5" disabled-color="#2ba" disabled/></van-col>
      <van-col span="24" class="info-item">院校级别： 985 + 211</van-col>
      <van-col span="24" class="info-item">所在省市： 天津</van-col>
      <van-col span="24" class="info-item">招办电话： 022-88886888</van-col>
      <van-col span="24" class="info-item">专业介绍： 计算机学院/法学院/体育学院</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">http://www.tju.edu.cn/</span>
      </van-col>
    </van-row>

    <wap-subtitle subtitle="历年招生人数及录取位次图" style="margin-top: 20px;"></wap-subtitle>

    <wap-subtitle subtitle="历年录取线差图" style="margin-top: 20px;"></wap-subtitle>
    <wap-history class="chart-item"></wap-history>
    <wap-subtitle subtitle="各专业录取对比图" style="margin-top: 20px;"></wap-subtitle>
    <wap-course class="chart-item"></wap-course>
    <wap-course class="chart-item" year="2016"></wap-course>
    <wap-course class="chart-item" year="2017"></wap-course>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        rating: 4
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.info {
  font-size: 13px;
  padding-top: 10px;
  .info-item {
    padding-top: 5px;
    &.item-red {
      color: red;
    }

    .item-blue {
      color: blue;
    }
  }

  .rate {
    display: inline-block;
    position: relative;
  }
}

.chart-item {
  margin-top: 20px;
}
</style>
