<template>
  <ve-histogram :data="chartData" :settings="chartSettings" height="300px"></ve-histogram>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['日期', '人数', '线差', '考生分数'],
      rows: [
        { 日期: '2015', 人数: 5, 线差: 70, 考生分数: '' },
        { 日期: '2016', 人数: 4, 线差: 71, 考生分数: '' },
        { 日期: '2017', 人数: 5, 线差: 91, 考生分数: '' },
        { 日期: '2018', 人数: 4, 线差: 80, 考生分数: 105 }
      ]
    }
    this.chartSettings = {
      axisSite: { right: ['人数'] },
      yAxisName: ['线差（分）', '招生人数'],
      metrics: ['人数', '线差', '考生分数'],
      showLine: ['线差', '考生分数'],
      label: {
        normal: { show: true, position: 'top' }
      },
      max: [0, 20]
    }
  }
}
</script>