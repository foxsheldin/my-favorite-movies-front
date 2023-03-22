import { RootState } from "..";

export const selectFilterModuleState = (state: RootState) => state.filter;

export const selectFilterCurrentLanguage = (state: RootState) =>
  selectFilterModuleState(state).currentLanguage;

export const selectFilterCurrentTypeView = (state: RootState) =>
  selectFilterModuleState(state).currentTypeView;
