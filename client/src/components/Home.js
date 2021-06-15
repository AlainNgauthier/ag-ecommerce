import React, { useState} from 'react';
import SHOES_QUERY from '../queries/shoes/shoes.queries';
import { useQuery } from "@apollo/client";
import './Home.css';
import Card from './Card';


function Home() {
    const [tennis, listTennis] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const { data, loading, error } = useQuery(SHOES_QUERY);
    console.log(data);
    const api_uri = 'http://localhost:1337';
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;

    return(
        <div className="home" >
            <div className="home__form-search">
                    <form>
                        <input
                            className="form-input" 
                            type="text"
                            placeholder="Olá, o que você procura?"
                            onChange={()=>{}}
                        />
                    </form>
                </div>
            <div className="home__wrap">
                <div className="home__card">
                    {data.shoes.map((item, key) => 
                        <Card 
                            key={key}
                            id={item._id} 
                            name={item.name} 
                            description={item.description}
                            price={item.price}
                            image={`${api_uri}${item.image[0].url}`}
                        />
                    )}
                </div>
            </div>
        </div>
    )
    
}

export default Home;