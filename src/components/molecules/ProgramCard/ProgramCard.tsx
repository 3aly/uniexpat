import React from "react";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={program.image}
        alt={program.title}
        className="h-48 w-full object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="font-bold text-lg">{program.title}</h3>
        <p className="text-gray-600">{program.description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
