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

    <wap-subtitle subtitle="历年招生人数图（柱状图）" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图中的立柱为每年的招生人数，可以分析招生趋势，如果在我省的招生人数增加意味着此专业逐步变热，但是并非录取概率加大，因为受到填报人数的影响，反之亦然。
      </van-col>
    </van-row>

    <wap-chart-count class="chart-position"></wap-chart-count>

    <wap-subtitle subtitle="历年录取人数（折线）及录取位次（折线）图" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图中的一、二、三、征集四条线分别为第一志愿、第二志愿、第三志愿、征集志愿的录取人数的变化，通过此折线可以分析学校的热度，第一志愿是否能够录满，以此类推。 录取位次折线表示该校最低录取分数线对应的考生排位的变化，通过折线图可以判断考入该校的难易程度，如果对应的排位越来越低，说明学校越来越难考取，反之亦然。
      </van-col>
    </van-row>
    <wap-chart-line class="chart-position"></wap-chart-line>

    <wap-subtitle subtitle="历年录取线差图（柱状对比图）" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图中前三年的立柱为当年的最低录取分数线与省控线的差值，最后的立柱为今年考生的分数与省控线的差值，如果前三年的差值越大，说明学校越不容易考取，反之亦然；如果今年的差值越大，说明考生考取的可能性越大，反之亦然。通过对比今年差值与往年差值的大小，可以分析考生考入该校的可能性。
      </van-col>
    </van-row>
    <wap-chart-gap class="chart-position"></wap-chart-gap>

    <wap-subtitle subtitle="专业录取对比图" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        一张十个专业的概率图：该图中的横柱从上到下依次表示被该校的十个专业录取的概率大小
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="chart-tips">
        三张十个专业的线差图：
        <br> 该图表示2015年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。
        <br> 该图表示2016年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。
        <br> 该图表示2017年上述十个专业录取的线差对比，线差越大的表示这个专业越不容易考取，反之亦然。
      </van-col>
    </van-row>
    <wap-chart-course-percent class="chart-position"></wap-chart-course-percent>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 3 "></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 2 "></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" :year="new Date().getFullYear() - 1"></wap-chart-course-score>

    <wap-subtitle subtitle="相应专业录取趋势图" style="margin-top: 20px;"></wap-subtitle>
    <van-row>
      <van-col span="24" class="chart-tips">
        该图表示此专业录取线差的趋势，以及此专业最低录取分数线对应的位次趋势。如果录取线差的趋势上升，说明此专业越来越难以考取，反之亦然；如果位次趋势上升，说明此专业越来越容易考取，反之亦然。
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" v-for="item in majors" :key="item">
        <wap-subtitle :subtitle="item" style="margin-top: 20px;"></wap-subtitle>
        <wap-chart-major class="chart-position"></wap-chart-major>
      </van-col>
    </van-row>

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
      form: {},
      majors: [
        '计算机',
        '法律',
        '数学',
        '化学',
        '体育',
        '英语',
        '法语',
        '日语',
        '生物'
      ],
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

.tip-red {
  color: #cc0000;
  font-size: 10px;
}
.chart-tips {
  color: #cc0000;
  font-size: 12px;
  padding: 10px 5px;
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
      color: #0066ff;
    }

    &.item-tip {
      color: #333333;
      font-size: 9px;
    }
  }
}
</style>


