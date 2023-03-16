import React from "react";
import { Typography } from "@mui/material";
import { IMessageProps } from "./types";

const Message = ({ text }: IMessageProps) => {
  return (
    <Typography variant="h5" component="p" align="center">
      {text}
    </Typography>
  );
};

export default Message;
