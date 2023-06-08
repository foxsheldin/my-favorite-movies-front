import { gql } from "@apollo/client";

export const GET_FAVORITE_MOVIE_LIST = gql`
  query getFavoriteMovieList(
    $userId: String!
    $page: Float
    $limit: Float
    $language: String
  ) {
    getFavoriteMovieList(
      userId: $userId
      params: { page: $page, limit: $limit, language: $language }
    ) {
      page
      results {
        ...CommonMovieFields
      }
      totalPages
      totalResults
    }
  }
`;
