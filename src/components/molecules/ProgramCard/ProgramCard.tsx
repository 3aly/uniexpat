import ArrowRight from "@assets/ArrowRight";
import React from "react";

const ProgramCard = ({ program }) => {
  return (
    <div
      key={program.id}
      className=" p-3 rounded-3xl shadow-xl flex flex-col items-center justify-between"
    >
      <img
        src={program.imageUrl}
        alt="Program"
        className="mb-3 w-full h-32 object-cover rounded-2xl"
      />
      <div className="text-left">
        <h4 className="text-base text-black font-medium">{program.title}</h4>
        <p className="text-sm font-light">{program.description}</p>
      </div>
      {/* <small className="text-sm text-gray-600">
              Area: {program.area}
            </small>
            <br />
            <small className="text-sm text-gray-600">
              Discipline: {program.discipline}
            </small>
            <br />
            <small className="text-sm text-gray-600">
              Type: {program.programType}
            </small> */}
      <div className="me-1 my-1 self-end">
        <ArrowRight />
      </div>
    </div>
  );
};

export default ProgramCard;
