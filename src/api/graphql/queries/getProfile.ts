import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query getProfile {
    getProfile {
      id
      email
      favoriteGenres {
        genreId
      }
    }
  }
`;
