import React from 'react';
import { useQuery } from "@apollo/client";
import SHOE from '../graphql/Queries/shoe.queries';
import './Shoe.css';

function Shoe(props) {
    const { shoeId } = props.match.params;
    console.log(shoeId);

    const { loading, error, data } = useQuery(SHOE, {
        variables: {
            id: shoeId,
        },
    });

    if(loading) return <h1>Loading...</h1>;
    if(error) return `Error! ${error}`;

    return data && (
        <div className="container">
            <div className="container__wrap">
                <div className="container__image-box">
                    <span>image</span>
                </div>
                <div className="container__box">
                    <div className="container__name-box">
                        <h2>{data.shoe.name}</h2>
                        <p>{data.shoe.gender.name}</p>
                    </div>
                    <div className="container__price-box">
                        <span>por <span>R$ {data.shoe.price}</span></span>
                    </div>
                    <div className="container__description-box">
                        <div className="">{data.shoe.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoe;