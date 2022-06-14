import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from './Data';

function LineChart() {
    const state = {
        data: {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            datasets: [
                {
                    fill: true,
                    label: null,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 40, 56],
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    beginAtZero: false,
                    ticks: {
                        color: 'black',
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    stacked: true,
                    // beginAtZero: true,
                    // beginAtZero: true,
                    min: 10,
                    max: 40,
                    ticks: {
                        color: 'black',
                    },
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        },
    };
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.hour),
        datasets: [
            {
                label: 'Temp',
                data: UserData.map((data) => data.temp),
                backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
                borderColor: 'black',
                borderWidth: 2,
            },
        ],
    });

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return <Line data={userData} options={state.options} />;
}

export default LineChart;
