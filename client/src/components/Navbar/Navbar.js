import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { getToken, clearToken } from "../../utils/index";
import { useHistory, withRouter } from 'react-router-dom';
import { UseAppContext } from '../Context/context';
import * as FaIcons from "react-icons/fa";

function Navbar({ toggle }) {
    
    let history = useHistory();
    
    /* to clear the token and redirect Home */
    const handleSignOut = () => {
        clearToken();
        history.push('/');
    }

    return getToken() != null ? <AuthNav handleSignOut={handleSignOut} toggle={toggle} /> : <UnAuthNav toggle={toggle} />
}

const AuthNav = ({ handleSignOut }) => {
    const {toggle, isOpen} = useContext(UseAppContext);
    const {username} = useContext(UseAppContext);

    return(
        <div className="navbar">
            <div>
                <Link to="/" className="navbar__logo">
                    <img 
                        src={Logo} 
                        alt="logo"
                    />
                    <span className="navbar__name">AG SHOP</span>
                </Link>
            </div>
            <div className="menu-bars">
                <FaIcons.FaBars onClick={toggle} />
            </div>
            <nav className="navbar-active">
                <ul className="navbar__menu__items">
                    <li className="navbar__user">Hey, {username}!</li>
                    <li>
                        <Link to="/checkout" className="navbar__link">
                            Carinho
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" 
                            className="navbar__link"
                            onClick={handleSignOut}
                        >
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const UnAuthNav = () => {

    const {toggle, isOpen} = useContext(UseAppContext);

    return(
        <div className="navbar">
            {/* Title and logo */}
            <div>
                <Link to="/" className="navbar__logo">
                    <img 
                        src={Logo} 
                        alt="logo"
                    />
                    <span className="navbar__name">AG SHOP</span>
                </Link>
            </div>
            {/* Sign in, Sign Up */}
            <div className="menu-bars">
                <FaIcons.FaBars onClick={toggle} />
            </div>
            <nav className="navbar-active">
                <ul className="navbar__menu__items">
                    <li>
                        <Link to="/signin" className="navbar__link">
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="navbar__link">
                            Criar sua conta
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default withRouter(Navbar);