import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import './details.css'


const Details = () => {

    const { city } = useParams()
    const location = useLocation()
    const { weatherData } = location.state || {}

    if (!weatherData) {
        return <p>Loading...</p>
    }

    const hourlyData = weatherData.forecast.forecastday[0].hour

    const [chartData, setChartData] = useState({
        options: {
            xaxis: {
                categories: [],
                title: {
                    text: '',
                },
                axisTicks : {
                    show: false,
                },
            },
            yaxis: {
                title: {
                    text: '',
                },
                lines: {
                    borderColor: 'transparent',
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

            const remainingHours = 12 - next12HoursData.length
            const additionalHours = weatherData.forecast.forecastday[0].hour.slice(0, remainingHours)


            const newChartData = {
                options: {
                    xaxis: {
                        categories: [
                            ...next12HoursData.map((hourData) => hourData.time.split(' ')[1]),
                            ...additionalHours.map((hourData) => hourData.time.split(' ')[1]),
                        ],
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
                       data: [
                        ...next12HoursData.map((hourData) => hourData.temp_f),
                        ...additionalHours.map((hourData) => hourData.temp_f),
                    ],
                    },
                ],
            }

            setChartData(newChartData)
        }
    }, [weatherData])
    // console.log(weatherData)


    return (
        <div className='details'>
            <div className='details-header'>
                <h3>12-hour forecast</h3>
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
            <div className='details-wrapper'>
            <div className='details-content'>
                {weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0].astro && (
                    <>
                    <div className='row-wrapper'>
                        <div className='container'>
                            <p>Sunrise</p>
                            <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                        </div>
                        <div className='container'>
                            <p>Sunset</p>
                            <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                        </div>
                        </div>
                        <div className='row-wrapper'>
                        <div className='container'>
                            <p>Moon</p>
                            <p>{weatherData.forecast.forecastday[0].astro.moon_phase}</p>
                        </div>
                        <div className='container'>
                            <p>Moon Illumination</p>
                            <p>{weatherData.forecast.forecastday[0].astro.moon_illumination}</p>
                        </div>
                        </div>
                    </>
                )}
                <div className='row-wrapper'>
                <div className='container'>
                    <p>Humidity</p>
                    <p>{weatherData.current.humidity}%</p>
                </div>
                <div className='container'>
                    <p>Real Feel</p>
                    <p>{weatherData.current.feelslike_f}º</p>
                </div>
                </div>
                <div className='row-wrapper'>
                <div className='container'>
                    <p>Wind</p>
                    <p>{weatherData.current.wind_dir} {weatherData.current.wind_mph} mp/h</p>
                </div>
                <div className='container'>
                    <p>UV</p>
                    <p>{weatherData.current.uv}</p>
                </div>
                </div>
                {weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0].day && (
                    <>
                    <div className='row-wrapper'>
                        <div className='container'>
                            <p>Chance of Rain</p>
                            <p>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                        </div>
                        <div className='container'>
                            <p>Pressure</p>
                            <p>{weatherData.current.pressure_mb} mbar</p>
                        </div>
                        </div>
                    </>
                )}
            </div>
            </div>
        </div>
    )
}

export default Details