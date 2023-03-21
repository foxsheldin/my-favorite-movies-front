import React from "react";
import { useTranslation } from "react-i18next";
import { TableCell, TableRow, Typography } from "@mui/material";
import MovieAction from "@components/MovieAction";
import { IMovieViewListItemProps } from "./types";
import { getImagePath } from "@helpers/getPathImage";
import { ImageSizeWrapper } from "./styles";

const MovieViewListItem = ({ movie }: IMovieViewListItemProps) => {
  const { t } = useTranslation("common", {
    keyPrefix: "movie.tableBody",
  });

  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle2">{movie?.title}</Typography>
      </TableCell>
      <TableCell align="center">
        <ImageSizeWrapper
          src={`${getImagePath("w500", movie?.posterPath)}`}
          loading="lazy"
          alt={
            t("posterTitle", {
              movieTitle: movie.title,
            }) as string
          }
        />
      </TableCell>
      <TableCell>{movie?.overview}</TableCell>
      <TableCell align="right">
        <MovieAction movie={movie} />
      </TableCell>
    </TableRow>
  );
};

export default MovieViewListItem;
