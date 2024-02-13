import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {

  const data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
          label: "Desktops",
          backgroundColor: "rgba(42, 181, 125, 0.2)", //"rgba(42, 181, 125, 0.2)",
          borderColor: "#33a186", //"#2ab57d",
          pointBackgroundColor: "#33a186", //"#2ab57d",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#33a186", //"#2ab57d",
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: "Tablets",
          backgroundColor: "rgba(57, 128, 192, 0.2)", //"rgba(81, 86, 190, 0.2)",
          borderColor:"#3980c0", //"#5156be",
          pointBackgroundColor:"#3980c0", //"#5156be",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor:"#3980c0", //"#5156be",
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ],
  }
  return (
    <React.Fragment>
      <Radar width={490} height={185} data={data} className="chartjs-chart" />
    </React.Fragment>
  )
}

export default RadarChart;
