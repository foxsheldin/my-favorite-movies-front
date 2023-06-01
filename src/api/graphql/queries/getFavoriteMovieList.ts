import { gql } from "@apollo/client";

export const GET_FAVORITE_MOVIE_LIST = gql`
  query getFavoriteMovieList(
    $userId: String!
    $params: GetFavoriteMovieListInput!
  ) {
    getFavoriteMovieList(userId: $userId, params: $params) {
      page
      results {
        ...CommonMovieFields
      }
      totalPages
      totalResults
    }
  }
`;
