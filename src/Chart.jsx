
import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
const Chartt = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() => {
      const data = {
        labels: ['1st Percentile', 'Your Percentile', '99th Percentile', 'Average Percentile'],
        datasets: [
          {
            label: 'Percentile Comparison',
            data: [1, 37, 99, 72], // Your percentile and average percentile
            borderColor: 'rgba(52, 152, 219, 1)', // Your percentile line color
            backgroundColor: 'rgba(52, 152, 219, 0.2)', // Your percentile fill color
            fill: true,
          },
        ],
      };
  
      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Percentile',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Your Score',
              },
            },
          },
          plugins: {
            legend: { display: false },
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 7,
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
    <div>
        <canvas ref={chartRef}></canvas>
    </div>
  )
}

export default Chartt
