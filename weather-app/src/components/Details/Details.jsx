import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip} from 'recharts';
import './details.css'


const Details = () => {

    const { city } = useParams()
    const location = useLocation()
    const { weatherData } = location.state || {}

    if (!weatherData) {
        return <p>Loading...</p>
    }

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const currentHour = new Date().getHours();
        const next12HoursData = weatherData.forecast.forecastday[0].hour.slice(
          currentHour,
          currentHour + 12
        );
        const remainingHours = 12 - next12HoursData.length;
        const additionalHours = weatherData.forecast.forecastday[0].hour.slice(0, remainingHours);
  
        const newChartData = [
          ...next12HoursData.map((hourData) => ({
            time: hourData.time.split(' ')[1],
            temp_f: hourData.temp_f,
          })),
          ...additionalHours.map((hourData) => ({
            time: hourData.time.split(' ')[1],
            temp_f: hourData.temp_f,
          })),
        ];
  
        console.log('New Chart Data:', newChartData);
        setChartData(newChartData);
      };
  
      if (weatherData) {
        fetchData();
      }
    }, [weatherData]);
  

    return (
        <div className='details'>
            <div className='details-header'>
                <h3>12-hour forecast</h3>
            </div>
            <div className='details-12'>
            <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <XAxis dataKey='time' />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="temp_f"
                            stroke="orange"
                            strokeWidth={2}
                            dot={{ fill: 'black', r: 4 }}
                            label={{ value: 'Temperature (ºF)', position: 'top', fontWeight: '0' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
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