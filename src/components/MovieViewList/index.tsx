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
import { useTranslation } from "react-i18next";

const MovieViewList = ({ movies }: IMovieViewListProps) => {
  const { t } = useTranslation("common", {
    keyPrefix: "movie.tableHeader",
  });

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              {t("title")}
            </TableCell>
            <TableCell align="center">{t("description")}</TableCell>
            <TableCell align="center">{t("action")}</TableCell>
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
