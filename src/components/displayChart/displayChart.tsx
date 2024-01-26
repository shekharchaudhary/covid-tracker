import React from 'react';
import { Stack } from '@mui/material';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface ChartProps {
  covidDates?: string[];
  covidTests?: (string | number)[];
  covidCasses?: (string | number)[];
  covidOutcomes?: (string | number)[];
  hospitalized?: (string | number)[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  type: 'line',
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Historic U.S. COVID Data by Date',
    },
  },
};

export const Chart: React.FC<ChartProps> = ({
  covidDates,
  covidTests,
  covidCasses,
  covidOutcomes,
  hospitalized,
}) => {
  const chartData = {
    labels: covidDates,
    datasets: [
      {
        label: 'Tests - Change from Prior Day',
        data: covidTests,
        borderColor: 'rgba(25, 66, 177, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Cases - Change from Prior Day',
        data: covidCasses,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Deaths - Change from Prior Day',
        data: covidOutcomes,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Hospitalized - Change from Prior Day',
        data: hospitalized,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Stack style={{ width: '900px', marginTop: '50px', height: '400px' }}>
      <Line options={options} data={chartData} />
    </Stack>
  );
};
