<template>
  <div class="score">
    <div class="title">成绩查询</div>

    <van-row gutter="20" style="margin-top: 20px;" v-if="showScore">
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="" label="准考证号" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="姓名" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="showScore = false">确定</van-button>
      </van-col>

    </van-row>

    <van-row gutter="20" style="margin-top: 20px;" v-else>
      <van-col span="24">
        恭喜您，您的成绩是650分。
      </van-col>
    </van-row>

  </div>
</template>


<script>
export default {
  data() {
    return {
      showScore: true,
      form: {}
    }
  },
  created() {
    document.title = '成绩查询'
  }
}
</script>

<style lang="scss" scoped>
.score {
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

