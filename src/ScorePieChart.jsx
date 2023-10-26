import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ScorePieChart = ({currentScore}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const data = {
            labels: ['Score', 'Remaining'],
            datasets: [
                {
                    data: [currentScore, 15-currentScore],
                    backgroundColor: ['#438AF6', 'lightgray'],
                },
            ],
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false,
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
    }, [currentScore]);

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
