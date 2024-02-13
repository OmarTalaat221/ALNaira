import React from "react";
import ReactApexChart from "react-apexcharts";

const MultipleRadarChart = () => {
    const data = {
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        },
        {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }
        ],
        options: {
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.2
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ['2014', '2015', '2016', '2017', '2018', '2019']
            },
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true, blur: 1, left: 1, top: 1
            },
            colors: ["#3980c0", "#5FD0F5", "#4fad96"]
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

export default MultipleRadarChart;
