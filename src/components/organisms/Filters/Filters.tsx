import React from "react";

const Filters = ({ setData, data }) => {
  const handleChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      const filtered = data.filter((program) =>
        program.category.includes(name)
      );
      setData(filtered);
    } else {
      setData(data);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 border-r">
      <div>
        <h4 className="font-bold">Filter by Study Area</h4>
        {[
          "Artes y Humanidades",
          "Ingeniería y Tecnología",
          "Ciencias de la vida y medicina",
          "Ciencias Naturales",
          "Ciencias Sociales y Gestión",
        ].map((area) => (
          <label key={area} className="block">
            <input
              type="checkbox"
              name={area}
              onChange={handleChange}
              className="mr-2"
            />
            {area}
          </label>
        ))}
      </div>
      <div>
        <h4 className="font-bold">Filtro por Disciplina</h4>
        {[
          "Lingüística",
          "Teología y Estudios Religiosos",
          "Arqueología",
          "Arquitectura y Entorno Construido",
          "Arte y Diseño",
          "Clásicos e Historia Antigua",
          "Lengua Inglesa y Literatura",
          "Historia",
        ].map((discipline) => (
          <label key={discipline} className="block">
            <input
              type="checkbox"
              name={discipline}
              onChange={handleChange}
              className="mr-2"
            />
            {discipline}
          </label>
        ))}
      </div>
      <div>
        <h4 className="font-bold">Filtro por Programa</h4>
        {["Grado", "Máster"].map((program) => (
          <label key={program} className="block">
            <input
              type="checkbox"
              name={program}
              onChange={handleChange}
              className="mr-2"
            />
            {program}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
