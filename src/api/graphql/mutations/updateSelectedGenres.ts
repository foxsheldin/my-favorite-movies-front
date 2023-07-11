import { gql } from "@apollo/client";

export const UPDATE_SELECTED_GENRES = gql`
  mutation updateSelectedGenres($genreId: Float!) {
    updateSelectedGenres(genreId: $genreId)
  }
`;
