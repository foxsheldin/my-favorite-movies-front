import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "@components/Preloader";
import { useAppDispatch } from "@store/hooks";
import { fetchMovies } from "@store/movie/thunks";
import { Button, Container, Paper, Typography } from "@mui/material";
import { WrappedDiv } from "./styles";
import { NavLink } from "react-router-dom";
import MovieViewFilter from "@components/MovieViewFilter";
import MovieView from "@components/MovieView";
import { fetchFavoriteMovieIds } from "@store/favoriteMovie/thunks";
import { useMovieSlice } from "./hooks/use-movie-slice";
import { useFilterSlice } from "./hooks/use-filter-slice";

const Movies = () => {
  const { t, i18n } = useTranslation("add-movie-page");
  const dispatch = useAppDispatch();

  const { moviesData, isMovieLoading, currentPage, totalPages } =
    useMovieSlice();
  const { selectedGenres, popularity, releaseYear } = useFilterSlice();

  useEffect(() => {
    dispatch(fetchFavoriteMovieIds());
  }, []);

  useEffect(() => {
    dispatch(fetchMovies({}));
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
