import React, { useContext } from 'react';
import { ChartContext } from '../../contexts/ChartContext';
import { Line } from 'react-chartjs-2';
import './Chart.scss';

const Chart = () => {

    const { data, labels } = useContext(ChartContext);

    const chartOptions = {
        labels: labels,
        datasets: [
          {
            label: 'Kalories eated',
            fill: true,
            lineTension: 0.8,
            backgroundColor: 'rgba(25, 159, 132, 0.2)',
            borderColor: 'rgb(25, 159, 132)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgb(25, 159, 132)',
            maintainAspectRatio: false,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data
          }
        ]
      };
      

    return (
        <div className="chart__container">
            <Line data={chartOptions}></Line>
        </div>
    )

};

export default Chart;