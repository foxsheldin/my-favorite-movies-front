import React, { useEffect } from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Preloader from "@components/Preloader";
import { fetchFavoriteMovies } from "@store/favoriteMovie/thunks";
import {
  selectFavoriteMovieArrayEntities,
  selectFavoriteMovieIsLoading,
} from "@store/favoriteMovie/selectors";
import { selectSelectedGenresArray } from "@store/genre/selectors";
import { CustomizedDiv } from "./styles";
import MovieView from "@components/MovieView";
import MovieViewFilter from "@components/MovieViewFilter";

const FavoriteMovie = () => {
  const dispatch = useAppDispatch();

  const selectedGenres = useAppSelector(selectSelectedGenresArray);
  const favoriteMoviesData = useAppSelector(selectFavoriteMovieArrayEntities);
  const isFavoriteMovieLoading = useAppSelector(selectFavoriteMovieIsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [selectedGenres]);

  if (isFavoriteMovieLoading) {
    return <Preloader message="Загрузка избранных фильмов..." />;
  }

  return (
    <>
      <Paper>
        <Container>
          <CustomizedDiv>
            <Typography variant="h5" component="p">
              Ваши избранные фильмы
            </Typography>
            <div>
              <Button>Добавить</Button>
              {!!favoriteMoviesData.length && <MovieViewFilter />}
            </div>
          </CustomizedDiv>
        </Container>
      </Paper>
      <MovieView movies={favoriteMoviesData} />
    </>
  );
};

export default FavoriteMovie;
