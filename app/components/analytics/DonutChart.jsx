'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [150000, 500000, 650000],
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Loaned out', 'Revenue', 'Total Amounts'],
        colors: ['#FF8D4E', '#002448', '#CCD3DA'],
        legend: {
          position: 'right',
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
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="380"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default DonutChart;
