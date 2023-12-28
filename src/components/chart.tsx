import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  setSkillIndex: (index: number) => void;
}

const Chart: React.FC<ChartProps> = ({ setSkillIndex }) => {

  const chartData = {
    maintainAspectRatio: false,  // Set to false to prevent resizing
    labels: ['Integrity', 'Problem solving', 'Strategic thinking', 'Self development', 'Mentorship', 'Time management', 'Communication', 'Collaboration', 'Adaptability'],
    datasets: [
      {
        label: '',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        onClick: null,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem, data) => {
            const label = tooltipItem.label;
            return `Click to read more about my ${label}`;
          },
        },
      },
    },
    onClick: (event: any, elements: any[]) => {
      if (elements.length > 0) {
        const clickedIndex: number = elements[0].index;
        setSkillIndex(clickedIndex)
      }
    },
  };

  const customChartDimensions = {
    height: 400,
    width: 400,
  };

  return (
    <div>
      <Doughnut data={chartData} options={chartOptions} {...customChartDimensions} />
      <div style={{ marginTop: '2rem' }}>
      </div>
    </div>
  );
};

export default Chart;
