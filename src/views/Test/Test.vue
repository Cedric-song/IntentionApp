<template>
  <div class="test">
    <van-nav-bar title="录取概率测试" left-text="首页" right-text="" left-arrow @click-left="$router.push({name: 'Home'})" />

    <van-row gutter="20">
      <van-col span="24" class="subtitle">
        <div class="subname">精准预测目标学校录取概率</div>
        <div class="cnt">
          全国建模大赛特级专家团队构建专利级算法模型，独家预测提供各专业录取概率，推荐十大“靠谱专业”（录取概率最高的前十专业）
        </div>
      </van-col>
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
          <van-field v-model="form.name" placeholder="请输入考生姓名" label="考生姓名" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="请输入考生考号" label="考号" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="provinceName" placeholder="" label="考生生源地" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.score" placeholder="请输入考生分数" label="分数" type="tel" maxlength="3" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group class="sg-form">
          <!-- <van-field v-model="form.university" placeholder="" label="目标学校名称" required /> -->
          <van-cell title="目标学校名称" required :to="{name: 'SelectUniversity',query: form}" :value="form.university" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <div class="times-tip">当前剩余次数：{{times}}次</div>
      </van-col>
      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="handleConfirm" :disabled="btnDisabled">确定</van-button>
      </van-col>

    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      provinceName: '吉林省',
      form: {
        province: '220000',
        category: '1',
        name: '',
        score: '',
        university: '',
        id: ''
      },
      times: '',
      btnDisabled: true
    }
  },
  methods: {
    handleConfirm() {
      const _score = Number(this.form.score)
      if (_score > 1000 || _score < 0 || this.form.score.includes('.')) {
        this.$toast.fail('分数一栏请输入真实有效整数分数。')
        return false
      }
      this.$dialog
        .confirm({
          title: '确认测试',
          message: '每次测试将消耗一点次数'
        })
        .then(() => {
          this.handleAction()
        })
        .catch(() => {
          this.$toast.fail('取消测试')
        })
    },
    handleAction() {
      const vm = this
      const param = Object.assign(
        {
          wx_id: this.$store.state.userinfo.openid
        },
        this.form
      )
      this.$store.commit(this.$types.ShowLoading, true)
      this.$api.TestUniversity(param).then(res => {
        if (res.data.code == '200') {
          if (res.data.data.hasAnswer === 0) {
            vm.$toast.fail('测试无结果')
          } else {
            vm.$router.push({
              name: 'Answer',
              query: { id: res.data.data.userTestId }
            })
          }
        } else {
          vm.$toast.fail(res.data.message)
        }

        vm.$store.commit(vm.$types.ShowLoading, false)
      })
    }
  },
  created() {
    this.$store.commit(this.$types.ShowLoading, true)
    for (let [key, value] of Object.entries(this.form)) {
      if (this.$route.query[key]) {
        this.form[key] = this.$route.query[key]
      }
    }

    if (!this.form.category) {
      this.form.category = '1'
    }

    const vm = this

    this.$api
      .GetTestTime({ wxId: this.$store.state.userinfo.openid })
      .then(res => {
        if (res.data.code == '200') {
          vm.times = res.data.data.useNum
        } else {
          vm.$toast.fail(res.data.message)
        }
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
  },

  watch: {
    form: {
      deep: true,
      immediate: true,
      handler(val) {
        if (Object.keys(val).length === 0) {
          this.btnDisabled = true
        } else if (
          val.id === '' ||
          val.name === '' ||
          val.university === '' ||
          val.score === ''
        ) {
          this.btnDisabled = true
        } else {
          this.btnDisabled = false
        }
      }
    }
  }
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
    color: #cc0000;
    padding-top: 10px;
    padding-bottom: 10px;
    .subname {
      text-align: center;
      padding: 15px;
      &:nth-child(2) {
        color: #000;
        padding: 5px 0;
      }
    }
    .cnt {
      font-size: 13px;
      color: #333333;
      span {
        color: #cc0000;
      }
    }
  }
}
</style>

