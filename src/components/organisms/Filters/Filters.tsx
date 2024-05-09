import { HorizontalExpander } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import React from "react";

const Filters = ({ onFilterChange }) => {
  // Define options for each filter category
  const areaOptions = [
    "Artes y Humanidades",
    "Ingeniería y Tecnología",
    "Ciencias de la vida y medicina",
    "Ciencias Naturales",
    "Ciencias Sociales y Gestión",
  ];
  const disciplineOptions = [
    "Lingüística",
    "Teología y Estudios Religiosos",
    "Arqueología",
    "Arquitectura y Entorno Construido",
    "Arte y Diseño",
    "Lengua Inglesa y Literatura",
    "Historia",
  ];
  const programOptions = ["Grado", "Máster"];
  const { isMobile } = useResize();

  return (
    <div className=" flex flex-col p-4 gap-y-2">
      {/* Area of Study Filter */}
      <HorizontalExpander title={"Filtro por área de estudio"}>
        {areaOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-xs	 items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              className="w-4 h-4  bg-gray-100 border-gray-300  focus:ring-primary-500 focus:ring-opacity-50"
              onChange={(e) => onFilterChange("area", option)}
            />
            {option}
          </label>
        ))}
      </HorizontalExpander>
      {/* Discipline Filter */}
      <HorizontalExpander title={" Filtro por disciplina"}>
        {disciplineOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-sm	items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded-sm bg-gray-100 border-gray-300 focus:ring-primary-500 focus:ring-opacity-50"
              onChange={(e) => onFilterChange("discipline", option)}
            />
            {option}
          </label>
        ))}
      </HorizontalExpander>
      {/* Program Type Filter */}
      <HorizontalExpander title={"Filtro por programa"}>
        {programOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-sm	items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              onChange={(e) => onFilterChange("programType", option)}
              className="w-4 h-4 rounded-lg bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-opacity-50"
            />

            {option}
          </label>
        ))}
      </HorizontalExpander>
    </div>
  );
};

export default Filters;
