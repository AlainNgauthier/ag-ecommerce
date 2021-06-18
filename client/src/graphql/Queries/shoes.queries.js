import gql from "graphql-tag";

const SHOES_QUERY = gql`
    query shoes {
        shoes {
            _id
            name
            price
            image {
                url
            }
        }
    }
`;

export default SHOES_QUERY ;