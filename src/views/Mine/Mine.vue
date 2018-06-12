<template>
  <div>
    <van-nav-bar title="我的" left-text="" right-text="" />
    <van-row :gutter="20">
      <van-col :span="24">
        <van-cell-group>
          <van-cell title="购买记录" icon="" is-link :to="{name: 'History'}" />
        </van-cell-group>
      </van-col>
      <van-col :span="24">
        <van-cell-group>
          <van-cell title="测试查询记录" icon="" is-link :to="{name: 'TestHistory'}" />
        </van-cell-group>
      </van-col>
      <van-col :span="24">
        <van-cell-group>
          <van-cell title="智能填报记录" icon="" is-link :to="{name: 'ReportHistory'}" />
        </van-cell-group>
      </van-col>
      <van-col :span="24">
        <van-cell-group>
          <van-cell title="身份证照片补录上传" icon="" is-link :to="{name: 'BillHistoryForPersonInfo'}" />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" :to="{name: 'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" :to="{name: 'Mine'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>


<script>
export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>