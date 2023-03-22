import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IMovieViewProps {
  movies: IFavoriteMovieData[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
