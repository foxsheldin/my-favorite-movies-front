import { gql } from "@apollo/client";

export const UPDATE_WATCHED_MOVIE_STATUS = gql`
  mutation updateWatchedMovieStatus(
    $userId: String!
    $movieId: Int!
    $status: Boolean!
  ) {
    updateWatchedMovieStatus(
      userId: $userId
      movieId: $movieId
      status: $status
    ) {
      movieId
      isWatched
    }
  }
`;
