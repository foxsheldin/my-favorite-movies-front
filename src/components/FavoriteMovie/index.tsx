import React, { MouseEvent, useEffect, useState } from "react";
import {
  Button,
  Container,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MovieViewList from "@components/MovieViewList";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import Preloader from "@components/Preloader";
import { fetchFavoriteMovies } from "@store/favoriteMovie/thunks";
import { selectFavoriteMovieIsLoading } from "@store/favoriteMovie/selectors";
import { ETypeView } from "@constants/typeView";
import MovieViewModule from "@components/MovieViewModule";
import { selectSelectedGenresArray } from "@store/genre/selectors";
import { CustomizedDiv } from "./styles";

const FavoriteMovie = () => {
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector(selectSelectedGenresArray);
  const isFavoriteMovieLoading = useAppSelector(selectFavoriteMovieIsLoading);
  const [viewList, setViewList] = useState(ETypeView.list);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [selectedGenres]);

  const onViewToggleChange = (
    event: MouseEvent<HTMLElement>,
    newView: ETypeView
  ) => {
    setViewList(newView);
  };

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
              <ToggleButtonGroup
                value={viewList}
                exclusive
                onChange={onViewToggleChange}
              >
                <ToggleButton
                  value={ETypeView.list}
                  aria-label={ETypeView.list}
                >
                  <ViewListIcon />
                </ToggleButton>
                <ToggleButton
                  value={ETypeView.module}
                  aria-label={ETypeView.module}
                >
                  <ViewModuleIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </CustomizedDiv>
        </Container>
      </Paper>
      {viewList === ETypeView.list && <MovieViewList />}
      {viewList === ETypeView.module && <MovieViewModule />}
    </>
  );
};

export default FavoriteMovie;
