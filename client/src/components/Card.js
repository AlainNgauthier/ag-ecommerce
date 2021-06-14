import React from 'react';
import './Card.css';

function Card({ name, description, price, image }) {

    return(
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>
                <img src={image} alt="img" />
            </p>
        </div>
    )
}

export default Card;