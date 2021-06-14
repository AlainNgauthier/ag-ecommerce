import gql from "graphql-tag";

const SHOES_QUERY = gql`
    query shoes{
        shoes{
            _id
            name
            description
            price
            image{
                url
            }
        }
    }
`;

export default SHOES_QUERY;