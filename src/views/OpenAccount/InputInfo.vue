<template>
  <div>
    <van-nav-bar title="填写入网信息" left-text="后退" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'InputPersonInfo'})" />

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
          <van-field v-model="form.name" placeholder="" label="机主姓名" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="身份证" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请上传身份证正面（照片面）照片：" value="" />
        </van-uploader>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请拍摄身份证反面（国徽面）照片：" value="" />
        </van-uploader>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onRead">
          <van-cell title="※请拍摄手持身份证正面（国徽面）照片：" value="" />
        </van-uploader>
      </van-col>

    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      step: 0,
      form: {}
    }
  },
  methods: {
    onRead() {}
  }
}
</script>


<style lang="scss" scoped>
.tips {
  color: red;
  font-size: 11px;
  padding: 10px;
}
</style>
