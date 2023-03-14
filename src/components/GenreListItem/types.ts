import { EntityId } from "@reduxjs/toolkit";

export interface IGenreItemProps {
  id: EntityId | number;
  selected?: boolean;
}
