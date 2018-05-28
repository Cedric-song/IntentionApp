<template>
  <ve-line :data="chartData" :settings="chartSettings" :mark-point="markPoint" :grid="grid"></ve-line>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['year', 'one', 'two', 'three', 'four', 'five', 'position'],
      rows: [
        {
          year: '2015',
          one: 70,
          two: 30,
          three: 20,
          four: 85,
          five: 5,
          position: 11001
        },
        {
          year: '2016',
          one: 72,
          two: 34,
          three: 25,
          four: 80,
          five: 3,
          position: 11901
        },
        {
          year: '2017',
          one: 82,
          two: 43,
          three: 20,
          four: 90,
          five: 4,
          position: 11950
        },

        {
          year: '2018',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          position: 11700
        }
      ]
    }
    var condition = 2
    if (condition === 1) {
      this.chartSettings = {
        metrics: ['one', 'two', 'three', 'five', 'position'],
        yAxisName: ['人数', '位次'],
        yAxisType: ['', 'KMB'],
        axisSite: { right: ['position'] },
        legendName: {
          one: `一志愿`,
          two: `二志愿`,
          three: `三志愿`,
          five: `征集志愿`,
          position: '位次'
        }
      }

      this.grid = [
        {
          top: '100px',
          right: '30px'
        }
      ]
    } else {
      this.chartSettings = {
        metrics: ['four', 'five', 'position'],
        yAxisName: ['人数', '位次'],
        yAxisType: ['', 'KMB'],
        axisSite: { right: ['position'] },
        legendName: {
          four: `平行志愿`,
          five: `征集志愿`,
          position: '位次'
        }
      }

      this.grid = [
        {
          top: '50px',
          right: '30px'
        }
      ]
    }

    this.markPoint = {}
    this.grid = [
      {
        top: '100px',
        right: '30px'
      }
    ]
  }
}
</script>