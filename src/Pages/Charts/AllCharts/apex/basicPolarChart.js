import React from "react";
import ReactApexChart from "react-apexcharts";

const BasicPolarChart = () => {

    const data = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
            labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                colors: ['#fff'],
            },
            legend: {
                position: 'bottom'
            },
            fill: {
                opacity: 0.8
            },
            colors: ["#3980c0", "#33a186", "#fc931d", "#f34e4e", "#564ab1", "#5fd0f3"],
        },
    }
    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="polarArea"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    )
}

export default BasicPolarChart;
