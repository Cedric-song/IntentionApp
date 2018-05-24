<template>
  <div class="answer">
    <van-nav-bar title="测试结果" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <wap-subtitle subtitle="高校信息" style="margin-top: 20px;"></wap-subtitle>

    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item">意向院校名称（代码）： 天津大学（00101）</van-col>
      <van-col span="24" class="info-item">考生姓名： 李斯</van-col>
      <van-col span="24" class="info-item">考生考号：100001</van-col>
      <van-col span="24" class="info-item">考生分数： 590</van-col>
      <van-col span="24" class="info-item">录取概率： 87%</van-col>
      <van-col span="24" class="info-item">学校热度：
        <span class="item-red">22</span> /
        <span class="item-blue">20902</span>
      </van-col>
      <van-col span="24" class="info-item item-tip">热度说明：热度指标由红色和蓝色两个数字构成，红色数字表示您在所有测试过该所大学的考生中的分数排名，数字越小代表名次越靠前，蓝色数字代表截止到现在一共有多少名考生测试过该所大学的录取概率，数字越大代表该校的关注考生越多、热度越高。</van-col>
      <van-col span="24" class="info-item">院校级别： 985 + 211</van-col>
      <van-col span="24" class="info-item">所在省市： 天津</van-col>
      <van-col span="24" class="info-item">招办电话： 022-88886888</van-col>
      <van-col span="24" class="info-item">专业介绍： 计算机学院/法学院/体育学院</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">http://www.tju.edu.cn/</span>
      </van-col>
    </van-row>

    <wap-subtitle subtitle="历年招生人数及录取位次图" style="margin-top: 20px;"></wap-subtitle>
    <wap-history class="chart-position"></wap-history>

    <wap-subtitle subtitle="历年录取线差图" style="margin-top: 20px;"></wap-subtitle>
    <wap-chart-underscore class="chart-position" :year="new Date().getFullYear() - 3 "></wap-chart-underscore>

    <wap-subtitle subtitle="各专业录取对比图" style="margin-top: 20px;"></wap-subtitle>
    <wap-chart-course-percent class="chart-position"></wap-chart-course-percent>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 3 "></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 2 "></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 1"></wap-chart-course-score>

    <van-row :gutter="20">
      <van-col span="24" class="tip-red">免责声明：由于高考填报志愿是一个动态变化的过程，本系统提供的各种查询数据及预测数据仅作为填报志愿参考，请综合各种信息进行报考，勿仅以此填报志愿。
      </van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        rating: 4
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.info {
  font-size: 13px;
  padding-top: 10px;
  .info-item {
    padding-top: 5px;
    .item-red {
      color: red;
    }

    .item-blue {
      color: blue;
    }

    &.item-tip {
      color: #9e9e9e;
      font-size: 9px;
    }
  }

  .rate {
    display: inline-block;
    position: relative;
  }
}

.chart-item {
  margin-top: 20px;
}

.chart-position {
  bottom: -20px;
}

.tip-red {
  color: red;
  font-size: 10px;
}
</style>
