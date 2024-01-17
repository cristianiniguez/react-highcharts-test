import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'highcharts/css/highcharts.css'

import Highcharts from "highcharts";
import HighchartsHighstock from "highcharts/highstock";
import HighchartsAccessibility from "highcharts/modules/accessibility";

HighchartsAccessibility(Highcharts)
HighchartsAccessibility(HighchartsHighstock)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
