<template>
  <div style="text-align: center">
    <van-nav-bar title="专家解读" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col span="24" class="tips">
        测试结果看不懂？<br> 推荐报告有疑问？<br>志愿宝专家咨询热线随时为您答疑解惑，帮助您更好的读懂报告、了解数据的指导意义，做到心中有“数”、顺利报考。<br> 咨询专家请扫描下方二维码，添加咨询专家为好友。
      </van-col>
    </van-row>
    <img src="/static/imgs/expert-qr.jpg" alt="" style="width: 50%;margin-top: 50px;">
  </div>
</template>

<style lang="scss" scoped>
.tips {
  font-size: 16px;
  color: #cc0000;
  line-height: 30px;
  margin-top: 10px;
}
</style>

