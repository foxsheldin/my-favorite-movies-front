import styled from "@emotion/styled";
import { Paper, TextField, Typography } from "@mui/material";

export const CustomizedTextField = styled(TextField)`
  width: 350px;
`;

export const CustomizedTypography = styled(Typography)`
  color: red;
  text-align: center;
`;

export const CustomizedPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 15px;
`;
