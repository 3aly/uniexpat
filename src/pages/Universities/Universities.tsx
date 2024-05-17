import React, { useState, useRef, useEffect } from "react";
import { IMAGES } from "@assets/images";
import { Pagination, SearchBar } from "@components/molecules";
import {
  Filters,
  ProgramsDisplay,
  UniversitiesDisplay,
} from "@components/organisms";
import { useResize } from "@hooks/useResize";
import TuneIcon from "@mui/icons-material/Tune";
const Programs: React.FC = () => {
  const [filters, setFilters] = useState<{
    area: string;
    discipline: string;
    programType: string;
  }>({
    area: "",
    discipline: "",
    programType: "",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const { isMobile } = useResize();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleFilters = (): void => setIsFiltersVisible(!isFiltersVisible);

  // Function to handle outside click
  const handleClickOutside = (event: MouseEvent): void => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsFiltersVisible(false);
    }
  };

  // Use effect to add an event listener to the document
  useEffect(() => {
    const listener = (event: MouseEvent): void => handleClickOutside(event);
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  return (
    <div
      className={` flex flex-col justify-center ${
        isMobile ? "mb-5 " : " mx-12 mb-4 "
      }`}
    >
      <div className={`flex  ${isMobile ? "flex-col" : "flex-row"} `}>
        {isMobile && (
          <>
            <div
              onClick={toggleFilters}
              className=" h-fit ms-4 w-fit mt-1 rounded-xl shadow-xl p-2"
            >
              <TuneIcon />
            </div>
            <div
              ref={sidebarRef}
              style={{
                borderTopRightRadius: "14px",
                borderBottomRightRadius: "14px",
              }}
              className={`fixed  z-10 inset-y-0 left-0  transform w-5/6 ${
                isFiltersVisible ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out bg-white shadow-xl  overflow-auto`}
            >
              <Filters onFilterChange={setFilters} />
            </div>
          </>
        )}
        <div className="w-1/3">
          {!isMobile && <Filters onFilterChange={setFilters} />}
        </div>
        <div
          className={`flex flex-col  items-center ${
            isMobile ? "w-fit mx-4" : "mx-10 w-full "
          }`}
        >
          <UniversitiesDisplay
            filters={filters}
            searchQuery={searchQuery}
            page={currentPage}
          />
          <Pagination
            itemsPerPage={16}
            totalItems={100}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
