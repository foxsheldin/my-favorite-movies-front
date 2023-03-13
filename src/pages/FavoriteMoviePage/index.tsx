import React from "react";
import { Container, Typography } from "@mui/material";
import { CustomizedContainer } from "./styles";

const FavoriteMoviePage = () => {
  return (
    <CustomizedContainer>
      <Container>
        <Typography variant="h4" component="h1">
          Избранное
        </Typography>
      </Container>
    </CustomizedContainer>
  );
};

export default FavoriteMoviePage;
