import { IMAGES } from "@assets/images";
import { Pagination, SearchBar } from "@components/molecules";
import { Filters, ProgramsDisplay } from "@components/organisms";
import { useResize } from "@hooks/useResize";
import React, { useState } from "react";

const Programs = () => {
  const [filters, setFilters] = useState({
    area: "",
    discipline: "",
    programType: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;
  const { isMobile } = useResize();

  return (
    <div className="mx-12 flex flex-col justify-center ">
      <img
        src={IMAGES.programsBg}
        alt="Image"
        className={`rounded-3xl ${isMobile ? "w-full" : "w-full"} `}
      />
      <div className="flex flex-row">
        <Filters onFilterChange={setFilters} />
        <div className="flex flex-col items-center w-3/4">
          <SearchBar onSearchChange={setSearchQuery} />

          <ProgramsDisplay
            filters={filters}
            searchQuery={searchQuery}
            page={currentPage}
          />
          <Pagination
            itemsPerPage={16}
            totalItems={totalItems}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
