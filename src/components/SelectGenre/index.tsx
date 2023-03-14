import React from "react";
import { Paper, Typography } from "@mui/material";
import GenreList from "@components/GenreList";
import { CustomizedContainer } from "./styles";

const SelectGenre = () => {
  return (
    <Paper>
      <CustomizedContainer>
        <Typography variant="h5" component="p">
          Выберите ваш любимый жанр
        </Typography>
        <GenreList />
      </CustomizedContainer>
    </Paper>
  );
};

export default SelectGenre;
