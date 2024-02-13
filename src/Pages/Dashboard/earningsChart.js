import React from "react";
import ReactApexChart from "react-apexcharts";


const EarningChart = () => {
  const Data = {
    series: [
      {
        data: [
          {
            x: "Iphone",
            y: [
              new Date("2021-10-02").getTime(),
              new Date("2021-10-10").getTime(),
            ],
            fillColor: "#33a186",
          },
          {
            x: "Android",
            y: [
              new Date("2021-10-12").getTime(),
              new Date("2021-10-21").getTime(),
            ],
            fillColor: "#3980c0",
          },
          {
            x: "Watch 8",
            y: [
              new Date("2021-10-06").getTime(),
              new Date("2021-10-16").getTime(),
            ],
            fillColor: "#33a186",
          },
          {
            x: "Books",
            y: [
              new Date("2021-10-12").getTime(),
              new Date("2021-10-22").getTime(),
            ],
            fillColor: "#3980c0",
          },
          {
            x: "Speaker",
            y: [
              new Date("2021-10-05").getTime(),
              new Date("2021-10-16").getTime(),
            ],
            fillColor: "#33a186",
          },
          {
            x: "Cover",
            y: [
              new Date("2021-10-17").getTime(),
              new Date("2021-10-26").getTime(),
            ],
            fillColor: "#3980c0",
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 398,
        type: "rangeBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "30%",
        },
      },
      xaxis: {
        type: "datetime",
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="rangeBar"
        height={398}
        className="apex-charts"
        id="earning-item"
        dir="ltr"
      />
    </React.Fragment>
  );
};

export default EarningChart;
