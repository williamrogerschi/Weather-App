import React, { useState } from 'react'


const api = {
  key: '891161eaa5ee484fb27145836232009',
  base: 'http://api.weatherapi.com/v1/'
}


const Header = () => {

  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)



  const searchWeather = () => {
    console.log(search)
    fetch(`${api.base}current.json?key=${api.key}&q=${search}`)
      .then((currentRes) => currentRes.json())
      .then((currentResult) => {
        console.log(currentResult)
        })
  }


  return (
    <div className='header'>
      <h1>Weather App</h1>
      <input
        type='text'
        placeholder='search...'
        onChange={ (e) => setSearch(e.target.value) }
        />
        <button onClick={searchWeather}>Search</button>

        <p>New York City, USA</p>
        <p>32 ºF</p>
        <p>Sunny</p>
    </div>
  )
}

export default Header