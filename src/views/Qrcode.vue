<template>
  <div style="text-align: center">
    <van-nav-bar title="咨询热线" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col span="24" class="tips">
        如果您在志愿宝平台使用过程中有任何问题，欢迎您扫描下面二维码，添加在线客服为好友进行咨询。
      </van-col>
    </van-row>
    <img src="/static/imgs/qr.jpg" alt="" style="width: 50%;margin-top: 50px;">
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