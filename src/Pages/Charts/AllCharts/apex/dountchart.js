import React from "react";
import ReactApexChart from "react-apexcharts";

const dountchart = () => {

  const data = {
    series: [44, 55, 41, 17, 15],
    options: {
      colors: ["#3980c0", "#33a186", "#fc931d", "#f34e4e", "#564ab1"],
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        }
      },
    },
  }

  return(
    <React.Fragment>
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="donut"
          height="350"
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default dountchart;
