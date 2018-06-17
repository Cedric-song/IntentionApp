<template>
  <div class="select-list">
    <van-nav-bar title="院校所在省份" right-text="确定" @click-right="handleRightClick" />

    <van-row>
      <van-col :span="24">
        <van-cell title="院校所在省份（可多选）" />
      </van-col>
      <van-col :span="8"></van-col>
      <van-col :span="8" v-for="item in provinceList" :key="item.id">
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

  computed: {
    provinceList() {
      const list = JSON.parse(JSON.stringify(this.$provinceList))
      list.unshift({ id: '000000', text: '全国' })
      return list
    }
  },
  methods: {
    handleRightClick() {
      const list = this.provinceList
      const provinceText = []
      this.checked.map(id => {
        provinceText.push(find(list, { id: id }).text)
      })

      const query =
        this.checked.length === 0
          ? {}
          : Object.assign(this.$route.query, {
              provinceId: this.checked.join(','),
              provinceText: provinceText.join(',')
            })

      this.$router.push({ name: 'Apply', query: query })
    },
    handleClick(id) {
      if (id === '000000') {
        this.checked = ['000000']
      } else {
        if (this.checked.indexOf('000000') !== -1) {
          this.checked = []
        }

        if (this.checked.includes(id)) {
          const index = this.checked.indexOf(id)
          this.checked.splice(index, 1)
        } else {
          this.checked.push(id)
        }
      }
    }
  },
  created() {
    if (
      !this.$route.query.provinceId ||
      this.$route.query.provinceId.length === 0
    ) {
      this.checked = []
    } else {
      this.checked = this.$route.query.provinceId.split(',')
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



