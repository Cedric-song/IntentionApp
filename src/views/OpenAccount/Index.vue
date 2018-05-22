<template>
  <div>
    <van-nav-bar title="注册会员" left-text="返回" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'PickAccount'})" />
    <van-row gutter="20">

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="姓名" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="准考证号" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="身份证号" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="电话" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <!-- <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'PickAccount'})">确定</van-button> -->
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
  }
}
</script>
