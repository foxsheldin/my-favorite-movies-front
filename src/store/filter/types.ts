import { ETypeView } from "@constants/typeView";

export interface IFilterInitialState {
  currentTypeView: ETypeView;
  currentLanguage: string;
  popularity: number[];
  selectedMovieGenres: number[];
  releaseYear: number;
}
