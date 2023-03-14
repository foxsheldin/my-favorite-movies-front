import { IGenreResponseData } from "@store/genre/types";
import { IMovieResponseData } from "@store/movie/types";
import axios from "axios";

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
  getMoviesList(genre: number[]) {
    return instance.get<IMovieResponseData>("discover/movie", {
      params: {
        with_genres: genre.join(","),
      },
    });
  },
  getFavoriteMovieList() {
    return instance.get;
  },
};
