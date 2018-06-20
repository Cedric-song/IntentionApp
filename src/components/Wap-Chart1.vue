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
      metrics: ['lowScore', 'highScore'],
      dimension: ['year'],
      legendName: {
        lowScore: '最低分',
        highScore: '最高分'
      },
      labelMap: {
        lowScore: '最低分',
        highScore: '最高分'
      }
    }
    this.legend = {}
    return {
      chartData: {
        columns: ['year', 'lowScore', 'highScore'],
        rows: [
          { year: '2015', lowScore: 1393, highScore: 1093 },
          { year: '2016', lowScore: 3530, highScore: 3230 },
          { year: '2017', lowScore: 2923, highScore: 2623 }
        ]
      },
      grid: {}
    }
  },
  props: {
    chart: {
      type: Array
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