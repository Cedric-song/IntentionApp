<template>
  <div class="test">
    <!-- <div class="title">录取概率测试(免费2次)</div> -->
    <van-nav-bar title="录取概率测试(免费2次)" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <van-row gutter="20">
      <van-col span="24">
        <van-cell-group>
          <van-radio-group v-model="form.category" class="radio">
            <van-radio name="1" style="padding:0 10px;">文科</van-radio>
            <van-radio name="2" style="padding:0 10px;">理科</van-radio>
          </van-radio-group>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.score" placeholder="" label="分数" maxlength="3" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.year" placeholder="" label="年份" @click="showYears = true" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="省份" @click="showProvince = true" />
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
        <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'Answer'})">确定</van-button>
      </van-col>

      <van-popup v-model="showYears" position="bottom" :overlay="false">
        <van-picker :columns="years" @confirm="onConfirmYears" />
      </van-popup>
      <van-popup v-model="showProvince" position="bottom" :overlay="false">
        <van-picker :columns="provinces" @confirm="onConfirmYears" />
      </van-popup>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      years: [2019, 2018],
      provinces: ['北京', '天津', '上海'],
      showYears: false,
      showSms: false,
      showProvince: false
    }
  },
  methods: {
    handleSmsClick() {
      this.showSms = true
    },
    onConfirmYears(value, index) {
      this.form.year = value
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
  .btn {
    margin-top: 20px;
  }

  .radio {
    display: flex;
    padding: 10px;
    text-align: center;
    justify-content: space-evenly;
  }
}
</style>

