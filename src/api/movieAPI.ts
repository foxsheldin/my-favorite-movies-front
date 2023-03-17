import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import {
  IFavoriteMovieData,
  IFavoriteMovieResponseData,
} from "@store/favoriteMovie/types";
import { IGenreResponseData } from "@store/genre/types";
import { IMovieResponseData } from "@store/movie/types";
import { IBackendData } from "./types";
import { camelizeKeys, decamelizeKeys } from "humps";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    apiKey: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ru",
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
  newConfig.url = `api/${config.url}`;

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
    return instance.get<IGenreResponseData>("genre/movie/list");
  },
  getFavoriteGenre() {
    return new Promise<number[]>((resolve, reject) => {
      const { favoriteGenres }: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );
      resolve(favoriteGenres);
    });
  },
  getMoviesList(genre: number[]) {
    return instance.get<IMovieResponseData>("discover/movie", {
      params: {
        withGenres: genre.join(","),
      },
    });
  },
  getFavoriteMovieList() {
    return new Promise<IFavoriteMovieResponseData>((resolve, reject) => {
      const { favoriteMovies }: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );
      const result = {
        page: 1,
        results: favoriteMovies,
        totalPages: 1,
        totalResults: favoriteMovies.length,
      };
      resolve(result);
    });
  },
  updateSelectedGenres(selectedGenres: number[]) {
    return new Promise<number[]>((resolve, reject) => {
      const result: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );

      localStorage.setItem(
        "DB_user_data",
        JSON.stringify({
          favoriteMovies: [...result.favoriteMovies],
          favoriteGenres: [...selectedGenres],
        })
      );

      resolve(selectedGenres);
    });
  },
  createFavoriteMovie(movieData: IFavoriteMovieData) {
    return new Promise<IFavoriteMovieData[]>((resolve, reject) => {
      const tempObject: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );

      const result = [...tempObject.favoriteMovies, movieData];

      localStorage.setItem(
        "DB_user_data",
        JSON.stringify({
          favoriteMovies: result,
          favoriteGenres: [...tempObject.favoriteGenres],
        })
      );

      resolve(result);
    });
  },
  deleteFavoriteMovie(movieId: number) {
    return new Promise<IFavoriteMovieData[]>((resolve, reject) => {
      const tempObject: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );
      const result = tempObject.favoriteMovies.filter(
        (item: IFavoriteMovieData) => item?.id !== movieId
      );

      localStorage.setItem(
        "DB_user_data",
        JSON.stringify({
          favoriteMovies: result,
          favoriteGenres: [...tempObject.favoriteGenres],
        })
      );

      resolve(result);
    });
  },
  updateWatchedMovieStatus(movieId: number) {
    return new Promise<IFavoriteMovieData>((resolve, reject) => {
      const tempObject: IBackendData = JSON.parse(
        localStorage.getItem("DB_user_data") as string
      );

      const result = tempObject.favoriteMovies.find(
        (item: IFavoriteMovieData) => item.id === movieId
      );
      if (result) {
        result.userWatched = !result?.userWatched;

        localStorage.setItem(
          "DB_user_data",
          JSON.stringify({
            favoriteMovies: [...tempObject.favoriteMovies, result],
            favoriteGenres: [...tempObject.favoriteGenres],
          })
        );

        resolve(result);
      } else {
        reject("");
      }
    });
  },
};
