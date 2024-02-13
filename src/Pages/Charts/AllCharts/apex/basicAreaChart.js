import React from "react";
import ReactApexChart from "react-apexcharts";

const BasicAreaChart = () => {

    const data = {
        series: [
            {
                name: "STOCK ABC",
                data: [36, 45, 20, 56, 47, 114, 105, 115, 100, 140, 110, 146],
            },
        ],
        options: {
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
            },

            colors: ["#038edc"],
            xaxis: {
                type: "datetime",
                categories: ["15 Nov", "17 Nov", "19 Nov", "21 Nov", "23 Nov", "25 Nov", "27 Nov", "29 Nov", "01 Dec", "03 Dec", "05 Dec", "07 Dec"],
            },
            yaxis: {
                opposite: true
            },
            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left',
                style: {
                    fontWeight: 500,
                },
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            zoom: {
                enabled: false
            }
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="area"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default BasicAreaChart;


