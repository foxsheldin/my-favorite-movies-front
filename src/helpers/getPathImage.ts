import { BASE_IMAGE_URL } from "@api/constants";

export const getImagePath = (
  imageSize: "original" | "w500",
  imageName: string
): string => `${BASE_IMAGE_URL}${imageSize}/${imageName}`;
