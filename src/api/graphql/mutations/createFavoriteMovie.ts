import { gql } from "@apollo/client";

export const CREATE_FAVORITE_MOVIE = gql`
  mutation createFavoriteMovie(
    $userId: String!
    $movieId: Float!
    $language: String
  ) {
    createFavoriteMovie(
      userId: $userId
      movieId: $movieId
      language: $language
    ) {
      ...CommonMovieFields
    }
  }
`;
