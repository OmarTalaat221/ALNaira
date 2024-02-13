import React from "react";
import ReactApexChart from "react-apexcharts";

const ThreeDBubbleChart = () => {

    function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    const data = {
        series: [{
            name: 'Product1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        options: {
            dataLabels: {
                enabled: false,
            },
            toolbar: {
                show: false
            },
            fill: {
                type: 'gradient'
            },
            title: {
                text: '3D Bubble Chart',
                style: {
                    fontWeight: 500,
                },
            },
            xaxis: {
                tickAmount: 12,
                type: 'datetime',
                labels: {
                    rotate: 0,
                }
            },
            yaxis: {
                max: 70
            },
            theme: {
                palette: 'palette2'
            },
            stroke: {
                curve: "smooth",
            },

            colors: ["#564ab1", "#5fd0f3", "#33a186", "#fc931d"],
        },
    }
    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="bubble"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    )
}

export default ThreeDBubbleChart;
