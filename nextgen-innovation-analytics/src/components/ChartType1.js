import React from 'react'
import { Line } from 'react-chartjs-2'
import { LineChartOptions } from '../chartconfig/options'
import '../App.css'


const ChartType1 = () => {
    let dataVals = [0, 5, 12, 5, 8, 3, 9]
    let labelVals = ["Jun'19", "Jul'19", "Aug'19", "Sep'19", "Okt'19", "Nov'19", "Dec'19"]
    const [options] = LineChartOptions('Individuals')

    const chartData = ({
        labels: labelVals,
        datasets: [
            {
                label: 'signups',
                data: dataVals,
                backgroundColor: 'rgb(8, 164, 188)',
                borderWidth: 0
            }
        ]
    })

    const setGradientColor = canvas => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 0, 305)
        gradient.addColorStop(0, 'rgb(78, 255, 207)')
        gradient.addColorStop(.4, 'rgb(8, 164, 188)')
        gradient.addColorStop(1, 'black')
        return gradient
    }

    const getChartData = canvas => {
        const data = chartData
        if (data.datasets) {
            data.datasets[0].backgroundColor = setGradientColor(canvas)
        }
        return data
    }

    return (
        <div className='mb-2 p-0 rounded-lg secondary-bg line-chart-responsive'>
            <Line data={getChartData} options={options} />
        </div>
    )
}

export default ChartType1