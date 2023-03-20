import React from "react";
import { ReactComponent as PreloaderImage } from "@images/preloader.svg";
import { IPreloaderProps } from "./types";
import { Wrapper } from "./styles";
import { Typography } from "@mui/material";

const Preloader = ({ message }: IPreloaderProps) => {
  return (
    <Wrapper>
      <PreloaderImage />
      <Typography align="center">{message}</Typography>
    </Wrapper>
  );
};

export default Preloader;
