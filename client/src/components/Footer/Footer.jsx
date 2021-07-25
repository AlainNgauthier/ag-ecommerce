import React from 'react';
import './Footer.css';

import Logo from '../../assets/logo.png';

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__wrap">
                <section>
                    <img src={Logo} alt="Logo AG Shop" />
                    <span>
                        © Copyright 2021 - AG Shop - Todos os direitos
                        reservados AG Shop.
                    </span>
                </section>
                <section>
                    <span>Termos e condições de uso</span>
                    <span>Código de conduta</span>
                    <span>Privacidade</span>
                </section>
            </div>
        </footer>)
}