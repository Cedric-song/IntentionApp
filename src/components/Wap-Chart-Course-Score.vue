<template>
  <div class="chart-item">
    <ve-bar :data="chartData" :settings="chartSettings" :extend="chartExtend" height="400px" :grid="grid"></ve-bar>
    <div v-show="chart.length === 0" class="chart-no-data">No data</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      chartExtend: {},
      grid: {},
      chartSettings: {}
    }
  },
  props: {
    year: {
      default: ''
    },
    chart: {
      type: Array
    }
  },
  created() {
    const fadeRows = [
      { major: '计算机', score: 120, userScore: 89 },
      { major: '法律', score: 110, userScore: 89 },
      { major: '数学', score: 98, userScore: 89 },
      { major: '物理', score: 96, userScore: 89 },
      { major: '化学', score: 90, userScore: 89 },
      { major: '体育', score: 88, userScore: 89 },
      { major: '英语', score: 78, userScore: 89 },
      { major: '法语', score: 65, userScore: 89 },
      { major: '日语', score: 59, userScore: 89 },
      { major: '生物', score: 50, userScore: 89 }
    ].reverse()

    const rowData = []
    this.chart.map(item => {
      rowData.push({
        major:
          item.major.length > 10 ? item.major.slice(0, 10) + '...' : item.major,
        score: item.score,
        userScore: item.userScore
      })
    })
    this.chartData = {
      columns: ['major', 'score', 'userScore'],
      rows: rowData
    }

    let maxArray = []
    const array = this.chart.forEach(item => {
      maxArray.push(Number(item.score))
      maxArray.push(Number(item.userScore))
    })

    this.chartSettings = {
      label: {
        normal: { show: true, position: 'right', formatter: '{c}分' }
      },
      max: [this.$_.max(maxArray) + ''],
      legendName: {
        score: `${this.year}年线差`,
        userScore: `考生线差`
      },
      labelMap: {
        score: `${this.year}年线差`,
        userScore: `考生线差`
      },
      showLine: ['userScore']
    }

    this.chartExtend = {
      series(items) {
        items.forEach(item => {
          if (item.name === '考生线差') {
            item.type = 'line'
            item.label = {
              show: false,
              position: 'right',
              formatter: '{c}分'
            }
          } else {
            item.label = {
              show: true,
              formatter: '{c}分'
            }
          }
        })

        return items
      }
    }

    this.grid = [
      {
        top: '50px',
        right: '30px'
      }
    ]
  }
}
</script>