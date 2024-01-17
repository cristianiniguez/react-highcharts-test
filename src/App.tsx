import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import series from './series.json'

const options: Highcharts.Options = {
  // accessibility: { enabled: false },
  chart: {
    styledMode: true,
    type: 'line'
  },
  // rangeSelector: {
  //   buttons: [
  //     {
  //       count: 604800000,
  //       text: "1w",
  //       type: "millisecond",
  //       title: "One week"
  //     },
  //     {
  //       count: 2678400000,
  //       text: "1m",
  //       type: "millisecond",
  //       title: "One month",
  //     },
  //     {
  //       count: 7948800000,
  //       text: "3m",
  //       type: "millisecond",
  //       title: "Three months"
  //     },
  //     {
  //       count: 1296000000,
  //       text: "YTD",
  //       type: "millisecond",
  //       title: "Year-to-date",
  //     },
  //     {
  //       count: 31536000000,
  //       text: "1y",
  //       type: "all",
  //       title: "One year",
  //     },
  //     {
  //       count: 31536000000,
  //       text: "All",
  //       type: "all",
  //       title: "All time",
  //     },
  //   ]
  // },
  series: series.map(({ data }) => ({ data: data.map(({ x, y }) => ({ x, y })), type: 'line' }))
};

function App() {
  return (
    <div>
      <HighchartsReact constructorType='stockChart' highcharts={Highcharts} options={options} />
    </div>
  )
}

export default App
