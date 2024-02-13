import React from "react";
import { Doughnut } from "react-chartjs-2";

const DountChart = () => {

  const data = {
    labels: ["Desktops","Tablets"],
    datasets: [
      {
        data: [300, 210],
        backgroundColor: ["#3980c0", "#ebeff2"],
        hoverBackgroundColor: ["#3980c0", "#ebeff2"],
        hoverBorderColor: "#fff"
      },

    ],
  }
  return (
    <React.Fragment>

      <Doughnut width={490} height={185} data={data} className="chartjs-chart" />
    </React.Fragment>
  )
}

export default DountChart;