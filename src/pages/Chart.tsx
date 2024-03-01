import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

const config = {
  chart: {
    plotShadow: false,
    renderTo: '',
    styledMode: true,
    type: 'spline',
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  legend: {
    enabled: true,
  },
  navigator: {
    enabled: false,
  },
  plotOptions: {
    area: {
      events: {},
      lineWidth: 3,
    },
    series: {
      lineWidth: 3,
      marker: {
        enabled: false,
      },
      states: {
        hover: {
          enabled: true,
          lineWidth: 3,
        },
        inactive: {
          enabled: false,
        },
      },
    },
  },
  rangeSelector: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  series: [
    {
      accessibility: {
        point: {},
      },
      className: 'stroke-fill-base-3',
      color: '#C2C2C2',
      dashStyle: 'ShortDashDot',
      data: [
        [1707984000000, 0],
        [1709280000000, 1050.78],
      ],
      name: 'Balance History',
      type: 'spline',
    },
    {
      accessibility: {
        point: {},
      },
      className: 'stroke-fill-support-12 half-opacity',
      color: '#B5CEE1',
      data: [
        {
          high: 1140.790012893148,
          low: 1140.790012893148,
          x: 1709280000000,
        },
        {
          high: 2402.402486736906,
          low: 2085.569223124079,
          x: 1738396800000,
        },
        {
          high: 3931.21567114909,
          low: 3263.8715868555255,
          x: 1769932800000,
        },
        {
          high: 5660.63898242444,
          low: 4532.486111766269,
          x: 1801468800000,
        },
        {
          high: 7563.1492447237015,
          low: 5791.447610638102,
          x: 1833004800000,
        },
        {
          high: 9731.757660310164,
          low: 7301.011728611437,
          x: 1864627200000,
        },
        {
          high: 11980.273361758278,
          low: 8803.691791248099,
          x: 1896163200000,
        },
        {
          high: 14717.873835448543,
          low: 10566.381580484365,
          x: 1927699200000,
        },
        {
          high: 17779.564793504203,
          low: 12555.689558435337,
          x: 1959235200000,
        },
        {
          high: 21084.56636826359,
          low: 14400.243517283987,
          x: 1990857600000,
        },
        {
          high: 24509.583780885496,
          low: 16769.43380363624,
          x: 2022393600000,
        },
        {
          high: 28397.536709573356,
          low: 18945.052048337162,
          x: 2053929600000,
        },
        {
          high: 33059.27476384015,
          low: 21558.23777058363,
          x: 2085465600000,
        },
        {
          high: 37391.75918166531,
          low: 23882.8989968136,
          x: 2117088000000,
        },
        {
          high: 42232.05527381797,
          low: 26651.730956340645,
          x: 2148624000000,
        },
        {
          high: 48619.143192033116,
          low: 29519.891768383175,
          x: 2180160000000,
        },
        {
          high: 53565.30972436847,
          low: 33056.5027804686,
          x: 2211696000000,
        },
        {
          high: 59759.56153605793,
          low: 37026.61667796205,
          x: 2243318400000,
        },
        {
          high: 68353.35212314104,
          low: 39925.06842683631,
          x: 2274854400000,
        },
        {
          high: 76896.40792954387,
          low: 44507.714148832296,
          x: 2306390400000,
        },
        {
          high: 83641.77449839382,
          low: 48499.04293518983,
          x: 2337926400000,
        },
        {
          high: 92758.56728753333,
          low: 52989.80597212441,
          x: 2369548800000,
        },
        {
          high: 103347.24283500749,
          low: 57112.02522707197,
          x: 2401084800000,
        },
        {
          high: 114541.05870598332,
          low: 62477.837798710614,
          x: 2432620800000,
        },
        {
          high: 128290.56041851333,
          low: 67858.21783129682,
          x: 2464156800000,
        },
        {
          high: 138532.8148933811,
          low: 71916.61768686067,
          x: 2495779200000,
        },
        {
          high: 149412.66609083515,
          low: 79360.26371566828,
          x: 2527315200000,
        },
        {
          high: 165724.09335576682,
          low: 85349.50394850454,
          x: 2558851200000,
        },
        {
          high: 182558.5200320139,
          low: 94007.66946631695,
          x: 2590387200000,
        },
        {
          high: 199792.75784165176,
          low: 103586.73816859456,
          x: 2622009600000,
        },
        {
          high: 224234.98861620206,
          low: 110881.37705216552,
          x: 2653545600000,
        },
        {
          high: 243287.98332498953,
          low: 120068.53176089298,
          x: 2685081600000,
        },
        {
          high: 263595.07420720265,
          low: 130329.35933318285,
          x: 2716617600000,
        },
        {
          high: 242769.53401125647,
          low: 103093.74186396481,
          x: 2748240000000,
        },
        {
          high: 197382.11805312964,
          low: 43806.65141566449,
          x: 2779776000000,
        },
        {
          high: 139939.48069674824,
          low: 0,
          x: 2811312000000,
        },
        {
          high: 77329.88703340378,
          low: 0,
          x: 2842848000000,
        },
        {
          high: 10975.860783627137,
          low: 0,
          x: 2874470400000,
        },
        {
          high: 0,
          low: 0,
          x: 2906006400000,
        },
        {
          high: 0,
          low: 0,
          x: 2937542400000,
        },
        {
          high: 0,
          low: 0,
          x: 2969078400000,
        },
        {
          high: 0,
          low: 0,
          x: 3000700800000,
        },
        {
          high: 0,
          low: 0,
          x: 3032236800000,
        },
        {
          high: 0,
          low: 0,
          x: 3063772800000,
        },
        {
          high: 0,
          low: 0,
          x: 3095308800000,
        },
        {
          high: 0,
          low: 0,
          x: 3126931200000,
        },
        {
          high: 0,
          low: 0,
          x: 3158467200000,
        },
        {
          high: 0,
          low: 0,
          x: 3190003200000,
        },
        {
          high: 0,
          low: 0,
          x: 3221539200000,
        },
        {
          high: 0,
          low: 0,
          x: 3253161600000,
        },
        {
          high: 0,
          low: 0,
          x: 3284697600000,
        },
        {
          high: 0,
          low: 0,
          x: 3316233600000,
        },
        {
          high: 0,
          low: 0,
          x: 3347769600000,
        },
        {
          high: 0,
          low: 0,
          x: 3379392000000,
        },
      ],
      fillOpacity: 0.25,
      index: 3,
      lineWidth: 0,
      name: 'Range of Simulated Outcomes',
      type: 'areasplinerange',
      zIndex: 1,
    },
    {
      className: 'stroke-fill-alert',
      color: '#EB901B',
      index: 2,
      zIndex: 2,
      accessibility: {
        enabled: false,
      },
      customTooltip: 'Worse Market Conditions',
      data: [
        {
          marker: {
            enabled: true,
          },
          x: 1709280000000,
          y: 1140.790012893148,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1738396800000,
          y: 2085.569223124079,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1769932800000,
          y: 3263.8715868555255,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1801468800000,
          y: 4532.486111766269,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1833004800000,
          y: 5791.447610638102,
        },
        {
          marker: {
            enabled: true,
          },
          x: 1864627200000,
          y: 7301.011728611437,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1896163200000,
          y: 8803.691791248099,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1927699200000,
          y: 10566.381580484365,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1959235200000,
          y: 12555.689558435337,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1990857600000,
          y: 14400.243517283987,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2022393600000,
          y: 16769.43380363624,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2053929600000,
          y: 18945.052048337162,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2085465600000,
          y: 21558.23777058363,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2117088000000,
          y: 23882.8989968136,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2148624000000,
          y: 26651.730956340645,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2180160000000,
          y: 29519.891768383175,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2211696000000,
          y: 33056.5027804686,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2243318400000,
          y: 37026.61667796205,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2274854400000,
          y: 39925.06842683631,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2306390400000,
          y: 44507.714148832296,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2337926400000,
          y: 48499.04293518983,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2369548800000,
          y: 52989.80597212441,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2401084800000,
          y: 57112.02522707197,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2432620800000,
          y: 62477.837798710614,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2464156800000,
          y: 67858.21783129682,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2495779200000,
          y: 71916.61768686067,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2527315200000,
          y: 79360.26371566828,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2558851200000,
          y: 85349.50394850454,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2590387200000,
          y: 94007.66946631695,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2622009600000,
          y: 103586.73816859456,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2653545600000,
          y: 110881.37705216552,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2685081600000,
          y: 120068.53176089298,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2716617600000,
          y: 130329.35933318285,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2748240000000,
          y: 103093.74186396481,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2779776000000,
          y: 43806.65141566449,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2811312000000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2842848000000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2874470400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2906006400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2937542400000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2969078400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3000700800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3032236800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3063772800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3095308800000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3126931200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3158467200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3190003200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3221539200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3253161600000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3284697600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3316233600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3347769600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3379392000000,
          y: 0,
        },
      ],
      legendSymbol: 'lineMarker',
      marker: {
        enabled: true,
        radius: 3,
      },
      name: 'Worse Market Conditions',
    },
    {
      className: 'stroke-fill-primary-hover',
      color: '#24547E',
      index: 1,
      zIndex: 3,
      accessibility: {
        enabled: false,
      },
      customTooltip: 'Average Market Conditions',
      data: [
        {
          marker: {
            enabled: true,
          },
          x: 1709280000000,
          y: 1140.790012893148,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1738396800000,
          y: 2246.446031971553,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1769932800000,
          y: 3574.6291946685637,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1801468800000,
          y: 5072.240418884309,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1833004800000,
          y: 6606.517940754775,
        },
        {
          marker: {
            enabled: true,
          },
          x: 1864627200000,
          y: 8215.075271201873,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1896163200000,
          y: 10275.503006364062,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1927699200000,
          y: 12358.482307333465,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1959235200000,
          y: 14888.796027476017,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1990857600000,
          y: 17556.661287530773,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2022393600000,
          y: 20270.813168286903,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2053929600000,
          y: 23094.485547044816,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2085465600000,
          y: 26470.03558148422,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2117088000000,
          y: 29771.660952953123,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2148624000000,
          y: 33595.802963149494,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2180160000000,
          y: 37491.293139059984,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2211696000000,
          y: 41850.041429985504,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2243318400000,
          y: 46397.712799518406,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2274854400000,
          y: 51014.08032186104,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2306390400000,
          y: 56156.26807573575,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2337926400000,
          y: 62442.760902319395,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2369548800000,
          y: 71154.8327725974,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2401084800000,
          y: 78140.11090631076,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2432620800000,
          y: 85328.47363056528,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2464156800000,
          y: 91583.6244198631,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2495779200000,
          y: 101146.44022485969,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2527315200000,
          y: 109537.473613148,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2558851200000,
          y: 121671.61166366373,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2590387200000,
          y: 129524.00136142892,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2622009600000,
          y: 144035.35224214938,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2653545600000,
          y: 156554.98681832256,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2685081600000,
          y: 169037.2260305394,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2716617600000,
          y: 183060.7733621188,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2748240000000,
          y: 162390.39210437384,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2779776000000,
          y: 108309.04087146619,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2811312000000,
          y: 45022.89368326538,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2842848000000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2874470400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2906006400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2937542400000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2969078400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3000700800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3032236800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3063772800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3095308800000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3126931200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3158467200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3190003200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3221539200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3253161600000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3284697600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3316233600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3347769600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3379392000000,
          y: 0,
        },
      ],
      legendSymbol: 'lineMarker',
      marker: {
        enabled: true,
        radius: 3,
      },
      name: 'Average Market Conditions',
    },
    {
      className: 'stroke-fill-cta-hover',
      color: '#0D5D05',
      index: 0,
      zIndex: 2,
      accessibility: {
        enabled: false,
      },
      customTooltip: 'Better Market Conditions',
      data: [
        {
          marker: {
            enabled: true,
          },
          x: 1709280000000,
          y: 1140.790012893148,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1738396800000,
          y: 2402.402486736906,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1769932800000,
          y: 3931.21567114909,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1801468800000,
          y: 5660.63898242444,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1833004800000,
          y: 7563.1492447237015,
        },
        {
          marker: {
            enabled: true,
          },
          x: 1864627200000,
          y: 9731.757660310164,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1896163200000,
          y: 11980.273361758278,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1927699200000,
          y: 14717.873835448543,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1959235200000,
          y: 17779.564793504203,
        },
        {
          marker: {
            enabled: false,
          },
          x: 1990857600000,
          y: 21084.56636826359,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2022393600000,
          y: 24509.583780885496,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2053929600000,
          y: 28397.536709573356,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2085465600000,
          y: 33059.27476384015,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2117088000000,
          y: 37391.75918166531,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2148624000000,
          y: 42232.05527381797,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2180160000000,
          y: 48619.143192033116,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2211696000000,
          y: 53565.30972436847,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2243318400000,
          y: 59759.56153605793,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2274854400000,
          y: 68353.35212314104,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2306390400000,
          y: 76896.40792954387,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2337926400000,
          y: 83641.77449839382,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2369548800000,
          y: 92758.56728753333,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2401084800000,
          y: 103347.24283500749,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2432620800000,
          y: 114541.05870598332,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2464156800000,
          y: 128290.56041851333,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2495779200000,
          y: 138532.8148933811,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2527315200000,
          y: 149412.66609083515,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2558851200000,
          y: 165724.09335576682,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2590387200000,
          y: 182558.5200320139,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2622009600000,
          y: 199792.75784165176,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2653545600000,
          y: 224234.98861620206,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2685081600000,
          y: 243287.98332498953,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2716617600000,
          y: 263595.07420720265,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2748240000000,
          y: 242769.53401125647,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2779776000000,
          y: 197382.11805312964,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2811312000000,
          y: 139939.48069674824,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2842848000000,
          y: 77329.88703340378,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2874470400000,
          y: 10975.860783627137,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2906006400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 2937542400000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 2969078400000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3000700800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3032236800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3063772800000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3095308800000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3126931200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3158467200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3190003200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3221539200000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3253161600000,
          y: 0,
        },
        {
          marker: {
            enabled: true,
          },
          x: 3284697600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3316233600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3347769600000,
          y: 0,
        },
        {
          marker: {
            enabled: false,
          },
          x: 3379392000000,
          y: 0,
        },
      ],
      legendSymbol: 'lineMarker',
      marker: {
        enabled: true,
        radius: 3,
      },
      name: 'Better Market Conditions',
    },
  ],
  title: {
    text: 'Goal Projection',
    floating: true,
  },
  tooltip: {
    borderWidth: 0,
    pointFormat:
      '{series.options.customTooltip}: <b>{point.y:,.0f}</b><br></br>',
    shadow: false,
    shared: true,
    stickOnContact: true,
    style: {
      padding: '0',
    },
  },
  xAxis: {
    crosshair: {
      zIndex: 10,
    },
    labels: {
      align: 'right',
      rotation: -30,
    },
    showLastLabel: true,
    startOnTick: true,
    tickPositions: [
      1707984000000, 1859930181819, 2011876363638, 2163822545457, 2315768727276,
      2467714909095, 2619661090914, 2771607272733, 2923553454552, 3075499636371,
      3227445818190, 3379392000000,
    ],
    title: {
      text: 'Age',
    },
    type: 'datetime',
    accessibility: {
      rangeDescription: 'Data ranges from 37 to 90 years old.',
    },
  },
  yAxis: {
    labels: {},
    min: 0,
    opposite: false,
    title: {
      text: 'Amount',
    },
    accessibility: {
      rangeDescription: 'Data ranges from $0 to $263,595.',
    },
  },
  accessibility: {
    description:
      'A combination chart displays the history and future projection of the goal amount. The chart displays data from Mar 2024 to Feb 2077. A line displays the historical goal balance from the beginning to today. The future projection continues the line splitting it into three, describing the projected balance in better, average, and worse market conditions. The current balance is $1,051. The projection ends on Aug 2076 displaying the goal balance of $0 in better market conditions, $0 in average market conditions, and $0 in worse market conditions. Data is also available in table format below this chart.',
  },
};

const Chart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      immutable
      options={config}
      updateArgs={[true, true, false]}
    />
  );
};

export default Chart;
