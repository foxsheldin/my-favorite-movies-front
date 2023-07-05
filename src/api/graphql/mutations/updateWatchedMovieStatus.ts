import { gql } from "@apollo/client";

export const UPDATE_WATCHED_MOVIE_STATUS = gql`
  mutation updateWatchedMovieStatus($movieId: Float!, $status: Boolean!) {
    updateWatchedMovieStatus(movieId: $movieId, status: $status) {
      movieId
      isWatched
    }
  }
`;
