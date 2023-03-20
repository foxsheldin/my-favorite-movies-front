import { RootState } from "..";

export const selectFilterModuleState = (state: RootState) => state.filter;

export const selectFilterCurrentTypeView = (state: RootState) =>
  selectFilterModuleState(state).currentTypeView;
