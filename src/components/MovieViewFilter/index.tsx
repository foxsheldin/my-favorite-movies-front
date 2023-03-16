import React, { MouseEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { ETypeView } from "@constants/typeView";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectFilterCurrentTypeView } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";

const MovieViewFilter = () => {
  const dispatch = useAppDispatch();
  const movieTypeView = useAppSelector(selectFilterCurrentTypeView);

  const onViewToggleChange = (
    event: MouseEvent<HTMLElement>,
    newView: ETypeView
  ) => {
    dispatch(filterSlice.actions.updateCurrentViewList(newView));
  };

  return (
    <ToggleButtonGroup
      value={movieTypeView}
      exclusive
      onChange={onViewToggleChange}
    >
      <ToggleButton value={ETypeView.list} aria-label={ETypeView.list}>
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value={ETypeView.module} aria-label={ETypeView.module}>
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default MovieViewFilter;
