import { ETypeView } from "@constants/typeView";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18next from "i18next";
import { IFilterInitialState } from "./types";

const initialState: IFilterInitialState = {
  currentLanguage: i18next.resolvedLanguage,
  currentTypeView: ETypeView.list,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCurrentLanguage(state, action: PayloadAction<string>) {
      state.currentLanguage = action.payload;
    },
    updateCurrentViewList(state, action: PayloadAction<ETypeView>) {
      state.currentTypeView = action.payload;
    },
  },
});
