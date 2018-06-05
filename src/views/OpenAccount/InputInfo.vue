<template>
  <div class="enter-net-info">
    <van-nav-bar title="填写入网信息" left-text="后退" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="handlePost" />

    <van-row>
      <van-col span="24">
        <van-steps :active="step">
          <van-step>填写入网信息</van-step>
          <van-step>填写邮寄信息</van-step>
          <van-step>支付</van-step>
        </van-steps>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24" class="tips">
        温馨提示：请填写正确的身份证姓名和身份证号码，验证不通过的用户将无法购买号卡，请认真填写。<br> 如您的身份证已办理移动电话卡达5张，开通后可能无法正常使用，请您核对清楚后填写身份证信息。
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="请输入机主姓名" label="机主姓名" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="请输入机主身份证" label="身份证" required maxlength="18" :error="idError" :error-message="idErrorMsg" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请上传或拍摄身份证正面（照片面）照片：" value="" required/>
        </van-uploader>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请上传或拍摄身份证反面（国徽面）照片：" value="" required/>
        </van-uploader>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请拍摄手持身份证正面（国徽面）照片：" value="" required/>
        </van-uploader>
      </van-col>
      <span class="tip-red">手持身份证照片只允许调用摄像头拍摄，效果如下图</span>
      <van-col span="24">
        <van-checkbox v-model="tipCheck" class="into-tip" shape="square"></van-checkbox>
        <span class="into-tip">阅读并同意入网协议
          <span @click="$router.push({name: 'Tips'})">《 中国电信用户入网协议 》</span>
        </span>
      </van-col>
    </van-row>
  </div>
</template>


<script>
const _idErrorMsg = '请输入正确的身份证号'
export default {
  data() {
    return {
      step: 0,
      form: {},
      idError: false,
      idErrorMsg: '',
      tipCheck: true
    }
  },

  watch: {
    'form.id': {
      handler(val, oldVal) {
        this.idError = false
        this.idErrorMsg = ''
      }
    }
  },
  methods: {
    onRead() {},
    validate() {
      let flag = true
      if (!this.tipCheck) {
        this.$toast.fail('请阅读并同意入网协议')
        return false
      }

      if (
        !RegExp(
          /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        ).test(this.form.id)
      ) {
        this.$toast.fail(_idErrorMsg)
        this.idErrorMsg = _idErrorMsg
        this.idError = true
        flag = false
      }

      return flag
    },
    handlePost() {
      if (!this.validate()) {
        return false
      }

      const params = {
        name: this.form.name,
        id: this.form.id,
        img1: '1',
        img2: '11',
        img3: '1'
      }

      for (let [key, value] of Object.entries(params)) {
        if (!value) {
          this.$toast.fail(`请补全所有必填信息。`)
          return false
        }
      }

      this.$router.push({ name: 'InputPersonInfo' })
      // this.$api.SaveEnterInfo(params).then(res => {
      //   if (res.data.code == 200) {
      //     this.$router.push({ name: 'InputPersonInfo' })
      //   } else {
      //     this.$toast.fail(res.data.msg)
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
.enter-net-info {
  .tips {
    color: #cc0000;
    font-size: 11px;
    padding: 10px;
  }
  .into-tip {
    font-size: 12px;
    padding: 10px 0;
    color: #000;
    display: inline-block;
    vertical-align: middle;
    span {
      color: #0066ff;
    }
    .van-checkbox__icon {
      width: 12px;
      height: 12px;
      line-height: 1;
      font-size: 8px;
    }
  }
}
</style>
