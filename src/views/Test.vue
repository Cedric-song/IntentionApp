<template>
  <div class="test">
    <van-nav-bar title="录取概率测试" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <van-row gutter="20">
      <van-col span="24" class="subtitle">
        <div class="subname">智能分析录取概率</div>
        <div class="subname">精准预测目标学校录取概率</div>
        <div class="cnt">
          以近8年全省真实历史数据为支撑，通过全国建模大赛特级专家团队构建独家智能模型，全面展示录取位次历年差异，录取线差发展趋势，
          <span>独家测试提供各专业录取概率</span> ，真正实现大数据价值，让您从容报考、心中有“数”
        </div>
      </van-col>

      <!-- <van-col span="24">
        <img class="home-bg" src="@/assets/imgs/home.jpeg" alt="" @click="handleImgClick">
      </van-col> -->
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
          <van-field v-model="form.name" placeholder="" label="考生姓名" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="考号" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.province" placeholder="" label="考生生源地" disabled/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.score" placeholder="" label="分数" maxlength="3" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="目标学校名称" />
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
      form: {
        province: '吉林省'
      }
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
  margin-bottom: 10px;
  .btn {
    margin-top: 20px;
  }

  .radio {
    display: flex;
    padding: 10px;
    text-align: center;
    justify-content: space-evenly;
  }
  .subtitle {
    font-size: 20px;
    color: #ffcc66;
    padding-top: 10px;
    padding-bottom: 10px;
    .subname {
      text-align: center;
      &:nth-child(2) {
        color: #000;
        padding: 5px 0;
      }
    }
    .cnt {
      font-size: 11px;
      color: #9e9e9e;
      span {
        color: #ffcc66;
      }
    }
  }
}
</style>

