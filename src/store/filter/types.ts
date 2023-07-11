import { ETypeView } from "@constants/typeView";

export interface IFilterInitialState {
  currentTypeView: ETypeView;
  popularity: number[];
  selectedMovieGenres: number[];
  releaseYear: number;
}
