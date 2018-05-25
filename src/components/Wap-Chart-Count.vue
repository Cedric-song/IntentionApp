<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
export default {
  created: function() {
    this.chartData = {
      columns: ['year', 'count'],
      rows: [
        { count: 1523, year: '2015', newCount: 0 },
        { count: 1223, year: '2016', newCount: 0 },
        { count: 2123, year: '2017', newCount: 0 },
        { count: 2000, year: '2018', newCount: 2000 }
      ]
    }
    this.chartSettings = {
      metrics: ['count'],
      dimension: ['year'],
      legendName: {
        count: `招生人数`
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
  }
}
</script>