import { ApolloClient, InMemoryCache } from "@apollo/client";
//import { InMemoryCache } from "apollo-cache-inmemory";
//import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();


const client = new ApolloClient({
    cache,
    uri: 'http://localhost:1337/graphql'
});

export default client;