import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "@components/Preloader";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  selectMovieArrayEntities,
  selectMovieCurrentPage,
  selectMovieIsLoading,
  selectMovieTotalPages,
} from "@store/movie/selectors";
import { fetchMovies } from "@store/movie/thunks";
import { Button, Container, Paper, Typography } from "@mui/material";
import { WrappedDiv } from "./styles";
import { NavLink } from "react-router-dom";
import MovieViewFilter from "@components/MovieViewFilter";
import MovieView from "@components/MovieView";
import {
  selectFilterPopularity,
  selectFilterReleaseYear,
  selectFilterSelectedMovieGenres,
} from "@store/filter/selectors";
import { fetchFavoriteMovieIds } from "@store/favoriteMovie/thunks";

const Movies = () => {
  const { t, i18n } = useTranslation("add-movie-page");
  const dispatch = useAppDispatch();

  const selectedGenres = useAppSelector(selectFilterSelectedMovieGenres);
  const popularity = useAppSelector(selectFilterPopularity);
  const releaseYear = useAppSelector(selectFilterReleaseYear);

  const moviesData = useAppSelector(selectMovieArrayEntities);
  const isMovieLoading = useAppSelector(selectMovieIsLoading);
  const currentPage = useAppSelector(selectMovieCurrentPage);
  const totalPages = useAppSelector(selectMovieTotalPages);

  useEffect(() => {
    dispatch(fetchFavoriteMovieIds());
  }, []);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [i18n.resolvedLanguage, selectedGenres, popularity, releaseYear]);

  if (isMovieLoading) {
    return <Preloader message={t("loadingStatuses.movies")} />;
  }

  return (
    <>
      <Paper>
        <Container>
          <WrappedDiv>
            <Typography variant="h5" component="p">
              {t("title.movies")}
            </Typography>
            <div>
              <Button component={NavLink} to="/panel">
                {t("title.backToFavoriteMovies")}
              </Button>
              {!!moviesData.length && <MovieViewFilter />}
            </div>
          </WrappedDiv>
        </Container>
      </Paper>
      <MovieView
        movies={moviesData}
        onPageChange={(page) => dispatch(fetchMovies({ page }))}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Movies;
