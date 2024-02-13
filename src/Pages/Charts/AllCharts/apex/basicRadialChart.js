import React from "react";
import ReactApexChart from "react-apexcharts";

const BasicRadialChart = () => {
    const data = {
        series: [70],
        options: {
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },

            labels: ['Cricket'],
            colors: ["#3980c0"],
        },
    }
    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="radialBar"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    )
}

export default BasicRadialChart;
