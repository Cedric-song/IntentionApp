<template>
  <div class="apply">
    <van-nav-bar title="智能填报" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
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
          <van-field v-model="form.name" placeholder="" label="生源所在地" disabled @click="handleLocalClick" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="院校所在省市" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="院校级别" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="意向专业" />
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
    handleLocalClick() {},
    handleConfirm() {
      this.$dialog
        .confirm({
          title: '确认使用智能填报',
          message: '每次测试将消耗一点积分'
        })
        .then(() => {
          this.$router.push({ name: 'Report' })
        })
        .catch(() => {
          this.$toast.fail('取消测试')
        })
    }
  },
  created() {
    // document.title = '非注册用户录取概率测试'
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
</style>