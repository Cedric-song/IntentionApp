<template>
  <ve-histogram :data="chartData" :settings="chartSettings" height="300px"></ve-histogram>
</template>

<script>
module.exports = {
  created: function() {
    this.chartData = {
      columns: ['year', 'people', 'position', 'userPosition'],
      rows: [
        { year: '2015', people: 5, position: 70, userPosition: '' },
        { year: '2016', people: 4, position: 71, userPosition: '' },
        { year: '2017', people: 5, position: 91, userPosition: '' },
        { year: '2018', people: 4, position: 80, userPosition: 105 }
      ]
    }

    let maxArray = []
    const array = [
      { year: '2015', people: 5, position: 70, userPosition: '' },
      { year: '2016', people: 4, position: 71, userPosition: '' },
      { year: '2017', people: 5, position: 91, userPosition: '' },
      { year: '2018', people: 4, position: 80, userPosition: 105 }
    ]
    array.forEach(item => {
      maxArray.push(Number(item.people))
    })

    this.chartSettings = {
      axisSite: { right: ['people'] },
      yAxisName: ['位次', '招生人数'],
      metrics: ['people', 'position', 'userPosition'],
      showLine: ['position', 'userPosition'],
      label: {
        normal: { show: true, position: 'top' }
      },
      max: [0, 20],
      legendName: {
        people: '招生人数',
        position: '位次',
        userPosition: '考生位次'
      }
    }
  }
}
</script>