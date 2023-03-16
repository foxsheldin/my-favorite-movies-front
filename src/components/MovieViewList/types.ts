import { IFavoriteMovieData } from "@store/favoriteMovie/types";

export interface IMovieViewListProps {
  movies?: (IFavoriteMovieData | undefined)[];
}
