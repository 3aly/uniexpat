import { IMAGES } from "@assets/images";

export const getWeatherIcon = (condition: string) => {
  if (condition.includes("cloudy")) {
    return IMAGES.partially;
  }
  if (condition.includes("partly cloudy")) {
    return IMAGES.partially;
  }
  if (condition.includes("sunny")) {
    return IMAGES.sunny;
  }
  if (condition.includes("rain")) {
    return IMAGES.rain;
  }
  return ""; // Fallback icon or empty if no match
};
