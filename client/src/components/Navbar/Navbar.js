import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { getToken, clearToken } from "../../utils/index";
import { useHistory, withRouter } from 'react-router-dom';

function Navbar() {
    let history = useHistory();
    /* to clear the token and redirect Home */
    const handleSignOut = () => {
        clearToken();
        history.push('/');
    }

    return getToken() != null ? <AuthNav handleSignOut={handleSignOut} /> : <UnAuthNav />
}

const AuthNav = ({ handleSignOut }) => {
    return(
    <div className="navbar">
        {/* Title and logo */}
        <Link to="/" className="navbar__logo">
            <img 
                src={Logo} 
                alt="logo"
            />
            <span className="navbar__name">AG SHOP</span>
        </Link>
        {/* Check Out and Sign Out button*/}
        <div className="navbar__menu">
            <Link to="/checkout" className="navbar__link">
                Checkout
            </Link>
            <button className="navbar--signout" onClick={handleSignOut}>
                Sair
            </button>
        </div>
    </div>)
}

const UnAuthNav = () => {
    return(
        <div className="navbar">
            {/* Title and logo */}
            <Link to="/" className="navbar__logo">
                <img 
                    src={Logo} 
                    alt="logo"
                />
                <span className="navbar__name">AG SHOP</span>
            </Link>
            {/* Sign in, Sign Up, Sign Out */}
            <div className="navbar__menu">
                <Link to="/signin" className="navbar__link">
                    Entrar
                </Link>
                <Link to="/signup" className="navbar__link">
                    Criar a sua conta
                </Link>
            </div>
        </div>)
}


export default withRouter(Navbar);