import React, { useState } from 'react'
import './home.css'


const api = {
  key: '891161eaa5ee484fb27145836232009',
  base: 'http://api.weatherapi.com/v1/'
}


const Home = () => {

  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [future, setFuture] = useState(null)

  const formatDateString = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString.replace(/-/g, '/')).toLocaleDateString('en-US', options);
    return formattedDate;
  };

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


  return (
    <>
      <div className='search-container'>
        <div className='searchbar-wrapper'>
          <div className='search-header'>
            <input
              type='text'
              placeholder='search...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchWeather}>
              <img className='search-icon' src='assets/searchicon.png' alt='' />
            </button>
          </div>
          {weatherData && (
            <div className='header-results'>
              <h1 className='location'>{weatherData.location.name}</h1>
              <p className='p-date'>{formatDateString(weatherData.location.localtime)}</p>
            </div>
          )}
        </div>
        {weatherData && (
          <div className='temp'>
            <p className='current-temp'>{weatherData.current.temp_f}º</p>
            <p className='current-condition'>{weatherData.current.condition.text}</p>
          </div>
        )}
{future && future.forecast && future.forecast.forecastday && (
  <div className='3-day'>
    {future.forecast.forecastday.slice(1, 3).map((day) => (
      <div key={day.date_epoch} className='forecast-day'>
        <p className='forecast-date'>{formatDateString(day.date)}</p>
        <p className='forecast-temp'>{day.day.maxtemp_f}º / {day.day.mintemp_f}º</p>
        <p className='forecast-condition'>{day.day.condition.text}</p>
      </div>
    ))}
  </div>
)}
      </div>
    </>
  )
}

export default Home