import React from 'react';
import { Link } from 'react-router-dom';
import './full.css';

const Full = ({ city, weatherData, future }) => {
    return (
        <Link to={`/Details/${city}`} state={{ weatherData, future }}>
            <button className='full-btn'>
                <div className='full'></div>
                <div className='full'></div>
                <div className='full'></div>
            </button>
        </Link>
    );
}

export default Full