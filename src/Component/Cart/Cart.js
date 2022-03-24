import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0
    let image = []
    for (const element of cart) {
        total = total + parseFloat(element.price)
        image = [...image, element.img]
        console.log(element)
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>

            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <img className='image-cart' src={image} alt="" />
        </div>
    );
};

export default Cart;