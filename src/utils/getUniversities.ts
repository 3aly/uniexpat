import { faker } from "@faker-js/faker";

// src/data.js
export const getUniversities = () => {
  const universities = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.helpers.arrayElement([
      "ESADE Business School",
      "EAE Business School",
      "Universidad Pomepu Fabra",
      "Universidad Complutense",
    ]), // Use 'faker.company.name()' to generate company names
    address: `${faker.address.streetAddress()} ${faker.address.cityName()}`,
    languages: faker.helpers
      .arrayElements(
        ["Castellano", "Inglés", "España"],
        faker.datatype.number({ min: 1, max: 2 })
      )
      .join(" · "),
    universityType: faker.helpers.arrayElement([
      "Universidad Pública",
      "Universidad Privada",
    ]),
    rankingQS: faker.datatype.number({ min: 1, max: 100 }),
    rankingShanghai: faker.datatype.number({ min: 1, max: 100 }),
    scholarships: faker.datatype.boolean() ? "Disponibles" : "No disponibles",
    pricePerYear: faker.datatype.number({ min: 10000000, max: 100000000 }),
    duration: `${faker.datatype.number({
      min: 3,
      max: 5,
    })} años, ${faker.datatype.number({ min: 6, max: 10 })} semestres`,
    reviewCount: faker.datatype.number({ min: 100, max: 2000 }),
    reviewScore: faker.datatype.float({ min: 0, max: 10, precision: 0.1 }),
    hotDeal: faker.datatype.boolean(),
    popular: faker.datatype.boolean(),
    imageUrl: faker.image.city(320, 240, true), // Generates a random city image URL

    english: faker.datatype.boolean(),
  }));
  return universities;
};
