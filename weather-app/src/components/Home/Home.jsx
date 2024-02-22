import React, { useState, useEffect, useRef } from 'react'
import sunnyIcon from '/assets/weather/sun.png'
import partlyCloudyIcon from '/assets/weather/partly-cloudy.png'
import cloudyIcon from '/assets/weather/cloud.png'
import overcastIcon from '/assets/weather/clouds.png'
import mistIcon from '/assets/weather/light-rain.png'
import patchyRainIcon from '/assets/weather/rainsun.png'
import patchySnowIcon from '/assets/weather/precipitation-sun.png'
import patchySleetIcon from '/assets/weather/precipitation.png'
import thunderIcon from '/assets/weather/thunderstorm.png'
import windIcon from '/assets/weather/wind.png'
import snowyIcon from '/assets/weather/snowy.png'
import moderateSnowIcon from '/assets/weather/snow.png'
import fogIcon from '/assets/weather/fog.png'
import rainIcon from '/assets/weather/rain.png'
import heavyRainIcon from '/assets/weather/heavy-rain.png'
import lightSnowIcon from '/assets/weather/lightsnow.png'
import hailIcon from '/assets/weather/hail.png'
import { useLocation } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts';
import './home.css'
import '../Details/details.css'


const renderIcon = (apiCode) => {
	switch (apiCode) {
		case 1000:
			return <img className="forecast-img" src={sunnyIcon} alt="Sunny" />
		case 1003:
			return <img className="forecast-img" src={partlyCloudyIcon} alt="Partly Cloudy" />
		case 1006:
			return <img className="forecast-img" src={cloudyIcon} alt="Cloudy" />
		case 1009:
			return <img className="forecast-img" src={overcastIcon} alt="Overcast" />
		case 1030:
			return <img className="forecast-img" src={mistIcon} alt="Mist" />
		case 1063:
			return <img className="forecast-img" src={patchyRainIcon} alt="Patchy Rain" />
		case 1066:
			return <img className="forecast-img" src={patchySnowIcon} alt="Patchy Snow" />
		case 1069:
			return <img className="forecast-img" src={patchySleetIcon} alt="Patchy Sleet" />
		case 1072:
			return <img className="forecast-img" src={patchySleetIcon} alt="Patchy Freezing Drizzle" />
		case 1087:
			return <img className="forecast-img" src={thunderIcon} alt="Patchy Thunderstorms" />
		case 1114:
			return <img className="forecast-img" src={windIcon} alt="Blowing Snow" />
		case 1117:
			return <img className="forecast-img" src={snowyIcon} alt="Blizzard" />
		case 1135:
			return <img className="forecast-img" src={fogIcon} alt="Fog" />
		case 1147:
			return <img className="forecast-img" src={fogIcon} alt="Freezing Fog" />
		case 1150:
			return <img className="forecast-img" src={mistIcon} alt="Patchy Light Drizzle" />
		case 1153:
			return <img className="forecast-img" src={mistIcon} alt="Light Drizzle" />
		case 1168:
			return <img className="forecast-img" src={patchySleetIcon} alt="Freezing Drizzle" />
		case 1171:
			return <img className="forecast-img" src={patchySleetIcon} alt="Heavy Freezing Drizzle" />
		case 1180:
			return <img className="forecast-img" src={patchyRainIcon} alt="Patchy Light Rain" />
		case 1183:
			return <img className="forecast-img" src={mistIcon} alt="Light Rain" />
		case 1186:
			return <img className="forecast-img" src={rainIcon} alt="Moderate Rain at Times" />
		case 1189:
			return <img className="forecast-img" src={rainIcon} alt="Moderate Rain" />
		case 1192:
			return <img className="forecast-img" src={heavyRainIcon} alt="Heavy Rain at Times" />
		case 1195:
			return <img className="forecast-img" src={heavyRainIcon} alt="Heavy Rain" />
		case 1198:
			return <img className="forecast-img" src={patchySleetIcon} alt="Light Freezing Rain" />
		case 1201:
			return <img className="forecast-img" src={patchySleetIcon} alt="Heavy Freezing Rain" />
		case 1204:
			return <img className="forecast-img" src={patchySnowIcon} alt="Light Sleet" />
		case 1207:
			return <img className="forecast-img" src={lightSnowIcon} alt="Heavy Sleet" />
		case 1210:
			return <img className="forecast-img" src={snowyIcon} alt="Patchy Light Snow" />
		case 1213:
			return <img className="forecast-img" src={lightSnowIcon} alt="Light Snow" />
		case 1216:
			return <img className="forecast-img" src={snowyIcon} alt="Patchy Moderate Snow" />
		case 1219:
			return <img className="forecast-img" src={moderateSnowIcon} alt="Moderate Snow" />
		case 1216:
			return <img className="forecast-img" src={snowyIcon} alt="Patchy Heavy Snow" />
		case 1225:
			return <img className="forecast-img" src={moderateSnowIcon} alt="Heavy Snow" />
		case 1237:
			return <img className="forecast-img" src={hailIcon} alt="Ice Pellets" />
		case 1240:
			return <img className="forecast-img" src={rainIcon} alt="Light Rain Showers" />
		case 1243:
			return <img className="forecast-img" src={heavyRainIcon} alt="Moderate or Heavy Rain Showers" />
		case 1246:
			return <img className="forecast-img" src={heavyRainIcon} alt="Torrential Rain Showers" />
		case 1249:
			return <img className="forecast-img" src={patchySleetIcon} alt="Light Sleet Showers" />
		case 1252:
			return <img className="forecast-img" src={patchySleetIcon} alt="Moderate or Heavy Sleet Showers" />
		case 1243:
			return <img className="forecast-img" src={heavyRainIcon} alt="Moderate or Heavy Rain Showers" />
		case 1255:
			return <img className="forecast-img" src={lightSnowIcon} alt="Light Snow Showers" />
		case 1258:
			return <img className="forecast-img" src={moderateSnowIcon} alt="Moderate or Heavy Snow Showers" />
		case 1261:
			return <img className="forecast-img" src={hailIcon} alt="Light Showers of Ice Pellets" />
		case 1264:
			return <img className="forecast-img" src={hailIcon} alt="Moderate Showers of Ice Pellets" />
		case 1273:
			return <img className="forecast-img" src={thunderIcon} alt="Light Rain with Thunder" />
		case 1276:
			return <img className="forecast-img" src={thunderIcon} alt="Moderate or Heavy Rain with Thunder" />
		case 1279:
			return <img className="forecast-img" src={thunderIcon} alt="Patchy Light Snow with Thunder " />
		case 1282:
			return <img className="forecast-img" src={thunderIcon} alt="Moderate or Heavy Snow with Thunder " />
		default:
			return null
	}
}

const changeBG = (apiCode) => {
	switch (apiCode) {
		case 1000:
			return {
				background: 'var(--backgroundSunny)'
			}
		case 1003:
		case 1006:
		case 1009:
		case 1135:
			return {
				background: 'var(--backgroundCloudy)'
			}
		case 1030:
		case 1063:
		case 1072:
		case 1150:
		case 1153:
		case 1168:
		case 1171:
		case 1180:
		case 1183:
		case 1186:
		case 1189:
		case 1192:
		case 1195:
		case 1198:
		case 1201:
		case 1240:
		case 1243:
		case 1246:
		case 1249:
		case 1261:
		case 1264:
			return {
				background: 'var(--backgroundRainy)'
			}
		case 1069:
		case 1114:
		case 1117:
		case 1147:
		case 1204:
		case 1207:
		case 1210:
		case 1213:
		case 1216:
		case 1225:
		case 1237:
		case 1252:
		case 1255:
		case 1258:
			return {
				background: 'var(--backgroundSnowy)'
			}
		case 1087:
		case 1273:
		case 1276:
		case 1279:
		case 1282:
			return {
				background: 'var(--backgroundThunder)'
			}
		default:
			return {
				background: 'var(--background)'
			}
	}
}

const api = {
	key: '891161eaa5ee484fb27145836232009',
	base: 'http://api.weatherapi.com/v1/',
}

const Home = () => {

	const [search, setSearch] = useState('');
	const [weatherData, setWeatherData] = useState(null);
	const [future, setFuture] = useState(null);
	const [selectedCity, setSelectedCity] = useState('');
	const [chartData, setChartData] = useState([]);
	const [astroData, setAstroData] = useState(null);
	const [chanceOfRain, setChanceOfRain] = useState(null);
	const [pressureData, setPressureData] = useState(null); 


	const formatDateString = (dateString) => {
		const options = { weekday: 'long', month: 'long', day: 'numeric' }
		const formattedDate = new Date(
			dateString.replace(/-/g, '/')
		).toLocaleDateString('en-US', options)
		return formattedDate
	}

	const formatDayString = (dateString) => {
		const options = { weekday: 'short' }
		const formattedDate = new Date(
			dateString.replace(/-/g, '/')
		).toLocaleDateString('en-US', options)
		return formattedDate
	}

	const fetchData = async () => {
		try {
		  const currentWeatherResponse = await fetch(`${api.base}current.json?key=${api.key}&q=${search}`);
		  if (!currentWeatherResponse.ok) {
			throw new Error('City not found');
		  }
		  const currentWeatherResult = await currentWeatherResponse.json();
	
		  const forecastResponse = await fetch(`${api.base}forecast.json?key=${api.key}&q=${search}&days=3`);
		  if (!forecastResponse.ok) {
			throw new Error('City not found');
		  }
		  const forecastResult = await forecastResponse.json();
	
		  setSelectedCity(currentWeatherResult.location.name);
		  setWeatherData(currentWeatherResult);
		  setFuture(forecastResult);

		  console.log('future forecast', forecastResult)
	
		  if (forecastResult && forecastResult.forecast && forecastResult.forecast.forecastday) {
			console.log('Updated weather data:', currentWeatherResult);
			const astroData = forecastResult.forecast.forecastday[0]?.astro || null;
			console.log('astroData:', astroData)
			setAstroData(astroData);

			const chanceOfRain = forecastResult.forecast.forecastday[0].day.daily_chance_of_rain || null;
        	console.log('chanceOfRain:', chanceOfRain);
			setChanceOfRain(chanceOfRain)

        const pressureData = currentWeatherResult.current?.pressure_mb || null;
        console.log('pressureData:', pressureData);
		setPressureData(pressureData)
	
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
	
			setChartData(filteredData);
			console.log('chartData:', chartData);
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
		console.log('currentCity:', location.state)
		if (city && weatherData) {
		  setSelectedCity(city);
		  setWeatherData(weatherData);
		}
	  }, [location.state]);

	return (
		<div className="main" style={weatherData ? changeBG(weatherData.current.condition.code) : {}}>
		  <div className='top-container'>
			<div className="search-container">
			  <div className="searchbar-wrapper">
				<div className="search-header">
				  <div className='search-header-wrapper'>
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
					<p className="p-date">
					  {formatDateString(weatherData.location.localtime)}
					</p>
				  </div>
				)}
			  </div>
			  {weatherData && (
				<div className="temp">
				  <p className="current-temp">{Math.round(weatherData.current.temp_f)}º</p>
				  <p className="current-condition">
					{weatherData.current.condition.text}
				  </p>
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
		  <div className='details-container'>
		  <div className='details'>
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
          {astroData && chanceOfRain && pressureData && (
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
				<div className='row-wrapper'>
				<div className='container'>
                  <p>Chance of Rain</p>
                  <p>{chanceOfRain}%</p>
				  </div>
				<div className='container'>
                  <p>Pressure</p>
                  <p>{pressureData} mb</p>
                </div>
              </div>
            </>
          )}
			<div className='row-wrapper'>
				<div className='container'>
					<p>Wind</p>
					<p>{weatherData.current.wind_dir} {weatherData.current.wind_mph}  mp/h</p>
				</div>
				<div className='container'>
					<p>Feels Like</p>
					<p>{weatherData.current.feelslike_f}ºF</p>
				</div>
			</div>
			<div className='row-wrapper'>
				<div className='container'>
					<p>Humidity</p>
					<p>{weatherData.current.humidity}%</p>
				</div>
				<div className='container'>
					<p>UV</p>
					<p>{weatherData.current.uv}</p>
				</div>
			</div>
        </div>
      </div>
    </div>
		  </div>
		</div>
	  );
	}
	
	export default Home;
