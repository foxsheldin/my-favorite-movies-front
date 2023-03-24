import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import { selectGenreIsLoading } from "@store/genre/selectors";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchGenres } from "@store/genre/thunks";
import { FormGroupWithColumns, WrappedContainer } from "./styles";
import Preloader from "@components/Preloader";
import SelectMovieYear from "@components/SelectMovieYear";
import RangeMoviePopularity from "@components/RangeMoviePopularity";
import { selectFilterSelectedMovieGenres } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";

const MovieFilters = () => {
  const { t, i18n } = useTranslation(["common", "add-movie-page"]);
  const dispatch = useAppDispatch();

  const selectedGenres = useAppSelector(selectFilterSelectedMovieGenres);
  const isGenreLoading = useAppSelector(selectGenreIsLoading);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [i18n.resolvedLanguage]);

  if (isGenreLoading) {
    return (
      <Preloader
        message={t("loadingStatuses.genres", { ns: "add-movie-page" })}
      />
    );
  }

  return (
    <Paper>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          {t("title.filters", { ns: "add-movie-page" })}
        </Typography>

        <Typography variant="h6" component="p">
          {t("filters.genres")}
        </Typography>
        <GenreList
          selectedGenres={selectedGenres}
          onItemClick={(id) =>
            dispatch(filterSlice.actions.updateSelectedMovieGenres(id))
          }
        />

        <FormGroupWithColumns>
          <RangeMoviePopularity />
          <SelectMovieYear />
        </FormGroupWithColumns>
      </WrappedContainer>
    </Paper>
  );
};

export default MovieFilters;
