import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { HorizontalExpander } from "@components/molecules";
import { useResize } from "@hooks/useResize";

const UniversitiesChecksFilter = ({ onFilterChange }) => {
  const { isMobile } = useResize();

  const [filters, setFilters] = useState({
    scholarships: false,
    english: false,
    publicUniversity: false,
    privateUniversity: false,
    priceRange: "",
    rankingQS: "",
    rankingShanghai: "",
  });

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const filterOptions = {
    popularFilters: [
      { label: "Becas Disponibles", name: "scholarships" },
      { label: "Idioma Inglés", name: "english" },
      { label: "Universidad Pública", name: "publicUniversity" },
      { label: "Universidad Privada", name: "privateUniversity" },
    ],
    priceRanges: [
      { label: "Menos de COP$30 Mill", name: "priceRange", value: "low" },
      {
        label: "COP$30 Mill a COP$60 Mill",
        name: "priceRange",
        value: "mid-low",
      },
      {
        label: "COP$60 Mill a COP$90 Mill",
        name: "priceRange",
        value: "mid-high",
      },
      { label: "Más de COP$90 Mill", name: "priceRange", value: "high" },
    ],
    rankings: [
      { label: "QS top 10", name: "rankingQS", value: "top10" },
      { label: "QS top 5", name: "rankingQS", value: "top5" },
      { label: "Shanghai top 10", name: "rankingShanghai", value: "top10" },
      { label: "Shanghai top 5", name: "rankingShanghai", value: "top5" },
    ],
  };

  return (
    <div className="flex flex-col p-4 gap-y-2">
      <HorizontalExpander title="Filtros Populares">
        {filterOptions.popularFilters.map((filter) => (
          <label
            key={filter.name}
            className="flex text-xs items-center flex-row gap-2"
          >
            <Checkbox
              checked={filters[filter.name]}
              onChange={handleChange}
              name={filter.name}
              sx={{
                width: "1rem",
                height: "1rem",
                // bgcolor: "#371373",
                borderRadius: "8px",
                "&.Mui-checked": {
                  color: "#371373", // Customize the check color
                },
              }}
            />
            {filter.label}
          </label>
        ))}
      </HorizontalExpander>
      <HorizontalExpander title="Precio por año">
        {filterOptions.priceRanges.map((filter) => (
          <label
            key={filter.value}
            className="flex text-xs items-center flex-row gap-2"
          >
            <Checkbox
              checked={filters.priceRange === filter.value}
              onChange={handleChange}
              name={filter.name}
              value={filter.value}
              sx={{
                width: "1rem",
                height: "1rem",
                // bgcolor: "#371373",
                borderRadius: "8px",
                "&.Mui-checked": {
                  color: "#371373", // Customize the check color
                },
              }}
            />
            {filter.label}
          </label>
        ))}
      </HorizontalExpander>
      <HorizontalExpander title="Ranking">
        {filterOptions.rankings.map((filter) => (
          <label
            key={filter.value}
            className="flex text-xs items-center flex-row gap-2"
          >
            <Checkbox
              checked={filters[filter.name] === filter.value}
              onChange={handleChange}
              name={filter.name}
              value={filter.value}
              sx={{
                width: "1rem",
                height: "1rem",
                // bgcolor: "#371373",
                borderRadius: "8px",
                "&.Mui-checked": {
                  color: "#371373", // Customize the check color
                },
              }}
            />
            {filter.label}
          </label>
        ))}
      </HorizontalExpander>
    </div>
  );
};

export default UniversitiesChecksFilter;
