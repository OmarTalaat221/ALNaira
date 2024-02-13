import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: ["#3980c0", "#33a186", "#fc931d", "#f34e4e", "#564ab1"],
      legend: {
        position: "bottom",
        dropShadow: {
          enabled: false,
        }
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="pie"
        height="350"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

export default PieChart;
