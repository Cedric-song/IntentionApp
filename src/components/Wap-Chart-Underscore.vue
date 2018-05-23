<template>
  <ve-histogram :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-histogram>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['year', 'score'],
      rows: [
        { score: 101, year: '2018' },
        { score: 120, year: '2017' },
        { score: 98, year: '2016' },
        { score: 91, year: '2015' }
      ].reverse()
    }
    this.chartSettings = {
      metrics: ['score'],
      dimension: ['year'],
      legendName: {
        score: '线差'
      },
      label: {
        normal: { show: true, formatter: '{c}分' }
      },
      itemStyle: {
        color(item) {
          if (item.name === '2018') {
            return '#cc3333'
          } else {
            return '#1cd4ae'
          }
        }
      }
    }

    this.chartExtend = {}
  }
}
</script>