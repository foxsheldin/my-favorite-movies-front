import React from "react";
import { ReactComponent as PreloaderImage } from "@images/preloader.svg";
import { IPreloaderProps } from "./types";
import { CustomizedDiv } from "./styles";
import { Typography } from "@mui/material";

const Preloader = ({ message }: IPreloaderProps) => {
  return (
    <CustomizedDiv>
      <PreloaderImage />
      <Typography align="center">{message}</Typography>
    </CustomizedDiv>
  );
};

export default Preloader;
