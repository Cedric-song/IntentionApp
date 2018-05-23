<template>
  <ve-bar :data="chartData" :settings="chartSettings" :extend="chartExtend" height="400px"></ve-bar>
</template>

<script>
module.exports = {
  props: {
    year: {
      default: new Date().getFullYear()
    }
  },
  created() {
    this.chartData = {
      columns: ['major', 'percent'],
      rows: [
        { major: '计算机', percent: 95 },
        { major: '法律', percent: 80 },
        { major: '数学', percent: 70 },
        { major: '物理', percent: 60 },
        { major: '化学', percent: 50 },
        { major: '体育', percent: 40 },
        { major: '英语', percent: 30 },
        { major: '法语', percent: 20 },
        { major: '日语', percent: 19 },
        { major: '生物', percent: 15 }
      ].reverse()
    }
    this.chartSettings = {
      metrics: ['percent'],
      label: {
        normal: { show: true, formatter: '{c}%' }
      },
      max: [100],
      legendName: {
        percent: `考生录取概率`
      },
      itemStyle: {
        color(item) {
          if (item.data >= 95) {
            return '#1cd4ae'
          } else if (item.data >= 80 && item.data < 95) {
            return '#FFCC66'
          } else if (item.data >= 55 && item.data < 80) {
            return '#33CCFF'
          } else {
            return '#cc3333'
          }
        }
      }
    }

    this.chartExtend = {}
  }
}
</script>