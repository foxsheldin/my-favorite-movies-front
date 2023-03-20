import styled from "@emotion/styled";
import { Paper, TextField, Typography } from "@mui/material";

export const TextFieldSizeWrapper = styled(TextField)`
  width: 350px;
`;

export const CustomizedTypography = styled(Typography)`
  color: red;
  text-align: center;
`;

export const WrappedPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 15px;
`;
