import React, { useEffect } from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Preloader from "@components/Preloader";
import { fetchFavoriteMovies } from "@store/favoriteMovie/thunks";
import {
  selectFavoriteMovieArrayEntities,
  selectFavoriteMovieIsLoading,
} from "@store/favoriteMovie/selectors";
import { WrappedDiv } from "./styles";
import MovieView from "@components/MovieView";
import MovieViewFilter from "@components/MovieViewFilter";
import { useTranslation } from "react-i18next";

const FavoriteMovie = () => {
  const { t, i18n } = useTranslation("favorite-movie-page");
  const dispatch = useAppDispatch();

  const favoriteMoviesData = useAppSelector(selectFavoriteMovieArrayEntities);
  const isFavoriteMovieLoading = useAppSelector(selectFavoriteMovieIsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [i18n.resolvedLanguage]);

  if (isFavoriteMovieLoading) {
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
              <Button>{t("title.addFavoriteButton")}</Button>
              {!!favoriteMoviesData.length && <MovieViewFilter />}
            </div>
          </WrappedDiv>
        </Container>
      </Paper>
      <MovieView movies={favoriteMoviesData} />
    </>
  );
};

export default FavoriteMovie;
