import React, { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import Preloader from "@components/Preloader";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  selectGenreIsLoading,
  selectSelectedGenresArray,
} from "@store/genre/selectors";
import { fetchGenres, updateSelectedGenres } from "@store/genre/thunks";
import { WrappedContainer } from "./styles";
import { useTranslation } from "react-i18next";

const SelectGenre = () => {
  const { t, i18n } = useTranslation("favorite-movie-page");
  const dispatch = useAppDispatch();

  const selectedGenres = useAppSelector(selectSelectedGenresArray);
  const isGenreLoading = useAppSelector(selectGenreIsLoading);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [i18n.resolvedLanguage]);

  if (isGenreLoading) {
    return <Preloader message={t("loadingStatuses.genres")} />;
  }

  return (
    <Paper>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          {t("title.genres")}
        </Typography>
        <GenreList
          selectedGenres={selectedGenres}
          onItemClick={(id) => dispatch(updateSelectedGenres(id))}
        />
      </WrappedContainer>
    </Paper>
  );
};

export default SelectGenre;
