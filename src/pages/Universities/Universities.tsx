import React, { useState, useRef, useEffect } from "react";
import { IMAGES } from "@assets/images";
import { Pagination, SearchBar } from "@components/molecules";
import {
  Filters,
  UniversitiesChecksFilter,
  UniversitiesDisplay,
  UniversitiesFilter,
} from "@components/organisms";
import { useResize } from "@hooks/useResize";
import TuneIcon from "@mui/icons-material/Tune";
import { getUniversities } from "@utils/getUniversities";
import { Box } from "@mui/material";

interface Program {
  id: string;
  name: string;
  address: string;
  languages: string;
  universityType: string;
  rankingQS: number;
  rankingShanghai: number;
  scholarships: string;
  pricePerYear: number;
  duration: string;
  reviewCount: number;
  reviewScore: number;
  hotDeal: boolean;
  popular: boolean;
  imageUrl: string;
}
const Programs: React.FC = () => {
  // const [filters, setFilters] = useState<{
  //   area: string;
  //   discipline: string;
  //   programType: string;
  // }>({
  //   area: "",
  //   discipline: "",
  //   programType: "",
  // });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [universities, setUniversities] = useState<Program[]>(
    getUniversities()
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const { isMobile } = useResize();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState({
    universityName: "",
    country: "España",
    city: "",
    startDate: "",
  });
  const [filteredUniversities, setFilteredUniversities] = useState<Program[]>(
    []
  );

  useEffect(() => {
    setFilteredUniversities(universities);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    const filtered = universities?.filter((university) => {
      const universityName = university.name?.toLowerCase();
      const filterUniversityName = newFilters.universityName?.toLowerCase();
      const universityAddress = university.address?.toLowerCase();
      const filterCity = newFilters.city?.toLowerCase();

      return (
        (newFilters.universityName
          ? universityName.includes(filterUniversityName)
          : true) &&
        (newFilters.country
          ? universityAddress.includes(newFilters.country.toLowerCase())
          : true) &&
        (newFilters.city ? universityAddress.includes(filterCity) : true)
      );
    });

    setFilteredUniversities(filtered);
  };
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
        isMobile ? "mb-5 mx-2 " : " mt-8 mb-4 "
      }`}
    >
      <div className={`flex  ${isMobile ? "flex-col gap-2" : "flex-row"} `}>
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
              <UniversitiesFilter onFilterChange={handleFilterChange} />
              <UniversitiesChecksFilter onFilterChange={handleFilterChange} />
            </div>
          </>
        )}
        <div
          className="w-1/3 "
          style={{ borderRightWidth: 1, borderColor: "#DEDEDE" }}
        >
          {!isMobile && (
            <Box>
              <UniversitiesFilter onFilterChange={handleFilterChange} />
              <UniversitiesChecksFilter onFilterChange={setFilters} />
            </Box>
          )}
        </div>
        <div
          className={`flex flex-col  items-center ${
            isMobile ? "w-full " : "mx-10 w-full "
          }`}
        >
          <UniversitiesDisplay
            universities={filteredUniversities}
            filters={filters}
            searchQuery={searchQuery}
            page={currentPage}
          />
          <Pagination
            itemsPerPage={16}
            totalItems={filteredUniversities.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
