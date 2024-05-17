import React from "react";
import { faker } from "@faker-js/faker";
import ArrowRight from "@assets/ArrowRight";
import { ProgramCard } from "@components/molecules";
import { NavLink } from "react-router-dom";
import { getPrograms } from "@utils/getPrograms";

const ProgramsDisplay = ({ filters, searchQuery, page }) => {
  const programs = getPrograms();

  const itemsPerPage = 8;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = programs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full  flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((program) => (
          <NavLink to={"/universities"}>
            <ProgramCard program={program} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProgramsDisplay;
