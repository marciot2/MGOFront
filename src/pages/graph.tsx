import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'RNC', color:'red' },
            { id: 1, value: 15, label: 'RR' ,color:'green' },
            { id: 2, value: 20, label: 'RI' ,color:'yellow' }
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
