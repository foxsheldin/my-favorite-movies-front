import {
  MOVIE_DB_IMAGE_URL_ORIGINAL,
  MOVIE_DB_IMAGE_URL_W500,
} from "@api/constants";

export const getPathImageW500 = (imageName: string) =>
  MOVIE_DB_IMAGE_URL_W500 + imageName;
export const getPathImageOriginal = (imageName: string) =>
  MOVIE_DB_IMAGE_URL_ORIGINAL + imageName;
