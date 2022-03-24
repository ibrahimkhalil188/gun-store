import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Shop.css'

const Shop = () => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='shop'>
            <div className='gun-container'>
                {
                    guns.map(gun => <Gun key={gun.id} gun={gun}></Gun>)
                }
            </div>
            <div className='order-container'>
                <h2>Order Summary</h2>

            </div>
        </div>
    );
};

export default Shop;