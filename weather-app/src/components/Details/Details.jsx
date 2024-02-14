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


  return (
    <div className='details'>
        <h3>24-hour forecast</h3>
        <h1>{city}</h1>
    </div>
  )
}

export default Details