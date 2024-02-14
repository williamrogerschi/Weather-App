import React from 'react'
import { Link } from 'react-router-dom'
import './full.css'

const Full = () => {
  return (
    <>
    <button className='full-btn'>
        <Link className='link' to='Details'>
            <div className='full'></div>
            <div className='full'></div>
            <div className='full'></div>
        </Link>
    </button>
    </>
  )
}

export default Full