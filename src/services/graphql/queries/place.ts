import { gql } from "@apollo/client";

export const getPlaces = gql`
    query getPlaces {
        places {
            id
            name
            image {
                url
            }
            order
            location {
                adress
                district
            }
            description
            discount
        }
    }
`;

export const getPlaceById = gql`
    query getPlaceById($id: ID!) {
        place(id: $id) {
            name
            image {
                url
            }
            id
            discount
            location {
                adress
                district
            }
            description
        }
    }
`;
