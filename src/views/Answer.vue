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

    <wap-subtitle subtitle="历年招生人数（柱状）及录取位次（折线）图" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图中的立柱为每年的招生人数，可以分析招生趋势，如果在我省的招生人数增加意味着此专业逐步变热，但是并非录取概率加大，因为受到填报人数的影响，反之亦然。 录取位次折线表示该校最低录取分数线对应的考生排位的变化，通过折线图可以判断考入该校的难易程度，如果对应的排位越来越低，说明学校越来越难考取，反之亦然。
      </van-col>
    </van-row>
    <wap-history class="chart-position"></wap-history>

    <wap-subtitle subtitle="历年录取线差图（柱状对比图）" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图中前三年的立柱为当年的最低录取分数线与省控线的差值，最后的立柱为今年考生的分数与省控线的差值，如果前三年的差值越大，说明学校越不容易考取，反之亦然；如果今年的差值越大，说明考生考取的可能性越大，反之亦然。通过对比今年差值与往年差值的大小，可以分析考生考入该校的可能性。
      </van-col>
    </van-row>
    <wap-chart-underscore class="chart-position" :year="new Date().getFullYear() - 3 "></wap-chart-underscore>

    <wap-subtitle subtitle="该校各专业录取对比图" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        一张十个专业的概率图：该图中的横柱从上到下依次表示被该校的十个专业录取的概率大小
      </van-col>
      <van-col span="24" class="chart-tips">
        三张十个专业的线差图： 该图表示2015年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。 该图表示2016年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。 该图表示2017年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。
      </van-col>
    </van-row>
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

.chart-tips {
  color: red;
  font-size: 12px;
  padding: 10px 5px;
}
</style>
