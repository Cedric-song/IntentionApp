<template>
  <div class="pay">
    <van-nav-bar title="支付订单激活志愿宝" left-text="后退" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col span="24">
        <van-steps :active="step">
          <van-step>填写入网信息</van-step>
          <van-step>填写邮寄信息</van-step>
          <van-step>支付</van-step>
        </van-steps>
      </van-col>
    </van-row>
    <van-row :gutter="20" style="margin-top: 20px;">
      <van-col :span="24" class="bill">
        支付订单激活志愿宝
        <div>支付金额：¥300.00</div>
        <img :src="img" alt="" style="width:100%;">
      </van-col>
      <van-col :span="24">
        <van-button type="primary" bottom-action class="btn" @click="handlePay">去付款</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Img from '@/assets/imgs/pay.png'
export default {
  data() {
    return {
      img: Img,
      step: 2,
      list: [
        {
          name: '49元套餐',
          id: '1'
        },
        {
          name: '69元套餐',
          id: '2'
        }
      ],
      checked: ''
    }
  },
  methods: {
    handlePay() {
      this.$dialog
        .confirm({
          title: '去付款',
          message: '共计300元'
        })
        .then(() => {
          this.$toast.success('付款成功')
          this.$router.push({ name: 'PaySuccess' })
        })
        .catch(() => {
          this.$toast.fail('取消付款')
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.pay {
  text-align: center;
}

.bill {
  color: red;
  font-size: 20px;
  div {
    color: red;
  }
}
</style>

