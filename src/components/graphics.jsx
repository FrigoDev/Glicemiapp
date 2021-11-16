import React from 'react';
import { Line } from 'react-chartjs-2'

const BarChart = (props) => {
    return (
        <div className='mb-md-5 mb-2'>
            <Line
                data={{
                    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6'],
                    datasets: [
                        {
                            data:[120,140,103,105,121,131],
                            label:'Niveles de azúcar',
                            backgroundColor:['#F383A8'],
                            borderColor:['#FE2472'],
                            borderWidth:3,
                            fill:true,
                            pointBackgroundColor:['#FE2472'],
                            pointRadius:4,
                            lineTension:0.3
                        },         
                    ],
                }}
                height={350}
                width={700}
                options={{
                    maintaninAspectRatio: false,
                }}
            />
        </div>
    );
}
export default BarChart;