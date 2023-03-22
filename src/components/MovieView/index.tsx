import React from "react";
import { useTranslation } from "react-i18next";
import Message from "@components/Message";
import MovieViewList from "@components/MovieViewList";
import MovieViewModule from "@components/MovieViewModule";
import { ETypeView } from "@constants/typeView";
import { useAppSelector } from "@store/hooks";
import { IMovieViewProps } from "./types";
import { selectFilterCurrentTypeView } from "@store/filter/selectors";

const MovieView = ({ movies }: IMovieViewProps) => {
  const { t } = useTranslation();
  const movieTypeView = useAppSelector(selectFilterCurrentTypeView);

  if (!movies.length) {
    return <Message text={t("error.data.noData")} />;
  }

  return (
    <>
      {movieTypeView === ETypeView.list && <MovieViewList movies={movies} />}
      {movieTypeView === ETypeView.module && (
        <MovieViewModule movies={movies} />
      )}
    </>
  );
};

export default MovieView;
