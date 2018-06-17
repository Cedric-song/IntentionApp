<template>
  <div class="select-list">
    <van-nav-bar title="选择院校级别" right-text="确定" @click-right="handleRightClick" />

    <van-row>
      <van-col :span="24">
        <van-cell title="院校级别（可多选）" />
      </van-col>
      <van-col :span="8" v-for="item in $levelList" :key="item.id">
        <div class="item-name" :class="{'item-name-acitve': checked.includes(item.id)}" @click="handleClick(item.id)">
          {{item.text}}
        </div>
      </van-col>

    </van-row>
  </div>
</template>

<script>
import { findIndex, find } from 'lodash'
export default {
  data() {
    return {
      checked: [],
      checkedName: []
    }
  },
  methods: {
    handleRightClick() {
      const list = this.$levelList
      const levelText = []
      this.checked.map(id => {
        levelText.push(find(list, { id: id }).text)
      })

      const query =
        this.checked.length === 0
          ? {}
          : Object.assign(this.$route.query, {
              level: this.checked.join(','),
              levelText: levelText.join(',')
            })

      this.$router.push({ name: 'Apply', query: query })
    },
    handleClick(id) {
      if (this.checked.includes(id)) {
        const index = this.checked.indexOf(id)
        this.checked.splice(index, 1)
      } else {
        this.checked.push(id)
      }
    }
  },
  created() {
    if (!this.$route.query.level || this.$route.query.level.length === 0) {
      this.checked = []
    } else {
      this.checked = this.$route.query.level.split(',')
    }
  }
}
</script>
<style lang="scss" scoped>
.select-list {
  .item-name {
    margin: 10px;
    border: 1px solid #d7d7d7;
    text-align: center;
    border-radius: 4px;
    color: #000;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    &.item-name-acitve {
      background-color: red;
      color: #fff;
      border: 1px solid red;
    }
  }
}
</style>



