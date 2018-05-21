<template>
  <div class="test">
    <div class="title">录取概率测试(免费2次)</div>

    <van-row gutter="20" style="margin-top: 20px;">
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.score" placeholder="" label="分数" maxlength="3" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="文理" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="年份" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="省份" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="高中" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="意向院校" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field center v-model="form.sms" label="电话" placeholder="" icon="clear" @click-icon="showSms = true">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-col>

      <van-col span="24" v-if="showSms">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="短信验证码" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="showScore = false">确定</van-button>
      </van-col>

    </van-row>

  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      showSms: false
    }
  },
  methods: {
    handleSmsClick() {
      this.showSms = true
    }
  },
  created() {
    document.title = '非注册用户录取概率测试'
  }
}
</script>

<style lang="scss" scoped>
.test {
  height: 100vh;
  .title {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }
  .btn {
    margin-top: 20px;
  }
}
</style>

