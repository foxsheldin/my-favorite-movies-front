import React, { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import Preloader from "@components/Preloader";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectGenreIsLoading } from "@store/genre/selectors";
import { fetchGenres } from "@store/genre/thunks";
import { CustomizedContainer } from "./styles";

const SelectGenre = () => {
  const dispatch = useAppDispatch();
  const isGenreLoading = useAppSelector(selectGenreIsLoading);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  if (isGenreLoading) {
    return <Preloader message="Загрузка данных..." />;
  }

  return (
    <Paper>
      <CustomizedContainer>
        <Typography variant="h5" component="p">
          Выберите ваш любимый жанр
        </Typography>
        <GenreList />
      </CustomizedContainer>
    </Paper>
  );
};

export default SelectGenre;
