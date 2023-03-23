import { Container, FormGroup, styled } from "@mui/material";

export const WrappedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0;
`;

export const FormGroupWithColumns = styled(FormGroup)`
  display: grid;
  grid-template-columns: 1fr 125px;
  gap: 25px;
`;
