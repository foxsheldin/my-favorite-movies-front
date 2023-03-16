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
import { IMovieViewListProps } from "./types";

const MovieViewList = ({ movies }: IMovieViewListProps) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Название фильма
            </TableCell>
            <TableCell align="center">Описание</TableCell>
            <TableCell align="center">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies?.map((movie) => (
            <MovieViewListItem key={movie?.id} movie={movie} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MovieViewList;
