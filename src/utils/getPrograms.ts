import { faker } from "@faker-js/faker";

// src/data.js
export const getPrograms = () => {
  const fakedata = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    title: faker.company.catchPhrase(),
    area: faker.helpers.arrayElement([
      "Artes y Humanidades",
      "Ingeniería y Tecnología",
      "Ciencias de la vida y medicina",
      "Ciencias Naturales",
      "Ciencias Sociales y Gestión",
    ]),
    discipline: faker.helpers.arrayElement([
      "Lingüística",
      "Teología y Estudios Religiosos",
      "Arqueología",
      "Arquitectura y Entorno Construido",
      "Arte y Diseño",
      "Lengua Inglesa y Literatura",
      "Historia",
    ]),
    programType: faker.helpers.arrayElement(["Grado", "Máster"]),
    description: faker.lorem.sentence(),
    imageUrl: faker.image.abstract(320, 480, true), // Generates a random abstract image URL
  }));
  return fakedata;
};
