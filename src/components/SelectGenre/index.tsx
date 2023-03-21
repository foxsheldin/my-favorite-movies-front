import React, { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import Preloader from "@components/Preloader";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectGenreIsLoading } from "@store/genre/selectors";
import { fetchGenres } from "@store/genre/thunks";
import { WrappedContainer } from "./styles";
import { useTranslation } from "react-i18next";

const SelectGenre = () => {
  const { t } = useTranslation("favoriteMoviePage");
  const dispatch = useAppDispatch();
  const isGenreLoading = useAppSelector(selectGenreIsLoading);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  if (isGenreLoading) {
    return <Preloader message={t("loadingStatuses.genres")} />;
  }

  return (
    <Paper>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          {t("title.genres")}
        </Typography>
        <GenreList />
      </WrappedContainer>
    </Paper>
  );
};

export default SelectGenre;
