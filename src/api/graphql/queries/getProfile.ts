import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query getProfile($userId: String!) {
    getProfile(userId: $userId) {
      id
      email
      favoriteGenres {
        genreId
      }
    }
  }
`;
