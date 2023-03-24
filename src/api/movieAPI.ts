import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";
import i18next from "i18next";
import {
  IFavoriteMovieData,
  IFavoriteMovieResponseData,
} from "@store/favoriteMovie/types";
import { IGenreResponseData } from "@store/genre/types";
import { IMovieResponseData } from "@store/movie/types";
import { BASE_DB_URL } from "./constants";
import { IGetMoviesListProps } from "./movieAPI.types";

const instance = axios.create({
  baseURL: BASE_DB_URL,
  params: {
    apiKey: process.env.REACT_APP_MOVIE_DB_API_KEY,
  },
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json;charset=utf-8"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config };

  if (newConfig.headers["Content-Type"] === "multipart/form-data")
    return newConfig;

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});

export const movieAPI = {
  getGenre() {
    return instance.get<IGenreResponseData>("genre/movie/list", {
      params: {
        language: i18next.resolvedLanguage,
      },
    });
  },
  getFavoriteGenre() {
    return new Promise<number[]>((resolve, reject) => {
      const favoriteGenres: number[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_genres") as string
      );
      resolve(favoriteGenres);
    });
  },
  getMoviesList({
    selectedGenres,
    page = 1,
    popularity,
    releaseYear,
  }: IGetMoviesListProps) {
    return instance.get<IMovieResponseData>("discover/movie", {
      params: {
        language: i18next.resolvedLanguage,
        withGenres: selectedGenres.join(","),
        year: releaseYear,
        "vote_average.gte": popularity[0],
        "vote_average.lte": popularity[1],
        page,
      },
    });
  },
  getFavoriteMovieList(page: number = 1) {
    return new Promise<IFavoriteMovieResponseData>((resolve, reject) => {
      const favoriteMovies: IFavoriteMovieData[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_movies") as string
      );
      const result = {
        page: page,
        results: favoriteMovies,
        totalPages: 1,
        totalResults: favoriteMovies.length,
      };
      resolve(result);
    });
  },
  getFavoriteMovieIds() {
    return new Promise<number[]>((resolve, reject) => {
      const favoriteMovies: IFavoriteMovieData[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_movies") as string
      );
      resolve(favoriteMovies.map((movie) => movie.id));
    });
  },
  updateSelectedGenres(selectedGenres: number[]) {
    return new Promise<number[]>((resolve, reject) => {
      const result: number[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_genres") as string
      );

      localStorage.setItem(
        "DB_user_favorite_genres",
        JSON.stringify([...selectedGenres])
      );

      resolve(selectedGenres);
    });
  },
  createFavoriteMovie(movieData: IFavoriteMovieData) {
    return new Promise<IFavoriteMovieData[]>((resolve, reject) => {
      const tempObject: IFavoriteMovieData[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_movies") as string
      );

      const result = [...tempObject, { ...movieData, userFavorite: true }];

      localStorage.setItem("DB_user_favorite_movies", JSON.stringify(result));

      resolve(result);
    });
  },
  deleteFavoriteMovie(movieId: number) {
    return new Promise<IFavoriteMovieData[]>((resolve, reject) => {
      const tempObject: IFavoriteMovieData[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_movies") as string
      );
      const result = tempObject.filter(
        (item: IFavoriteMovieData) => item?.id !== movieId
      );

      localStorage.setItem("DB_user_favorite_movies", JSON.stringify(result));

      resolve(result);
    });
  },
  updateWatchedMovieStatus(movieId: number) {
    return new Promise<IFavoriteMovieData>((resolve, reject) => {
      const tempObject: IFavoriteMovieData[] = JSON.parse(
        localStorage.getItem("DB_user_favorite_movies") as string
      );

      const result = tempObject.findIndex(
        (item: IFavoriteMovieData) => item.id === movieId
      );

      if (~result) {
        tempObject[result].userWatched = !tempObject[result].userWatched;

        localStorage.setItem(
          "DB_user_favorite_movies",
          JSON.stringify(tempObject)
        );

        resolve(tempObject[result]);
      } else {
        reject("");
      }
    });
  },
};
