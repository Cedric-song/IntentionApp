<template>
  <div class="report-list">
    <van-nav-bar title="智能填报批次列表" right-text="" left-text="返回" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell title="本一批院校推荐列表" is-link :to="{'name': 'Report','params': {categoryCode: '10036'},'query': $route.query}" />
      <van-cell title="本二批院校推荐列表" is-link :to="{'name': 'Report','params': {categoryCode: '10037'},'query': $route.query}" />
      <van-cell title="本三批院校推荐列表" is-link :to="{'name': 'Report','params': {categoryCode: '10038'},'query': $route.query}" />
      <van-cell title="专科批院校推荐列表" is-link :to="{'name': 'Report','params': {categoryCode: '10148'},'query': $route.query}" />
    </van-cell-group>
  </div>
</template>


