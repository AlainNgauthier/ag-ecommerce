import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuResponsive({ isOpen, toggle }) {

    return(
        <div isOpen={isOpen} onClick={toggle}>
            <div>
                aa
            </div>
            <Link to="/signin">Entrar</Link>
            <Link to="/signup">Criar sua conta</Link>
        </div>
    )
}