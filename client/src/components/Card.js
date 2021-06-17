import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, name, description, price, image }) {

    return(
        <div className="card">
            <span><h3>{name}</h3></span>
            {/*<span>{description}</span>*/}
            <div className="card__img">
                <img src={image} alt="img" />
            </div>
            <span className="card__price">
                <h3>R$ {price}</h3>
                <span>10x de R$ {price / 10}</span>
            </span>
            <div className="card__details">
                <Link to={`/${id}`} className="card__details--link">Confira</Link>
            </div>
        </div>
    )
}

export default Card;