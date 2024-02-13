import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesByCategoryChart = () => {
  const data = {
    series: [35, 15, 8, 7, 20],

    options: {
      labels: ['Watch', 'Iphone', 'Book', 'TV'],
      colors: ["#3980c0", "#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4"],
      tooltips: {
        enabled: true,
      },
      cutoutPercentage: 75,
      rotation: -0.5 * Math.PI,
      circumference: 2 * Math.PI,
      title: {
        display: false
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enabled: false,
        }
      },
      legend: {
        show: false,
        display: false //This will do the task
      },
      backgroundColor: ["#3980c0", "#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4"],
      hoverBackgroundColor: ["#3980c0", "#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4"],
      borderWidth: 0,
      borderColor: ["#3980c0", "#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4"],
      hoverBorderWidth: 0,
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
        height="281"
        className="mx-auto"
      />
    </React.Fragment>
  );
};

export default SalesByCategoryChart;