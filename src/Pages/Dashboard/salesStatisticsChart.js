import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesStatisticsChart = () => {
  const Data = {
    series: [
      {
        data: [7, 11, 15, 20, 18, 23, 17, 20, 22, 19],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: [
        "#eff1f3",
        "#eff1f3",
        "#eff1f3",
        "#eff1f3",
        "#33a186",
        "#3980c0",
        "#eff1f3",
        "#eff1f3",
        "#eff1f3",
        "#eff1f3",
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        labels: {
          style: {
            colors: [
              "#eff1f3",
              "#eff1f3",
              "#eff1f3",
              "#eff1f3",
              "#33a186",
              "#3980c0",
              "#eff1f3",
              "#eff1f3",
              "#eff1f3",
              "#eff1f3",
            ],
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="bar"
        height={350}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default SalesStatisticsChart;
