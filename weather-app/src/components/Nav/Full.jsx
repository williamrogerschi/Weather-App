import React from 'react';
import { Link } from 'react-router-dom';
import './full.css';

const Full = ({ city, weatherData }) => {
    return (
        <Link to={`/Details/${city}`} state={{ weatherData }}>
            <button className='full-btn'>
                <div className='full'></div>
                <div className='full'></div>
                <div className='full'></div>
            </button>
        </Link>
    );
}

export default Full