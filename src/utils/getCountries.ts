import { IMAGES } from "@assets/images";

export const getCountries = () => {
  return [
    {
      id: 1,
      image: IMAGES.barcelona,
      title: "Barcelona",
      subtitle:
        "Barcelona brinda arquitectura icónica, cultura rica y diversa, excelente comida, clima agradable y playas cercanas. Una vida urbana enérgica y encanto histórico se fusionan en una experiencia única.",
      reverse: true,
    },
    {
      id: 2,

      image: IMAGES.madrid,
      title: "Madrid",
      subtitle:
        "Madrid cautiva con su vitalidad cultural, variada gastronomía, parques extensos y vida nocturna animada. La mezcla de tradición y modernidad crea una ciudad apasionante y acogedora para vivir.",
      reverse: false,
    },
  ];
};
