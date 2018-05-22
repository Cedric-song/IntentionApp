<template>
  <div class="pay">
    <van-nav-bar title="激活" left-text="后退" right-text="完成" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'Home'})" />
    <van-row :gutter="20" style="margin-top: 20px;">
      <van-radio-group v-model="checked" :max="1">
        <van-col :span="12" v-for="(item) in list" :key="item.id">
          <van-radio :name="item.id">
            {{ item.name }}
          </van-radio>
        </van-col>
      </van-radio-group>
      <van-col :span="24" style="margin-top: 20px;">
        <span>共需付款199元</span>
        <van-button type="primary" bottom-action class="btn" @click="handlePay" :disabled="checked === ''">去付款</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '49元套餐',
          id: '1'
        },
        {
          name: '69元套餐',
          id: '2'
        }
      ],
      checked: ''
    }
  },
  methods: {
    handlePay() {
      this.$dialog
        .confirm({
          title: '去付款',
          message: '共计199元'
        })
        .then(() => {
          this.$toast.success('付款成功')
        })
        .catch(() => {
          this.$toast.fail('取消付款')
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.pay {
  text-align: center;
}
</style>

