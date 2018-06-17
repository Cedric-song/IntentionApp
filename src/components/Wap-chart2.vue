<template>
  <div class="chart-item">
    <ve-line :data="chartData" :settings="chartSettings" :grid="grid" height="300px"></ve-line>
    <!-- <div v-show="chart.length === 0" class="chart-no-data">No data</div> -->
  </div>
</template>

<script>
export default {
  props: {
    chart: {
      type: Array
    }
  },
  data() {
    this.chartSettings = {
      metrics: ['scoreGap'],
      dimension: ['year'],
      legendName: {
        scoreGap: '线差波动'
      }
    }
    return {
      chartData: {
        columns: ['year', 'scoreGap'],
        rows: [
          { year: '2015', scoreGap: 1393 },
          { year: '2016', scoreGap: 3530 },
          { year: '2017', scoreGap: 2923 }
        ]
      },
      grid: {}
    }
  },

  created() {
    this.chartData.rows = this.chart

    this.grid = [
      {
        top: '50px',
        right: '30px'
      }
    ]
  }
}
</script>