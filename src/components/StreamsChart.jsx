// @ts-nocheck
import { useState, useEffect, useContext } from 'react';
// import '../styles/pending-chart.css';
import { Chart } from 'primereact/chart';
import { useSelector } from 'react-redux';
import { HomeContext } from './Home';


export const StreamsChart = () => {
    const { streams } = useSelector(state => state.streamModule);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);
    const { maxSize } = useContext(HomeContext);


    useEffect(() => {
        if (streams.length) {
            setData(getData());
            setOptions(getOptions());
        }
    }, [streams])


    const getData = () => {
        return {
            labels: streams.map(stream => stream.name),
            datasets: [{
                label: 'זרמי נתונים',
                data: streams.map(stream => stream.size),
                backgroundColor: ['#579EB9'],
                barThickness: 300
            }]
        }
    }


    const getOptions = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: 0.5,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: '20px',
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    max: maxSize,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50,
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: { display: true }
                }
            },
            animation: {
                duration: 0
            }
        }
    }


    return (
        <div className="streaming-chart-container">
            {(data && options) &&
                <Chart type="bar" data={data} options={options} />
            }
        </div>
    )
}