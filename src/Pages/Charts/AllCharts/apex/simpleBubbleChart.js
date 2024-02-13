import React from "react";
import ReactApexChart from "react-apexcharts";

const SimpleBubbleChart = () => {

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
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('12 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble3',
            data: generateData(new Date('13 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble4',
            data: generateData(new Date('14 Feb 2017 GMT').getTime(), 20, {
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
                opacity: 0.8
            },
            title: {
                text: 'Simple Bubble Chart',
                style: {
                    fontWeight: 500,
                },
            },
            xaxis: {
                tickAmount: 12,
                type: 'category',
            },
            yaxis: {
                max: 70
            },
            stroke: {
                curve: "smooth",
            },

            colors: ["#3980c0", "#5fd0f3", "#fc931d", "#33a186"],
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

export default SimpleBubbleChart;
