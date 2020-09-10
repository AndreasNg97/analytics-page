import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

const DonutChart = () => {
    const [chartData, setChartData] = useState({})
    const val1 = 364
    const val2 = 284

    const chart = () => {
        setChartData({
            labels:['Companies', 'Individuals'],
            datasets:[
                {
                    label: 'Total Signups',
                    data:[val1, val2],
                    backgroundColor:[
                        '#ff56ee',
                        '#1bfbe4',
                        'rgb(0, 0, 0)'
                    ],
                    borderWidth:0
                }
            ]
        })
    }
    const options = {
        plugins:{
        },
        responsive: true,
        maintainAspectRatio: false,
        legend:{
            display:false
        },
        scales: {
            yAxes:[
                {
                    display:false
                }
            ]
        },
        cutoutPercentage: 85
    }
    useEffect(() => {
        chart()
    },[])
    return(
        <div className='py-lg-0 py-md-5 d-inline-flex flex-md-column flex-lg-row rounded-lg w-100 h-100 secondary-bg '>
                <div className='position-absolute'>
                    <h1 className='center-text-donut'><b>{val1+val2}</b></h1>
                </div>
                <div className='my-lg-auto ml-lg-3 mx-md-auto my-md-4 donut-chart-responsive ' >
                    <Doughnut data={chartData} options={options}/>
                </div>

            <div className='mt-4 w-100 '>
                <h4 className='m-0 mb-5 text-center secondary-text'>Total Signups</h4>

                <div className='ml-lg-4 mb-3 d-flex justify-content-around justify-content-lg-between'>
                    <p className='m-0'>Individuals</p> 
                    <p className='m-0 mr-3 pr-2' style={{borderRight:'4px solid #1bfbe4'}}>{val1}</p>
                </div>

                <div className='ml-lg-4 d-flex justify-content-around justify-content-lg-between'>
                    <p className='m-0'>Companies</p> 
                    <p className='m-0 mr-3 pr-2' style={{borderRight:'4px solid #ff56ee'}}>{val2}</p>
                </div>
            </div> 
        </div>
    )
}

export default DonutChart