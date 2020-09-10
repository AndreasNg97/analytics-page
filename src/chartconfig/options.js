
export const LineChartOptions = (title) => {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: title,
            fontSize: 18,
            padding: 30
        },
        elements:{
            point:{
                radius: 0
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 12
                    },
                    gridLines: {
                        display:false
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                    },
                    gridLines: {
                        display:false
                    }
                }
            ]
        }
    }
    return [options]
}