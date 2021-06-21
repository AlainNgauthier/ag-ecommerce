import React from 'react';
import './Signup.css';

function Signup() {
    return(
        <div className="main">
            <div className="main__content">
                <h2>Crie sua conta no AG SHOP</h2>
                <form className="form">
                    <div className="form--div">
                        <label>Nome* </label>
                        <input
                            className="form--input" 
                            type="text"
                            placeholder="Nome Completo"
                        />
                    </div>
                    <div className="form--div">
                        <label>Email* </label>
                        <input 
                            className="form--input"
                            type="text"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div className="form--div">
                        <label>Senha* </label>
                        <input
                            className="form--input" 
                            type="text"
                        />
                    </div>
                    <button
                        className="form--btn"
                    >Criar minha conta</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;