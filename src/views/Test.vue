<template>
  <div class="test">
    <van-nav-bar title="录取概率测试" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

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
          <van-field v-model="form.name" placeholder="" label="考生姓名" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="" label="考号" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="provinceName" placeholder="" label="考生生源地" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.score" placeholder="" label="分数" type="number" maxlength="5" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.university" placeholder="" label="目标学校名称" required />
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
      // debugger
      this.$api.TestUniversity(param).then(res => {
        if (res.data.code == '200') {
          vm.$router.push({ name: 'Answer', query: { id: res.data.data.id } })
        } else {
          vm.$toast.fail(res.data.message)
        }
      })
    }
  },
  created() {
    const vm = this

    this.$api
      .GetTestTime({ wxId: this.$store.state.userinfo.openid })
      .then(res => {
        if (res.data.code == '200') {
          vm.times = res.data.data.useNum
        } else {
          vm.$toast.fail(res.data.message)
        }
      })
  },

  watch: {
    form: {
      deep: true,
      immediate: true,
      handler(val) {
        if (
          val.id === '' ||
          val.name === '' ||
          val.university === '' ||
          val.score === '' ||
          this.times == '0' ||
          this.times === ''
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

