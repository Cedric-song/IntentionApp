<template>
  <div>
    <van-nav-bar title="激活" left-text="后退" left-arrow @click-left="$router.back()" />

    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="机主姓名" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="身份证" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="※手机号码" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="快递单号" />
        </van-cell-group>
      </van-col>

      <van-col span="24" class="active-name">
        激活说明：
      </van-col>
      <van-col span="24" class="active-cnt">
        如果您的志愿宝套餐卡号已完成线下激活，请填写志愿宝套餐卡号，开通志愿宝服务功能，快递单号可不填。<br> 如果您的志愿宝套餐卡号处于待激活状态，请填写能联系到您的手机号，以便在卡号激活过程中与您保持联系。
      </van-col>
      <van-col span="24" class="active-tips">
        温馨提示：激活过程中如有问题请咨询10000号。
      </van-col>
      <van-col span="24" style="margin-top:20px;">
        <van-button type="primary" bottom-action class="btn" @click="handleSubmit">提交</van-button>
      </van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    handleSubmit() {
      // 您已成功开通志愿宝服务，现在您可以使用概率测试xx次，智能填报xx次，使用过程中有任何问题都可以在线咨询报考专家，祝您金榜题名、顺利录取！
      this.$dialog
        .alert({
          message:
            '您已成功提交激活信息，我们将在xx个工作日内为您完成激活，感谢您的选择和信任！'
        })
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.active-name,
.active-cnt,
.active-tips {
  color: red;
  font-size: 14px;
}

.active-name {
  padding: 20px;
}

.active-cnt,
.active-tips {
  padding: 0 20px;
}
</style>


