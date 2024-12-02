import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Panel = () => {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "My Chart panel",
      align: "left",
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: "left",
    },
    xAxis: {
      categories: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday ",
      ],
      crosshair: true,
      accessibility: {
        description: "week days",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "1000 metric tons (MT)",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "404",
        data: [387749, 280000, 129000, 64300, 54000, 34300],
      },
      {
        name: "200",
        data: [45321, 140000, 10000, 140500, 19500, 113500],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
    </>
  );
};

export default Panel;
