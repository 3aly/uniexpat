import { IMAGES } from "@assets/images";

export const getImages = (city) => {
  const images = {
    Barcelona: [
      {
        original: IMAGES.barca1,
        thumbnail: IMAGES.barca1,
      },
      {
        original: IMAGES.barca2,
        thumbnail: IMAGES.barca2,
      },
      {
        original: IMAGES.barca3,
        thumbnail: IMAGES.barca3,
      },
      {
        original: IMAGES.barca4,
        thumbnail: IMAGES.barca4,
      },
      {
        original: IMAGES.barca5,
        thumbnail: IMAGES.barca5,
      },
    ],
    Madrid: [
      {
        original: IMAGES.madrid1,
        thumbnail: IMAGES.madrid1,
      },
      {
        original: IMAGES.madrid2,
        thumbnail: IMAGES.madrid2,
      },
      {
        original: IMAGES.madrid3,
        thumbnail: IMAGES.madrid3,
      },
    ],
  };
  return images[city];
};
