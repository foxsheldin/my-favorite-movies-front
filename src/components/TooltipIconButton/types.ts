import { ReactNode } from "react";

export interface ITooltipIconButtonProps {
  children: ReactNode;
  title?: string;
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
