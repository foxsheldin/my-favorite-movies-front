import { gql } from "@apollo/client";

export const DELETE_FAVORITE_MOVIE = gql`
  mutation deleteFavoriteMovie($userId: String!, $movieId: Number!) {
    deleteFavoriteMovie(userId: $userId, movieId: $movieId) {
      id
      title
      posterPath
      overview
      isFavorite
      isWatched
    }
  }
`;
