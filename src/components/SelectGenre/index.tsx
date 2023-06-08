import React, { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import Preloader from "@components/Preloader";
import { WrappedContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { useGetGenreList } from "@api/graphql/hooks/queries/useGetGenreList";
import { useGetFavoriteGenresList } from "@api/graphql/hooks/queries/useGetFavoriteGenresList";
import { useUpdateSelectedGenresMutation } from "@api/graphql/hooks/mutations/useUpdateSelectedGenresMutation";

const SelectGenre = () => {
  const { t, i18n } = useTranslation("favorite-movie-page");
  const { genres, loading, refetch } = useGetGenreList();
  const { favoriteGenresIds, updateQuery } = useGetFavoriteGenresList();
  const { updateSelectedGenresMutation, data } =
    useUpdateSelectedGenresMutation();

  useEffect(() => {
    refetch();
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    updateQuery(() => ({
      getFavoriteGenresList: data?.updateSelectedGenres ?? favoriteGenresIds,
    }));
  }, [data]);

  if (loading) {
    return <Preloader message={t("loadingStatuses.genres")} />;
  }

  const updateSelectedGenres = (genreId: number) => {
    updateSelectedGenresMutation(genreId);
  };

  return (
    <Paper>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          {t("title.genres")}
        </Typography>
        <GenreList
          genres={genres}
          selectedGenres={favoriteGenresIds}
          onItemClick={(id) => updateSelectedGenres(id)}
        />
      </WrappedContainer>
    </Paper>
  );
};

export default SelectGenre;
