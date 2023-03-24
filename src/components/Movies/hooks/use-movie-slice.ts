import { useAppSelector } from "@store/hooks";
import {
  selectMovieArrayEntities,
  selectMovieCurrentPage,
  selectMovieIsLoading,
  selectMovieTotalPages,
} from "@store/movie/selectors";

export const useMovieSlice = () => {
  const moviesData = useAppSelector(selectMovieArrayEntities);
  const isMovieLoading = useAppSelector(selectMovieIsLoading);
  const currentPage = useAppSelector(selectMovieCurrentPage);
  const totalPages = useAppSelector(selectMovieTotalPages);

  return { moviesData, isMovieLoading, currentPage, totalPages };
};
