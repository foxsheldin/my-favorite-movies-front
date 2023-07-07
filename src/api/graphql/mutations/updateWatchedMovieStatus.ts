import { gql } from "@apollo/client";

export const UPDATE_WATCHED_MOVIE_STATUS = gql`
  mutation updateWatchedMovieStatus($movieId: Float!) {
    updateWatchedMovieStatus(movieId: $movieId) {
      movieId
      isWatched
    }
  }
`;
