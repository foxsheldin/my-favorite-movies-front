export interface IMovieResponseData {
  page: number;
  results: IMovieData[];
  total_pages: number;
  total_results: number;
}

export interface IMovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
