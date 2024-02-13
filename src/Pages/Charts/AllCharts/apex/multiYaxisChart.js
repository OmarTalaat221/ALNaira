import React from "react";
import ReactApexChart from "react-apexcharts";

const MultiYaxisChart = () => {

    const data = {
        series: [{
            name: 'Income',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: 'Cashflow',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
            name: 'Revenue',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        options: {
            chart: {
                stacked: false,
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                width: [1, 1, 4]
            },
            title: {
                text: 'XYZ - Stock Analysis (2009 - 2016)',
                align: 'left',
                offsetX: 110,
                style: {
                    fontWeight: 600,
                },
            },
            dataLabels: {
                enabled: false
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],

            xaxis: {
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#038edc'
                    },
                    labels: {
                        style: {
                            colors: '#038edc',
                        }
                    },
                    title: {
                        text: "Income (thousand crores)",
                        style: {
                            color: '#038edc',
                            fontWeight: 600
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: 'Income',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#038edc'
                    },
                    labels: {
                        style: {
                            colors: '#038edc',
                        }
                    },
                    title: {
                        text: "Operating Cashflow (thousand crores)",
                        style: {
                            color: '#038edc',
                            fontWeight: 600
                        }
                    },
                },
                {
                    seriesName: 'Revenue',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#51d28c'
                    },
                    labels: {
                        style: {
                            colors: '#51d28c',
                        },
                    },
                    title: {
                        text: "Revenue (thousand crores)",
                        style: {
                            color: '#51d28c',
                            fontWeight: 600
                        }
                    }
                },
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                },
            },
            legend: {
                horizontalAlign: 'left',
                offsetX: 40
            },
            colors: ["#3980c0", "#76d6f4", "#33a186"],
        },
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="line"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    )
}

export default MultiYaxisChart;

