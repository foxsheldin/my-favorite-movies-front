import { IMovieData } from "@api/graphql/types/movie";

export interface IMovieViewProps {
  movies?: IMovieData[];
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}
