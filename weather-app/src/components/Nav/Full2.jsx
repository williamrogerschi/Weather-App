import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './full2.css'

const Full2 = ({ city }) => {
    console.log('Full2', city)

    const location = useLocation()
    const cityFromDetails = location.state && location.state.city

    return (
        <>
            <Link to={{ pathname: '/', state: { city: cityFromDetails } }} className='full-btn'>
                <div className='full'></div>
                <div className='full'></div>
                <div className='full'></div>
            </Link>
        </>
      )
    }
    
    export default Full2