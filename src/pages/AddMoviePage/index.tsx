import React from "react";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { WrappedContainer } from "./styles";
import MovieFilters from "@components/MovieFilters";
import Movies from "@components/Movies";

const AddMoviePage = () => {
  const { t } = useTranslation("add-movie-page");
  return (
    <WrappedContainer>
      <Container>
        <Typography variant="h4" component="h1">
          {t("title.page")}
        </Typography>
      </Container>
      <MovieFilters />
      <Movies />
    </WrappedContainer>
  );
};

export default AddMoviePage;
