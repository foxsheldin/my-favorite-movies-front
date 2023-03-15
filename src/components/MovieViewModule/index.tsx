import React from "react";
import MovieViewModuleItem from "@components/MovieViewModuleItem";
import { CustomizedDiv } from "./styles";
import { IMovieViewModuleProps } from "./types";

const MovieViewModule = ({ data }: IMovieViewModuleProps) => {
  return (
    <CustomizedDiv>
      {data?.map((item) => (
        <MovieViewModuleItem key={item?.id} data={item} />
      ))}
    </CustomizedDiv>
  );
};

export default MovieViewModule;
