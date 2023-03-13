import { Container, styled } from "@mui/material";

export const CustomizedContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
`;

export const CustomizedHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
  margin: "0 0 15px 0",
}));

export const CustomizedDiv = styled("div")`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;
