import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Vermelho', 'Verde', 'Amarelo'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(245, 7, 7, 0.8)',
        'rgba(3, 151, 26, 0.8)',
        'rgba(250, 248, 8, 0.8)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
         
      ],
      borderWidth: 1,
    },
  ],
};

export function Pies() {
  return   <Pie data={data}/>  
   
}
