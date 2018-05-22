<template>
  <div>
    <van-nav-bar title="选号" left-text="后退" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'PayAccount'})" />
    <van-checkbox-group v-model="result" :max="1">
      <van-row :gutter="20">
        <van-col :span="12" v-for="(item) in list" :key="item" class="phonenumber">
          <van-checkbox :name="item">
            {{ item }}
          </van-checkbox>
        </van-col>
        <van-col :span="24">
          <van-button type="primary" bottom-action class="btn" @click="$router.push({name: 'PickAccount'})">换一批</van-button>
        </van-col>

      </van-row>
    </van-checkbox-group>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
.phonenumber {
  padding-bottom: 5px;
}
</style>
