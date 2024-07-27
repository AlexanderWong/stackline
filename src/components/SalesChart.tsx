import React from 'react';
import { Line } from 'react-chartjs-2';
import { SalesData } from '../types/product';
import 'chart.js/auto';
import { Card, CardContent, Typography } from '@mui/material';

interface SalesChartProps {
  sales: SalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ sales }) => {
  const data = {
    labels: sales.map((s) => s.weekEnding),
    datasets: [
      {
        label: 'Retail Sales',
        data: sales.map((s) => s.retailSales),
        borderColor: 'blue',
        tension: 0.6,
        fill: false,
      },
      {
        label: 'Wholesale Sales',
        data: sales.map((s) => s.wholesaleSales),
        borderColor: 'gray',
        tension: 0.6,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Retail Sales</Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default SalesChart;
