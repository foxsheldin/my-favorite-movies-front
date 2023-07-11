import { gql } from "@apollo/client";

export const UPDATE_FAVORITE_MOVIE = gql`
  mutation updateFavoriteMovie($movieId: Float!, $language: String) {
    updateFavoriteMovie(movieId: $movieId, language: $language) {
      ...CommonMovieFields
    }
  }
`;
