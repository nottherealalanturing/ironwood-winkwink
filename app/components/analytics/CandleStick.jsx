'use client';

import React from 'react';
import Chart from 'react-apexcharts';

const CandlestickChart = () => {
  const data = {
    series: [
      {
        data: [
          // Each object represents [timestamp, open, high, low, close]
          {
            x: new Date(2023, 0, 1),
            y: [20000, 25000, 10000, 22000], // Jan
          },
          {
            x: new Date(2023, 1, 1),
            y: [22000, 30000, 15000, 28000], // Feb
          },
          {
            x: new Date(2023, 2, 1),
            y: [28000, 35000, 22000, 32000], // Mar
          },
          {
            x: new Date(2023, 3, 1),
            y: [32000, 40000, 25000, 36000], // Apr
          },
          {
            x: new Date(2023, 4, 1),
            y: [36000, 42000, 28000, 40000], // May
          },
          {
            x: new Date(2023, 5, 1),
            y: [40000, 46000, 35000, 42000], // Jun
          },
          {
            x: new Date(2023, 6, 1),
            y: [42000, 48000, 37000, 45000], // Jul
          },
          {
            x: new Date(2023, 7, 1),
            y: [45000, 49000, 38000, 46000], // Aug
          },
          {
            x: new Date(2023, 8, 1),
            y: [46000, 51000, 40000, 50000], // Sep
          },
          {
            x: new Date(2023, 9, 1),
            y: [50000, 52000, 42000, 51000], // Oct
          },
          {
            x: new Date(2023, 10, 1),
            y: [51000, 53000, 43000, 52000], // Nov
          },
          {
            x: new Date(2023, 11, 1),
            y: [52000, 54000, 44000, 53000], // Dec
          },
        ],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Revenue Performance',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'MMM',
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => `N ${val / 1000}K`, // Format axis labels to show values in thousands (N 1K)
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#14213d', // Dark blue for upward candles
            downward: '#f4a261', // Orange for downward candles
          },
        },
      },
    },
  };

  return (
    <div className="candlestick-chart">
      <Chart
        options={data.options}
        series={data.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickChart;