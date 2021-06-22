import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import MsgAdvert from '../MsgAdvert'

export default function Signup() {

    const [advert, setAdvert] = useState(false);
    const[values, setValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    let history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showAdvMsg = () => {
        setAdvert(true);
        setTimeout(() => setAdvert(false), 3000);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(values.username && values.email && values.password){
            //
            history.push("/");
        } else {
            showAdvMsg();
        }
    }

    return(
        <div className="main">
            <div className="main__content">
                <h2>Cadastre-se no AG SHOP</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form--div">
                        <label htmlFor="username">Nome* </label>
                        <div className="form--div--input">
                            <input
                                id="username"
                                className="form--input" 
                                type="text"
                                name="username"
                                placeholder="Nome Completo"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {!values.username.trim() && 
                                (<span className="form--invalid">Insera seu nome completo</span>)}
                        </div>
                    </div>
                    <div className="form--div">
                        <label htmlFor="email">Email* </label>
                        <div className="form--div--input">
                            <input 
                                id="email"
                                className="form--input"
                                type="email"
                                name="email"
                                placeholder="email@email.com"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {!values.email.trim() && 
                                (<span className="form--invalid">Insera um email válido</span>)}
                        </div>
                    </div>
                    <div className="form--div">
                        <label htmlFor="password">Senha* </label>
                        <div className="form--div--input">
                            <input
                                id="password"
                                className="form--input" 
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {!values.password.trim() && 
                                (<span className="form--invalid">Insera uma senha</span>)}
                        </div>
                    </div>
                    {advert && 
                        <MsgAdvert />
                    }
                    <button
                        className="form--btn"
                        type="submit">Criar minha conta</button>
                </form>
                <div className="div-redirect">
                    <p>Já possui uma conta? Clique 
                        <span><Link className="redirect" to='/signin'> aqui</Link></span></p>
                </div>
            </div>
        </div>
    )
}
