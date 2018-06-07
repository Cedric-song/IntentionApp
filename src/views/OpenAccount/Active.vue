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
          <!-- <van-field v-model="form.shipNo" placeholder="" label="智能卡号" maxlength="23" disabled/> -->
          <div class="ship-id">智能卡号</div>
          <div class="ship">
            <el-input size="mini" class="ship-input" :maxlength="4" type="tel" v-model="ship.no1" ref="ship1"></el-input>
            <el-input size="mini" class="ship-input" :maxlength="4" type="tel" v-model="ship.no2" ref="ship2"></el-input>
            <el-input size="mini" class="ship-input" :maxlength="4" type="tel" v-model="ship.no3" ref="ship3"></el-input>
            <el-input size="mini" class="ship-input" :maxlength="4" type="tel" v-model="ship.no4" ref="ship4"></el-input>
            <el-input size="mini" class="ship-input" :maxlength="3" type="tel" v-model="ship.no5" ref="ship5"></el-input>
          </div>
        </van-cell-group>
      </van-col>

      <van-col span="24" class="card-tip" @click.native="showDialog = true">查看示例</van-col>

      <van-col span="24" class="active-name">
        激活说明：
      </van-col>
      <van-col span="24" class="active-cnt">
        1. 如果您的“金榜题名卡”卡号已完成线下激活，请填写“金榜题名卡”手机号，免费开通志愿宝VIP服务功能，智能卡号可不填。
      </van-col>
      <van-col span="24" class="active-cnt">
        2. 如果您的“金榜题名卡”卡号处于待激活状态，请填写能联系到您的手机号（您目前正在使用的手机号码并请保持通话畅通），以便在卡号激活过程中与您保持联系，并且填写智能卡号，以确认您本人已接受到“金榜题名卡”。
      </van-col>
      <van-col span="24" class="active-cnt">
        3. 如您没有接到电信的客服电话，通知您还需要补交某些信息等，您的卡号将在1-5个工作日内自动完成激活。
      </van-col>
      <van-col span="24" class="active-tips">
        温馨提示：激活过程中如有问题请咨询线上客服或拨打10000号。
      </van-col>
      <van-col span="24" style="margin-top:20px;">
        <van-button type="primary" bottom-action class="btn" @click="handleSubmit" :disabled="btnDisabled">提交</van-button>
      </van-col>
    </van-row>

    <van-dialog v-model="showDialog" confirm-button-text="关闭">
      <img src="/static/imgs/card-tip.png" alt="" style="width: 100%;">
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
      ship: {
        no1: '',
        no2: '',
        no3: '',
        no4: '',
        no5: ''
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
    },
    ship: {
      deep: true,
      immediate: true,
      handler(val) {
        const vm = this
        for (let [key, value] of Object.entries(val)) {
          if (value.toString().length === 4) {
            const index = ~~key[2] + 1
            vm.$refs[`ship${index}`].focus()
          }
        }
      }
    }
  },
  methods: {
    handleSubmit() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      const params = {
        name: this.form.name,
        idCard: this.form.id,
        phoneNo: this.form.phoneNo,
        uimNo:
          this.ship.no1 +
          this.ship.no2 +
          this.ship.no3 +
          this.ship.no4 +
          this.ship.no5
      }
      vm.$api
        .ActiveCard(params)
        .then(res => {
          if (res.data.code == '200') {
            // '激活信息提交成功，感谢您的使用！'
            vm.$dialog
              .alert({
                message:
                  '您已成功开通志愿宝服务，现在您可以使用概率测试30次，智能填报5次，使用过程中有任何问题都可以在线咨询报考专家，祝您金榜题名、顺利录取！'
              })
              .then(() => {
                vm.$router.push({ name: 'Home' })
              })
          } else if (res.data.code == '500') {
            // '您已成功开通志愿宝服务，现在您可以使用概率测试30次，智能填报5次，使用过程中有任何问题都可以在线咨询报考专家，祝您金榜题名、顺利录取！'
            vm.$dialog
              .alert({
                message: res.data.message
              })
              .then(() => {
                // vm.$router.push({ name: 'Home' })
              })
          } else {
            vm.$toast.fail(res.data.message)
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
.ship {
  text-align: center;
  margin: 10px 0;
  padding-bottom: 20px;
  .ship-input {
    width: 65px;
    font-size: 16px;
  }
}

.ship-id {
  color: #333;
  font-size: 14px;
  width: 100%;
  text-align: center;
  padding: 10px 0 0 0;
}
</style>
<style lang="scss">
.el-input__inner {
  padding: 0 !important;
  text-align: center;
  font-size: 11px;
}
</style>



