import { MutationResult } from "@apollo/client";

export interface IGenreListResponseItem {
  id: number;
  name: string;
}

export interface IFavoriteGenre {
  id: number;
}

export interface IUpdateSelectedGenresResponseData {
  updateSelectedGenres: number[];
}

export interface IUpdateSelectedGenresMutationVariables {
  genreId: number;
}

export interface IGenreListQueryData {
  getGenreList: IGenreListResponseItem[];
}

export interface IGenreListQueryVariables {
  language?: string;
}

export interface IUseUpdateSelectedGenresMutationResult
  extends MutationResult<IUpdateSelectedGenresResponseData> {
  updateSelectedGenresMutation: (genreId: number) => Promise<void>;
}

export interface IFavoriteGenresListQueryData {
  getFavoriteGenresList: number[];
}
