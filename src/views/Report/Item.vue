<template>
  <div>
    <van-nav-bar title="录取概率报告" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <wap-subtitle subtitle="院校信息" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item">院校名称： 天津大学</van-col>
      <van-col span="24" class="info-item">院校代码： 1001</van-col>
      <van-col span="24" class="info-item">院校级别： 985 + 211</van-col>
      <van-col span="24" class="info-item">所在省市： 天津</van-col>
      <van-col span="24" class="info-item">特色专业： 航天学院</van-col>
      <van-col span="24" class="info-item">专业介绍： 计算机学院/法学院/体育学院</van-col>
      <van-col span="24" class="info-item">招办电话： 022-88886888</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">http://www.tju.edu.cn/</span>
      </van-col>
      <van-col span="24" class="info-item">院校录取概率： 90%</van-col>
    </van-row>

    <wap-subtitle subtitle="查看历年各专业录取分数表" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20">
      <van-col :span="24">
        <el-table :data="tableData" border size="mini" class="table">
          <el-table-column prop="year" label="" width="50" fixed></el-table-column>
          <el-table-column :prop="item.prop" :label="item.name" width="100" v-for="item in headers" :key="item.prop"></el-table-column>
        </el-table>
      </van-col>
    </van-row>
    <wap-subtitle subtitle="查看历年招生人数折线及录取位次图" style="margin-top: 20px;"></wap-subtitle>
    <wap-history class="chart-position"></wap-history>

    <wap-subtitle subtitle="查看录取线差图" style="margin-top: 20px;"></wap-subtitle>
    <wap-subtitle subtitle="查看历年录取人数折线图" style="margin-top: 20px;"></wap-subtitle>
    <wap-chart-line></wap-chart-line>
    <wap-subtitle subtitle="专业录取对比图" style="margin-top: 20px;"></wap-subtitle>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      headers: [
        { name: '专业1', prop: 'score1' },
        { name: '专业2', prop: 'score2' },
        { name: '专业3', prop: 'score3' },
        { name: '专业4', prop: 'score4' }
      ],
      tableData: [
        {
          year: '2015',
          score1: '550',
          score2: '550',
          score3: '550'
        },
        {
          year: '2016',
          score1: '550',
          score2: '550',
          score3: '550'
        },
        {
          year: '2017',
          score1: '550',
          score2: '550',
          score3: '550'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin: 20px 0;
}
</style>


