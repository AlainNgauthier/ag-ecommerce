import React, { useState} from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import ReactLoading from "react-loading";
import SHOES_QUERY from '../queries/shoes/shoes.queries';
import { useQuery } from "@apollo/client";
import './Home.css';
import Card from './Card';


function Home() {
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const { data, loading, error } = useQuery(SHOES_QUERY);
    //console.log(data);
    const api_uri = 'http://localhost:1337';
    if(loading) return <div className="home__loading">
        <ReactLoading
          type={"bars"}
          color={"#58606b"}
          height={100}
          width={100}
        />
    </div>;
    if(error) return <p>Error</p>;

    const handleChange = (event) => {
        //console.log(event);
        setSearch(event.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        const results = data.shoes.filter(
            item => item.name.toLowerCase().includes(search.toLowerCase()));
        //console.log(results);
        setFilter(true);
        setSearchResult(results);
    };

    return(
        <div className="home" >
            <div className="home__form-search">
                    <form onSubmit={handleSubmit}>
                        <input
                            id="input-search"
                            className="form-input" 
                            type="text"
                            placeholder="Olá, o que você procura?"
                            value={search}
                            onChange={handleChange}
                        />
                        <button 
                            className="input-btn"
                            type="submit"
                        >
                            <BiSearchAlt2 size={22} />
                        </button>
                    </form>
            </div>
            <div className="home__wrap">
                {!filter ?
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

