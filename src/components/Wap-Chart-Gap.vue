<template>
  <ve-histogram :data="chartData" :settings="chartSettings" :grid="grid"></ve-histogram>
</template>

<script>
// 历年录取线差图（柱状对比图
export default {
  created: function() {
    this.chartData = {
      columns: ['year', 'count'],
      rows: [
        { count: 1523, year: '2015' },
        { count: 1223, year: '2016' },
        { count: 2123, year: '2017' },
        { count: 1823, year: '2018' }
      ]
    }
    this.chartSettings = {
      metrics: ['count'],
      dimension: ['year'],
      legendName: {
        count: `线差`
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
    this.grid = [
      {
        top: '50px',
        right: '30px'
      }
    ]
  }
}
</script>