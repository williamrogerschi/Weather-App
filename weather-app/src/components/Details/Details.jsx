import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts';
import './details.css';

const Details = ({ city, weatherData, future }) => {
  const [currentCity, setCurrentCity] = useState(city || 'defaultCity');
  const [chartData, setChartData] = useState([]);
  const [astroData, setAstroData] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {

        if (weatherData && weatherData.forecast && weatherData.forecast.forecastday) {
            console.log('Updated weather data:', weatherData); // Log weatherData for debugging
            const astroData = weatherData.forecast.forecastday[0]?.astro || null;
            console.log('astroData:', astroData); // Log astroData for debugging
            setAstroData(astroData);

        const currentHour = new Date().getHours();
        const next12HoursData = weatherData.forecast.forecastday[0].hour.slice(
          currentHour,
          currentHour + 12
        );
        const remainingHours = 12 - next12HoursData.length;
        const additionalHours = weatherData.forecast.forecastday[0].hour.slice(0, remainingHours);

        const filteredData = [
          ...next12HoursData
            .filter((_, index) => index % 2 === 0)
            .map((hourData) => ({
              time: hourData.time.split(' ')[1],
              temp_f: Math.round(hourData.temp_f),
            })),
          ...additionalHours
            .filter((_, index) => index % 2 === 0)
            .map((hourData) => ({
              time: hourData.time.split(' ')[1],
              temp_f: Math.round(hourData.temp_f),
            })),
        ];

        setChartData(filteredData);
        console.log('chartData:', chartData);
      } else {
        setAstroData(null);
      }
    };

    fetchData();
  }, [weatherData, city, future]);
  console.log('weather data after useEffect:', weatherData)
  console.log('future data after useEffect:', future)


  useEffect(() => {
    setCurrentCity(city || 'defaultCity');
  }, [city]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='details'>
      <div className='details-header'>
        <h3>12-hour forecast</h3>
      </div>
      <div className='details-12'>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey='time' />
            <Line
              type="monotone"
              dataKey="temp_f"
              stroke="black"
              strokeWidth={2}
              dot={{ fill: 'black', r: 0 }}
              label={{ value: 'Temperature (ºF)', position: 'top', fontWeight: '0' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='details-wrapper'>
        <div className='details-content'>
          {astroData && (
            <>
              <div className='row-wrapper'>
                <div className='container'>
                  <p>Sunrise</p>
                  <p>{astroData.sunrise}</p>
                </div>
                <div className='container'>
                  <p>Sunset</p>
                  <p>{astroData.sunset}</p>
                </div>
              </div>
              <div className='row-wrapper'>
                <div className='container'>
                  <p>Moonrise</p>
                  <p>{astroData.moonrise}</p>
                </div>
                <div className='container'>
                  <p>Moonset</p>
                  <p>{astroData.moonset}</p>
                </div>
              </div>
              <div className='row-wrapper'>
                <div className='container'>
                  <p>Moon Phase</p>
                  <p>{astroData.moon_phase}</p>
                </div>
                <div className='container'>
                  <p>Moon Illumination</p>
                  <p>{astroData.moon_illumination}</p>
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
  );
};

export default Details;
