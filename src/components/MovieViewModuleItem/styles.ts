import { Paper, styled, Typography } from "@mui/material";

export const WrappedPaper = styled(Paper)`
  display: grid;
  grid-template-rows: max-content 50px 100px max-content;
  text-align: center;
`;

export const ImageSizeWrapper = styled("img")`
  height: 340px;
  width: 100%;
`;

export const TypographyTitleWrapper = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
`;

export const TypographyOverviewWrapper = styled(Typography)`
  max-height: 100px;
  overflow: hidden auto;
`;
