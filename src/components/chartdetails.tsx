
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const Chartdetails: React.FC = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
            datasets: [
                {
                    label: 'Activity',
                    data: [2000, 4000, 3000, 5000, 6000, 8000, 7000, 11000, 10000, 9000, 12000],
                    backgroundColor: '#6488ea',
                    borderRadius: 5,
                    barThickness: 15,

                }
            ]
        };
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,

                    },
                    beginAtZero: false
                },
                y: {
                    ticks: {
                        beginAtZero: false,
                    },
                    grid: {
                        color: '#3D3D3D',
                    },
                    beginAtZero: false
                },
            },

        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="bg-gray-800 rounded-lg text-white h-full">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg m-4">Activity</h2>
                <div className="bg-gray-700 py-1 px-3 rounded-full text-sm">Weekly</div>
            </div>

            <Chart type="bar" data={chartData} options={chartOptions} className='h-full' />
        </div>
    )
}

export default Chartdetails