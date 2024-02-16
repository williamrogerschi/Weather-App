import React from 'react'
import { useNavigate } from 'react-router-dom'
import './full.css'

const Full = ({ city, weatherData }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (city) {
            navigate(`/Details/${city}`, { state: {weatherData} })
        } else {
            console.error('City is undefined')
        }
    }

  return (
    <>
    <button className='full-btn' onClick={handleClick}>
            <div className='full'></div>
            <div className='full'></div>
            <div className='full'></div>
    </button>
    </>
  )
}

export default Full