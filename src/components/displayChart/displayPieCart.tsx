import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieCahrtProps {
  casesTotalValue: number;
  testingTotalValue: number;
  hospitalizedCurrentValue: number;
  deathTotalValue: number;
}

export const PieChart: React.FC<PieCahrtProps> = ({
  casesTotalValue,
  testingTotalValue,
  hospitalizedCurrentValue,
  deathTotalValue,
}) => {
  const data = {
    labels: [
      'deathTotalValue',
      'testingTotalValue',
      'hospitalizedCurrentValue',
      'casesTotalValue',
    ],
    datasets: [
      {
        data: [
          casesTotalValue,
          testingTotalValue,
          hospitalizedCurrentValue,
          deathTotalValue,
        ],
        backgroundColor: ['blue', 'green', 'orange', 'red'],
        borderColor: ['blue', 'green', 'orange', 'red'],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
