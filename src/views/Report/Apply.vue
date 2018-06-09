<template>
  <div class="apply">
    <van-nav-bar title="智能填报" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
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
          <van-field v-model="form.score" placeholder="请输入考生分数" label="分数" type="number" required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.local" placeholder="" label="生源所在地" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <!-- <van-field v-model="form.provinceId" placeholder="请输入院校所在省份" label="院校所在省份" /> -->
          <van-cell title="院校所在省份" :value="form.provinceText" @click="showCityPicker = true" class="sg-form" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <!-- <van-field v-model="form.level" placeholder="请选择院校级别" label="院校级别" /> -->
          <van-cell title="院校级别" :value="form.levelText" @click="showLevelPicker = true" class="sg-form" />

        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.major" placeholder="请选择意向专业" label="意向专业" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <div class="times-tip">当前剩余次数：{{times}}次</div>
      </van-col>
      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="handleConfirm">确定</van-button>
      </van-col>

    </van-row>
    <van-row :gutter="20">
      <van-col span="24" class="tip-red">
        操作提示：若无特别需要可不填院校所在省市、院校级别、意向专业，以保证推荐结果全面
      </van-col>
      <van-col span="24" class="btm-picker">
        <van-picker show-toolbar title="选择院校所在省份" :columns="$provinceList" @cancel="onCancel" @confirm="onConfirm" v-show="showCityPicker" />
      </van-col>

      <van-col span="24" class="btm-picker">
        <van-picker show-toolbar title="选择院校所在省份" :columns="$levelList" @cancel="onLevelCancel" @confirm="onLevelConfirm" v-show="showLevelPicker" />
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
      form: {
        local: '吉林省',
        localId: '220000',
        category: '1'
      },
      times: '10'
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
      this.$dialog
        .confirm({
          title: '确认使用智能填报',
          message: '每次测试将消耗一点积分'
        })
        .then(() => {
          this.$router.push({ name: 'ReportList' })
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