import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Analytics",
      backgroundColor: "rgba(51, 161, 134, 0.8)",
      borderColor: "rgba(51, 161, 134, 0.8)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(51, 161, 134, 0.9)",
      hoverBorderColor: "rgba(51, 161, 134, 0.9)",
      data: [65, 59, 81, 45, 56, 80, 50, 20]
    }
  ]
};


const BarChart = () => {
  return (
    <React.Fragment>
      <Bar width={490} height={185} data={data} className="chartjs-chart" />
    </React.Fragment>
  );
};

export default BarChart;
