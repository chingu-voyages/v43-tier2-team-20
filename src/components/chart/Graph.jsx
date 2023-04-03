import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import{Doughnut} from 'react-chartjs-2'

Chart.register(ArcElement);

  
  const config={
    data:{
        datasets:[{
            data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius:30,
      spacing:7
        }]
       
    },
    options:{
        cutout:110
    }
  }
export default function Graph() {
  return (
    <div className="graph">
    <div className="items">
    <div className="chart">
        <Doughnut{...config}></Doughnut>
        <h3 className='graph-tittle'>Total
        <br></br>
            <span className='total'>${0}</span>
        </h3>
    </div>
    <div className="">
        {/* labels */}
    </div>
        </div>
    </div>
  )
}
