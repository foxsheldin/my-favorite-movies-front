import {
  selectFavoriteMovieArrayEntities,
  selectFavoriteMovieCurrentPage,
  selectFavoriteMovieIsLoading,
  selectFavoriteMovieTotalPages,
} from "@store/favoriteMovie/selectors";
import { useAppSelector } from "@store/hooks";

export const useFavoriteMovieSlice = () => {
  const favoriteMoviesData = useAppSelector(selectFavoriteMovieArrayEntities);
  const isFavoriteMovieLoading = useAppSelector(selectFavoriteMovieIsLoading);
  const currentPage = useAppSelector(selectFavoriteMovieCurrentPage);
  const totalPages = useAppSelector(selectFavoriteMovieTotalPages);

  return {
    favoriteMoviesData,
    isFavoriteMovieLoading,
    currentPage,
    totalPages,
  };
};
