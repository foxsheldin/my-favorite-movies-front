import { gql } from "@apollo/client";

export const COMMON_MOVIE_FIELDS = gql`
  fragment CommonMovieFields on FavoriteMovieDto {
    id
    title
    posterPath
    overview
    isFavorite
    isWatched
  }
`;
