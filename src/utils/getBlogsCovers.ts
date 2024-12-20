import { IMAGES } from "@assets/images";
import { Category } from "@mui/icons-material";

export const getBlogsCovers = () => {
  return [
    {
      id: 1,
      image: IMAGES.blog1,
      title: "Interesting title for this content",
      author: "Juan",
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.",
    },
    {
      id: 2,

      image: IMAGES.blog2,
      title: "Interesting title for this content",
      author: "Juan",
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.",
    },
    {
      id: 3,

      image: IMAGES.blog3,
      title: "Interesting title for this content",
      author: "Juan",
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.",
    },
  ];
};
