import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import series from './series.json'

const config = {
  chart: {
    backgroundColor: null,
    events: {},
    legend: {
      backgroundColor: null,
    },
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    styledMode: true,
    type: "line",
    zooming: {
      mouseWheel: {
        enabled: false,
      },
    },
  },
  credits: "false",
  exporting: {
    enabled: false,
  },
  legend: {
    align: "center",
    backgroundColor: null,
    borderColor: "transparent",
    borderWidth: 1,
    floating: false,
    itemDistance: 50,
    layout: "horizontal",
    verticalAlign: "bottom",
    enabled: true,
    itemStyle: {
      cursor: "default",
    },
  },
  navigator: {
    enabled: false,
  },
  options: {
    lang: {
      thousandsSeparator: ",",
    },
  },
  rangeSelector: {
    buttonTheme: {
      padding: 7,
      r: 15,
      width: 33,
    },
    inputEnabled: false,
    allButtonsEnabled: true,
    buttons: [
      {
        count: 604800000,
        text: "1w",
        type: "millisecond",
        title: "One week",
        events: {},
        _range: 604800000,
        _offsetMin: 0,
        _offsetMax: 0,
      },
      {
        count: 2678400000,
        fromDate: "2023-12-16",
        text: "1m",
        type: "millisecond",
        title: "One month",
        events: {},
        _range: 2678400000,
        _offsetMin: 0,
        _offsetMax: 0,
      },
      {
        count: 7948800000,
        fromDate: "2023-10-16",
        text: "3m",
        type: "millisecond",
        title: "Three months",
        events: {},
        _range: 7948800000,
        _offsetMin: 0,
        _offsetMax: 0,
      },
      {
        count: 1296000000,
        fromDate: "2024-01-01",
        text: "YTD",
        type: "millisecond",
        title: "Year-to-date",
        events: {},
        _range: 1296000000,
        _offsetMin: 0,
        _offsetMax: 0,
      },
      {
        count: 31536000000,
        text: "1y",
        type: "all",
        title: "One year",
        events: {},
        _offsetMin: 0,
        _offsetMax: 0,
        _range: null,
      },
      {
        count: 31536000000,
        text: "All",
        type: "all",
        title: "All time",
        events: {},
        _offsetMin: 0,
        _offsetMax: 0,
        _range: null,
      },
    ],
    dropdown: "never",
    enabled: true,
    selected: 4,
  },
  responsive: {},
  scrollbar: {
    enabled: false,
  },
  series,
  title: {
    text: "",
  },
  tooltip: {
    backgroundColor: null,
    borderWidth: 0,
    enabled: true,
    followTouchMove: false,
    shadow: false,
    shared: true,
    style: {
      padding: 0,
    },
  },
  xAxis: {
    labels: {},
    maxPadding: 0,
    minPadding: 0,
    minRange: 1,
    type: "datetime",
  },
  yAxis: {
    labels: {},
    minRange: 5,
    opposite: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      events: {},
    },
  },
};

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
