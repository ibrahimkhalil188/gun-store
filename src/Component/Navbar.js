import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>Gun-Store</div>
            <div className='menu-bar'>
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Cart</a>
                <a href="/home">Contact</a>
            </div>

        </div>
    );
};

export default Navbar;