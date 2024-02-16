import React from 'react';
import { Link } from 'react-router-dom';

const Full2 = ({ city, weatherData, future }) => {
    return (
        <Link to="/" state={{ city, weatherData, future }}>
            <button className='full-btn'>
                <div className='full'></div>
                <div className='full'></div>
                <div className='full'></div>
            </button>
        </Link>
    );
}

export default Full2;