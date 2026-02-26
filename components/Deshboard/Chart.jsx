'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import ApexCharts for Next.js to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = ({ title, des }) => {
    // Example data for chart
    const seriesData = {
        prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85],
        dates: [
            "2023-10-01", "2023-10-02", "2023-10-03",
            "2023-10-04", "2023-10-05", "2023-10-06",
            "2023-10-07", "2023-10-08", "2023-10-09"
        ]
    };

    const [state] = useState({
        series: [
            {
                name: "STOCK ABC",
                data: seriesData.prices
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: { enabled: false }
            },
            colors: ['#939393ff'], // <-- Change this to any HEX or RGB color
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth', width: 2 }, // smooth curve + line width
            fill: {
                type: "gradient", // optional: makes area look nicer
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: [0, 90, 100]
                }
            },
            title: {
                text: "Renenue",
                align: 'left'
            },
            subtitle: {
                text: "Renenue Chart",
                align: 'left'
            },
            labels: seriesData.dates,
            xaxis: { type: 'datetime' },
            yaxis: { opposite: true },
            legend: { horizontalAlign: 'left' }
        }
    });

    return (
        <div className="bg-white p-4 border border-gray-200">
            <div className="h-fit" id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={350}
                />
            </div>
        </div>
    );
};

export default Chart;