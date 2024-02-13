import React from "react";
import ReactApexChart from "react-apexcharts";

const Custombarchart = () => {

    const data = {
        series: [
            {
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                    enabled: false
                }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },

            colors: ["#5fd0f3", "#495057", "#e83e8c", "#13d8aa", "#f34e4e", "#2b908f", "#f9a3a4", "#564ab1",
                "#fa6374", "#3980c0"],
            // grid: {
            //     borderColor: "#f1f1f1",

            // },
            xaxis: {
                categories: [
                    "South Korea",
                    "Canada",
                    "United Kingdom",
                    "Netherlands",
                    "Italy",
                    "France",
                    "Japan",
                    "United States",
                    "China",
                    "Germany",
                ],
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            title: {
                text: 'Custom DataLabels',
                align: 'center',
                floating: true,
                style: {
                    fontWeight: 600,
                },
            },
            subtitle: {
                text: 'Category Names as DataLabels inside bars',
                align: 'center',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        }
                    }
                }
            }
        },
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};
export default Custombarchart;
