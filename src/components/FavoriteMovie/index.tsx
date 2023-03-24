import React, { useEffect } from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@store/hooks";
import Preloader from "@components/Preloader";
import { fetchFavoriteMovies } from "@store/favoriteMovie/thunks";
import { WrappedDiv } from "./styles";
import MovieView from "@components/MovieView";
import MovieViewFilter from "@components/MovieViewFilter";
import { NavLink } from "react-router-dom";
import { useFavoriteMovieSlice } from "./hooks/use-favorite-movie-slice";

const FavoriteMovie = () => {
  const { t, i18n } = useTranslation("favorite-movie-page");
  const dispatch = useAppDispatch();

  const {
    favoriteMoviesData,
    isFavoriteMovieLoading,
    currentPage,
    totalPages,
  } = useFavoriteMovieSlice();

  useEffect(() => {
    dispatch(fetchFavoriteMovies({}));
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
              <Button component={NavLink} to="movie/add">
                {t("title.addFavoriteButton")}
              </Button>
              {!!favoriteMoviesData.length && <MovieViewFilter />}
            </div>
          </WrappedDiv>
        </Container>
      </Paper>
      <MovieView
        movies={favoriteMoviesData}
        onPageChange={(page) => dispatch(fetchFavoriteMovies({ page }))}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default FavoriteMovie;
