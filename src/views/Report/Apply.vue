<template>
  <div class="apply">
    <van-nav-bar title="智能填报" left-text="首页" right-text="" left-arrow @click-left="$router.push({name: 'Home'})" />
    <van-row gutter="20">
      <van-col span="24" class="subtitle">
        <div class="subname">智能报考 一键生成</div>
        <div class="cnt">
          从2000多所高校中精准锁定目标，冲稳保三个梯度推荐，系统规划志愿结构，降低落榜风险，提高考分价值。
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
          <van-field v-model="form.score" placeholder="请输入考生分数" label="分数" type="tel" maxlength="3" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.local" placeholder="" label="生源所在地" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-cell title="院校所在省份" :value="form.provinceText" class="sg-form" :to="{name: 'SelectProvince',query: form}" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-cell title="院校级别" :value="form.levelText" class="sg-form" :to="{name: 'SelectLevel',query: form}" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <div class="times-tip">当前剩余次数：{{times}}次</div>
      </van-col>
      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="handleConfirm" :disabled="btnDisabled">确定</van-button>
      </van-col>

    </van-row>
    <van-row :gutter="20">
      <van-col span="24" class="tip-red">
        操作提示：若无特别需要可不填院校所在省市、院校级别、意向专业，以保证推荐结果全面
      </van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showCityPicker: false,
      showLevelPicker: false,
      btnDisabled: false,
      form: {
        local: '吉林省',
        localId: '220000',
        category: '1',
        levelText: '',
        level: '',
        provinceText: '',
        provinceId: '',
        score: '',
        id: '',
        name: ''
      },
      times: ''
    }
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        if (val.id === '' || val.score === '' || val.name === '') {
          this.btnDisabled = true
        } else {
          this.btnDisabled = false
        }
      },
      immediate: true
    }
  },
  methods: {
    onConfirm(value, index) {
      this.form.provinceId = value.id
      this.form.provinceText = value.text
      this.showCityPicker = false
    },
    onCancel() {
      this.showCityPicker = false
    },
    onLevelConfirm(value, index) {
      this.form.level = value.id
      this.form.levelText = value.text
      this.showLevelPicker = false
    },
    onLevelCancel() {
      this.showLevelPicker = false
    },
    handleLocalClick() {},
    handleConfirm() {
      const _score = Number(this.form.score)
      if (_score > 1000 || _score < 0 || this.form.score.includes('.')) {
        this.$toast.fail('分数一栏请输入真实有效整数分数。')
        return false
      }
      this.$dialog
        .confirm({
          title: '确认使用智能填报',
          message: '每次测试将消耗一点积分'
        })
        .then(() => {
          this.confirmAction()
        })
        .catch(() => {
          this.$toast.fail('取消测试')
        })
    },
    confirmAction() {
      const vm = this
      const param = {
        wx_id: this.$store.state.userinfo.openid,
        category: this.form.category,
        localId: this.form.localId,
        provinceId: this.form.provinceId,
        level: this.form.level,
        score: this.form.score,
        name: this.form.name,
        id: this.form.id
      }

      this.$store.commit(this.$types.ShowLoading, true)

      this.$api.TestReport(param).then(res => {
        if (res.data.code == '200') {
          if (res.data.data.hasAnswer === 0) {
            vm.$toast.fail('测试无结果')
          } else {
            vm.$router.push({
              name: 'ReportList',
              query: { userTestId: res.data.data.reportListId }
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
          vm.times = res.data.data.reportNum
        } else {
          vm.$toast.fail(res.data.message)
        }
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
  }
}
</script>

<style lang="scss" scoped>
.apply {
  height: 100vh;
  .btn {
    margin-top: 20px;
  }
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

.tip-red {
  color: #cc0000;
  font-size: 12px;
  padding-top: 10px;
}
</style>