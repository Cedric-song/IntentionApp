<template>
  <div style="text-align: center">
    <van-nav-bar title="绑定手机号" left-text="首页" right-text="" left-arrow @click-left="$router.push({name: 'Home'})" />
    <van-row>
      <van-col span="24" style="position:relative;">
        <van-cell-group>
          <van-field v-model="form.number" placeholder="请输入11位手机号" label="手机号码" required maxlength="11" :error="numberError" :error-message="numberErrorMsg" />
        </van-cell-group>
        <van-button class="btn" type="primary" bottom-action @click="handlePost">确定</van-button>
      </van-col>
    </van-row>
  </div>
</template>


<script>
const _numberErrorMsg = '请输入正确的手机号码'
export default {
  data() {
    return {
      form: {},
      numberError: false,
      numberErrorMsg: ''
    }
  },
  watch: {
    'form.number': {
      handler(val, oldVal) {
        this.numberError = false
        this.numberErrorMsg = ''
      }
    }
  },
  methods: {
    validate() {
      let flag = true
      if (!RegExp(/^(1[0-9])[0-9]{9}$/).test(this.form.number)) {
        this.$toast.fail(_numberErrorMsg)
        this.numberErrorMsg = _numberErrorMsg
        this.numberError = true
        flag = false
      }

      return flag
    },
    handlePost() {
      if (!this.validate()) {
        return false
      }

      const vm = this
      this.$api.BindingPhone(param).then(res => {
        if (res.data.code == '200') {
          vm.$toast.success('绑定成功')
          vm.$router.push({ name: 'Home' })
        } else {
          vm.$toast.fail(res.data.message || '绑定失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

