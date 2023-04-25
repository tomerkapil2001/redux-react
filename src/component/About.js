import React from 'react'
// import {Link} from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
function About() {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }
  return (
    <div>
    <h1>From high charts</h1>
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    </div>
  )
}
export default About