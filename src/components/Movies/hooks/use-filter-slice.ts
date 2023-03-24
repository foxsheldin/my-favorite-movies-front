import {
  selectFilterPopularity,
  selectFilterReleaseYear,
  selectFilterSelectedMovieGenres,
} from "@store/filter/selectors";
import { useAppSelector } from "@store/hooks";

export const useFilterSlice = () => {
  const selectedGenres = useAppSelector(selectFilterSelectedMovieGenres);
  const popularity = useAppSelector(selectFilterPopularity);
  const releaseYear = useAppSelector(selectFilterReleaseYear);

  return { selectedGenres, popularity, releaseYear };
};
