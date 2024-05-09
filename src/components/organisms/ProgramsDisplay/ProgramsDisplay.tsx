import React from "react";
import { faker } from "@faker-js/faker";
import ArrowRight from "@assets/ArrowRight";
import { ProgramCard } from "@components/molecules";

const ProgramsDisplay = ({ filters, searchQuery, page }) => {
  const programs = Array.from({ length: 100 }, () => ({
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

  const itemsPerPage = 8;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = programs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full  flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((program) => (
          <ProgramCard program={program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramsDisplay;
