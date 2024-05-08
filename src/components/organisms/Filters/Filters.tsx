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

  return (
    <div className="w-1/4 flex flex-col p-4 gap-y-2">
      {/* Area of Study Filter */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-black-200 font-bold	text-xl	">
          Filtro por área de estudio
        </h3>
        {areaOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-sm	items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={(e) => onFilterChange("area", option)}
            />
            {option}
          </label>
        ))}
      </div>
      {/* Discipline Filter */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-black-200 font-bold	text-xl	">
          Filtro por disciplina
        </h3>
        {disciplineOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-sm	items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={(e) => onFilterChange("discipline", option)}
            />
            {option}
          </label>
        ))}
      </div>
      {/* Program Type Filter */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-black-200 font-bold	text-xl	">Filtro por programa</h3>
        {programOptions.map((option, index) => (
          <label
            key={index}
            className="flex text-sm	items-center flex-row gap-2"
          >
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={(e) => onFilterChange("programType", option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
