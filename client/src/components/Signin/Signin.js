import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Strapi from 'strapi-sdk-javascript/build/main';
import { setToken } from '../../utils/index';
import './Signin.css';
import MsgAdvert from '../MsgAdvert';

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [advert, setAdvert] = useState(false);
    const[values, setValues] = useState({
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
        if(values.email && values.password){
            try{
                setLoading(true);
                const response = await strapi.login(values.email, values.password);
                //console.log(response);
                /* to manage user sesson (storage token in local storage) */
                setToken(response.jwt);
                setLoading(false);
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
                <h2>Bemvindo(a) de volta ao AG Shop!</h2>
                <form className="form" onSubmit={handleSubmit}>
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
                        type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

