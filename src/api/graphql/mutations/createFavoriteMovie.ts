import { gql } from "@apollo/client";

export const CREATE_FAVORITE_MOVIE = gql`
  mutation createFavoriteMovie($movieId: Float!, $language: String) {
    createFavoriteMovie(movieId: $movieId, language: $language) {
      ...CommonMovieFields
    }
  }
`;
