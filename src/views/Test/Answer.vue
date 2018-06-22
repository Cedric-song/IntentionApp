<template>
  <div class="answer">
    <van-nav-bar title="测试结果" left-text="返回" right-text="" left-arrow @click-left="$router.push({name: 'Test'})" />

    <wap-subtitle subtitle="高校信息" style="margin-top: 20px;"></wap-subtitle>

    <van-row :gutter="20" class="info" v-if="GotData">
      <van-col span="24" class="info-item">意向院校名称（代码）： {{`${data.universityInfo.name}(${data.universityInfo.code})`}}</van-col>
      <van-col span="24" class="info-item">考生姓名： {{data.universityInfo.userName}}</van-col>
      <van-col span="24" class="info-item" v-if="data.universityInfo.cardNo">考生考号：{{data.universityInfo.cardNo}}</van-col>
      <van-col span="24" class="info-item">考生分数： {{data.universityInfo.score}}分</van-col>
      <van-col span="24" class="info-item">考生位次： {{data.universityInfo.userPosition}}</van-col>
      <van-col span="24" class="info-item item-tip">注：在2018年分数未公布前使用2017年分数作为位次参考
      </van-col>

      <van-col span="24" class="info-item">院校级别： {{data.universityInfo.level}}</van-col>
      <van-col span="24" class="info-item">所在省市： {{data.universityInfo.province}}</van-col>
      <van-col span="24" class="info-item">招办电话： {{data.universityInfo.phone}}</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">{{data.universityInfo.website}}</span>
      </van-col>
    </van-row>

    <wap-subtitle subtitle="录取概率" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20" class="info" v-if="GotData">

      <van-col span="24" class="info-item" v-if="data.universityInfo.rate.all">录取概率： {{data.universityInfo.rate.all.toString().includes('-') ? '-' : (data.universityInfo.all.rate * 100).toFixed(2) + '%'}}</van-col>
      <van-col span="24" class="info-item" v-if="data.universityInfo.rate.first">本一批录取概率：{{data.universityInfo.rate.first.toString().includes('-') ? '-' : (data.universityInfo.rate.first * 100).toFixed(2)+ '%' }}</van-col>
      <van-col span="24" class="info-item" v-if="data.universityInfo.rate.second">本二批录取概率：{{data.universityInfo.rate.second.toString().includes('-') ? '-' : (data.universityInfo.rate.second * 100).toFixed(2)+ '%' }}</van-col>
      <van-col span="24" class="info-item" v-if="data.universityInfo.rate.third">本三批录取概率：{{data.universityInfo.rate.third.toString().includes('-') ? '-' : (data.universityInfo.rate.third * 100).toFixed(2)+ '%' }}</van-col>
      <van-col span="24" class="info-item" v-if="data.universityInfo.rate.forth">专科批录取概率：{{data.universityInfo.rate.forth.toString().includes('-') ? '-' : (data.universityInfo.rate.forth * 100).toFixed(2)+ '%' }}</van-col>

      <van-col span="24" class="info-item item-tip">概率说明：</van-col>
      <van-col span="24" class="info-item item-tip"> 本概率算法综合考生成绩、线差、位次、招生人数变化趋势（俗称“大小年”）及录取人数等多种影响因素建模计算得出，可作为考生报考参考，但不能仅以此填报志愿，在正式填报时，请以教育考试院公布的最新招生计划为准。
      </van-col>
      <van-col span="24" class="info-item item-tip"> 当录取概率为“-”时，表示历史招生人数过少，不适宜计算概率，请参考历年录取数据报考
      </van-col>
    </van-row>

    <wap-subtitle subtitle="院校历年录取数据" style="margin-top: 20px;">
      <template>
        <el-select v-model="levelSelected" size="small" class="select-style">
          <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </template>
    </wap-subtitle>

    <van-row :gutter="20" class="info">
      <van-col :span="24">
        <van-col span="24" class="info-item item-tip">指标说明：</van-col>
        <van-col span="24" class="info-item item-tip">最低线差=院校最低录取分数线-省控线。</van-col>
        <van-col span="24" class="info-item item-tip" style="margin-bottom: 20px;">因每年的高考试题难度不一，考生整体成绩变化很大，单单只参照高考成绩报考会产生很大的误差，所以需要将历年的录取成绩与考生的成绩统一使用控制线“对齐”。报考时考生可综合对比历史线差、位次，结合个人志愿情况综合报考。
        </van-col>
        <el-table :data="table" border size="mini" class="table">
          <el-table-column prop="year" label="年份" width="50" fixed></el-table-column>
          <el-table-column prop="count" label="录取数" width="60"></el-table-column>
          <el-table-column prop="highScore" label="最高分" width="60"></el-table-column>
          <el-table-column prop="lowScore" label="最低分" width="60"></el-table-column>
          <el-table-column prop="scoreGap" label="最低线差" min-width="60"></el-table-column>
          <el-table-column prop="position" label="最低位次" min-width="60"></el-table-column>
        </el-table>
      </van-col>

    </van-row>

    <template v-if="GotData && chart1.length > 1">
      <wap-subtitle subtitle="院校录取线波动图" style="margin-top: 20px;"></wap-subtitle>
      <wap-chart1 :chart="chart1"></wap-chart1>
    </template>

    <template v-if="GotData && chart2.length > 1">
      <wap-subtitle subtitle="最低分线差波动图" style="margin-top: 20px;"></wap-subtitle>
      <wap-chart2 :chart="chart2"></wap-chart2>
    </template>

    <!-- 最低分位次波动图 -->
    <template v-if="GotData && chart3.length > 1">
      <wap-subtitle subtitle="最低分位次波动图" style="margin-top: 20px;"></wap-subtitle>
      <wap-chart3 :chart="chart3"></wap-chart3>
    </template>

    <template v-if="currentTable.length !== 0 || currentTable_2.length !== 0">
      <wap-subtitle subtitle="专业录取概率及历史数据" style="margin-top: 20px;">
        <template>
          <el-select v-model="selected" size="small" class="select-style">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </wap-subtitle>
      <van-row :gutter="20" class="info">
        <van-col span="24" class="info-item item-tip">指标说明：</van-col>
        <van-col span="24" class="info-item item-tip"> 平均线差=该专业录取平均分-分数线
        </van-col>
        <van-col span="24" class="info-item item-tip"> 虽然每年的录取分数波动很大，但是平均线差波动相对很小。所以平均线差也是最有参考意义的一个技术指标。报考时应把握“分有所值，留有余地”的原则，结合目标院校专业的录取规则（分数优先、专业优先、分数优先+专业级差等），充分考虑“服从专业调剂”条件，根据个人意向综合考虑报考。
        </van-col>
        <van-col span="24" class="info-item item-tip" style="margin-bottom: 20px;"> 当录取概率为“-”时，表示历史招生人数过少，不适宜计算概率，请参考历年录取数据报考
        </van-col>

        <van-col span="24" class="info-item" style="margin-bottom: 10px;" v-if="currentTable.length !== 0">本科一批次：
        </van-col>
        <van-col :span="24" v-if="currentTable.length !== 0">
          <el-table :data="currentTable" border size="mini" class="table">
            <el-table-column prop="major" label="专业名称" min-width="60" fixed></el-table-column>
            <el-table-column prop="batch" label="批次" width="60"></el-table-column>
            <el-table-column prop="probability" label="录取概率" width="60">
              <template slot-scope="scope">
                {{scope.row.probability !== '-' ? (scope.row.probability * 100).toFixed(0)+'%' : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="count" label="录取人数" width="60"></el-table-column>
            <el-table-column prop="scoreGap" label="平均线差" min-width="60"></el-table-column>
            <el-table-column prop="lowScore" label="最低分" min-width="60"></el-table-column>
            <el-table-column prop="position" label="最低位" min-width="60"></el-table-column>
          </el-table>
        </van-col>

        <van-col span="24" class="info-item" style="margin-bottom: 10px;" v-if="currentTable_2.length !== 0">本科二批次：
        </van-col>
        <van-col :span="24" style="margin: 20px 0 0 0" v-if="currentTable_2.length !== 0">
          <el-table :data="currentTable_2" border size="mini" class="table">
            <el-table-column prop="major" label="专业名称" min-width="60" fixed></el-table-column>
            <el-table-column prop="batch" label="批次" width="60"></el-table-column>
            <el-table-column prop="probability" label="录取概率" width="60">
              <template slot-scope="scope">
                {{scope.row.probability !== '-' ? (scope.row.probability * 100).toFixed(0)+'%' : '-' }}
              </template>
            </el-table-column>
            <el-table-column prop="count" label="录取人数" width="60"></el-table-column>
            <el-table-column prop="scoreGap" label="平均线差" min-width="60"></el-table-column>
            <el-table-column prop="lowScore" label="最低分" min-width="60"></el-table-column>
            <el-table-column prop="position" label="最低位" min-width="60"></el-table-column>
          </el-table>
        </van-col>

      </van-row>
    </template>

    <template v-if="data.chart4.length !== 0 || data.chart5.length !== 0 || data.chart6.length !== 0 || data.chart4_2.length !== 0 || data.chart5_2.length !== 0 || data.chart6_2.length !== 0 ">
      <wap-subtitle subtitle="近三年专业平均线差对比图" style="margin-top: 20px;"></wap-subtitle>
      <van-row>
        <van-col span="24" class="chart-tips">
          下面三个图表示录取概率靠前的专业在当年的平均线差与考生线差的对比。横轴表示线差值，纵轴表示各个专业，纵向的线条表示考生线差。考生线差比专业平均线差越大，说明该专业录取可能性越大，反之亦然。
        </van-col>
        <van-col span="24" class="chart-tips">
          考生线差=考生分数-分数线（在2018年分数线未公布前使用2017年分数线作为参考）
        </van-col>
      </van-row>
    </template>
    <wap-chart-course-score class="chart-position" year="本科一批次2017" v-if="GotData && data.chart4.length !== 0" :chart="data.chart4"></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" year="本科一批次2016" v-if="GotData && data.chart5.length !== 0" :chart="data.chart5"></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" year="本科一批次2015" v-if="GotData && data.chart6.length !== 0" :chart="data.chart6"></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" year="本科二批次2017" v-if="GotData && data.chart4_2.length !== 0" :chart="data.chart4_2"></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" year="本科二批次2016" v-if="GotData && data.chart5_2.length !== 0" :chart="data.chart5_2"></wap-chart-course-score>
    <wap-chart-course-score class="chart-position" year="本科二批次2015" v-if="GotData && data.chart6_2.length !== 0" :chart="data.chart6_2"></wap-chart-course-score>
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
      level: '',
      data: {
        universityInfo: {},
        chart1: [],
        chart2: [],
        chart3: [],
        chart4: [],
        chart5: [],
        chart6: [],
        chart4_2: [],
        chart5_2: [],
        chart6_2: [],
        table: [],
        table2017: [],
        table2016: [],
        table2015: [],
        table2017_2: [],
        table2016_2: [],
        table2015_2: [],
        tableFirst: [],
        tableSecond: [],
        tableThrid: [],
        tableForth: []
      },
      currentTable: [],
      currentTable_2: [],
      options: [
        {
          value: 'table2017',
          label: '2017'
        },
        {
          value: 'table2016',
          label: '2016'
        },
        {
          value: 'table2015',
          label: '2015'
        }
      ],
      levelOptions: [
        {
          value: 'tableFirst',
          label: '本科一批次'
        },
        {
          value: 'tableSecond',
          label: '本科二批次'
        },
        {
          value: 'tableThrid',
          label: '本科三批次'
        },
        {
          value: 'tableForth',
          label: '专科批次'
        }
      ],
      selected: 'table2017',
      levelSelected: '',
      GotData: false,
      chart1: [],
      chart2: [],
      chart3: [],
      table: []
    }
  },
  methods: {
    initChartData(data) {
      this.chart1 = []
      this.chart2 = []
      this.chart3 = []
      const vm = this

      data.map(item => {
        if (item.highScore !== '-' && item.lowScore !== '-') {
          vm.chart1.push({
            year: item.year,
            highScore: item.highScore,
            lowScore: item.lowScore
          })
        }

        if (item.scoreGap !== '-') {
          vm.chart2.push({
            year: item.year,
            scoreGap: item.scoreGap
          })
        }

        if (item.position !== '-') {
          vm.chart3.push({
            year: item.year,
            position: item.position
          })
        }
      })
    },
    initTableData() {
      const vm = this
      const table1 = []
      this.data.tableFirst.map((item, index) => {
        if (Object.keys(item).length !== 0) {
          table1.push(item)
        }
      })
      this.data.tableFirst = table1

      const table2 = []
      this.data.tableSecond.map((item, index) => {
        if (Object.keys(item).length !== 0) {
          table2.push(item)
        }
      })
      this.data.tableSecond = table2

      const table3 = []
      this.data.tableThrid.map((item, index) => {
        if (Object.keys(item).length !== 0) {
          table3.push(item)
        }
      })
      this.data.tableThrid = table3

      const table4 = []
      this.data.tableForth.map((item, index) => {
        if (Object.keys(item).length !== 0) {
          table4.push(item)
        }
      })
      this.data.tableForth = table4
    },
    fetchData() {
      const vm = this
      const param = {
        wx_id: this.$store.state.userinfo.openid,
        id: this.$route.query.id
      }
      this.$store.commit(this.$types.ShowLoading, true)
      this.$api.GetTestAnswerById(param).then(res => {
        if (res.data.code == '200') {
          vm.data = Object.assign(vm.data, res.data.data)
          vm.initTableData()
          vm.GotData = true
          const options = []
          vm.options.map((item, index) => {
            if (vm.data[item.value] && vm.data[item.value].length !== 0) {
              options.push(item)
            }
          })
          vm.options = options
          vm.currentTable =
            vm.options.length !== 0 ? vm.data[vm.options[0].value] : []

          const levelOptions = []
          vm.levelOptions.map((item, index) => {
            if (vm.data[item.value] && vm.data[item.value].length !== 0) {
              levelOptions.push(item)
            }
          })

          vm.levelOptions = levelOptions

          vm.levelSelected = vm.levelOptions[0] ? vm.levelOptions[0].value : ''
        } else {
          vm.$dialog
            .alert({
              message: res.data.message
            })
            .then(() => {
              vm.$router.push({ name: 'Test' })
            })
        }
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
    }
  },
  watch: {
    selected: {
      handler(val) {
        if (this.data[val] && this.data[val].length !== 0) {
          this.currentTable = this.data[val]
          this.currentTable_2 = this.data[`${val}_2`]
        }
      },
      immediate: true
    },
    levelSelected: {
      handler(val) {
        if (val !== '' && this.data[val] && this.data[val].length !== 0) {
          this.initChartData(this.data[val])
          this.table = this.data[val]
        }
      },
      immediate: true
    }
  },
  created() {
    this.fetchData()
    window.scrollTo(0, 0)
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
      color: #cc0000;
    }

    .item-blue {
      color: #0066ff;
    }

    &.item-tip {
      color: #cc0000;
      font-size: 12px;
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
  color: #cc0000;
  font-size: 12px;
}

.chart-tips {
  color: #cc0000;
  font-size: 12px;
  padding: 10px 5px;
}

.select-style {
  position: absolute;
  width: 120px;
  right: 20px;
  top: -5px;
}
</style>
