import React, { useEffect } from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Preloader from "@components/Preloader";
import { WrappedDiv } from "./styles";
import MovieView from "@components/MovieView";
import MovieViewFilter from "@components/MovieViewFilter";
import { NavLink } from "react-router-dom";
import { useGetFavoriteMovieList } from "@api/graphql/hooks/queries/useGetFavoriteMovieList";

const FavoriteMovie = () => {
  const { t, i18n } = useTranslation("favorite-movie-page");
  const { favoriteMovieList, loading, refetch } = useGetFavoriteMovieList();

  useEffect(() => {
    refetch();
  }, [i18n.resolvedLanguage]);

  if (loading) {
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
              {!!favoriteMovieList?.results?.length && <MovieViewFilter />}
            </div>
          </WrappedDiv>
        </Container>
      </Paper>
      <MovieView
        movies={favoriteMovieList?.results}
        onPageChange={(page) => refetch({ page })}
        currentPage={favoriteMovieList?.page}
        totalPages={favoriteMovieList?.totalPages}
      />
    </>
  );
};

export default FavoriteMovie;
