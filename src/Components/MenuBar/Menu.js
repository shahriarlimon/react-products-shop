import React from 'react';
import './Menu.css'

const Menu = (props) => {
    return (
        <div className='d-flex justify-content-between mt-3'>
            <div>
                <h3>Logo</h3>
            </div>
            <div className='d-flex menu-items'>
                <a className='me-3' href="/home"><li>Home</li></a>
                <a className='me-3' href="/cart"><li>Cart <sup>{props.count}</sup></li></a>
                <a className='me-3' href="/about us"><li>About Us</li></a>
                <a className='me-3' href="/contact"><li>Contact</li></a>
            </div>
            
        </div>
    );
};

export default Menu;