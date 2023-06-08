import { gql } from "@apollo/client";

export const GET_ALL_AVAILABLE_MOVIE_LIST = gql`
  query getAllAvailableMovieList(
    $userId: String!
    $popularity: [Float!]!
    $page: Float
    $releaseYear: Float
    $selectedGenresIds: [Float!]
    $language: String
  ) {
    getAllAvailableMovieList(
      userId: $userId
      params: {
        popularity: $popularity
        selectedGenresIds: $selectedGenresIds
        releaseYear: $releaseYear
        page: $page
        language: $language
      }
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
