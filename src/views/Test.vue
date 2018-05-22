<template>
  <div class="test">
    <!-- <div class="title">录取概率测试(免费2次)</div> -->
    <van-nav-bar title="录取概率测试" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <van-row gutter="20">
      <van-col span="24">
        <img class="home-bg" src="@/assets/imgs/home.jpeg" alt="" @click="handleImgClick">

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

      <!-- <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.year" placeholder="" label="年份" @click="showYears = true" />
        </van-cell-group>
      </van-col> -->

      <!-- <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="生源所在地" @click="showProvince = true" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="高中" />
        </van-cell-group>
      </van-col> -->

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="意向院校" />
        </van-cell-group>
      </van-col>

      <!-- <van-col span="24">
        <van-cell-group>
          <van-field center v-model="form.sms" label="电话" placeholder="" icon="clear" @click-icon="showSms = true">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-col> -->

      <van-col span="24" v-if="showSms">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="短信验证码" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="handleConfirm">确定</van-button>
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
    handleImgClick() {
      // 如果有用户信息去选号。如果没有用户信息，就去认证信息页。
      this.$router.push({ name: 'OpenAccount' })
    },
    handleConfirm() {
      this.$dialog
        .confirm({
          title: '确认测试',
          message: '每次测试将消耗一点积分'
        })
        .then(() => {
          this.$router.push({ name: 'Answer' })
        })
        .catch(() => {
          this.$toast.fail('取消测试')
        })
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.home-bg {
  width: 100%;
  margin-bottom: 20px;
}
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

