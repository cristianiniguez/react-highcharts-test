import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'highcharts/css/highcharts.css';

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

HighchartsMore(Highcharts);
HighchartsAccessibility(Highcharts);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
