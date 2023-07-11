import { IGenreListResponseItem } from "@api/graphql/types/genre";

export interface IGenreListProps {
  genres: IGenreListResponseItem[];
  selectedGenres: number[];
  onItemClick: (id: number) => void;
}
