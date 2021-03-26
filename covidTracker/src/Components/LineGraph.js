import React,{useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import numeral from 'numeral'
const buildChartData = (data, caseTypes = 'cases') => {
    const chartData = []
    let lastDataPoint;
    for (let date of data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[caseTypes][date] - lastDataPoint
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[caseTypes][date]
    }
        
    
    return chartData
}
function LineGraph() {
    const [data, setData] = useState([])
    
    ////https://disease.sh/v3/covid-19/historical/all?lastdays=120;
    useEffect(() => {
        const getData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
                .then(data => {
                console.log(data)
                const chartData = buildChartData(data, 'cases')
                setData(chartData)
            })
            .catch(error=>console.log(error.message))
        }
        getData()
        
    },[])
    const options = {
        legend: {
          display:false
        },
        elements: {
            points: {
                radius:0
            }
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: function (tooltipItem, data) {
                    return numeral(tooltipItem.value).format("+0,0")
                }
            }
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        format: "MM/DD/YY",
                        tooltipFormat:"ll"
                    }
                }
            ],
            yAxes: [
                {
                    grideLines: {
                       display:false
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return numeral(value).format("0a")
                        }
                    }
                }
            ]
        }
    }
    console.log(data)

    return (
        <div className="line">
            Am the data
            {data.length>0&&(<Line
                options ={options}
                data={{
                    datasets: [{
                        data: data,
                        borderColor:"#cc1034"
                    }]
                }}
 
            />)}
        </div>
    )
}

export default LineGraph
