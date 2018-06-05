<template>
  <div class="success">
    <van-nav-bar title="完成开卡" left-text="后退" right-text="完成" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'Home'})" />
    <van-row>
      <van-col span="24" class="info">
        您已成功开通志愿宝服务，现在您可以使用概率测试30次，智能填报5次，使用过程中有任何问题都可以在线咨询报考专家，祝您金榜题名、顺利录取！
      </van-col>
      <van-col span="24" class="tips">
        温馨提示：请您在收到志愿宝套餐卡后尽快在志愿宝首页点击
        <a href="javascript:;" @click="$router.push({name: 'ActiveCard'})">激活</a> ，以便正常享受话费返还优惠，您也可到以下
        <a href="http://www.10010.com/">营业厅</a> 线下开卡激活。如有问题请咨询10000号。
      </van-col>
    </van-row>
  </div>
</template>

<style lang="scss" scoped>
.success {
  .info {
    color: #cc0000;
    font-size: 20px;
    padding: 20px;
  }

  .tips {
    color: #cc0000;
    a {
      color: #0066ff;
      text-decoration: underline;
    }
  }
}
</style>

