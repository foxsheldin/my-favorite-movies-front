import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { FormGroupWithColumns, WrappedContainer } from "./styles";
import Preloader from "@components/Preloader";
import SelectMovieYear from "@components/SelectMovieYear";
import RangeMoviePopularity from "@components/RangeMoviePopularity";
import { selectFilterSelectedMovieGenres } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";
import { useGetGenreList } from "@api/graphql/hooks/queries/useGetGenreList";
import { useGetFavoriteGenresList } from "@api/graphql/hooks/queries/useGetFavoriteGenresList";

const MovieFilters = () => {
  const { t, i18n } = useTranslation(["common", "add-movie-page"]);
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector(selectFilterSelectedMovieGenres);
  const { genres, loading, refetch } = useGetGenreList();
  const { favoriteGenresIds } = useGetFavoriteGenresList();

  useEffect(() => {
    refetch();
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    dispatch(filterSlice.actions.setSelectedMovieGenres(favoriteGenresIds));
  }, [favoriteGenresIds]);

  if (loading) {
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
          genres={genres}
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
