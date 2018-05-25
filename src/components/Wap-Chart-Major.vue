<template>
  <van-row>
    <van-col span="24">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </van-col>
  </van-row>
</template>

<script>
export default {
  created: function() {
    this.chartData = {
      columns: ['year', 'lineGap', 'position'],
      rows: [
        { year: '2015', lineGap: 102, position: 202 },
        { year: '2016', lineGap: 110, position: 101 },
        { year: '2017', lineGap: 108, position: 100 }
      ]
    }
    this.chartSettings = {
      yAxisName: ['线差', '位次'],
      legendName: {
        lineGap: `线差`,
        position: '位次'
      }
    }
  }
}
</script>