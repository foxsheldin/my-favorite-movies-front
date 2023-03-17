import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { ITooltipIconButtonProps } from "./types";

const TooltipIconButton = ({
  title,
  children,
  color,
  onClick,
}: ITooltipIconButtonProps) => {
  return (
    <Tooltip title={title}>
      <IconButton color={color} onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipIconButton;
