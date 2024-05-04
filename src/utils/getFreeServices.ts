import { IMAGES } from "@assets/images";

export const getFreeServices = () => {
  return [
    {
      image: IMAGES.academic,
      title: "Información Académica",
      paragraph:
        "Descubre todo lo que necesitas saber sobre programas académicos, universidades en España y toma la mejor decisión para tu futuro académico",
      button: "Explora más programas",
      checkboxData: [
        "Encuentra todas las universidades de España y más de 10,000 programas académicos",
        "Precios y duración del programa.",
        "Proceso de admisiones.",
        "Acceso a becas.",
      ],
      swiped: true,
    },
    {
      image: IMAGES.information,
      title: "Información Legal",
      paragraph:
        "Obtén la información esencial sobre trámites legales y burocráticos para entender a la perfección el proceso desde tu salida hasta tu llegada a España:",
      button: "Selecciona tu Ciudad",
      checkboxData: [
        "Presupuesto necesario",
        "Tramitar visado de estudios",
        "Tramitar Empadronamiento",
        "Tramitar Número de Identidad de Extranjero (NIE)",
      ],
      swiped: false,
    },
    {
      image: IMAGES.community,
      title: "Conoce a otros estudiantes y forma tu propia comunidad.",
      paragraph:
        "Únete a la comunidad de estudiantes registrados en nuestra plataforma! Conéctate con ellos y comienza a formar tu propia comunidad antes de llegar al país. Encuentra persoanas:",
      button: "Explora más programas",
      checkboxData: [
        "De tú misma nacionalidad",
        "Interesados en la misma universidad",
        "Interesados en el mismo programa académico.",
      ],
      swiped: true,
    },
    {
      image: IMAGES.community,
      title: "Conoce a otros estudiantes y forma tu propia comunidad.",
      paragraph:
        "Únete a la comunidad de estudiantes registrados en nuestra plataforma! Conéctate con ellos y comienza a formar tu propia comunidad antes de llegar al país. Encuentra persoanas:",
      button: "Explora más programas",
      checkboxData: [
        "De tú misma nacionalidad",
        "Interesados en la misma universidad",
        "Interesados en el mismo programa académico.",
      ],
      swiped: true,
    },
  ];
};
