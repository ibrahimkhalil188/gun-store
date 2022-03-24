import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0
    let tex = 0;
    for (const element of cart) {
        total = total + parseFloat(element.price)
        tex = tex + parseFloat(element.price * 0.1)
        console.log(element)
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Tex: ${tex}</p>
            <h4>Grand Total: ${total + tex}</h4>
        </div>
    );
};

export default Cart;