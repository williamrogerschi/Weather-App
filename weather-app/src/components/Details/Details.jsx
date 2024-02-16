import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import Full2 from '../Nav/Full2'
import './details.css'


const Details = () => {

    const { city } = useParams()
    const location = useLocation()
    const { weatherData } = location.state || {}

    if (!weatherData) {
        return <p>Loading...</p>
    }

    const hourlyData = weatherData.forecast.forecastday[0].hour

    const [chartData, setChartData] = useState ({
        options: {
            xaxis: {
                categories: [],
                title: {
                    text: '',
                },
            },
            yaxis: {
                title: {
                    text: '',
                },
            },
        },
        series: [
            {
                name: 'Temperature (ºF)',
                data: hourlyData.map((hourData) => hourData.temp_f),
            },
        ],
    })

    useEffect(() => {
        if (weatherData) {
            const currentHour = new Date().getHours()
            const next12HoursData = weatherData.forecast.forecastday[0].hour.slice(
                currentHour,
                currentHour + 12
            )

            const newChartData = {
                options: {
                    xaxis: {
                        categories: next12HoursData.map((hourData) => hourData.time.split(' ')[1]),
                        title: {
                            text: '',
                        },
                    },
                    yaxis: {
                        title: {
                            text: '',
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    colors: ['rgba(0, 0, 0, 0.55)']
                },
                series: [
                    {
                        name: 'Temperatrure (ºF)',
                        data: next12HoursData.map((hourData) => hourData.temp_f),
                    },
                ],
            }

            setChartData(newChartData)
        }
    }, [weatherData])




  return (
    <div className='details'>
        <div className='details-header'>
            <Full2 city={city} weatherData={weatherData} />
            <h3>12-hour forecast</h3>
            <h1>{city}</h1>
        </div>
        <div className='details-12'>
            <ReactApexChart 
                className='react-chart'
                options={chartData.options}
                series={chartData.series}
                type='area'
                height={250}
            />
        </div>
        <div className='details-content'>
        {weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0].astro && (
        <div className='detail-astro'>
            <p>Sunrise {weatherData.forecast.forecastday[0].astro.sunrise}</p>
            <p>Sunset {weatherData.forecast.forecastday[0].astro.sunset}</p>
            <p>Moon {weatherData.forecast.forecastday[0].astro.moon_phase}</p>
            <p>Moon Illumination {weatherData.forecast.forecastday[0].astro.moon_illumination}</p>
        </div>
        )}
        <div className='detail-content'>
            <p>Humidity {weatherData.current.humidity}%</p>
            <p>Real Feel {weatherData.current.feelslike_f}º</p>
            <p>Wind {weatherData.current.wind_dir} {weatherData.current.wind_mph} mp/h</p>
            <p>UV {weatherData.current.uv}</p>
        </div>
        {weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0].day && (
        <div className='detail-astro'>
            <p>Chance of Rain {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
            <p>Pressure {weatherData.current.pressure_mb} mbar</p>
        </div>
        )}
    </div>
    </div>
  )
}

export default Details