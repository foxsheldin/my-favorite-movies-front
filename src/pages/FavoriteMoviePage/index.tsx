import React from "react";
import { Container, Typography } from "@mui/material";
import FavoriteMovie from "@components/FavoriteMovie";
import SelectGenre from "@components/SelectGenre";
import { CustomizedContainer } from "./styles";

const FavoriteMoviePage = () => {
  return (
    <CustomizedContainer>
      <Container>
        <Typography variant="h4" component="h1">
          Избранное
        </Typography>
      </Container>
      <SelectGenre />
      <FavoriteMovie />
    </CustomizedContainer>
  );
};

export default FavoriteMoviePage;
