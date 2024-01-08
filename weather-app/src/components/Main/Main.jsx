import React from 'react'
import Nav from '../Nav/Nav'
import './main.css'



const api = {
  key: '4aadc3d41f5ea428ef8802b89de00128',
  base: 'https://api.openweathermap.org/data/3.0/'
}


const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <h1>
        This is Main
      </h1>
    </div>
  )
}

export default Main