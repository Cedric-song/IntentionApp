<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['year', 'one', 'two', 'three', 'four', 'position'],
      rows: [
        {
          year: '2015',
          one: 1523,
          two: 500,
          three: 200,
          four: 100,
          position: 1001
        },
        {
          year: '2016',
          one: 1723,
          two: 523,
          three: 345,
          four: 100,
          position: 901
        },
        {
          year: '2017',
          one: 1823,
          two: 423,
          three: 210,
          four: 100,
          position: 950
        },

        {
          year: '2018',
          one: '',
          two: '',
          three: '',
          four: '',
          position: 700
        }
      ]
    }
    this.chartSettings = {
      metrics: ['one', 'two', 'three', 'four', 'position'],
      yAxisName: ['录取人数', '位次'],
      legendName: {
        one: `一志愿`,
        two: `二志愿`,
        three: `三志愿`,
        four: `征集志愿`,
        position: '位次'
      }
    }
  }
}
</script>