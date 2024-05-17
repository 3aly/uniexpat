import { IMAGES } from "@assets/images";

// src/data.js
export const getPresupuesto = () => {
  return [
    {
      header: { title: "Vivienda", image: IMAGES.house },
      rows: [
        {
          title:
            "Alquiler de un estudio de 45 m2 (480 sqft) amueblado en una zona normal de la ciudad (mes)",
          price: "845€",
        },
        {
          title: "Residencial estudiante (mes)",
          price: "600€",
        },
        {
          title: "Apartamento compartida (mes)",
          price: "500€",
        },
      ],
    },
    {
      header: { title: "Manutención", image: IMAGES.cart },
      rows: [
        {
          title:
            "Gastos de luz, agua y electricidad para 1 persona en un estudio de 45m2 (mes)",
          price: "110€",
        },
        {
          title: "Internet",
          price: "24€",
        },
        {
          title: "Línea Móvil",
          price: "20€",
        },
        {
          title: "Compra supermercado",
          price: "150€",
        },
      ],
    },
    {
      header: { title: "Entretenimiento", image: IMAGES.beer },
      rows: [
        {
          title: "Cine",
          price: "9€",
        },
        {
          title: "Teatro",
          price: "22€",
        },
        {
          title: "Salida a comer",
          price: "20€",
        },
        {
          title: "Cerveza",
          price: "5€",
        },
      ],
    },
  ];
};
