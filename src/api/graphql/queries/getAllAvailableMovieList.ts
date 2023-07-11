import { gql } from "@apollo/client";

export const GET_ALL_AVAILABLE_MOVIE_LIST = gql`
  query getAllAvailableMovieList(
    $popularity: [Float!]!
    $page: Float
    $releaseYear: Float
    $selectedGenresIds: [Float!]
    $language: String
  ) {
    getAllAvailableMovieList(
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
