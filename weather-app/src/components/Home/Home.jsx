import React, { useState } from 'react'
import './home.css'
import sunnyIcon from '../../../src/assets/weather/sun.png'
import partlyCloudyIcon from '../../../src/assets/weather/partly-cloudy.png'
import cloudyIcon from '../../../src/assets/weather/cloud.png'
import overcastIcon from '../../../src/assets/weather/clouds.png'
import mistIcon from '../../../src/assets/weather/light-rain.png'
import patchyRainIcon from '../../../src/assets/weather/rainsun.png'
import patchySnowIcon from '../../../src/assets/weather/precipitation-sun.png'
import patchySleetIcon from '../../../src/assets/weather/precipitation.png'
import thunderIcon from '../../../src/assets/weather/thunderstorm.png'
import windIcon from '../../../src/assets/weather/wind.png'
import snowyIcon from '../../../src/assets/weather/snowy.png'
import moderateSnowIcon from '../../../src/assets/weather/snow.png'
import fogIcon from '../../../src/assets/weather/fog.png'
import rainIcon from '../../../src/assets/weather/rain.png'
import heavyRainIcon from '../../../src/assets/weather/heavy-rain.png'
import lightSnowIcon from '../../../src/assets/weather/lightsnow.png'
import hailIcon from '../../../src/assets/weather/hail.png'







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
		case 1219:
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


const api = {
	key: '891161eaa5ee484fb27145836232009',
	base: 'http://api.weatherapi.com/v1/',
}

const Home = () => {
	const [search, setSearch] = useState('')
	const [weatherData, setWeatherData] = useState(null)
	const [future, setFuture] = useState(null)

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

	const searchWeather = () => {
		console.log(search)
		fetch(`${api.base}current.json?key=${api.key}&q=${search}`)
			.then((res) => res.json())
			.then((result) => {
				setWeatherData(result)
				console.log(result)
				searchFuture()
			})
	}

	const searchFuture = () => {
		console.log(search)
		fetch(`${api.base}forecast.json?key=${api.key}&q=${search}&days=3`)
			.then((forecastRes) => forecastRes.json())
			.then((forecastResult) => {
				setFuture(forecastResult)
				console.log(forecastResult)
			})
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			searchWeather()
		}
	}


	return (
		<div className="main">
			<div className="search-container">
				<div className="searchbar-wrapper">
					<div className="search-header">
						<input
							type="text"
							placeholder="search..."
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={handleKeyPress}
						/>
						<button onClick={searchWeather}>
							<img className="search-icon" src="src/assets/searchicon.png" alt="" />
						</button>
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
						<p className="current-temp">{weatherData.current.temp_f}º</p>
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
							{/* <img className="forecast-img" src={day.day.condition.icon} /> */}
							<p className="forecast-temp">
								{day.day.maxtemp_f}º | {day.day.mintemp_f}º
							</p>
							<p className='forecast-condition'>{day.day.condition.text}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Home
