import axios from "axios";
import {
  IFavoriteMovieData,
  IFavoriteMovieResponseData,
} from "@store/favoriteMovie/types";
import { IGenreResponseData } from "@store/genre/types";
import { IMovieResponseData } from "@store/movie/types";
import { IBackendData } from "./types";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ru",
  },
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
        with_genres: genre.join(","),
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
        total_pages: 1,
        total_results: favoriteMovies.length,
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
        result.user_watched = !result?.user_watched;

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
