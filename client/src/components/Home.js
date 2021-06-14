import React, { useState } from 'react';
import SHOES_QUERY from '../queries/shoes/shoes.queries';
import { useQuery } from "@apollo/client";
import './Home.css';
import Card from './Card';


function Home() {

    const { data, loading, error } = useQuery(SHOES_QUERY);
    console.log(data);
    const api_uri = 'http://localhost:1337';
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;

    return(
        <div>
            {data.shoes.map((item, key) => 
                <Card 
                    key={key} 
                    name={item.name} 
                    description={item.description}
                    price={item.price}
                    image={`${api_uri}${item.image[0].url}`}
                />
            )}
        </div>
    )
    
}

export default Home;