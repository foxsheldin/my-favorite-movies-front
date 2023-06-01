import { gql } from "@apollo/client";

export const GET_ALL_AVAILABLE_MOVIE_LIST = gql`
  query getAllAvailableMovieList($userId: String!, $params: MovieFilterDto!) {
    getAllAvailableMovieList(userId: $userId, params: $params) {
      page
      results {
        ...CommonMovieFields
      }
      totalPages
      totalResults
    }
  }
`;
