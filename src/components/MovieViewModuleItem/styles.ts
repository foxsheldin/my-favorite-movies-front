import { Paper, styled, Typography } from "@mui/material";

export const CustomizedPaper = styled(Paper)`
  display: grid;
  grid-template-rows: max-content 50px 100px max-content;
  text-align: center;
`;

export const CustomizedImage = styled("img")`
  height: 340px;
  width: 100%;
`;

export const CustomizedTypographyTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
`;

export const CustomizedTypographyOverview = styled(Typography)`
  max-height: 100px;
  overflow: hidden auto;
`;
