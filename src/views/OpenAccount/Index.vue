<template>
  <div>
    <van-nav-bar title="注册会员" left-text="返回" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'PickAccount'})" />
    <van-row gutter="20">

      <van-col span="24">
        预存300元话费免费开通电信志愿宝，成功选大学，报考无烦恼
      </van-col>

      <van-col span="24">
        预付款：¥300.00
      </van-col>

      <van-col span="24">
        归属省：吉林
      </van-col>

      <van-col span="24" style="position:relative;">
        <van-radio-group v-model="form.category" class="radio">
          <span>套餐选择：</span>

          <van-radio name="1" style="padding:0 10px;">49元</van-radio>
          <van-radio name="2" style="padding:0 10px;">69元</van-radio>
        </van-radio-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="选择号码" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="城市" />
        </van-cell-group>
      </van-col>

      <van-checkbox-group v-model="result" :max="1">
        <van-row :gutter="20">
          <van-col :span="12" v-for="(item) in list" :key="item" class="phonenumber">
            <van-checkbox :name="item">
              {{ item }}
            </van-checkbox>
          </van-col>

        </van-row>
      </van-checkbox-group>

      <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'PickAccount'})">立即购买</van-button>
      </van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      list: [
        '182-1120-1090',
        '182-1120-1091',
        '182-1120-1092',
        '182-1120-1093',
        '182-1120-1094',
        '182-1120-1095',
        '182-1120-1096',
        '182-1120-1097',
        '182-1120-1098',
        '182-1120-1099'
      ],
      result: []
    }
  }
}
</script>


<style lang="scss" scoped>
.radio {
  display: flex;
  padding: 10px;
}

.phonenumber {
  padding-bottom: 5px;
}
</style>
