import React from "react";
import { PolarArea } from "react-chartjs-2";

const PolarChart = () => {
  const data = {
    labels: [
      "Series 1",
      "Series 2",
      "Series 3",
      "Series 4"
  ],
    datasets: [{
      data: [
          11,
          16,
          7,
          18
      ],
      backgroundColor: ["#fa6374", "#33a186", "#fc931d", "#3980c0"],
      label: 'My dataset', // for legend
      hoverBorderColor: "#fff",
  }],
  };
  
  return (
    <React.Fragment>
      <PolarArea width="490px" height="185px" data={data} className="chartjs-chart"/>
    </React.Fragment>
  );
};

export default PolarChart;
