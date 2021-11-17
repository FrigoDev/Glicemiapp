import React from 'react';
import { Line } from 'react-chartjs-2'

const BarChart = (props) => {
    const  {datos} = props;
    var glucosa = [];
    var textos=[];
     for(var i=0;i<datos.length;i++){
         textos.push(datos[i].hora);
        glucosa.push(datos[i].glucosa);
    } 
    return (
        <div className='mb-md-5 mb-2'>
            <Line
                data={{
                    labels: textos,
                    datasets: [
                        {
                            data:glucosa,
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