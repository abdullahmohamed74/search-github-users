// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Doughnut2D({ data }) {
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Stars per Languages',
        //Set the theme for your chart
        theme: 'fusion',
        decimals: 0,
        doughnutRadius: '35%',
        showPercentValues: 0,
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
}
export default Doughnut2D;
