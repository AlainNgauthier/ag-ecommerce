import React from 'react';
import { useQuery } from "@apollo/client";
import SHOE from '../graphql/Queries/shoe.queries';
import Loader from '../components/Loader';
import './Shoe.css';

function Shoe(props) {
    const { shoeId } = props.match.params;
    //console.log(shoeId);
    const api_uri = 'http://localhost:1337';

    const { loading, error, data } = useQuery(SHOE, {
        variables: {
            id: shoeId,
        },
    });

    if(loading) return <Loader />;
    // if(error) return `Error! ${error}`;

    return data && (
        <div className="container">
            <div className="container__wrap__1">
                <div className="container__image-box">
                    <div className="image">
                        <img src={`${api_uri}${data.shoe.image[0].url}`} 
                            alt="product"
                        />
                    </div>
                </div>
                <div className="container__box">
                    <div className="container__name-box">
                        <span className="box__name">{data.shoe.name}</span>
                        <p>{data.shoe.gender.name}</p>
                        <div className="container__price-box">
                            <span>por <span>R$ {data.shoe.price}</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className="container__description-box">
                    <div className="">{data.shoe.description}</div>
                </div> */}
            </div>
        </div>
    )
}
                    

export default Shoe;