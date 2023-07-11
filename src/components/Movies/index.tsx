import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "@components/Preloader";
import { Button, Container, Paper, Typography } from "@mui/material";
import { WrappedDiv } from "./styles";
import { NavLink } from "react-router-dom";
import MovieViewFilter from "@components/MovieViewFilter";
import MovieView from "@components/MovieView";
import { useGetAllAvailableMovieList } from "@api/graphql/hooks/queries/useGetAllAvailableMovieList";

const Movies = () => {
  const { t, i18n } = useTranslation("add-movie-page");
  const { movieList, loading, refetch } = useGetAllAvailableMovieList();

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
              <Button component={NavLink} to="/panel">
                {t("title.backToFavoriteMovies")}
              </Button>
              {!!movieList?.results.length && <MovieViewFilter />}
            </div>
          </WrappedDiv>
        </Container>
      </Paper>
      <MovieView
        movies={movieList?.results}
        onPageChange={(page) => refetch({ page })}
        currentPage={movieList?.page}
        totalPages={movieList?.totalPages}
      />
    </>
  );
};

export default Movies;
