import React from 'react';
import { Link } from 'react-router-dom';

const Full2 = ({ selectedCity, future }) => {
    return (
        <Link to="/" state={{ selectedCity, future }}>
            <button className='full-btn'>
                <div className='full'></div>
                <div className='full'></div>
                <div className='full'></div>
            </button>
        </Link>
    );
}

export default Full2;