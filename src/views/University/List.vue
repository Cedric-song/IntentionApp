<template>
  <div class="uni-list">
    <van-nav-bar title="大学列表页" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <van-row>
      <van-col :span="24">
        <van-search placeholder="请输入学校名称" v-model="table.search" class="search" show-action>
          <div slot="action" @click="onSearch" class="search-btn">搜索</div>
        </van-search>
      </van-col>
    </van-row>
    <van-list v-model="tableLoading" :finished="finished" @load="onLoad" :offset="100" :immediate-check="false">
      <van-cell v-for="(item,index) in list" :key="item.code + index" class="cell" :to="{name: 'UniversityItem',params: {id: item.id},query: {name: item.name}}">
        <template slot="icon">
          <img :src="item.icon" alt="" class="icon">
        </template>
        <template slot="title">
          <span class="van-cell-text">{{item.name}}</span>
          <div class="tags">
            <van-tag :class="'tag tag-'+ index" v-for="(it,index) in item.tags" :key="it">{{it}}</van-tag>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>


<script>
export default {
  name: 'UniversityList',

  activated() {
    console.log('actived')
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === 'UniversityItem') {
      next()
      return
    } else {
      next(vm => {
        vm.list = []
        vm.table = {
          pn: 1,
          rn: 20,
          search: ''
        }
        vm.getList()
      })
    }
  },
  data() {
    return {
      list: [],
      table: {
        pn: 1,
        rn: 20,
        search: ''
      },
      currentSearch: '',
      total: 0,
      tableLoading: false,
      finished: false
    }
  },

  methods: {
    onLoad() {
      const _totalPn = Math.ceil(this.total / this.table.rn)

      if (_totalPn !== 0 && this.table.pn >= _totalPn) {
        this.finished = true
      } else {
        this.finished = false
      }
      this.getList()
    },
    onSearch() {
      if (this.currentSearch.trim() !== this.table.search.trim()) {
        this.table.pn = 1
        this.list = []
      }
      this.getList()
    },
    getList() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      vm.currentSearch = vm.table.search
      vm.$api
        .GetUniversityList(vm.table)
        .then(res => {
          if (res.data.code == 200) {
            vm.total = res.data.data.total
            vm.list = vm.list.concat(res.data.data.list)
            vm.table.pn = vm.table.pn + 1
            vm.tableLoading = false
          }
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
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
    line-height: 1.8;
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
      background: #cc0000;
    }
    .tag-2 {
      background: #33ccff;
    }
    .tag-3 {
      background: #cc3333;
    }

    .info {
      color: #333333;
      font-size: 11px;
      width: 300px;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 4px;
      -webkit-user-select: none;
    }
  }
}
</style>
