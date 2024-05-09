import React, { useState, useRef, useEffect } from "react";
import { IMAGES } from "@assets/images";
import { Pagination, SearchBar } from "@components/molecules";
import { Filters, ProgramsDisplay } from "@components/organisms";
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
      <div
        style={{
          backgroundImage: `url(${IMAGES.programsBg})`,
        }}
        className={` text-white w-full flex flex-col  text-center justify-center  bg-cover bg-center ${
          isMobile ? "h-60 rounded-lg my-2" : " my-4 h-96 rounded-3xl gap-y-4"
        }`}
      >
        <p
          className={`${
            isMobile ? "text-lg font-extrabold" : "text-4xl font-extrabold		"
          }`}
        >
          Encuentra tu programa universitario
        </p>
        <p className={`${isMobile ? "text-sm" : "text-xl	  font-medium		"}`}>
          1,480,086 grados acádemicos o másters esperando por tí!
        </p>
      </div>

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
                borderTopLeftRadius: "14px",
              }}
              className={`fixed   inset-y-0 left-0 z-20 transform w-5/6 ${
                isFiltersVisible ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out bg-white shadow-xl  overflow-auto`}
            >
              <Filters onFilterChange={setFilters} />
            </div>
          </>
        )}

        {!isMobile && <Filters onFilterChange={setFilters} />}
        <div
          className={`flex flex-col  items-center ${
            isMobile ? "w-fit mx-4" : "w-3/4 "
          }`}
        >
          <SearchBar onSearchChange={setSearchQuery} />
          <ProgramsDisplay
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
