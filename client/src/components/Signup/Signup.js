import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Strapi from 'strapi-sdk-javascript/build/main';
import { setToken } from '../../utils/index';
import './Signup.css';
import MsgAdvert from '../MsgAdvert';

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default function Signup() {
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = async e => {
        e.preventDefault();

        /* sign up user */
        if(values.username && values.email && values.password){
            try{
                setLoading(true);
                const response = await strapi.register(values.username, values.email, values.password);
                //console.log(response);
                /* to manage user sesson (storage token in local storage) */
                setToken(response.jwt);
                setLoading(false);
                //console.log(loading);
                history.push("/");
            }catch(err) {
                setLoading(false);
                //console.log(err.message);
            }           
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
                        disabled={loading}
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

