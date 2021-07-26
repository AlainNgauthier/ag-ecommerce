import React, { useContext } from 'react';
import './MenuResponsive.css';
import { Link } from 'react-router-dom';
import { UseAppContext } from '../Context/context';
import * as AiIcons from "react-icons/ai";

export default function MenuResponsive() {

    const {toggle, isOpen} = useContext(UseAppContext);

    return(
        <React.Fragment>
            <nav className={isOpen ? "menu" : "menu disabled"}>
                <div className="menu__toggle">
                    <AiIcons.AiOutlineClose onClick={toggle} />
                </div>
                <ul className="menu__items">
                    <li>
                        <Link 
                            to="/signin" 
                            className="menu__link"
                            onClick={toggle}    
                        >
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/signup" 
                            className="menu__link"
                            onClick={toggle}
                        >
                            Criar a sua conta
                        </Link>
                    </li>
                    {/* <li>
                        <Link 
                            to="/" 
                            className="menu__link"
                            onClick={toggle}
                        >
                            Voltar para página inicial
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </React.Fragment>
    )
}