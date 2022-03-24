import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';
import './Shop.css'

const Shop = () => {
    const [guns, setGuns] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    const addToCart = (guns) => {
        const newCart = [...cart, guns]
        setCart(newCart)

    }

    return (
        <div className='shop'>
            <div className='gun-container'>
                {
                    guns.map(gun => <Gun key={gun.id} gun={gun}
                        addToCart={addToCart}></Gun>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;