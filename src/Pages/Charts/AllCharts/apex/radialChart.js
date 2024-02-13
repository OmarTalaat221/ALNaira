import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const data = {
    series: [44, 55, 67, 83],
    options: {
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return 249
              },
            },
          },
        },
      },

      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: ["#3980c0", "#33a186", "#fc931d", "#f34e4e"],
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="radialBar"
        height="350"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

export default RadialChart;
