import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { renderIcon, changeBG } from '../Icons/Icons';
import './home.css';
import '../Details/details.css';

const api = {
  key: '891161eaa5ee484fb27145836232009',
  base: 'http://api.weatherapi.com/v1/',
};

const Home = () => {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [future, setFuture] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [chartData, setChartData] = useState([]);
  const [astroData, setAstroData] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState(null);
  const [pressureData, setPressureData] = useState(null);
  const [yDomain, setYDomain] = useState([0, 100]); // Set initial values, adjust accordingly

  const formatDateString = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString.replace(/-/g, '/')).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const formatDayString = (dateString) => {
    const options = { weekday: 'short' };
    const formattedDate = new Date(dateString.replace(/-/g, '/')).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const fetchData = async () => {
    try {
      const currentWeatherResponse = await fetch(
        `${api.base}current.json?key=${api.key}&q=${search}`
      );
      if (!currentWeatherResponse.ok) {
        throw new Error('City not found');
      }
      const currentWeatherResult = await currentWeatherResponse.json();

      const forecastResponse = await fetch(
        `${api.base}forecast.json?key=${api.key}&q=${search}&days=3`
      );
      if (!forecastResponse.ok) {
        throw new Error('City not found');
      }
      const forecastResult = await forecastResponse.json();

      setSelectedCity(currentWeatherResult.location.name);
      setWeatherData(currentWeatherResult);
      setFuture(forecastResult);

      if (
        forecastResult &&
        forecastResult.forecast &&
        forecastResult.forecast.forecastday
      ) {
        const astroData = forecastResult.forecast.forecastday[0]?.astro;
        setAstroData(astroData);

        const chanceOfRain = forecastResult.forecast.forecastday[0].day.daily_chance_of_rain;
        setChanceOfRain(chanceOfRain);

        const pressureData = currentWeatherResult.current?.pressure_mb;
        setPressureData(pressureData);

        const currentHour = new Date().getHours();
        const next12HoursData = forecastResult.forecast.forecastday[0].hour.slice(
          currentHour,
          currentHour + 12
        );
        const remainingHours = 12 - next12HoursData.length;
        const additionalHours = forecastResult.forecast.forecastday[0].hour.slice(0, remainingHours);

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

        // Calculate the minimum and maximum temperature values from your data
        const minTemp = filteredData.reduce((min, data) => Math.min(min, data.temp_f), Infinity);
        const maxTemp = filteredData.reduce((max, data) => Math.max(max, data.temp_f), -Infinity);

        // Add some padding to the domain for better visualization
        const yDomainPadding = 5;
        const newYDomain = [minTemp - yDomainPadding, maxTemp + yDomainPadding];

        // Set the Y-axis domain in your state
        setYDomain(newYDomain);

        setChartData(filteredData);
      } else {
        setAstroData(null);
      }
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  useEffect(() => {
    const { city, weatherData } = location.state || {};
    if (city && weatherData) {
      setSelectedCity(city);
      setWeatherData(weatherData);
    }
  }, [location.state]);

  return (
    <div className="main" style={weatherData ? changeBG(weatherData.current.condition.code) : {}}>
      <div className="top-container">
        <div className="search-container">
          <div className="searchbar-wrapper">
            <div className="search-header">
              <div className="search-header-wrapper">
                <input
                  type="text"
                  placeholder="search..."
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button onClick={fetchData}>
                  <img className="search-icon" src="/assets/searchicon.png" alt="" />
                </button>
              </div>
            </div>
            {weatherData && (
              <div className="header-results">
                <h1 className="location">
                  {weatherData.location.name}, {weatherData.location.region}
                </h1>
                <p className="p-date">{formatDateString(weatherData.location.localtime)}</p>
              </div>
            )}
          </div>
          {weatherData && (
            <div className="temp">
              <p className="current-temp">{Math.round(weatherData.current.temp_f)}º</p>
              <p className="current-condition">{weatherData.current.condition.text}</p>
            </div>
          )}
        </div>
        {future && future.forecast && future.forecast.forecastday && (
          <div className="two-day">
            {future.forecast.forecastday.slice(1, 3).map((day) => (
              <div key={day.date_epoch} className="forecast-day">
                <p className="forecast-date">{formatDayString(day.date)}</p>
                {renderIcon(day.day.condition.code)}
                <p className="forecast-temp">
                  {day.day.maxtemp_f}º | {day.day.mintemp_f}º
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="details-container">
        <div className="details">
          <div className="details-12">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 0, right: 20, left: 20, bottom: 100}}>
                <XAxis 
				dataKey="time"
				stroke="black"
				tickLine={false}
				interval="preserveStartEnd"
				/>
                <YAxis
                  hide={true}
                  tickCount={5}
                  interval="preserveStartEnd"
                  domain={yDomain}
                />
                <Line
                  type="monotone"
                  dataKey="temp_f"
                  stroke="black"
                  strokeWidth={3}
                  dot={{ fill: 'black', r: 0 }}
                  label={{
                    value: 'Temperature (ºF)',
                    position: 'top',
                    fontWeight: '0',
					fill: 'black',
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="details-wrapper">
            <div className="details-content">
              {astroData !== null && (
                <>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Sunrise</p>
                      <p>{astroData.sunrise}</p>
                    </div>
                    <div className="container">
                      <p>Sunset</p>
                      <p>{astroData.sunset}</p>
                    </div>
                  </div>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Moonrise</p>
                      <p>{astroData.moonrise}</p>
                    </div>
                    <div className="container">
                      <p>Moonset</p>
                      <p>{astroData.moonset}</p>
                    </div>
                  </div>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Moon Phase</p>
                      <p>{astroData.moon_phase}</p>
                    </div>
                    <div className="container">
                      <p>Moon Illumination</p>
                      <p>{astroData.moon_illumination}</p>
                    </div>
                  </div>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Chance of Rain</p>
                      {chanceOfRain !== null ? <p>{chanceOfRain}%</p> : <p>N/A</p>}
                    </div>
                    <div className="container">
                      <p>Pressure</p>
                      {pressureData !== null ? <p>{pressureData} mb</p> : <p>N/A</p>}
                    </div>
                  </div>
                </>
              )}
              {weatherData && weatherData.current && (
                <>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Wind</p>
                      <p>
                        {weatherData.current.wind_dir} {weatherData.current.wind_mph} mp/h
                      </p>
                    </div>
                    <div className="container">
                      <p>Feels Like</p>
                      <p>{weatherData.current.feelslike_f}ºF</p>
                    </div>
                  </div>
                  <div className="row-wrapper">
                    <div className="container">
                      <p>Humidity</p>
                      <p>{weatherData.current.humidity}%</p>
                    </div>
                    <div className="container">
                      <p>UV</p>
                      <p>{weatherData.current.uv}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
