import { gql } from "@apollo/client";

export const GET_GENRE_LIST = gql`
  query getGenreList($language: String) {
    getGenreList(language: $language) {
      id
      name
    }
  }
`;
