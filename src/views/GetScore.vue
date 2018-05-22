<template>
  <div class="score">
    <van-nav-bar title="成绩查询" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <van-row gutter="20" v-if="showScore">
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

    <van-row gutter="20" v-else>

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
        <van-cell-group>
          <van-field v-model="score[0]" placeholder="" label="总分" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="score[1]" placeholder="" label="语文" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="score[2]" placeholder="" label="数学" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="score[3]" placeholder="" label="综合" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'Home'})">关闭</van-button>
      </van-col>

    </van-row>

  </div>
</template>


<script>
export default {
  data() {
    return {
      showScore: true,
      form: {},
      score: [650, 150, 150, 150, 200]
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
  .btn {
    margin-top: 20px;
  }
}
</style>

