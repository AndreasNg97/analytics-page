import React from 'react'
import { Line } from 'react-chartjs-2'
import { LineChartOptions } from '../chartconfig/options'

const ChartType2 = () => {
    let labelVals = ["Jun'19", "Jul'19", "Aug'19", "Sep'19", "Okt'19", "Nov'19", "Dec'19"]
    let dataVals = [8, 3, 7, 3, 12, 8, 9]
    const [options] = LineChartOptions('Companies')

    const chartData = ({
        labels: labelVals,
        datasets: [
            {
                label: 'signups',
                data: dataVals,
                backgroundColor: 'rgb(8, 164, 188)',
                borderWidth: 4
            }
        ]
    })

    const setGradientColor = canvas => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 0, 305)
        gradient.addColorStop(0, 'rgba(62, 87, 194, 0.9)')
        gradient.addColorStop(.4, 'rgba(255, 86, 238, 0.9)')
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
        <div className='mt-3 p-0 secondary-bg rounded-lg line-chart-responsive'>
            <Line data={getChartData} options={options} />
        </div>
    )
}

export default ChartType2