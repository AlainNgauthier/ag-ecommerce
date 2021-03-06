import React, { useState} from 'react';
// import ReactLoading from "react-loading";
import Loader from '../components/Loader';
import SHOES_QUERY from '../graphql/Queries/shoes.queries';
import { useQuery } from "@apollo/client";
import './Home.css';
import Card from './Card';

function Home() {
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const { data, loading, error } = useQuery(SHOES_QUERY);
    const api_uri = 'http://localhost:1337';
    if(loading) return  <Loader />;
    if(error) return <p>Error</p>;

    const handleChange = (event) => {
        setSearch(event.target.value);
        const results = data.shoes.filter(
            item => item.name.toLowerCase().includes(search.toLowerCase()));
        setFilter(true);
        setSearchResult(results);
    };

    return(
        <div className="home" >
            <div className="home__form-search">
                <input
                    id="input-search"
                    className="form-input" 
                    type="text"
                    placeholder="Olá, o que você procura?"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className="home__wrap">
                {!filter ?
                    <div className="home__card">
                        {data.shoes.map((item, key) => 
                            <Card 
                                key={key}
                                id={item._id} 
                                name={item.name} 
                                price={item.price}
                                image={`${api_uri}${item.image[0].url}`}
                            />
                        )}
                    </div>
                    :
                    <div className="home__card">
                        {(searchResult.length === 0) ? <p>Produto não encontrado</p> : 
                            <React.Fragment>
                                {searchResult.map((item, key) => 
                                    <Card
                                        key={key}
                                        id={item._id} 
                                        name={item.name} 
                                        description={item.description}
                                        price={item.price}
                                        image={`${api_uri}${item.image[0].url}`}
                                    />
                                )} 
                            </React.Fragment>
                        }
                    </div>
                }
            </div>
        </div>
    )
    
}

export default Home;

