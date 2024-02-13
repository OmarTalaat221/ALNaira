import React from "react";
import ReactApexChart from "react-apexcharts";

const MonoPolarChart = () => {

    const data = {
        series: [42, 47, 52, 58, 65],
        options: {
            labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            fill: {
                opacity: 1
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                mode: 'light',
                palette: 'palette1',
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    color: '#038edc',
                    shadeIntensity: 0.6
                }
            },
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

export default MonoPolarChart;