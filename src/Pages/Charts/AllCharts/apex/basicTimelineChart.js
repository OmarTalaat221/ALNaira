import React from "react";
import ReactApexChart from "react-apexcharts";


const BasicTimelineChart = () => {
    const Data = {
        series: [
            {
                data: [
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-04').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-04').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Validation',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-12').getTime()
                        ]
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-18').getTime()
                        ]
                    }
                ],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "rangeBar",
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            xaxis: {
                type: "datetime",
            },
            colors: ["#3980c0"],
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={Data.options}
                series={Data.series}
                type="rangeBar"
                height={350}
                className="apex-charts"
                id="earning-item"
                dir="ltr"
            />
        </React.Fragment>
    );
};

export default BasicTimelineChart;

