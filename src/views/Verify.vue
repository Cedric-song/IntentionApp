<template>
  <div>
    <van-nav-bar title="用户认证" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row :gutter="20" style="margin-top: 20px;">
      <van-col :span="24">
        <van-radio-group v-model="radio">
          <van-radio name="1">身份证验证</van-radio>
          <van-radio name="2">准考证验证</van-radio>
          <van-radio name="3">手机号验证</van-radio>
        </van-radio-group>
      </van-col>

      <van-col :span="24" style="margin:20px 0;">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入身份证" label="身份证" v-if="radio === '1'" />
          <van-field v-model="value" placeholder="请输入准考证" label="准考证" v-else-if="radio === '2'" />
          <van-field v-model="value" placeholder="请输入手机号" label="手机号" v-else />
        </van-cell-group>
      </van-col>

      <van-button type="primary" bottom-action>确认 </van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      value: ''
    }
  },
  watch: {
    radio(val, oldVal) {
      this.value = ''
    }
  }
}
</script>

