import { loadingStatuses } from "@constants/loadingStatuses";

export interface IGenreResponseData {
  genres: IGenreItemData[];
}

export interface IGenreItemData {
  id: number;
  name: string;
}

export interface IGenreAdditionalInitialState {
  status: loadingStatuses;
  selectedGenres: number[];
}
