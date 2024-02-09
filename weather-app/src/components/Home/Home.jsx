import React, { useState } from 'react'
import './home.css'


const api = {
  key: '891161eaa5ee484fb27145836232009',
  base: 'http://api.weatherapi.com/v1/'
}


const Home = () => {

  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const formatDateString = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options)
    return formattedDate
  }

  const searchWeather = () => {
    console.log(search)
    fetch(`${api.base}current.json?key=${api.key}&q=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result)
        console.log(result)
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
      </div>
    </>
  )
}

export default Home