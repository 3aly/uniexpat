import React from "react";
import { faker } from "@faker-js/faker";
import ArrowRight from "@assets/ArrowRight";
import { ProgramCard, UniversitiesCard } from "@components/molecules";
import { NavLink } from "react-router-dom";
import { getUniversities } from "@utils/getUniversities";

const UniversitiesDisplay = ({ filters, searchQuery, page }) => {
  const universities = getUniversities();

  const itemsPerPage = 8;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = universities?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full  flex flex-col gap-8">
      {currentItems.map((university) => (
        <UniversitiesCard university={university} />
      ))}
    </div>
  );
};

export default UniversitiesDisplay;
