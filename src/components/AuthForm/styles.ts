import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";

export const CustomizedTextField = styled(TextField)`
  width: 350px;
`;

export const CustomizedTypography = styled(Typography)`
  color: red;
  text-align: center;
`;

export const stylesPaper = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  rowGap: "15px",
};
