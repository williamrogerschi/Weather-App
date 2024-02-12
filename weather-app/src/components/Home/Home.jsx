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
import fogIcon from '../../../src/assets/weather/fog.png'


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
				case 1150:
					return <img className="forecast-img" src={mistIcon} alt="Patchy Light Drizzle" />
				case 1153:
					return <img className="forecast-img" src={mistIcon} alt="Light Drizzle" />

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
							<img className="search-icon" src="assets/searchicon.png" alt="" />
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
