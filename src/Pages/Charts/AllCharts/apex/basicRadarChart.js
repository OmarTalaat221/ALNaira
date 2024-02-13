import React from "react";
import ReactApexChart from "react-apexcharts";

const BasicRadarChart = () => {
    const data = {
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }],
        options: {
            stroke: {
                colors: ["#3980c0"],
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June']
            },
            toolbar: {
                show: false
            }
        },
    }
    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="radar"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    )
}

export default BasicRadarChart;
