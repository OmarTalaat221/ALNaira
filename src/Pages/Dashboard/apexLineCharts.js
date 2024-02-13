import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart1 = () => {
  const Data = {
    series: [
      {
        data: [2, 36, 22, 30, 12, 38],
      },
    ],

    options: {
      chart: {
        type: "line",
        height: 61,
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#3980c0"],
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="line"
        height={61}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const LineChart2 = () => {
  const Data = {
    series: [
      {
        data: [36, 12, 30, 20, 36, 14],
      },
    ],

    options: {
      chart: {
        type: "line",
        height: 61,
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#33a186"],
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="line"
        height={61}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const LineChart3 = () => {
  const Data = {
    series: [
      {
        data: [14, 40, 14, 46, 28, 38],
      },
    ],

    options: {
      chart: {
        type: "line",
        height: 61,
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#3980c0"],
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="line"
        height={61}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const LineChart4 = () => {
  const Data = {
    series: [
      {
        data: [34, 2, 30, 12, 35, 20],
      },
    ],

    options: {
      chart: {
        type: "line",
        height: 61,
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#33a186"],
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={Data.options}
        series={Data.series}
        type="line"
        height={61}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export { LineChart1, LineChart2, LineChart3, LineChart4 };


