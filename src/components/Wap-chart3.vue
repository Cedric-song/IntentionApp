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
      metrics: ['position'],
      dimension: ['year'],
      legendName: {
        position: '位次波动'
      },
      labelMap: {
        position: '位次波动'
      }
    }
    return {
      chartData: {
        columns: ['year', 'position'],
        rows: [
          { year: '2015', position: 1393 },
          { year: '2016', position: 3530 },
          { year: '2017', position: 2923 }
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
  },
  watch: {
    chart: {
      handler(val) {
        this.chartData.rows = val
      }
    }
  }
}
</script>