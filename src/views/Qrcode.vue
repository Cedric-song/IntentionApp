<template>
  <div style="text-align: center">
    <van-nav-bar title="咨询热线" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col span="24" class="tips">
        为了服务广大吉林省考生，吉林电信为每一名考生都提供了2次录取概率预测、1次智能报告推荐的免费服务和院校查询、专业查询的不限次服务，如果您还需要更多次数的概率测试和智能填报服务，欢迎您在志愿宝平台点击“开卡”，成为电信用户，免费使用志愿宝平台。 如果您在开卡或激活的过程中有任何问题，欢迎您扫描下面二维码，添加在线客服为好友，也可拨打10000号。

      </van-col>
    </van-row>
    <img src="@/assets/imgs/qrcode.png" alt="" style="width: 50%;margin-top: 50px;">
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