<template>
  <div>
    <van-nav-bar title="激活" left-text="后退" left-arrow @click-left="$router.back()" />

    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="机主姓名" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="" label="身份证" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.phoneNo" placeholder="" label="※手机号码" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.shipNo" placeholder="" label="智能卡号" />
        </van-cell-group>
      </van-col>
      <van-col span="24" class="card-tip" @click.native="showDialog = true">查看示例</van-col>

      <van-col span="24" class="active-name">
        激活说明：
      </van-col>
      <van-col span="24" class="active-cnt">
        1. 如果您的电信志愿宝套餐卡号已完成线下激活，请填写电信志愿宝套餐手机号，免费开通志愿宝VIP服务功能，智能卡号可不填。
      </van-col>
      <van-col span="24" class="active-cnt">
        2. 如果您的电信志愿宝套餐卡号处于待激活状态，请填写能联系到您的手机号（您目前正在使用的手机号码并请保持通话畅通），以便在卡号激活过程中与您保持联系，并且填写智能卡号，以便确认您本人已接受到志愿宝套餐卡。
      </van-col>
      <van-col span="24" class="active-cnt">
        3. 如您没有接到电信的客服电话，通知您还需要补交某些信息，您的卡号将在1-5个工作日内自动完成激活。

      </van-col>
      <van-col span="24" class="active-tips">
        温馨提示：激活过程中如有问题请咨询线上客服或拨打10000号。
      </van-col>
      <van-col span="24" style="margin-top:20px;">
        <van-button type="primary" bottom-action class="btn" @click="handleSubmit" :disabled="btnDisabled">提交</van-button>
      </van-col>
    </van-row>

    <van-dialog v-model="showDialog" confirm-button-text="关闭">
      <img src="/static/imgs/card-tip.png" alt="">
    </van-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        phoneNo: '',
        shipNo: ''
      },
      showDialog: false,
      btnDisabled: true
    }
  },
  watch: {
    form: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.id === '' || val.name === '' || val.phoneNo === '') {
          this.btnDisabled = true
        } else {
          this.btnDisabled = false
        }
      }
    }
  },
  methods: {
    handleSubmit() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)

      vm.$api
        .activeCard(this.form)
        .then(res => {
          if (res.data.code == '200') {
            vm.$dialog
              .alert({
                message:
                  '您已成功提交激活信息，我们将在xx个工作日内为您完成激活，感谢您的选择和信任！'
              })
              .then(() => {
                vm.$router.push({ name: 'Home' })
              })
          } else {
            vm.$dialog
              .alert({
                message:
                  '您已成功开通志愿宝服务，现在您可以使用概率测试xx次，智能填报xx次，使用过程中有任何问题都可以在线咨询报考专家，祝您金榜题名、顺利录取！'
              })
              .then(() => {
                vm.$router.push({ name: 'Home' })
              })
          }

          vm.$store.commit(vm.$types.ShowLoading, false)
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.active-name,
.active-cnt,
.active-tips {
  color: #cc0000;
  font-size: 12px;
}

.active-name {
  padding: 10px;
}

.active-cnt,
.active-tips {
  padding: 0 10px;
}

.card-tip {
  text-align: center;
  font-size: 12px;
  padding: 10px;
  color: #0066ff;
}
</style>


