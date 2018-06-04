<template>
  <div>
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
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

    <wap-subtitle subtitle="院校信息" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item">院校名称： 清华大学</van-col>
      <van-col span="24" class="info-item">院校代码： 1001</van-col>
      <van-col span="24" class="info-item">院校级别： 985 + 211</van-col>
      <van-col span="24" class="info-item">所在省市： 北京</van-col>
      <van-col span="24" class="info-item">特色专业： 航天学院</van-col>
      <van-col span="24" class="info-item">专业介绍： 计算机学院/法学院/体育学院</van-col>
      <van-col span="24" class="info-item">招办电话： 022-88886888</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">http://www.tsing.edu.cn/</span>
      </van-col>
    </van-row>
  </div>
</template>


<script>
import icon from '@/assets/imgs/peking.png'

export default {
  data() {
    return {
      list: [
        {
          id: '2',
          icon: icon,
          name: '清华大学',
          tags: ['211', '985', '综合类', '北京'],
          info: '爱国，进步，科学，民主'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  margin: 10px 0;
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
  }
}

.info {
  font-size: 13px;
  padding-top: 10px;
  .info-item {
    padding-top: 5px;
    .item-red {
      color: #cc0000;
    }

    .item-blue {
      color: blue;
    }

    &.item-tip {
      color: #333333;
      font-size: 9px;
    }
  }
}
</style>
