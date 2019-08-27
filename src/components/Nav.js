import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <h3 className="logo" >Pontus Arnesson</h3>
            </Link>
            <svg 
                className="menu"
                width="43" 
                height="23" 
                viewBox="0 0 43 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="43" y2="1.5" stroke="#ebebeb" strokeWidth="3"/>
                <line y1="11.5" x2="43" y2="11.5" stroke="#ebebeb" strokeWidth="3"/>
                <line y1="21.5" x2="43" y2="21.5" stroke="#ebebeb" strokeWidth="3"/>
            </svg>
        </nav>
    );
}

export default Nav;