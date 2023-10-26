import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ScorePieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const data = {
            labels: ['Score', 'Remaining'],
            datasets: [
                {
                    data: [10, 5], // Score out of 15
                    backgroundColor: ['#438AF6', 'lightgray'], // Specify the color for the score
                },
            ],
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false, // Hide the legend if not needed
                    },
                },
            },
        };
        

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef.current) {
            chartInstance.current = new Chart(chartRef.current, config);
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container">
        <canvas ref={chartRef}></canvas>
        <div className="centered-emoji">
          🎯
        </div>
      </div>
    );
};

export default ScorePieChart;
