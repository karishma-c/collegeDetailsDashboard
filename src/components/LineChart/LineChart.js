import React from 'react';
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
import { Line } from 'react-chartjs-2';
import './LineChart.css';

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
  responsive: true,
  plugins: {
    legend: {
      //type const = "top",
      position: 'top',
    }
  },
};

const labels = ['2020','2021','2022','2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Ruglers University',
      data: [{x: '2020', y: 250}, {x: '2021', y: 300}, {x: '2022', y: 400}, {x: '2023', y: 450}],
      borderColor: '#185bda',
      backgroundColor: '#185bda',
    },
    {
        label: 'Gerogetown University',
        data: [{x: '2020', y: 450}, {x: '2021', y: 480}, {x: '2022', y: 430}, {x: '2023', y: 600}],
        borderColor: '#8bd4fc',
        backgroundColor: '#8bd4fc',
    },
    {
        label: 'University of chivago',
        data: [{x: '2020', y: 650}, {x: '2021', y: 750}, {x: '2022', y: 700}, {x: '2023', y: 820}],
        borderColor: '#048dfb',
        backgroundColor: '#048dfb',
    },
  ],
};

export default function LineChart() {
    return (
        <div className='chartContainer'>
            <div className='chartContainerHeader'>
                <h3 className='chartHeading'>Application by college</h3>
                <button className="admissionButton">
                    Admission Rate
                    <svg id="admissionRateIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333333" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                       <path d="M6 9l6 6l6 -6" />
                    </svg>
                </button>
            </div>
            <Line className='lineChart' options={options} data={data} />
        </div>
    )
 
}
