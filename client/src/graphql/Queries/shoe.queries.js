import gql from "graphql-tag";

const SHOE = gql`
    query shoe($id: ID!) {
        shoe(id: $id) {
            id
            name
            description
            image {
            url
            }
            price
            gender{
            name
            }
        }

    }
`;

export default SHOE ;