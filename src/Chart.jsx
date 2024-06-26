import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const Chartt = ({percentile}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['0%', '20%', 'Your Percentile', '40%', '60%', 'Average Percentile', '80%', '100%'],
      datasets: [
        {
          label: 'Percentile Comparison',
          data: [50, 20, percentile , 40, 25, 72, 40, 15], 
          borderColor: 'rgba(52, 152, 219, 1)', 
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          fill: true,
          tension: 0.4, 
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
            ticks: {
              max: 100, 
              min: 0, 
            },
          },
          y: {
            display: false,
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
  }, [percentile]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Chartt;