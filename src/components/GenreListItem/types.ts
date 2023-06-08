import { IGenreListResponseItem } from "@api/graphql/types/genre";

export interface IGenreItemProps {
  genre: IGenreListResponseItem;
  onClick: (id: number) => void;
  isSelected: boolean;
}
