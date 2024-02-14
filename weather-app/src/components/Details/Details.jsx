import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './details.css'


const Details = () => {

    const { city } = useParams()
    const location = useLocation()
    const { weatherData } = location.state || {}

    if (!weatherData) {
        return <p>Loading...</p>
    }

    console.log('details weather:', weatherData)


  return (
    <div className='details'>
        <div className='details-header'>
            <h3>24-hour forecast</h3>
            <h1>{city}</h1>
        </div>
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
  )
}

export default Details