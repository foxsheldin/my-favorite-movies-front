import { gql } from "@apollo/client";

export const UPDATE_SELECTED_GENRES = gql`
  mutation updateSelectedGenres($userId: String!, $genreId: Float!) {
    updateSelectedGenres(data: { userId: $userId, genreId: $genreId })
  }
`;
