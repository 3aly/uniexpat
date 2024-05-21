import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useResize } from "@hooks/useResize";

const UniversitiesFilter = ({ onFilterChange }) => {
  const { isMobile } = useResize();
  const [filters, setFilters] = useState({
    academicProgram: "",
    country: "España",
    city: "",
    startDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onFilterChange(filters);
  };

  return (
    <div className={`bg-gray-100 mt-12 p-4 ${isMobile ? "w-full " : "w-full"}`}>
      <h2 className="text-lg font-bold mb-4">Tu Búsqueda</h2>
      <div className="mb-4">
        <TextField
          fullWidth
          label="Programa Académico"
          value={filters.academicProgram}
          onChange={handleChange}
          name="academicProgram"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 12, // Set the border radius
            },
          }}
        />
      </div>
      <div className="mb-4">
        <TextField
          fullWidth
          label="País"
          value={filters.country}
          onChange={handleChange}
          name="country"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 12, // Set the border radius
            },
          }}
        />
      </div>
      <div className="mb-4">
        <TextField
          fullWidth
          label="Ciudad"
          value={filters.city}
          onChange={handleChange}
          name="city"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 12, // Set the border radius
            },
          }}
        />
      </div>
      <div className="mb-4">
        <TextField
          fullWidth
          label="Inicio"
          type="date"
          value={filters.startDate}
          onChange={handleChange}
          name="startDate"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 12, // Set the border radius
            },
          }}
        />
      </div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSubmit}
        sx={{
          bgcolor: "#7E22CE",
          "&:hover": {
            bgcolor: "#661ed8",
          },
        }}
      >
        Buscar
      </Button>
    </div>
  );
};

export default UniversitiesFilter;
