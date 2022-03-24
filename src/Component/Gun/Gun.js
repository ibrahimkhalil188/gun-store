import React from 'react';
import './Gun.css'
import { BsFillCartCheckFill } from 'react-icons/bs';

const Gun = (props) => {
    const { img, name, action, bullet, category, price } = props.gun
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <div className='gun-info'>
                <p>Action: {action}</p>
                <p>Bullet: {bullet}</p>
                <p>Category: {category}</p>
                <h3>Price: ${price}</h3>
            </div>

            <button onClick={() => props.addToCart(props.gun)} style={{ fontSize: "20px" }}>Add to cart <BsFillCartCheckFill /></button>

        </div >
    );
};

export default Gun;