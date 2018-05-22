<template>
  <div>
    <van-nav-bar title="智能填报" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row gutter="20">
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
        <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'Report'})">确定</van-button>
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
  .btn {
    margin-top: 20px;
  }
}
</style>