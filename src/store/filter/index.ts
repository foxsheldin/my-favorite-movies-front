import { ETypeView } from "@constants/typeView";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterInitialState } from "./types";

const initialState: IFilterInitialState = {
  currentTypeView: ETypeView.list,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCurrentViewList(state, action: PayloadAction<ETypeView>) {
      state.currentTypeView = action.payload;
    },
  },
});
