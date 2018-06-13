<template>
  <div>
    <van-nav-bar title="答题有奖" right-text="下一题" @click-right="$router.push({name: 'Page3'})" />
    <span>1. 请选择你最喜欢的球队？</span>
    <van-radio-group v-model="form">
      <van-radio :name="item.id" v-for="item in list" :key="item.id">{{item.label}}</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
import { find } from 'lodash'
export default {
  data() {
    return {
      form: '',
      list: [
        {
          id: '1',
          label: '北京国安'
        },
        {
          id: '2',
          label: '天津泰达'
        },
        {
          id: '3',
          label: '广州恒大'
        }
      ]
    }
  },

  watch: {
    form: {
      handler(val) {
        const item = find(this.list, { id: val })
        const result = {
          id: val,
          name: 'page2',
          label: item ? item.label : ''
        }
        this.$store.commit(this.$types.SaveAnswer, result)
      },
      immediate: true
    }
  }
}
</script>
