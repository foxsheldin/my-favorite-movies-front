import React from "react";
import { Container, Typography } from "@mui/material";
import FavoriteMovie from "@components/FavoriteMovie";
import SelectGenre from "@components/SelectGenre";
import { WrappedContainer } from "./styles";
import { useTranslation } from "react-i18next";

const FavoriteMoviePage = () => {
  const { t } = useTranslation("favoriteMoviePage");

  return (
    <WrappedContainer>
      <Container>
        <Typography variant="h4" component="h1">
          {t("title.page")}
        </Typography>
      </Container>
      <SelectGenre />
      <FavoriteMovie />
    </WrappedContainer>
  );
};

export default FavoriteMoviePage;
