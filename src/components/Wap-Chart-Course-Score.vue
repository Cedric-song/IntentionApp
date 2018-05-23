<template>
  <ve-bar :data="chartData" :settings="chartSettings" :extend="chartExtend" height="400px"></ve-bar>
</template>

<script>
module.exports = {
  props: {
    year: {
      default: ''
    }
  },
  created() {
    this.chartData = {
      columns: ['major', 'score', 'userScore'],
      rows: [
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
    }

    let maxArray = []
    const array = [
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
    ].forEach(item => {
      maxArray.push(Number(item.score))
      maxArray.push(Number(item.userScore))
    })

    this.chartSettings = {
      label: {
        normal: { show: true, position: 'right', formatter: '{c}分' }
      },
      max: [this.$_.max(maxArray).toString()],
      legendName: {
        score: `${this.year}年线差`,
        userScore: `考生线差`
      }
    }

    this.chartExtend = {
      series(items) {
        items.forEach(item => {
          if (item.name === 'userScore') {
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
  }
}
</script>