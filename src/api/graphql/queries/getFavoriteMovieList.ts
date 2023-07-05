import { gql } from "@apollo/client";

export const GET_FAVORITE_MOVIE_LIST = gql`
  query getFavoriteMovieList($page: Float, $limit: Float, $language: String) {
    getFavoriteMovieList(
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
