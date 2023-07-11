import { IFavoriteGenre } from "./genre";

export interface IProfile {
  id: string;
  email: string;
  favoriteGenres: IFavoriteGenre[];
}

export interface IGetProfileQueryData {
  getProfile: IProfile;
}
