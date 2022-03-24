import React from 'react';
import './Gun.css'
const Gun = ({ gun }) => {
    const { img, name, } = gun
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>{name}</p>

        </div>
    );
};

export default Gun;