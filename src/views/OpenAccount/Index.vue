<template>
  <div>
    <van-nav-bar title="开卡" left-text="返回" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'InputInfo'})" />
    <van-row gutter="20">

      <van-col span="24" class="ad">
        预存300元话费免费开通电信志愿宝，成功选大学，报考无烦恼
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="¥300.00" label="预付款" disabled />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林" label="归属省" disabled />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-field value="" label="套餐选择" disabled />
          <van-radio-group v-model="form.category" class="radio">
            <van-radio name="1" style="padding:0 10px;">49元</van-radio>
            <van-radio name="2" style="padding:0 10px;">69元</van-radio>
          </van-radio-group>
        </van-cell-group>

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

      <!-- <van-col span="24">
        <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'InputInfo'})">下一步</van-button>
      </van-col> -->
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
  position: absolute;
  z-index: 1000;
  left: 80px;
  top: 0;
}

.phonenumber {
  padding: 5px 0;
  text-align: center;
}

.ad {
  font-size: 20px;
  color: #ffcc66;
  text-align: center;
  padding: 10px;
}
</style>
