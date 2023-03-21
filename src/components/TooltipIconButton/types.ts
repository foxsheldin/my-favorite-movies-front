import { DefaultTFuncReturn } from "i18next";
import { ReactNode } from "react";

export interface ITooltipIconButtonProps {
  children: ReactNode;
  title?: DefaultTFuncReturn | string;
  color?:
    | "inherit"
    | "primary"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  onClick?: () => void;
}
