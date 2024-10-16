'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const DonutChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const series = [150000, 500000, 650000];
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Loaned out', 'Revenue', 'Total Amounts'],
    colors: ['#FF8D4E', '#002448', '#CCD3DA'],
    legend: {
      position: 'right',
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: false,
            total: {
              show: false,
              label: 'Total amount',
              formatter: () => 'N650,000',
            },
          },
        },
      },
    },
  };

  if (!isClient) return null;

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="380"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DonutChart;
