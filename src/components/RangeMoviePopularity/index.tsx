import React from "react";
import { Slider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { filterSlice } from "@store/filter";
import { MIN_POPULARITY_VALUE } from "./constants";
import { MAX_POPULARITY_VALUE } from "@store/filter/constants";
import { selectFilterPopularity } from "@store/filter/selectors";
import { arrayIsEquel } from "@helpers/arrayIsEquel";

const RangeMoviePopularity = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const popularity = useAppSelector(selectFilterPopularity);

  const sliderThumbChangeHandler = (_: Event, value: number | number[]) => {
    if (typeof value === "number") {
      dispatch(filterSlice.actions.setPopularity([value, value]));
    } else if (!arrayIsEquel(popularity, value)) {
      dispatch(filterSlice.actions.setPopularity(value));
    }
  };

  return (
    <div>
      <Typography gutterBottom>{t("filters.popularity")}</Typography>
      <Slider
        value={popularity}
        max={MAX_POPULARITY_VALUE}
        min={MIN_POPULARITY_VALUE}
        onChange={sliderThumbChangeHandler}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default RangeMoviePopularity;
