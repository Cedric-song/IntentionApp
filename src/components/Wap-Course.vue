<template>
  <ve-bar :data="chartData" :settings="chartSettings" height="400px"></ve-bar>
</template>

<script>
module.exports = {
  props: {
    year: {
      default: '2015'
    }
  },
  created() {
    this.chartData = {
      columns: ['专业', '概率', '线差', '考生概率'],
      rows: [
        { 专业: '计算机', 概率: 90, 考生概率: 99 },
        { 专业: '法律', 概率: 80, 考生概率: 89 },
        { 专业: '数学', 概率: 70, 考生概率: 79 },
        { 专业: '物理', 概率: 60, 考生概率: 69 },
        { 专业: '化学', 概率: 50, 考生概率: 59 },
        { 专业: '体育', 概率: 40, 考生概率: 49 },
        { 专业: '英语', 概率: 30, 考生概率: 39 },
        { 专业: '法语', 概率: 20, 考生概率: 29 },
        { 专业: '日语', 概率: 10, 考生概率: 19 },
        { 专业: '生物', 概率: 5, 考生概率: 19 }
      ].reverse()
    }
    this.chartSettings = {
      axisSite: { right: ['概率'] },
      metrics: ['概率', '考生概率'],
      showLine: ['考生概率'],
      label: {
        normal: { show: true, position: 'right', formatter: '{c}%' }
      },
      max: [100],
      legendName: {
        概率: `${this.year}年概率`
      }
    }
  }
}
</script>