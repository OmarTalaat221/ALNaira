import React from "react"
import { Pie } from "react-chartjs-2"


const PieChart = () => {
  const data = {
    labels: [
      "Desktops",
      "Tablets"
    ],
    datasets: [
      {
        data: [300, 180],
        backgroundColor: ["#33a186", "#ebeff2"],
        hoverBackgroundColor: ["#33a186", "#ebeff2"],
        hoverBorderColor: "#fff"
      }],
  }
  return (
    <React.Fragment>
      <Pie width={490} height={185} data={data} className="chartjs-chart" />
    </React.Fragment>
  );
}

export default PieChart;
