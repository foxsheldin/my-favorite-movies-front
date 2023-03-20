import React from "react";
import { Container, Typography } from "@mui/material";
import FavoriteMovie from "@components/FavoriteMovie";
import SelectGenre from "@components/SelectGenre";
import { WrappedContainer } from "./styles";

const FavoriteMoviePage = () => {
  return (
    <WrappedContainer>
      <Container>
        <Typography variant="h4" component="h1">
          Избранное
        </Typography>
      </Container>
      <SelectGenre />
      <FavoriteMovie />
    </WrappedContainer>
  );
};

export default FavoriteMoviePage;
