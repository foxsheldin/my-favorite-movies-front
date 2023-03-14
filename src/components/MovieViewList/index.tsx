import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import MovieViewListItem from "@components/MovieViewListItem";
import { useAppSelector } from "@store/hooks";
import { selectMovieIds } from "@store/movie/selectors";

const MovieViewList = () => {
  const movieIds = useAppSelector(selectMovieIds);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Название фильма</TableCell>
            <TableCell align="center">Обложка</TableCell>
            <TableCell align="center">Описание</TableCell>
            <TableCell align="center">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieIds?.map((id) => (
            <MovieViewListItem key={id} id={id} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MovieViewList;
