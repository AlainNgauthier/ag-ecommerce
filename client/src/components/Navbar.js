import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/" className="navbar__logo">
                <img 
                    src={Logo} 
                    alt="logo"
                />
                <span className="navbar__name">AG SHOP</span>
            </Link>
            <div className="navbar__menu">
                <Link to="/signin">
                Sign In
                </Link>
                <Link to="/signup">
                Sign Up
                </Link>
                <Link to ="/checkout">
                    Logout
                </Link>
            </div>
        </div>)
}

export default Navbar;