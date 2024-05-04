import { IMAGES } from "@assets/images";

export const getServices = () => {
  return [
    {
      image: IMAGES.planner,
      title: "Asesoría Personalizada",
      paragraph:
        "Si tienes preguntas sin responder, ¡no te preocupes! Contrata la ayuda personalizada de uno de nuestros asesores. Ahorra tiempo y asegúrate de tener toda la información clara antes de embarcarte en tu aventura de estudiar en España. Nuestro servicio de asesoría personalizada incluye:",
      button: "Empieza tu viaje en España.",
      checkboxData: [
        "Primera reunión para conocer todas las dudas que tienes y donde te podemos ayudar.",
        "Segunda reunión para presentarte un plan de acción personalizado!",
        "Tercera llamada hacer seguimiento a los pasos que has planeado y resolver cualquier duda.",
      ],
      price: { label: "Precio de asesoría de M.AI.A:", number: "4,99€" },

      swiped: false,
    },
    {
      image: IMAGES.ai,
      title: "Planeador personalizado",
      paragraph:
        "Conoce a M.AI.A, nuestra modelo de inteligencia artificial. Solo responde tres simples preguntas: ¿Cuál es tu nacionalidad?, ¿Qué te gustaría estudiar? y ¿En qué ciudad te gustaría vivir? ¡Y recibirás por correo electrónico todo lo que necesitas saber para aplicar a la universidad en España!",
      button: "Empieza tu viaje en España.",
      checkboxData: [
        "Recomendación académica.",
        "Explicación paso a paso sobre como aplicar a la universidad.",
        "Fechas y cronograma de tareas personalizado",
      ],
      price: { label: "Precio de asesoría de M.AI.A:", number: "4,99€" },
      swiped: false,
    },
  ];
};
