import React from "react";
import { useTranslation } from "react-i18next";
import Message from "@components/Message";
import MovieViewList from "@components/MovieViewList";
import MovieViewModule from "@components/MovieViewModule";
import { ETypeView } from "@constants/typeView";
import { useAppSelector } from "@store/hooks";
import { IMovieViewProps } from "./types";
import { selectFilterCurrentTypeView } from "@store/filter/selectors";
import { PaginationWrapper } from "./styles";

const MovieView = ({
  movies = [],
  currentPage = 0,
  totalPages = 0,
  onPageChange,
}: IMovieViewProps) => {
  const { t } = useTranslation();
  const movieTypeView = useAppSelector(selectFilterCurrentTypeView);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  if (!movies?.length) {
    return <Message text={t("error.data.noData")} />;
  }

  return (
    <>
      {movieTypeView === ETypeView.list && <MovieViewList movies={movies} />}
      {movieTypeView === ETypeView.module && (
        <MovieViewModule movies={movies} />
      )}
      {movieTypeView && (
        <PaginationWrapper
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          boundaryCount={1}
          siblingCount={5}
        />
      )}
    </>
  );
};

export default MovieView;
