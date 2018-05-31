<template>
  <div class="uni-list">
    <van-nav-bar title="大学列表页" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col :span="24">
        <van-search placeholder="请输入学校名称" v-model="search" class="search" show-action>
          <div slot="action" @click="onSearch" class="search-btn">搜索</div>
        </van-search>
      </van-col>
    </van-row>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" class="cell" :to="{name: 'UniversityItem',params: {id: item.id},query: {name: item.name}}">
        <template slot="icon">
          <img :src="item.icon" alt="" class="icon">
        </template>
        <template slot="title">
          <span class="van-cell-text">{{item.name}}</span>
          <div class="tags">
            <van-tag :class="'tag tag-'+ index" v-for="(it,index) in item.tags" :key="it">{{it}}</van-tag>
          </div>
          <span class="info">{{item.info}}</span>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>


<script>
import icon from '@/assets/imgs/peking.png'
export default {
  data() {
    return {
      tags: ['danger'],
      search: '',
      list: [
        {
          id: '1',
          icon: icon,
          name: '北京大学',
          tags: ['211', '985', '综合类', '北京'],
          info: '爱国，进步，科学，民主'
        },
        {
          id: '2',
          icon: icon,
          name: '清华大学',
          tags: ['211', '985', '综合类', '北京'],
          info: '爱国，进步，科学，民主'
        }
      ],
      loading: false,
      finished: true
    }
  },

  created() {
    this.getList()
  },

  methods: {
    onLoad() {},
    onSearch() {
      console.log(123)
    },
    getList() {
      this.$api['GetUniversityList'].then(res => {
        if (res.data.code == 200) {
          this.list = res.data.data.list
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.uni-list {
  .search {
    background: #fff !important;
    border: 1px solid #1cd4ae;
    margin-bottom: 10px;
  }

  .search-btn {
    padding: 0 10px;
    margin-right: 10px;
    border: 1px solid #1cd4ae;
    color: #1cd4ae;
  }
  .cell {
    line-height: 1.4;
    .icon {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    .tag {
      margin-right: 5px;
    }
    .tag-0 {
      background: #1cd4ae;
    }
    .tag-1 {
      background: #ffcc66;
    }
    .tag-2 {
      background: #33ccff;
    }
    .tag-3 {
      background: #cc3333;
    }

    .info {
      color: #9e9e9e;
      font-size: 11px;
    }
  }
}
</style>
