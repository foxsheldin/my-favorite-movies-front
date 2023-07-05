import { gql } from "@apollo/client";

export const DELETE_FAVORITE_MOVIE = gql`
  mutation deleteFavoriteMovie($movieId: Float!) {
    deleteFavoriteMovie(movieId: $movieId)
  }
`;
