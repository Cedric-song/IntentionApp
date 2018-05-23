<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['日期', '一志愿', '二志愿', '三志愿', '征集志愿'],
      rows: [
        {
          日期: '2015',
          一志愿: 1523,
          二志愿: 500,
          三志愿: 200,
          征集志愿: 100
        },
        {
          日期: '2016',
          一志愿: 1723,
          二志愿: 523,
          三志愿: 345,
          征集志愿: 100
        },
        {
          日期: '2017',
          一志愿: 1823,
          二志愿: 423,
          三志愿: 210,
          征集志愿: 100
        }
      ]
    }
    this.chartSettings = {
      yAxisName: ['录取人数']
    }
  }
}
</script>