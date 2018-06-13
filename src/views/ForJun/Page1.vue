<template>
  <div>
    <van-nav-bar title="答题有奖" right-text="下一题" @click-right="$router.push({name: 'Page2'})" />
    <span>1. 请选择你最喜欢的明星？</span>
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
          label: '周杰伦'
        },
        {
          id: '2',
          label: '李小璐'
        },
        {
          id: '3',
          label: '迪丽热巴'
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
          name: 'page1',
          label: item ? item.label : ''
        }
        this.$store.commit(this.$types.SaveAnswer, result)
      },
      immediate: true
    }
  }
}
</script>
