import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectFilterReleaseYear } from "@store/filter/selectors";
import { filterSlice } from "@store/filter";
import {
  CURRENT_YEAR,
  MIN_RELEASE_YEAR,
  PLUS_NUMBER_OF_YEARS,
} from "./constants";

const SelectMovieYear = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const releaseYear = useAppSelector(selectFilterReleaseYear);

  const years: number[] = useMemo(
    () =>
      new Array(CURRENT_YEAR + PLUS_NUMBER_OF_YEARS - MIN_RELEASE_YEAR)
        .fill(CURRENT_YEAR + PLUS_NUMBER_OF_YEARS)
        .map((value, index) => {
          if (!index) return value;
          return value - index;
        }),
    []
  );

  const selectChangeHandler = (event: SelectChangeEvent<number>) => {
    dispatch(filterSlice.actions.setReleaseYear(Number(event.target.value)));
  };

  return (
    <FormControl>
      <InputLabel id="yearLabel">{t("filters.releaseYear")}</InputLabel>
      <Select
        labelId="yearLabel"
        id="year"
        label={t("filters.releaseYear")}
        defaultValue={0}
        value={releaseYear}
        onChange={selectChangeHandler}
      >
        <MenuItem value={0}>{t("filters.allYears")}</MenuItem>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMovieYear;
